import unittest
from datetime import date
from pathlib import Path

from scripts.tungsten_report.collectors.chinatungsten import collect_chinatungsten_from_html
from scripts.tungsten_report.collectors.cnfeol import collect_cnfeol_from_html, cnfeol_login_gap


FIXTURES = Path(__file__).parent / "fixtures"


class CollectorTests(unittest.TestCase):
    def test_chinatungsten_fixture_collects_news(self):
        html = (FIXTURES / "chinatungsten_sample.html").read_text(encoding="utf-8")
        result = collect_chinatungsten_from_html(html, date(2026, 6, 19))
        self.assertGreaterEqual(len(result.news), 2)
        self.assertEqual(result.gaps, [])

    def test_cnfeol_fixture_collects_price_titles_as_observations(self):
        html = (FIXTURES / "cnfeol_sample.html").read_text(encoding="utf-8")
        result = collect_cnfeol_from_html(html, date(2026, 6, 19))
        self.assertGreaterEqual(len(result.prices), 2)
        self.assertGreaterEqual(len(result.news), 1)

    def test_cnfeol_relative_links_resolve_under_index_host(self):
        html = '<a href="/w/20260619/price.html">6月19日钨精矿价格上涨</a>'
        result = collect_cnfeol_from_html(
            html,
            date(2026, 6, 19),
            base_url="https://index.cnfeol.com/w/price",
        )
        self.assertEqual(result.news[0].source_url, "https://index.cnfeol.com/w/20260619/price.html")

    def test_cnfeol_same_m_host_links_are_retained(self):
        html = '<a href="https://m.cnfeol.com/w/20260619/news.html">钨市场行情偏紧</a>'
        result = collect_cnfeol_from_html(
            html,
            date(2026, 6, 19),
            base_url="https://m.cnfeol.com/w/",
        )
        self.assertEqual(len(result.news), 1)
        self.assertEqual(result.news[0].source_url, "https://m.cnfeol.com/w/20260619/news.html")

    def test_cnfeol_off_host_links_are_filtered(self):
        html = """
        <a href="https://m.cnfeol.com/w/20260619/news.html">钨市场行情偏紧</a>
        <a href="https://example.com/w/20260619/news.html">外部钨行情</a>
        """
        result = collect_cnfeol_from_html(
            html,
            date(2026, 6, 19),
            base_url="https://m.cnfeol.com/w/",
        )
        self.assertEqual([item.source_url for item in result.news], ["https://m.cnfeol.com/w/20260619/news.html"])

    def test_cnfeol_login_gap_mentions_manual_refresh(self):
        gap = cnfeol_login_gap()
        self.assertEqual(gap.source_name, "铁合金在线")
        self.assertEqual(gap.reason, "login_required")
        self.assertIn("手动登录", gap.detail)


if __name__ == "__main__":
    unittest.main()
