# Tungsten Market Report Generator Design

Date: 2026-06-19

## Goal

Build a local report generator that collects tungsten market information from selected industry websites and produces daily and weekly reports with price updates, industry news, company activity, and a short-term market forecast.

The first implementation should prioritize reliable report output over building a full web platform. It should run locally, keep paid-site credentials private, and make every forecast traceable to collected evidence.

## Scope

Included:

- Generate daily tungsten market reports.
- Generate weekly tungsten market reports.
- Output Markdown and HTML files.
- Collect public tungsten news and price-related articles from Chinatungsten Online News.
- Collect public and logged-in tungsten market information from FerroAlloyNet / CNFEOL where available.
- Store credentials only in local private configuration.
- Include source links, collection timestamps, missing-data notices, forecast rationale, and risk notes.
- Continue generating partial reports when one data source fails.

Not included in the first implementation:

- A server-side dashboard.
- User login or role management.
- Email, WeChat, or other automatic report delivery.
- PDF export.
- A long-term price database.
- Fully automated bypass of CAPTCHA or human verification.
- Redistribution of paid content beyond the user's permitted personal/internal use.

## Recommended Approach

Use a local Python command-line tool with source-specific collectors and a shared report renderer.

The first version should support these commands:

```bash
python scripts/tungsten_report.py daily
python scripts/tungsten_report.py weekly
```

Reports should be written to:

```text
reports/
  daily/YYYY-MM-DD-tungsten-daily.md
  daily/YYYY-MM-DD-tungsten-daily.html
  weekly/YYYY-Www-tungsten-weekly.md
  weekly/YYYY-Www-tungsten-weekly.html
```

This keeps the system easy to run and inspect while leaving room to add a SQLite history database later.

## Data Sources

The first version should use two core sources.

### FerroAlloyNet / CNFEOL

Base URL: `https://www.cnfeol.com`

Use cases:

- Tungsten concentrate, APT, ferro-tungsten, tungsten powder, tungsten carbide, and related price pages.
- Tungsten index pages such as CNFEOL tungsten concentrate, APT, and ferro-tungsten price index pages.
- Mobile pages and public index pages when the desktop site triggers human verification.
- Logged-in pages when the user has a valid account and the page can be accessed through a saved browser session.

The public homepage may trigger CAPTCHA or human verification. The collector must treat that as a normal failure mode and either use configured alternate URLs or report the data gap.

### Chinatungsten Online News

Base URL: `https://news.chinatungsten.com/cn/`

Use cases:

- Tungsten industry news.
- Tungsten product news.
- Tungsten concentrate price pages.
- Tungsten product price pages.
- Tungsten statistics and import/export articles.

The first implementation should prefer public pages and avoid login handling for this source unless future testing proves it is needed.

## Credential Handling

CNFEOL account credentials must be stored outside committed code.

Local configuration should use `.env`:

```env
CNFEOL_USERNAME=...
CNFEOL_PASSWORD=...
```

Implementation must add `.env` to `.gitignore` before credentials are entered. If browser login state is saved, the session directory or file must also be ignored by git.

The tool must not print credentials in logs, reports, stack traces, or debug output. Error messages should identify the source and failure type without including secret values.

If CNFEOL requires CAPTCHA or manual verification, the supported behavior is:

1. The user manually logs in once in a controlled browser session.
2. The tool saves reusable local session state.
3. Future runs reuse that session where possible.
4. If the session expires, the report marks CNFEOL logged-in data as unavailable and tells the user to refresh login state.

## Architecture

The generator should be split into small modules:

- `scripts/tungsten_report.py`: command-line entry point.
- `scripts/tungsten_report/config.py`: source URLs, output paths, environment loading, date settings.
- `scripts/tungsten_report/collectors/cnfeol.py`: CNFEOL collector.
- `scripts/tungsten_report/collectors/chinatungsten.py`: Chinatungsten collector.
- `scripts/tungsten_report/extract.py`: shared parsing helpers for article lists, dates, prices, and summaries.
- `scripts/tungsten_report/forecast.py`: evidence scoring and forecast wording.
- `scripts/tungsten_report/render.py`: Markdown and HTML rendering.
- `scripts/tungsten_report/models.py`: structured report data types.

The first version can be implemented with Python standard libraries plus small, explicit dependencies only when needed. If browser login is required, Playwright is the preferred tool because it can reuse a persistent browser context and handle modern sites more reliably than raw HTTP.

## Data Model

Collected items should be normalized before rendering.

Price observations:

- `product`: tungsten concentrate, APT, tungsten powder, tungsten carbide, ferro-tungsten, or other.
- `market`: domestic, export, Europe, company quote, or unknown.
- `price_text`: original price text.
- `price_value`: parsed numeric value when safe.
- `unit`: yuan/ton, yuan/kg, USD/mtu, or source text.
- `date`: source date.
- `source_name`: source display name.
- `source_url`: source URL.
- `notes`: short context or extraction note.

News items:

- `title`
- `summary`
- `published_at`
- `source_name`
- `source_url`
- `category`: price, industry, company, statistics, policy, or other.
- `impact`: bullish, bearish, neutral, or unclear.
- `impact_reason`

Report metadata:

- `report_type`: daily or weekly.
- `period_start`
- `period_end`
- `generated_at`
- `sources_attempted`
- `sources_succeeded`
- `source_gaps`

## Report Structure

Daily reports should use this structure:

```text
# Tungsten Daily Report - YYYY-MM-DD

## Executive View
- Market direction: strong / slightly strong / rangebound / slightly weak / weak
- Confidence: high / medium / low
- One-line rationale

## Price Watch
- Tungsten concentrate
- APT
- Tungsten powder
- Tungsten carbide
- Ferro-tungsten
- International prices when available

## Key Changes
- Price movement
- Company long-term or guide prices
- Transaction, inquiry, inventory, supply, and demand signals

## Industry News
- Title
- Source
- Published date
- Summary
- Market impact

## Company Activity
- Xiamen Tungsten, China Tungsten High-Tech, Zhangyuan Tungsten, CMOC, and other relevant companies when found

## Short-Term Forecast
- Direction
- Evidence
- Risks

## Source Gaps
- Failed or unavailable sources
```

Weekly reports should reuse the daily structure and add:

```text
## Weekly Price Review
## Main Drivers This Week
## Forecast for Next Week
## Watch List
```

The report language should be Chinese, with concise market wording suitable for business review.

## Forecast Logic

The forecast must be evidence-based and should not present itself as certain.

The first version should use rule-based scoring:

- Price increases across multiple products: bullish.
- Stable prices with weak transactions or low inquiry volume: neutral to slightly bearish.
- Company long-term prices or guide prices moving up: bullish.
- Repeated wording such as weak demand, cautious buying, lower negotiation, or shrinking transactions: bearish.
- Supply disruption, mine constraints, environmental limits, or tight concentrate availability: bullish.
- Export weakness or poor downstream orders: bearish.
- Mixed signals: rangebound with medium or low confidence.

Every forecast must include:

- Direction.
- Confidence.
- Three or fewer main evidence points.
- One or more risk factors that could change the view.

Example:

```text
判断：稳中偏弱
置信度：中
依据：
1. APT 与钨精矿价格未明显上行。
2. 多篇市场分析提到下游观望、成交缩量。
3. 企业报价暂无明显上调信号。
风险：
- 若大厂长单上调或矿山供应收紧，判断需修正。
```

## Scheduling

The design target is:

- Daily report: 18:30 China time.
- Weekly report: Friday 19:00 China time.

The first implementation may expose commands only. Scheduling can be added with `cron`, `launchd`, or another local scheduler after the commands are stable.

## Error Handling

Source failures should not stop report generation.

The tool should:

- Record each attempted source.
- Continue when a source fails.
- Add a visible `数据缺口` / source gap section to the report.
- Write logs to `logs/tungsten-report.log`.
- Avoid logging secrets.
- Treat CAPTCHA, expired sessions, blocked requests, parse failures, and empty pages as distinct failure types where possible.

## Testing

Initial tests should cover:

- Date range selection for daily and weekly reports.
- Rendering Markdown and HTML from sample normalized data.
- Forecast rule output for bullish, bearish, rangebound, and mixed evidence.
- Safe handling of missing source data.
- Secret redaction in log messages.

Live collection tests should be manual or opt-in because websites can change, require credentials, or trigger verification.

## Future Extensions

After several reports are reviewed, the next useful extensions are:

- SQLite storage for price observations, news items, and generated forecasts.
- Trend charts in HTML reports.
- PDF export.
- Email delivery.
- More sources such as exchange data, customs data, company announcements, and macro indicators.
- A web report archive inside the existing static site.

## Risks

- CNFEOL may block automated access or require frequent manual verification.
- Paid content may have terms of use that restrict redistribution.
- Website HTML can change without notice.
- Some price text may be hard to parse reliably.
- Rule-based forecasting can miss unusual market events.

The design handles these risks by keeping source failures visible, avoiding credential leakage, preserving source links, and requiring forecasts to show their supporting evidence and risks.

## Success Criteria

- A daily command generates Markdown and HTML for the current date.
- A weekly command generates Markdown and HTML for the current ISO week.
- Reports include source links and collection timestamps.
- CNFEOL credentials remain outside git.
- Forecasts include direction, confidence, evidence, and risk notes.
- A failed source produces a source-gap notice instead of a broken run.
- The first version can be reviewed for several days before adding a database or dashboard.
