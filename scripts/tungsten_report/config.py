from datetime import date, timedelta
from pathlib import Path
import os


SOURCE_URLS = {
    "cnfeol": [
        "https://index.cnfeol.com/series/w-000430.aspx",
        "https://index.cnfeol.com/series/w-000410.aspx",
        "https://m.cnfeol.com/Series/004000000000000.aspx",
    ],
    "chinatungsten": [
        "https://news.chinatungsten.com/cn/tungsten-news/tungsten-product-news.html",
        "https://news.chinatungsten.com/cn/tungsten-concentrate-price",
        "https://news.chinatungsten.com/cn/tungsten-news/tungsten-statistics-data.html",
    ],
}


def project_root() -> Path:
    return Path(__file__).resolve().parents[2]


def load_env_file(path: Path) -> None:
    if not path.exists():
        return
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = value


def report_period(report_type: str, today: date) -> tuple[date, date]:
    if report_type == "daily":
        return today, today
    if report_type == "weekly":
        start = today - timedelta(days=today.weekday())
        end = start + timedelta(days=6)
        return start, end
    raise ValueError(f"unsupported report type: {report_type}")


def default_output_paths(root: Path, report_type: str, today: date) -> tuple[Path, Path]:
    if report_type == "daily":
        stem = f"{today.isoformat()}-tungsten-daily"
        directory = root / "reports" / "daily"
    elif report_type == "weekly":
        iso_year, iso_week, _ = today.isocalendar()
        stem = f"{iso_year}-W{iso_week:02d}-tungsten-weekly"
        directory = root / "reports" / "weekly"
    else:
        raise ValueError(f"unsupported report type: {report_type}")
    return directory / f"{stem}.md", directory / f"{stem}.html"


def redact_secret(value: str) -> str:
    if len(value) <= 3:
        return "***"
    return f"***{value[-3:]}"
