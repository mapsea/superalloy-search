import unittest
from datetime import date

from scripts.tungsten_report.forecast import build_forecast
from scripts.tungsten_report.models import NewsItem, PriceObservation


class ForecastTests(unittest.TestCase):
    def news(self, title, impact, reason, source_url="https://example.com", source_name="sample"):
        return NewsItem(
            title=title,
            summary=title,
            published_at=date(2026, 6, 19),
            source_name=source_name,
            source_url=source_url,
            category="industry",
            impact=impact,
            impact_reason=reason,
        )

    def test_bullish_forecast(self):
        forecast = build_forecast(
            prices=[
                PriceObservation("钨精矿", "domestic", "报价上调", date(2026, 6, 19), "sample", "https://example.com"),
            ],
            news=[
                self.news("矿端供应偏紧", "bullish", "供应偏紧", source_url="https://example.com/news-1"),
                self.news("企业报价上调", "bullish", "报价上调", source_url="https://example.com/news-2"),
            ],
        )
        self.assertEqual(forecast.direction, "稳中偏强")
        self.assertIn("供应偏紧", " ".join(forecast.evidence))

    def test_bearish_forecast(self):
        forecast = build_forecast(
            prices=[],
            news=[
                self.news("成交清淡", "bearish", "成交清淡", source_url="https://example.com/news-1"),
                self.news("下游观望", "bearish", "下游观望", source_url="https://example.com/news-2"),
            ],
        )
        self.assertEqual(forecast.direction, "稳中偏弱")
        self.assertEqual(forecast.confidence, "中")

    def test_rangebound_forecast_for_mixed_signals(self):
        forecast = build_forecast(
            prices=[],
            news=[
                self.news("供应偏紧", "bullish", "供应偏紧", source_url="https://example.com/news-1"),
                self.news("成交清淡", "bearish", "成交清淡", source_url="https://example.com/news-2"),
            ],
        )
        self.assertEqual(forecast.direction, "横盘观望")
        self.assertEqual(forecast.confidence, "低")

    def test_duplicate_price_and_news_source_url_does_not_create_directional_call(self):
        forecast = build_forecast(
            prices=[
                PriceObservation("钨精矿", "domestic", "报价上调", date(2026, 6, 19), "sample", "https://example.com"),
            ],
            news=[
                self.news("企业报价上调", "bullish", "报价上调", source_url="https://example.com"),
            ],
        )
        self.assertEqual(forecast.direction, "横盘观望")
        self.assertEqual(forecast.confidence, "低")

    def test_repeated_same_source_bullish_snippets_do_not_produce_high_confidence(self):
        forecast = build_forecast(
            prices=[],
            news=[
                self.news("矿端供应偏紧1", "bullish", "供应偏紧", source_url="https://example.com/1"),
                self.news("矿端供应偏紧2", "bullish", "供应偏紧", source_url="https://example.com/2"),
                self.news("矿端供应偏紧3", "bullish", "供应偏紧", source_url="https://example.com/3"),
                self.news("矿端供应偏紧4", "bullish", "供应偏紧", source_url="https://example.com/4"),
            ],
        )
        self.assertEqual(forecast.direction, "稳中偏强")
        self.assertEqual(forecast.confidence, "中")

    def test_mixed_price_wording_is_not_pure_bullish_evidence(self):
        forecast = build_forecast(
            prices=[
                PriceObservation("钨精矿", "domestic", "报价上调但成交清淡", date(2026, 6, 19), "sample", "https://example.com"),
            ],
            news=[
                self.news("矿端供应偏紧", "bullish", "供应偏紧", source_url="https://example.com/news"),
            ],
        )
        self.assertEqual(forecast.direction, "横盘观望")
        self.assertFalse(any("价格信息偏强" in evidence for evidence in forecast.evidence))

    def test_neutral_news_is_ignored_and_no_data_uses_insufficient_signal_evidence(self):
        neutral_forecast = build_forecast(
            prices=[],
            news=[
                self.news("市场观望", "neutral", "方向不明", source_url="https://example.com/neutral"),
                self.news("等待指引", "unclear", "缺少方向", source_url="https://example.com/unclear"),
            ],
        )
        self.assertEqual(neutral_forecast.direction, "横盘观望")
        self.assertEqual(neutral_forecast.confidence, "低")

        no_data_forecast = build_forecast(prices=[], news=[])
        self.assertEqual(no_data_forecast.direction, "数据不足")
        self.assertEqual(no_data_forecast.confidence, "低")
        self.assertIn("数据不足", no_data_forecast.rationale)
        self.assertTrue(any("信号不足" in evidence or "数据不足" in evidence for evidence in no_data_forecast.evidence))

    def test_evidence_includes_source_and_date_context(self):
        forecast = build_forecast(
            prices=[],
            news=[
                self.news("矿端供应偏紧", "bullish", "供应偏紧", source_name="sample-source", source_url="https://example.com/one"),
                self.news("企业报价上调", "bullish", "报价上调", source_name="other-source", source_url="https://example.com/two"),
            ],
        )
        evidence = " ".join(forecast.evidence)
        self.assertIn("sample-source", evidence)
        self.assertIn("2026-06-19", evidence)

    def test_distinct_price_rows_from_same_url_all_affect_scoring(self):
        forecast = build_forecast(
            prices=[
                PriceObservation("钨精矿", "domestic", "报价上调", date(2026, 6, 19), "sample", "https://example.com/prices"),
                PriceObservation("APT", "domestic", "成交清淡", date(2026, 6, 19), "sample", "https://example.com/prices"),
            ],
            news=[],
        )
        evidence = " ".join(forecast.evidence)
        self.assertEqual(forecast.direction, "横盘观望")
        self.assertIn("钨精矿价格信息偏强", evidence)
        self.assertIn("APT价格信息偏弱", evidence)

    def test_mixed_price_evidence_blocks_borderline_directional_forecast(self):
        forecast = build_forecast(
            prices=[
                PriceObservation("钨精矿", "domestic", "报价上调但成交清淡", date(2026, 6, 19), "sample", "https://example.com/mixed"),
            ],
            news=[
                self.news("矿端供应偏紧", "bullish", "供应偏紧", source_url="https://example.com/news-1"),
                self.news("企业报价上调", "bullish", "报价上调", source_url="https://example.com/news-2"),
            ],
        )
        evidence = " ".join(forecast.evidence)
        self.assertEqual(forecast.direction, "横盘观望")
        self.assertEqual(forecast.confidence, "低")
        self.assertIn("价格信息多空混杂", evidence)

    def test_strong_directional_forecast_with_mixed_evidence_keeps_mixed_context(self):
        forecast = build_forecast(
            prices=[
                PriceObservation("钨精矿", "domestic", "报价上调但成交清淡", date(2026, 6, 19), "sample", "https://example.com/mixed"),
            ],
            news=[
                self.news("矿端供应偏紧1", "bullish", "供应偏紧", source_url="https://example.com/news-1"),
                self.news("矿端供应偏紧2", "bullish", "供应偏紧", source_url="https://example.com/news-2"),
                self.news("企业报价上调", "bullish", "报价上调", source_url="https://example.com/news-3"),
            ],
        )
        context = " ".join(forecast.evidence + forecast.risks)
        self.assertEqual(forecast.direction, "稳中偏强")
        self.assertEqual(forecast.confidence, "中")
        self.assertIn("多空混杂", context)


if __name__ == "__main__":
    unittest.main()
