# Tungsten Market Report Generator Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a local Python command-line tool that generates Chinese tungsten market daily and weekly reports in Markdown and HTML from normalized source data.

**Architecture:** Add a small Python package under `scripts/tungsten_report/` with focused modules for configuration, data models, collection, extraction, forecasting, rendering, and CLI orchestration. Keep live website access behind collectors, make the core report pipeline testable with local fixtures, and treat login/CAPTCHA failures as source gaps rather than fatal errors.

**Tech Stack:** Python 3 standard library, `unittest`, local HTML fixtures, Markdown and HTML file output. Optional Playwright support can be added after the core pipeline works and CNFEOL login behavior is tested manually.

---

## File Structure

- Modify `.gitignore`: ignore local credentials, browser session state, generated reports, logs, and Python caches.
- Create `scripts/tungsten_report.py`: thin CLI wrapper so the user can run `python3 scripts/tungsten_report.py daily`.
- Create `scripts/tungsten_report/__init__.py`: package marker.
- Create `scripts/tungsten_report/cli.py`: CLI orchestration that tests can import without executing the wrapper script.
- Create `scripts/tungsten_report/models.py`: dataclasses for report data, source gaps, price observations, news items, and forecasts.
- Create `scripts/tungsten_report/config.py`: paths, source definitions, date ranges, and safe `.env` loading.
- Create `scripts/tungsten_report/extract.py`: text normalization, link extraction, date parsing, impact classification, and price keyword helpers.
- Create `scripts/tungsten_report/forecast.py`: deterministic evidence scoring and Chinese forecast wording.
- Create `scripts/tungsten_report/render.py`: Markdown and HTML rendering.
- Create `scripts/tungsten_report/collectors/__init__.py`: collector package marker.
- Create `scripts/tungsten_report/collectors/base.py`: common collector result helpers.
- Create `scripts/tungsten_report/collectors/chinatungsten.py`: public HTTP collector for Chinatungsten Online News.
- Create `scripts/tungsten_report/collectors/cnfeol.py`: public HTTP collector for CNFEOL public/index/mobile pages, with logged-in data represented as a source gap until session support is added.
- Create `tests/tungsten_report/__init__.py`: test package marker.
- Create `tests/tungsten_report/fixtures/chinatungsten_sample.html`: stable fixture for article extraction tests.
- Create `tests/tungsten_report/fixtures/cnfeol_sample.html`: stable fixture for price/article extraction tests.
- Create `tests/tungsten_report/test_config.py`: date range, path, and secret redaction tests.
- Create `tests/tungsten_report/test_extract.py`: fixture extraction and impact classification tests.
- Create `tests/tungsten_report/test_forecast.py`: bullish, bearish, rangebound, and mixed forecast tests.
- Create `tests/tungsten_report/test_render.py`: Markdown and HTML rendering tests.
- Create `tests/tungsten_report/test_cli.py`: end-to-end CLI report generation using fixture collectors.

## Task 1: Add Private Output And Credential Ignores

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add local runtime ignores**

Append these lines to `.gitignore`:

```gitignore

# Tungsten report generator local/runtime files
.env
.env.*
!.env.example
.tungsten-session/
reports/
logs/
__pycache__/
*.pyc
```

- [ ] **Step 2: Verify ignore behavior**

Run:

```bash
git check-ignore .env reports/daily/example.html logs/tungsten-report.log
```

Expected output:

```text
.env
reports/daily/example.html
logs/tungsten-report.log
```

- [ ] **Step 3: Commit ignore rules**

Run:

```bash
git add .gitignore
git commit -m "chore: ignore tungsten report runtime files"
```

Expected: commit succeeds and only `.gitignore` is included.

## Task 2: Define Data Models

**Files:**
- Create: `scripts/tungsten_report/__init__.py`
- Create: `scripts/tungsten_report/models.py`
- Create: `tests/tungsten_report/__init__.py`
- Create: `tests/tungsten_report/test_models.py`

- [ ] **Step 1: Create model tests**

Create `tests/tungsten_report/test_models.py`:

```python
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


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run model tests and verify failure**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_models -v
```

Expected: failure with `ModuleNotFoundError` or missing model classes.

- [ ] **Step 3: Create package files**

Create `scripts/tungsten_report/__init__.py`:

```python
"""Tungsten market report generator package."""
```

Create `tests/tungsten_report/__init__.py`:

```python
"""Tests for the tungsten market report generator."""
```

- [ ] **Step 4: Implement models**

Create `scripts/tungsten_report/models.py`:

```python
from dataclasses import dataclass, field
from datetime import date, datetime
from typing import Optional


@dataclass(frozen=True)
class PriceObservation:
    product: str
    market: str
    price_text: str
    date: date
    source_name: str
    source_url: str
    price_value: Optional[float] = None
    unit: str = ""
    notes: str = ""


@dataclass(frozen=True)
class NewsItem:
    title: str
    summary: str
    published_at: date
    source_name: str
    source_url: str
    category: str
    impact: str
    impact_reason: str


@dataclass(frozen=True)
class SourceGap:
    source_name: str
    reason: str
    detail: str


@dataclass(frozen=True)
class Forecast:
    direction: str
    confidence: str
    rationale: str
    evidence: list[str]
    risks: list[str]


@dataclass
class Report:
    report_type: str
    period_start: date
    period_end: date
    generated_at: datetime
    prices: list[PriceObservation] = field(default_factory=list)
    news: list[NewsItem] = field(default_factory=list)
    forecast: Optional[Forecast] = None
    sources_attempted: list[str] = field(default_factory=list)
    source_gaps: list[SourceGap] = field(default_factory=list)

    @property
    def sources_succeeded(self) -> list[str]:
        gap_names = {gap.source_name for gap in self.source_gaps}
        observed_names = {item.source_name for item in self.news}
        observed_names.update(price.source_name for price in self.prices)
        return [
            name
            for name in self.sources_attempted
            if name in observed_names and name not in gap_names
        ]
```

- [ ] **Step 5: Run model tests and verify pass**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_models -v
```

Expected: `OK`.

- [ ] **Step 6: Commit models**

Run:

```bash
git add scripts/tungsten_report/__init__.py scripts/tungsten_report/models.py tests/tungsten_report/__init__.py tests/tungsten_report/test_models.py
git commit -m "feat: add tungsten report data models"
```

## Task 3: Add Configuration And Date Ranges

**Files:**
- Create: `scripts/tungsten_report/config.py`
- Create: `tests/tungsten_report/test_config.py`

- [ ] **Step 1: Create config tests**

Create `tests/tungsten_report/test_config.py`:

```python
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
```

- [ ] **Step 2: Run config tests and verify failure**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_config -v
```

Expected: failure because `scripts.tungsten_report.config` does not exist.

- [ ] **Step 3: Implement config**

Create `scripts/tungsten_report/config.py`:

```python
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
```

- [ ] **Step 4: Run config tests and verify pass**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_config -v
```

Expected: `OK`.

- [ ] **Step 5: Commit config**

Run:

```bash
git add scripts/tungsten_report/config.py tests/tungsten_report/test_config.py
git commit -m "feat: add tungsten report configuration"
```

## Task 4: Add Extraction Helpers And Fixtures

**Files:**
- Create: `scripts/tungsten_report/extract.py`
- Create: `tests/tungsten_report/fixtures/chinatungsten_sample.html`
- Create: `tests/tungsten_report/fixtures/cnfeol_sample.html`
- Create: `tests/tungsten_report/test_extract.py`

- [ ] **Step 1: Create HTML fixtures**

Create `tests/tungsten_report/fixtures/chinatungsten_sample.html`:

```html
<html>
  <body>
    <article>
      <a href="/cn/tungsten-product-news/175111-tpn-15267.html">中国钨资源优势正向产业优势升级</a>
      <time>2026-06-18</time>
      <p>供应偏紧，钨价相对强势。</p>
    </article>
    <article>
      <a href="/cn/tungsten-product-news/175112.html">钨价承压微调，成交清淡</a>
      <time>2026-06-17</time>
      <p>下游采购气氛清淡，新订单释放有限。</p>
    </article>
  </body>
</html>
```

Create `tests/tungsten_report/fixtures/cnfeol_sample.html`:

```html
<html>
  <body>
    <ul>
      <li><a href="/wu/a_1.aspx">6月18日钨产品行情汇总</a><span>06月18日</span></li>
      <li><a href="/wu/a_2.aspx">钨系周评（6.15-6.18）：钨市成交缩量 谨慎观望居多</a><span>06月18日</span></li>
      <li><a href="/wu/a_3.aspx">6月18日全国主要地区碳化钨/钨粉价格</a><span>06月18日</span></li>
    </ul>
  </body>
</html>
```

- [ ] **Step 2: Create extraction tests**

Create `tests/tungsten_report/test_extract.py`:

```python
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
```

- [ ] **Step 3: Run extraction tests and verify failure**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_extract -v
```

Expected: failure because `scripts.tungsten_report.extract` does not exist.

- [ ] **Step 4: Implement extraction helpers**

Create `scripts/tungsten_report/extract.py`:

```python
from datetime import date
from html.parser import HTMLParser
from urllib.parse import urljoin
import re


PRICE_KEYWORDS = ("价格", "行情", "报价", "指数")
BULLISH_KEYWORDS = ("偏紧", "上调", "上涨", "强势", "支撑", "限产", "供应紧")
BEARISH_KEYWORDS = ("清淡", "观望", "下调", "回落", "承压", "缩量", "议价松动")


class LinkParser(HTMLParser):
    def __init__(self, base_url: str):
        super().__init__()
        self.base_url = base_url
        self.links: list[dict[str, str]] = []
        self._href: str | None = None
        self._text: list[str] = []

    def handle_starttag(self, tag, attrs):
        if tag != "a":
            return
        attributes = dict(attrs)
        href = attributes.get("href")
        if href:
            self._href = urljoin(self.base_url, href)
            self._text = []

    def handle_data(self, data):
        if self._href:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag == "a" and self._href:
            title = normalize_space("".join(self._text))
            if title:
                self.links.append({"title": title, "url": self._href})
            self._href = None
            self._text = []


def normalize_space(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def extract_links(html: str, base_url: str) -> list[dict[str, str]]:
    parser = LinkParser(base_url)
    parser.feed(html)
    return parser.links


def parse_chinese_month_day(text: str, year: int) -> date:
    match = re.search(r"(\d{1,2})\s*月\s*(\d{1,2})\s*日", text)
    if not match:
        raise ValueError(f"not a Chinese month/day date: {text}")
    return date(year, int(match.group(1)), int(match.group(2)))


def is_price_title(title: str) -> bool:
    return any(keyword in title for keyword in PRICE_KEYWORDS)


def classify_impact(text: str) -> dict[str, str]:
    bullish_hits = [keyword for keyword in BULLISH_KEYWORDS if keyword in text]
    bearish_hits = [keyword for keyword in BEARISH_KEYWORDS if keyword in text]
    if bullish_hits and len(bullish_hits) >= len(bearish_hits):
        return {"impact": "bullish", "reason": f"出现利多词：{'、'.join(bullish_hits[:3])}"}
    if bearish_hits:
        return {"impact": "bearish", "reason": f"出现利空词：{'、'.join(bearish_hits[:3])}"}
    return {"impact": "neutral", "reason": "未发现明显方向性词汇"}


def summarize_text(text: str, max_chars: int = 120) -> str:
    clean = normalize_space(text)
    if len(clean) <= max_chars:
        return clean
    return clean[:max_chars].rstrip() + "…"
```

- [ ] **Step 5: Run extraction tests and verify pass**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_extract -v
```

Expected: `OK`.

- [ ] **Step 6: Commit extraction helpers**

Run:

```bash
git add scripts/tungsten_report/extract.py tests/tungsten_report/fixtures tests/tungsten_report/test_extract.py
git commit -m "feat: add tungsten source extraction helpers"
```

## Task 5: Add Forecast Rules

**Files:**
- Create: `scripts/tungsten_report/forecast.py`
- Create: `tests/tungsten_report/test_forecast.py`

- [ ] **Step 1: Create forecast tests**

Create `tests/tungsten_report/test_forecast.py`:

```python
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
```

- [ ] **Step 2: Run forecast tests and verify failure**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_forecast -v
```

Expected: failure because `scripts.tungsten_report.forecast` does not exist.

- [ ] **Step 3: Implement forecast rules**

Create `scripts/tungsten_report/forecast.py`:

```python
from scripts.tungsten_report.models import Forecast, NewsItem, PriceObservation


def build_forecast(prices: list[PriceObservation], news: list[NewsItem]) -> Forecast:
    bullish = []
    bearish = []

    for price in prices:
        text = f"{price.product} {price.price_text} {price.notes}"
        if any(word in text for word in ("上调", "上涨", "强势", "偏紧")):
            bullish.append(f"{price.product}价格信息偏强：{price.price_text}")
        if any(word in text for word in ("下调", "回落", "承压", "清淡")):
            bearish.append(f"{price.product}价格信息偏弱：{price.price_text}")

    for item in news:
        evidence = f"{item.title}（{item.impact_reason}）"
        if item.impact == "bullish":
            bullish.append(evidence)
        elif item.impact == "bearish":
            bearish.append(evidence)

    score = len(bullish) - len(bearish)
    if score >= 2:
        direction = "稳中偏强"
        confidence = "中" if len(bullish) < 4 else "高"
        evidence = bullish[:3]
        risks = ["若下游采购继续谨慎或成交放量不足，涨势可能受限。"]
        rationale = "利多信号多于利空信号，矿端或报价支撑较强。"
    elif score <= -2:
        direction = "稳中偏弱"
        confidence = "中" if len(bearish) < 4 else "高"
        evidence = bearish[:3]
        risks = ["若大厂长单上调或矿端供应收紧，弱势判断需修正。"]
        rationale = "利空信号多于利多信号，下游观望和成交偏弱压制行情。"
    else:
        direction = "横盘观望"
        confidence = "低"
        evidence = (bullish + bearish)[:3] or ["有效方向性信号不足。"]
        risks = ["新增企业报价、矿山供应扰动或终端订单变化可能打破横盘。"]
        rationale = "多空信号接近或样本不足，短期方向不清晰。"

    return Forecast(
        direction=direction,
        confidence=confidence,
        rationale=rationale,
        evidence=evidence,
        risks=risks,
    )
```

- [ ] **Step 4: Run forecast tests and verify pass**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_forecast -v
```

Expected: `OK`.

- [ ] **Step 5: Commit forecast rules**

Run:

```bash
git add scripts/tungsten_report/forecast.py tests/tungsten_report/test_forecast.py
git commit -m "feat: add tungsten forecast rules"
```

## Task 6: Add Markdown And HTML Rendering

**Files:**
- Create: `scripts/tungsten_report/render.py`
- Create: `tests/tungsten_report/test_render.py`

- [ ] **Step 1: Create renderer tests**

Create `tests/tungsten_report/test_render.py`:

```python
import unittest
from datetime import date, datetime, timezone

from scripts.tungsten_report.models import Forecast, NewsItem, PriceObservation, Report, SourceGap
from scripts.tungsten_report.render import render_html, render_markdown


class RenderTests(unittest.TestCase):
    def sample_report(self):
        return Report(
            report_type="daily",
            period_start=date(2026, 6, 19),
            period_end=date(2026, 6, 19),
            generated_at=datetime(2026, 6, 19, 18, 30, tzinfo=timezone.utc),
            prices=[
                PriceObservation("APT", "domestic", "50万元/吨", date(2026, 6, 19), "sample", "https://example.com/p")
            ],
            news=[
                NewsItem("钨矿供应偏紧", "矿端报价坚挺。", date(2026, 6, 19), "sample", "https://example.com/n", "industry", "bullish", "供应偏紧")
            ],
            forecast=Forecast("稳中偏强", "中", "矿端支撑较强。", ["矿端报价坚挺"], ["下游需求不足"]),
            sources_attempted=["sample", "cnfeol"],
            source_gaps=[SourceGap("cnfeol", "blocked", "页面需要人工验证。")],
        )

    def test_render_markdown_contains_required_sections(self):
        markdown = render_markdown(self.sample_report())
        self.assertIn("# 钨金属日报 - 2026-06-19", markdown)
        self.assertIn("## 今日结论", markdown)
        self.assertIn("## 价格行情", markdown)
        self.assertIn("## 数据缺口", markdown)
        self.assertIn("稳中偏强", markdown)

    def test_render_html_escapes_content_and_wraps_markdown(self):
        html = render_html(self.sample_report())
        self.assertIn("<!doctype html>", html)
        self.assertIn("钨金属日报", html)
        self.assertIn("https://example.com/p", html)


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run renderer tests and verify failure**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_render -v
```

Expected: failure because `scripts.tungsten_report.render` does not exist.

- [ ] **Step 3: Implement renderer**

Create `scripts/tungsten_report/render.py`:

```python
from html import escape

from scripts.tungsten_report.models import Report


def report_title(report: Report) -> str:
    if report.report_type == "weekly":
        return f"钨金属周报 - {report.period_start.isoformat()} 至 {report.period_end.isoformat()}"
    return f"钨金属日报 - {report.period_start.isoformat()}"


def render_markdown(report: Report) -> str:
    forecast = report.forecast
    lines = [
        f"# {report_title(report)}",
        "",
        f"生成时间：{report.generated_at.isoformat()}",
        "",
        "## 今日结论" if report.report_type == "daily" else "## 本周结论",
    ]
    if forecast:
        lines.extend([
            f"- 判断：{forecast.direction}",
            f"- 置信度：{forecast.confidence}",
            f"- 理由：{forecast.rationale}",
        ])
    else:
        lines.append("- 判断：暂无足够数据")

    lines.extend(["", "## 价格行情"])
    if report.prices:
        for price in report.prices:
            lines.append(f"- {price.product}：{price.price_text}（{price.source_name}，{price.date.isoformat()}）[{price.source_url}]")
    else:
        lines.append("- 暂无可用价格数据。")

    lines.extend(["", "## 产业新闻"])
    if report.news:
        for item in report.news:
            lines.append(f"- {item.title}（{item.source_name}，{item.published_at.isoformat()}）")
            lines.append(f"  - 摘要：{item.summary}")
            lines.append(f"  - 影响：{item.impact}，{item.impact_reason}")
            lines.append(f"  - 链接：{item.source_url}")
    else:
        lines.append("- 暂无可用新闻。")

    lines.extend(["", "## 短期预测" if report.report_type == "daily" else "## 下周预测"])
    if forecast:
        lines.append(f"- 方向：{forecast.direction}")
        lines.append("- 依据：")
        for evidence in forecast.evidence:
            lines.append(f"  - {evidence}")
        lines.append("- 风险：")
        for risk in forecast.risks:
            lines.append(f"  - {risk}")
    else:
        lines.append("- 暂无足够数据形成判断。")

    lines.extend(["", "## 数据缺口"])
    if report.source_gaps:
        for gap in report.source_gaps:
            lines.append(f"- {gap.source_name}：{gap.reason}，{gap.detail}")
    else:
        lines.append("- 无。")

    return "\n".join(lines) + "\n"


def render_html(report: Report) -> str:
    markdown = render_markdown(report)
    body_lines = []
    for line in markdown.splitlines():
        if line.startswith("# "):
            body_lines.append(f"<h1>{escape(line[2:])}</h1>")
        elif line.startswith("## "):
            body_lines.append(f"<h2>{escape(line[3:])}</h2>")
        elif line.startswith("- "):
            body_lines.append(f"<p class=\"bullet\">{escape(line)}</p>")
        elif line.strip():
            body_lines.append(f"<p>{escape(line)}</p>")
    return "\n".join([
        "<!doctype html>",
        "<html lang=\"zh-CN\">",
        "<head>",
        "<meta charset=\"utf-8\">",
        f"<title>{escape(report_title(report))}</title>",
        "<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.65;max-width:980px;margin:32px auto;padding:0 20px;color:#1f2933}h1,h2{line-height:1.25}.bullet{margin-left:1em}</style>",
        "</head>",
        "<body>",
        *body_lines,
        "</body>",
        "</html>",
    ])
```

- [ ] **Step 4: Run renderer tests and verify pass**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_render -v
```

Expected: `OK`.

- [ ] **Step 5: Commit renderer**

Run:

```bash
git add scripts/tungsten_report/render.py tests/tungsten_report/test_render.py
git commit -m "feat: render tungsten reports"
```

## Task 7: Add Collectors With Safe Source Gaps

**Files:**
- Create: `scripts/tungsten_report/collectors/__init__.py`
- Create: `scripts/tungsten_report/collectors/base.py`
- Create: `scripts/tungsten_report/collectors/chinatungsten.py`
- Create: `scripts/tungsten_report/collectors/cnfeol.py`
- Create: `tests/tungsten_report/test_collectors.py`

- [ ] **Step 1: Create collector tests**

Create `tests/tungsten_report/test_collectors.py`:

```python
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

    def test_cnfeol_login_gap_mentions_manual_refresh(self):
        gap = cnfeol_login_gap()
        self.assertEqual(gap.source_name, "铁合金在线")
        self.assertEqual(gap.reason, "login_required")
        self.assertIn("手动登录", gap.detail)


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run collector tests and verify failure**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_collectors -v
```

Expected: failure because collector modules do not exist.

- [ ] **Step 3: Implement collector base**

Create `scripts/tungsten_report/collectors/__init__.py`:

```python
"""Source collectors for tungsten market reports."""
```

Create `scripts/tungsten_report/collectors/base.py`:

```python
from dataclasses import dataclass, field

from scripts.tungsten_report.models import NewsItem, PriceObservation, SourceGap


@dataclass
class CollectorResult:
    prices: list[PriceObservation] = field(default_factory=list)
    news: list[NewsItem] = field(default_factory=list)
    gaps: list[SourceGap] = field(default_factory=list)
```

- [ ] **Step 4: Implement Chinatungsten fixture collector**

Create `scripts/tungsten_report/collectors/chinatungsten.py`:

```python
from datetime import date
from urllib.request import Request, urlopen

from scripts.tungsten_report.collectors.base import CollectorResult
from scripts.tungsten_report.extract import classify_impact, extract_links, is_price_title
from scripts.tungsten_report.models import NewsItem, PriceObservation, SourceGap


SOURCE_NAME = "中钨在线新闻网"
BASE_URL = "https://news.chinatungsten.com"


def collect_chinatungsten_from_html(html: str, today: date) -> CollectorResult:
    result = CollectorResult()
    for link in extract_links(html, BASE_URL)[:20]:
        impact = classify_impact(link["title"])
        if is_price_title(link["title"]):
            result.prices.append(
                PriceObservation(
                    product="钨产品",
                    market="domestic",
                    price_text=link["title"],
                    date=today,
                    source_name=SOURCE_NAME,
                    source_url=link["url"],
                    notes="由标题识别的价格/行情信息",
                )
            )
        result.news.append(
            NewsItem(
                title=link["title"],
                summary=link["title"],
                published_at=today,
                source_name=SOURCE_NAME,
                source_url=link["url"],
                category="price" if is_price_title(link["title"]) else "industry",
                impact=impact["impact"],
                impact_reason=impact["reason"],
            )
        )
    return result


def collect_chinatungsten(urls: list[str], today: date) -> CollectorResult:
    merged = CollectorResult()
    for url in urls:
        try:
            request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urlopen(request, timeout=20) as response:
                html = response.read().decode("utf-8", errors="replace")
            partial = collect_chinatungsten_from_html(html, today)
            merged.prices.extend(partial.prices)
            merged.news.extend(partial.news)
        except Exception as exc:
            merged.gaps.append(SourceGap(SOURCE_NAME, "fetch_failed", f"{url}: {exc.__class__.__name__}"))
    return merged
```

- [ ] **Step 5: Implement CNFEOL fixture collector**

Create `scripts/tungsten_report/collectors/cnfeol.py`:

```python
from datetime import date
from urllib.request import Request, urlopen

from scripts.tungsten_report.collectors.base import CollectorResult
from scripts.tungsten_report.extract import classify_impact, extract_links, is_price_title
from scripts.tungsten_report.models import NewsItem, PriceObservation, SourceGap


SOURCE_NAME = "铁合金在线"
BASE_URL = "https://www.cnfeol.com"


def cnfeol_login_gap() -> SourceGap:
    return SourceGap(
        source_name=SOURCE_NAME,
        reason="login_required",
        detail="登录内容需要有效账号或手动登录后的本地 session；请先手动登录刷新状态。",
    )


def collect_cnfeol_from_html(html: str, today: date) -> CollectorResult:
    result = CollectorResult()
    for link in extract_links(html, BASE_URL)[:30]:
        impact = classify_impact(link["title"])
        if is_price_title(link["title"]):
            result.prices.append(
                PriceObservation(
                    product="钨产品",
                    market="domestic",
                    price_text=link["title"],
                    date=today,
                    source_name=SOURCE_NAME,
                    source_url=link["url"],
                    notes="由标题识别的价格/行情信息",
                )
            )
        result.news.append(
            NewsItem(
                title=link["title"],
                summary=link["title"],
                published_at=today,
                source_name=SOURCE_NAME,
                source_url=link["url"],
                category="price" if is_price_title(link["title"]) else "industry",
                impact=impact["impact"],
                impact_reason=impact["reason"],
            )
        )
    return result


def collect_cnfeol(urls: list[str], today: date, include_login_gap: bool = True) -> CollectorResult:
    merged = CollectorResult()
    for url in urls:
        try:
            request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urlopen(request, timeout=20) as response:
                html = response.read().decode("utf-8", errors="replace")
            partial = collect_cnfeol_from_html(html, today)
            merged.prices.extend(partial.prices)
            merged.news.extend(partial.news)
        except Exception as exc:
            merged.gaps.append(SourceGap(SOURCE_NAME, "fetch_failed", f"{url}: {exc.__class__.__name__}"))
    if include_login_gap:
        merged.gaps.append(cnfeol_login_gap())
    return merged
```

- [ ] **Step 6: Run collector tests and verify pass**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_collectors -v
```

Expected: `OK`.

- [ ] **Step 7: Commit collectors**

Run:

```bash
git add scripts/tungsten_report/collectors tests/tungsten_report/test_collectors.py
git commit -m "feat: collect tungsten source items"
```

## Task 8: Add CLI And End-To-End Fixture Mode

**Files:**
- Create: `scripts/tungsten_report.py`
- Create: `scripts/tungsten_report/cli.py`
- Create: `tests/tungsten_report/test_cli.py`

- [ ] **Step 1: Create CLI tests**

Create `tests/tungsten_report/test_cli.py`:

```python
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
```

- [ ] **Step 2: Run CLI tests and verify failure**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_cli -v
```

Expected: failure because CLI wrapper does not exist.

- [ ] **Step 3: Implement CLI module**

Create `scripts/tungsten_report/cli.py`:

```python
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
```

- [ ] **Step 4: Implement executable wrapper**

Create `scripts/tungsten_report.py`:

```python
#!/usr/bin/env python3
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.tungsten_report.cli import cli_main


if __name__ == "__main__":
    raise SystemExit(cli_main())
```

- [ ] **Step 5: Run CLI tests and verify pass**

Run:

```bash
python3 -m unittest tests.tungsten_report.test_cli -v
```

Expected: `OK`.

- [ ] **Step 6: Run CLI manually in fixture mode**

Run:

```bash
python3 scripts/tungsten_report.py daily --fixture --date 2026-06-19
python3 scripts/tungsten_report.py weekly --fixture --date 2026-06-19
```

Expected output includes:

```text
Wrote /Users/huyoucheng/Documents/钨金属/reports/daily/2026-06-19-tungsten-daily.md
Wrote /Users/huyoucheng/Documents/钨金属/reports/weekly/2026-W25-tungsten-weekly.md
```

- [ ] **Step 7: Commit CLI**

Run:

```bash
git add scripts/tungsten_report.py scripts/tungsten_report/cli.py tests/tungsten_report/test_cli.py
git commit -m "feat: add tungsten report CLI"
```

## Task 9: Verify Live Collection And Document Manual Login Limits

**Files:**
- Modify: `README.md`
- Create: `.env.example`

- [ ] **Step 1: Create `.env.example`**

Create `.env.example`:

```env
CNFEOL_USERNAME=
CNFEOL_PASSWORD=
```

- [ ] **Step 2: Add README usage section**

Append this section to `README.md`:

```markdown

## 钨行情日报/周报

本地报告生成器用于生成钨金属日报和周报：

```bash
python3 scripts/tungsten_report.py daily
python3 scripts/tungsten_report.py weekly
```

报告输出到：

- `reports/daily/`
- `reports/weekly/`

铁合金在线账号密码不要写进代码。复制 `.env.example` 为 `.env`，在本机填写：

```env
CNFEOL_USERNAME=你的账号
CNFEOL_PASSWORD=你的密码
```

`.env` 已被 git 忽略。当前第一版不会绕过人机验证；如果铁合金在线要求手动验证，报告会在“数据缺口”中标注。

离线测试报告可以运行：

```bash
python3 scripts/tungsten_report.py daily --fixture --date 2026-06-19
python3 scripts/tungsten_report.py weekly --fixture --date 2026-06-19
```
```

- [ ] **Step 3: Run all Python tests**

Run:

```bash
python3 -m unittest discover -s tests -p "test_*.py" -v
```

Expected: all `tests/tungsten_report` tests pass.

- [ ] **Step 4: Run live daily command**

Run:

```bash
python3 scripts/tungsten_report.py daily
```

Expected: Markdown and HTML files are written under `reports/daily/`. If one website fails or blocks access, the report still includes a `数据缺口` section.

- [ ] **Step 5: Inspect generated Markdown**

Run:

```bash
sed -n '1,220p' reports/daily/$(date +%F)-tungsten-daily.md
```

Expected: report contains `今日结论`, `价格行情`, `产业新闻`, `短期预测`, and `数据缺口`.

- [ ] **Step 6: Commit docs**

Run:

```bash
git add .env.example README.md
git commit -m "docs: document tungsten report generator"
```

## Task 10: Final Verification

**Files:**
- Verify only; no file changes expected.

- [ ] **Step 1: Run full Python test suite**

Run:

```bash
python3 -m unittest discover -s tests -p "test_*.py" -v
```

Expected: all Python tests pass.

- [ ] **Step 2: Run fixture daily and weekly reports**

Run:

```bash
python3 scripts/tungsten_report.py daily --fixture --date 2026-06-19
python3 scripts/tungsten_report.py weekly --fixture --date 2026-06-19
```

Expected: both commands exit with status 0 and write Markdown plus HTML files.

- [ ] **Step 3: Check git status**

Run:

```bash
git status --short
```

Expected: only ignored runtime outputs such as `reports/` are absent from status. Existing unrelated untracked `mockups/` may still appear and must not be committed for this task.

- [ ] **Step 4: Summarize result**

Report:

- tests run and their result,
- generated fixture report paths,
- live collection result or source gaps,
- any remaining limitation around CNFEOL login/CAPTCHA.

## Spec Coverage Review

- Daily and weekly commands: Task 8.
- Markdown and HTML output: Tasks 6 and 8.
- Chinatungsten public collection: Task 7.
- CNFEOL public collection and login gap handling: Task 7.
- Private credentials and git ignore rules: Tasks 1 and 9.
- Source links and timestamps: Tasks 2, 6, and 8.
- Forecast direction, confidence, evidence, and risks: Task 5.
- Partial report generation when sources fail: Tasks 7 and 8.
- Testing and verification: Tasks 2 through 10.

No first-version task implements PDF export, email delivery, dashboard UI, SQLite storage, or automated CAPTCHA bypass because those are explicitly out of scope in the approved design.
