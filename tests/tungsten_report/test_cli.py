import tempfile
import unittest
from pathlib import Path

from scripts.tungsten_report.cli import cli_main


class CliTests(unittest.TestCase):
    def test_daily_fixture_mode_writes_markdown_and_html(self):
        with tempfile.TemporaryDirectory() as tmp:
            exit_code = cli_main(["daily", "--fixture", "--root", tmp, "--date", "2026-06-19"])
            self.assertEqual(exit_code, 0)
            markdown_path = Path(tmp) / "reports" / "daily" / "2026-06-19-tungsten-daily.md"
            html_path = Path(tmp) / "reports" / "daily" / "2026-06-19-tungsten-daily.html"
            self.assertTrue(markdown_path.exists())
            self.assertTrue(html_path.exists())
            self.assertIn("钨金属日报", markdown_path.read_text(encoding="utf-8"))

    def test_weekly_fixture_mode_writes_weekly_report(self):
        with tempfile.TemporaryDirectory() as tmp:
            exit_code = cli_main(["weekly", "--fixture", "--root", tmp, "--date", "2026-06-19"])
            self.assertEqual(exit_code, 0)
            markdown_path = Path(tmp) / "reports" / "weekly" / "2026-W25-tungsten-weekly.md"
            self.assertTrue(markdown_path.exists())
            self.assertIn("钨金属周报", markdown_path.read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
