import unittest
from datetime import date, datetime, timezone

from scripts.tungsten_report.models import Forecast, NewsItem, PriceObservation, Report, SourceGap
from scripts.tungsten_report.render import render_html, render_markdown


class RenderTests(unittest.TestCase):
    def sample_report(self):
        return Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation("APT", "domestic", "50万元/吨", date(2026, 6, 19), "sample", "https://example.com/p")
            ],
            news=[
                NewsItem("钨矿供应偏紧", "矿端报价坚挺。", date(2026, 6, 19), "sample", "https://example.com/n", "industry", "bullish", "供应偏紧")
            ],
            forecast=Forecast("稳中偏强", "中", "矿端支撑较强。", ["矿端报价坚挺"], ["下游需求不足"]),
            sources_attempted=["sample", "cnfeol"],
            source_gaps=[SourceGap("cnfeol", "blocked", "页面需要人工验证。")],
        )

    def test_render_markdown_contains_required_sections(self):
        markdown = render_markdown(self.sample_report())
        self.assertIn("# 钨金属日报 - 2026-06-19", markdown)
        self.assertIn("## 今日结论", markdown)
        self.assertIn("## 价格行情", markdown)
        self.assertIn("## 数据缺口", markdown)
        self.assertIn("稳中偏强", markdown)

    def test_render_html_escapes_content_and_wraps_markdown(self):
        html = render_html(self.sample_report())
        self.assertIn("<!doctype html>", html)
        self.assertIn("钨金属日报", html)
        self.assertIn("https://example.com/p", html)

    def test_render_markdown_uses_valid_source_links(self):
        markdown = render_markdown(self.sample_report())
        self.assertIn("[来源](https://example.com/p)", markdown)
        self.assertIn("[来源](https://example.com/n)", markdown)
        self.assertNotIn("[https://example.com/p]", markdown)

    def test_render_html_uses_clickable_safe_source_links(self):
        html = render_html(self.sample_report())
        self.assertIn('<a href="https://example.com/p">来源</a>', html)
        self.assertIn('<a href="https://example.com/n">来源</a>', html)

    def test_render_html_escapes_adversarial_text_and_keeps_safe_links(self):
        report = Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation(
                    'APT <script>alert("p")</script>',
                    "domestic",
                    '50 & "high" 万元/吨',
                    date(2026, 6, 19),
                    'sample & "quoted"',
                    'https://example.com/p?x=1&y="bad"',
                )
            ],
            news=[
                NewsItem(
                    '钨矿 <script>alert("n")</script>',
                    '摘要含 & 和 "quotes" 以及 <script>alert("s")</script>。',
                    date(2026, 6, 19),
                    'news <source>',
                    "javascript:alert(1)",
                    "industry",
                    "bullish",
                    '供应 <script>alert("r")</script>',
                )
            ],
            forecast=Forecast(
                '稳中偏强 & <script>alert("f")</script>',
                '中 "等"',
                '矿端 <script>alert("rationale")</script> 支撑。',
                ['矿端报价 & "坚挺"'],
                ['下游 <script>alert("risk")</script>'],
            ),
        )

        html = render_html(report)

        self.assertNotIn("<script>", html)
        self.assertIn("&lt;script&gt;", html)
        self.assertIn("50 &amp; &quot;high&quot; 万元/吨", html)
        self.assertIn("sample &amp; &quot;quoted&quot;", html)
        self.assertIn('<a href="https://example.com/p?x=1&amp;y=&quot;bad&quot;">来源</a>', html)
        self.assertIn("链接：javascript:alert(1)", html)
        self.assertNotIn('<a href="javascript:alert(1)">', html)

    def test_render_markdown_escapes_source_text_and_encodes_url_spaces(self):
        report = Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation(
                    "APT [spot](bad) <script>",
                    "domestic",
                    "50 < 51 & [firm](bad)",
                    date(2026, 6, 19),
                    "sample [source](bad)",
                    "https://example.com/price path?q=a b",
                )
            ],
            news=[
                NewsItem(
                    "钨矿 [title](bad) <script>",
                    "摘要 <script> & [summary](bad)",
                    date(2026, 6, 19),
                    "news [source](bad)",
                    "https://example.com/news path",
                    "industry",
                    "bullish",
                    "供应 [tight](bad) <reason>",
                )
            ],
            forecast=Forecast(
                "稳中偏强",
                "中",
                "矿端支撑。",
                ["矿端报价坚挺"],
                ["下游需求不足"],
            ),
            source_gaps=[SourceGap("gap [source](bad)", "parse_empty", "detail <tag> & [x](y)")],
        )

        markdown = render_markdown(report)

        self.assertNotIn("<script>", markdown)
        self.assertNotIn("[spot](bad)", markdown)
        self.assertNotIn("[title](bad)", markdown)
        self.assertNotIn("[summary](bad)", markdown)
        self.assertIn("&lt;script&gt;", markdown)
        self.assertIn("\\[spot\\]\\(bad\\)", markdown)
        self.assertIn("\\[title\\]\\(bad\\)", markdown)
        self.assertIn("[来源](https://example.com/price%20path?q=a%20b)", markdown)
        self.assertIn("[来源](https://example.com/news%20path)", markdown)

    def test_render_markdown_escapes_markdown_controls_and_normalizes_source_text(self):
        hostile_text = "<script>*bold* _em_ `code` # heading > quote\n[label](url)"
        report = Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation(
                    hostile_text,
                    "domestic",
                    hostile_text,
                    date(2026, 6, 19),
                    hostile_text,
                    "https://example.com/price",
                )
            ],
            news=[
                NewsItem(
                    hostile_text,
                    hostile_text,
                    date(2026, 6, 19),
                    hostile_text,
                    "https://example.com/news",
                    "industry",
                    "bullish",
                    hostile_text,
                )
            ],
            forecast=Forecast(hostile_text, hostile_text, hostile_text, [hostile_text], [hostile_text]),
            source_gaps=[SourceGap(hostile_text, "parse_empty", hostile_text)],
        )

        markdown = render_markdown(report)

        self.assertNotIn("<script>", markdown)
        self.assertNotIn("*bold*", markdown)
        self.assertNotIn("_em_", markdown)
        self.assertNotIn("`code`", markdown)
        self.assertNotIn("\n# heading", markdown)
        self.assertNotIn("\n> quote", markdown)
        self.assertNotIn("\n[label](url)", markdown)
        self.assertNotIn("[label](url)", markdown)
        self.assertIn("&lt;script&gt;", markdown)
        self.assertIn("\\*bold\\*", markdown)
        self.assertIn("\\_em\\_", markdown)
        self.assertIn("\\`code\\`", markdown)
        self.assertIn("\\# heading &gt; quote \\[label\\]\\(url\\)", markdown)

    def test_render_markdown_percent_encodes_link_delimiters_in_source_urls(self):
        report = Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation(
                    "APT",
                    "domestic",
                    "50万元/吨",
                    date(2026, 6, 19),
                    "sample",
                    "https://example.com/a)[evil](javascript:alert(1))",
                )
            ],
            news=[],
            forecast=Forecast("稳中偏强", "中", "矿端支撑。", ["矿端报价坚挺"], ["下游需求不足"]),
        )

        markdown = render_markdown(report)

        self.assertEqual(markdown.count("[来源]("), 1)
        self.assertNotIn("[evil](javascript:alert(1))", markdown)
        self.assertNotIn("](javascript:alert", markdown)
        self.assertIn("[来源](https://example.com/a%29%5Bevil%5D%28javascript%3Aalert%281%29%29)", markdown)

    def test_render_markdown_rejects_link_delimiters_in_source_url_netloc(self):
        report = Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation(
                    "APT",
                    "domestic",
                    "50万元/吨",
                    date(2026, 6, 19),
                    "sample",
                    "https://example.com) [evil](javascript:alert(1))/path",
                )
            ],
            news=[],
            forecast=Forecast("稳中偏强", "中", "矿端支撑。", ["矿端报价坚挺"], ["下游需求不足"]),
        )

        markdown = render_markdown(report)

        self.assertNotIn("[来源](", markdown)
        self.assertNotIn("[evil](javascript:alert(1))", markdown)
        self.assertNotIn("](javascript:alert", markdown)
        self.assertIn("https://example\\.com\\) \\[evil\\]\\(javascript:alert\\(1\\)\\)/path", markdown)


if __name__ == "__main__":
    unittest.main()
