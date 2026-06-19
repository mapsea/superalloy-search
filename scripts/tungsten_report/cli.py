import argparse
from datetime import date, datetime, timezone
from pathlib import Path
import sys

from scripts.tungsten_report.collectors.chinatungsten import collect_chinatungsten, collect_chinatungsten_from_html
from scripts.tungsten_report.collectors.cnfeol import collect_cnfeol, collect_cnfeol_from_html, cnfeol_login_gap
from scripts.tungsten_report.config import SOURCE_URLS, default_output_paths, load_env_file, project_root, report_period
from scripts.tungsten_report.forecast import build_forecast
from scripts.tungsten_report.models import Report
from scripts.tungsten_report.render import render_html, render_markdown


def parse_args(argv):
    parser = argparse.ArgumentParser(description="Generate tungsten market daily or weekly reports.")
    parser.add_argument("report_type", choices=["daily", "weekly"])
    parser.add_argument("--date", help="Report date in YYYY-MM-DD format. Defaults to today.")
    parser.add_argument("--root", help="Project root. Defaults to repository root.")
    parser.add_argument("--fixture", action="store_true", help="Use local test fixtures instead of live websites.")
    return parser.parse_args(argv)


def fixture_result(today: date):
    fixture_root = Path(__file__).resolve().parents[2] / "tests" / "tungsten_report" / "fixtures"
    china_html = (fixture_root / "chinatungsten_sample.html").read_text(encoding="utf-8")
    cnfeol_html = (fixture_root / "cnfeol_sample.html").read_text(encoding="utf-8")
    china = collect_chinatungsten_from_html(china_html, today)
    cnfeol = collect_cnfeol_from_html(cnfeol_html, today)
    cnfeol.gaps.append(cnfeol_login_gap())
    return [china, cnfeol]


def live_result(today: date):
    return [
        collect_chinatungsten(SOURCE_URLS["chinatungsten"], today),
        collect_cnfeol(SOURCE_URLS["cnfeol"], today),
    ]


def cli_main(argv=None) -> int:
    args = parse_args(argv if argv is not None else sys.argv[1:])
    root = Path(args.root).resolve() if args.root else project_root()
    load_env_file(root / ".env")
    today = date.fromisoformat(args.date) if args.date else date.today()
    start, end = report_period(args.report_type, today)

    results = fixture_result(today) if args.fixture else live_result(today)
    prices = [price for result in results for price in result.prices]
    news = [item for result in results for item in result.news]
    gaps = [gap for result in results for gap in result.gaps]
    forecast = build_forecast(prices, news)

    report = Report(
        report_type=args.report_type,
        period_start=start,
        period_end=end,
        generated_at=datetime.now(timezone.utc),
        prices=prices,
        news=news,
        forecast=forecast,
        sources_attempted=["中钨在线新闻网", "铁合金在线"],
        source_gaps=gaps,
    )

    markdown_path, html_path = default_output_paths(root, args.report_type, today)
    markdown_path.parent.mkdir(parents=True, exist_ok=True)
    html_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_path.write_text(render_markdown(report), encoding="utf-8")
    html_path.write_text(render_html(report), encoding="utf-8")
    print(f"Wrote {markdown_path}")
    print(f"Wrote {html_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(cli_main())
