from datetime import date
from urllib.request import Request, urlopen

from scripts.tungsten_report.collectors.base import CollectorResult
from scripts.tungsten_report.extract import classify_impact, extract_links, extract_source_dates, is_price_title
from scripts.tungsten_report.models import NewsItem, PriceObservation, SourceGap


SOURCE_NAME = "铁合金在线"
BASE_URL = "https://www.cnfeol.com"


def cnfeol_login_gap() -> SourceGap:
    return SourceGap(
        source_name=SOURCE_NAME,
        reason="login_required",
        detail="登录内容需要有效账号或手动登录后的本地 session；请先手动登录刷新状态。",
    )


def collect_cnfeol_from_html(html: str, today: date, base_url: str = BASE_URL) -> CollectorResult:
    result = CollectorResult()
    links = extract_links(html, base_url)[:30]
    dates = extract_source_dates(html, today)
    for index, link in enumerate(links):
        item_date = dates[index] if index < len(dates) else today
        impact = classify_impact(link["title"])
        if is_price_title(link["title"]):
            result.prices.append(
                PriceObservation(
                    product="钨产品",
                    market="domestic",
                    price_text=link["title"],
                    date=item_date,
                    source_name=SOURCE_NAME,
                    source_url=link["url"],
                    notes="由标题识别的价格/行情信息",
                )
            )
        result.news.append(
            NewsItem(
                title=link["title"],
                summary=link["title"],
                published_at=item_date,
                source_name=SOURCE_NAME,
                source_url=link["url"],
                category="price" if is_price_title(link["title"]) else "industry",
                impact=impact["impact"],
                impact_reason=impact["reason"],
            )
        )
    if not result.prices and not result.news:
        reason = "parse_empty" if not html.strip() else "no_items"
        result.gaps.append(SourceGap(SOURCE_NAME, reason, "页面解析后未得到可用价格或新闻条目。"))
    return result


def collect_cnfeol(urls: list[str], today: date, include_login_gap: bool = True) -> CollectorResult:
    merged = CollectorResult()
    for url in urls:
        try:
            request = Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urlopen(request, timeout=20) as response:
                html = response.read().decode("utf-8", errors="replace")
            partial = collect_cnfeol_from_html(html, today, base_url=url)
            merged.prices.extend(partial.prices)
            merged.news.extend(partial.news)
            merged.gaps.extend(partial.gaps)
        except Exception as exc:
            merged.gaps.append(SourceGap(SOURCE_NAME, "fetch_failed", f"{url}: {exc.__class__.__name__}"))
    if include_login_gap:
        merged.gaps.append(cnfeol_login_gap())
    return merged
