import unittest
from datetime import date, datetime, timezone

from scripts.tungsten_report.models import (
    Forecast,
    NewsItem,
    PriceObservation,
    Report,
    SourceGap,
)


class ModelTests(unittest.TestCase):
    def test_report_counts_successful_sources(self):
        report = Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation(
                    product="APT",
                    market="domestic",
                    price_text="50万元/吨",
                    date=date(2026, 6, 19),
                    source_name="sample",
                    source_url="https://example.com/a",
                )
            ],
            news=[
                NewsItem(
                    title="钨矿供应偏紧",
                    summary="矿端报价坚挺。",
                    published_at=date(2026, 6, 19),
                    source_name="sample",
                    source_url="https://example.com/n",
                    category="industry",
                    impact="bullish",
                    impact_reason="供应偏紧",
                )
            ],
            forecast=Forecast(
                direction="稳中偏强",
                confidence="中",
                rationale="矿端支撑较强。",
                evidence=["矿端报价坚挺"],
                risks=["下游需求不足"],
            ),
            sources_attempted=["sample", "missing"],
            source_gaps=[
                SourceGap(
                    source_name="missing",
                    reason="blocked",
                    detail="页面需要人工验证。",
                )
            ],
        )

        self.assertEqual(report.sources_succeeded, ["sample"])

    def test_report_counts_partial_source_success_with_gap(self):
        report = Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation(
                    product="APT",
                    market="domestic",
                    price_text="50万元/吨",
                    date=date(2026, 6, 19),
                    source_name="cnfeol",
                    source_url="https://example.com/public",
                )
            ],
            sources_attempted=["cnfeol"],
            source_gaps=[
                SourceGap(
                    source_name="cnfeol",
                    reason="login_required",
                    detail="Logged-in page was unavailable.",
                )
            ],
        )

        self.assertEqual(report.sources_succeeded, ["cnfeol"])


if __name__ == "__main__":
    unittest.main()
