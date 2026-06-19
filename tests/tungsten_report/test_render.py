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


if __name__ == "__main__":
    unittest.main()
