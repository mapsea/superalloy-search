import unittest
from datetime import date
from pathlib import Path

from scripts.tungsten_report.extract import (
    classify_impact,
    extract_links,
    is_price_title,
    parse_chinese_month_day,
    summarize_text,
)


FIXTURES = Path(__file__).parent / "fixtures"


class ExtractTests(unittest.TestCase):
    def test_extract_links_resolves_relative_urls(self):
        html = (FIXTURES / "chinatungsten_sample.html").read_text(encoding="utf-8")
        links = extract_links(html, "https://news.chinatungsten.com")
        self.assertEqual(links[0]["title"], "中国钨资源优势正向产业优势升级")
        self.assertEqual(
            links[0]["url"],
            "https://news.chinatungsten.com/cn/tungsten-product-news/175111-tpn-15267.html",
        )

    def test_extract_links_filters_unsafe_and_off_domain_urls(self):
        html = """
        <a href="/cn/valid.html">Valid article</a>
        <a href="javascript:alert(1)">Script link</a>
        <a href="ftp://news.chinatungsten.com/file">FTP link</a>
        <a href="https://evil.example/path">Off domain</a>
        <a href="//evil.example/protocol-relative">Protocol relative</a>
        """
        links = extract_links(html, "https://news.chinatungsten.com")
        self.assertEqual(
            links,
            [
                {
                    "title": "Valid article",
                    "url": "https://news.chinatungsten.com/cn/valid.html",
                }
            ],
        )

    def test_extract_links_handles_malformed_nested_anchors(self):
        html = """
        <a href="/cn/outer.html">Outer
          <a href="/cn/inner.html">Inner valid</a>
        </a>
        <a href="javascript:alert(1)">Unsafe nested fallback</a>
        <a href="//evil.example/path">Off domain fallback</a>
        """
        links = extract_links(html, "https://news.chinatungsten.com")
        self.assertIn(
            {
                "title": "Inner valid",
                "url": "https://news.chinatungsten.com/cn/inner.html",
            },
            links,
        )
        self.assertTrue(
            all(link["url"].startswith("https://news.chinatungsten.com/") for link in links)
        )

    def test_parse_chinese_month_day_uses_reference_year(self):
        self.assertEqual(parse_chinese_month_day("06月18日", 2026), date(2026, 6, 18))
        self.assertEqual(parse_chinese_month_day("6月8日", 2026), date(2026, 6, 8))

    def test_is_price_title(self):
        self.assertTrue(is_price_title("6月18日全国主要地区碳化钨/钨粉价格"))
        self.assertTrue(is_price_title("6月18日钨产品行情汇总"))
        self.assertFalse(is_price_title("中国钨资源优势正向产业优势升级"))

    def test_classify_impact(self):
        self.assertEqual(classify_impact("供应偏紧，报价上调")["impact"], "bullish")
        self.assertEqual(classify_impact("成交清淡，下游观望")["impact"], "bearish")
        self.assertEqual(classify_impact("市场平稳运行")["impact"], "neutral")

    def test_classify_impact_treats_mixed_tie_as_neutral(self):
        result = classify_impact("供应偏紧，但成交清淡")
        self.assertEqual(result["impact"], "neutral")
        self.assertTrue("混合" in result["reason"] or "无明显" in result["reason"])

    def test_summarize_text_limits_length(self):
        summary = summarize_text("第一句。第二句。第三句。", max_chars=8)
        self.assertLessEqual(len(summary), 9)


if __name__ == "__main__":
    unittest.main()
