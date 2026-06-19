import os
import tempfile
import unittest
from datetime import date
from pathlib import Path

from scripts.tungsten_report.config import (
    default_output_paths,
    load_env_file,
    redact_secret,
    report_period,
)


class ConfigTests(unittest.TestCase):
    def test_daily_period_uses_single_day(self):
        start, end = report_period("daily", date(2026, 6, 19))
        self.assertEqual(start, date(2026, 6, 19))
        self.assertEqual(end, date(2026, 6, 19))

    def test_weekly_period_uses_iso_week(self):
        start, end = report_period("weekly", date(2026, 6, 19))
        self.assertEqual(start, date(2026, 6, 15))
        self.assertEqual(end, date(2026, 6, 21))

    def test_output_paths_include_report_type(self):
        root = Path("/tmp/project")
        markdown_path, html_path = default_output_paths(root, "weekly", date(2026, 6, 19))
        self.assertEqual(markdown_path, root / "reports" / "weekly" / "2026-W25-tungsten-weekly.md")
        self.assertEqual(html_path, root / "reports" / "weekly" / "2026-W25-tungsten-weekly.html")

    def test_load_env_file_sets_missing_values_only(self):
        with tempfile.TemporaryDirectory() as tmp:
            env_path = Path(tmp) / ".env"
            env_path.write_text("CNFEOL_USERNAME=alice\nCNFEOL_PASSWORD=secret\n", encoding="utf-8")
            old_user = os.environ.pop("CNFEOL_USERNAME", None)
            old_password = os.environ.pop("CNFEOL_PASSWORD", None)
            try:
                load_env_file(env_path)
                self.assertEqual(os.environ["CNFEOL_USERNAME"], "alice")
                self.assertEqual(os.environ["CNFEOL_PASSWORD"], "secret")
            finally:
                os.environ.pop("CNFEOL_USERNAME", None)
                os.environ.pop("CNFEOL_PASSWORD", None)
                if old_user is not None:
                    os.environ["CNFEOL_USERNAME"] = old_user
                if old_password is not None:
                    os.environ["CNFEOL_PASSWORD"] = old_password

    def test_redact_secret(self):
        self.assertEqual(redact_secret("abc123"), "***123")
        self.assertEqual(redact_secret("abc"), "***")


if __name__ == "__main__":
    unittest.main()
