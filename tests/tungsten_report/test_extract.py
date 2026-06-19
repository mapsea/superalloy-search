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

    def test_summarize_text_limits_length(self):
        summary = summarize_text("第一句。第二句。第三句。", max_chars=8)
        self.assertLessEqual(len(summary), 9)


if __name__ == "__main__":
    unittest.main()
