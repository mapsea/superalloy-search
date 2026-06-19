import unittest
from datetime import date

from scripts.tungsten_report.forecast import build_forecast
from scripts.tungsten_report.models import NewsItem, PriceObservation


class ForecastTests(unittest.TestCase):
    def news(self, title, impact, reason):
        return NewsItem(
            title=title,
            summary=title,
            published_at=date(2026, 6, 19),
            source_name="sample",
            source_url="https://example.com",
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
                self.news("矿端供应偏紧", "bullish", "供应偏紧"),
                self.news("企业报价上调", "bullish", "报价上调"),
            ],
        )
        self.assertEqual(forecast.direction, "稳中偏强")
        self.assertIn("供应偏紧", " ".join(forecast.evidence))

    def test_bearish_forecast(self):
        forecast = build_forecast(
            prices=[],
            news=[
                self.news("成交清淡", "bearish", "成交清淡"),
                self.news("下游观望", "bearish", "下游观望"),
            ],
        )
        self.assertEqual(forecast.direction, "稳中偏弱")
        self.assertEqual(forecast.confidence, "中")

    def test_rangebound_forecast_for_mixed_signals(self):
        forecast = build_forecast(
            prices=[],
            news=[
                self.news("供应偏紧", "bullish", "供应偏紧"),
                self.news("成交清淡", "bearish", "成交清淡"),
            ],
        )
        self.assertEqual(forecast.direction, "横盘观望")
        self.assertEqual(forecast.confidence, "低")


if __name__ == "__main__":
    unittest.main()
