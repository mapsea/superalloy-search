from dataclasses import dataclass

from scripts.tungsten_report.models import Forecast, NewsItem, PriceObservation


@dataclass(frozen=True)
class _EvidenceRecord:
    direction: str
    key: str
    text: str


_BULLISH_TERMS = ("上调", "上涨", "强势", "偏紧")
_BEARISH_TERMS = ("下调", "回落", "承压", "清淡")


def build_forecast(prices: list[PriceObservation], news: list[NewsItem]) -> Forecast:
    records: list[_EvidenceRecord] = []

    for price in prices:
        text = f"{price.product} {price.price_text} {price.notes}"
        has_bullish = any(word in text for word in _BULLISH_TERMS)
        has_bearish = any(word in text for word in _BEARISH_TERMS)
        key = _price_key(price)
        context = _context(price.source_name, price.date)

        if has_bullish and has_bearish:
            records.append(_EvidenceRecord("mixed", key, f"{price.product}价格信息多空混杂：{price.price_text}（{context}）"))
        elif has_bullish:
            records.append(_EvidenceRecord("bullish", key, f"{price.product}价格信息偏强：{price.price_text}（{context}）"))
        elif has_bearish:
            records.append(_EvidenceRecord("bearish", key, f"{price.product}价格信息偏弱：{price.price_text}（{context}）"))

    for item in news:
        if _duplicates_price_evidence(item, prices):
            continue
        if item.impact == "bullish":
            records.append(_EvidenceRecord("bullish", _news_key(item), f"{item.title}（{item.impact_reason}；{_context(item.source_name, item.published_at)}）"))
        elif item.impact == "bearish":
            records.append(_EvidenceRecord("bearish", _news_key(item), f"{item.title}（{item.impact_reason}；{_context(item.source_name, item.published_at)}）"))

    unique_records = _deduplicate(records)
    bullish = [record.text for record in unique_records if record.direction == "bullish"]
    bearish = [record.text for record in unique_records if record.direction == "bearish"]
    mixed = [record.text for record in unique_records if record.direction == "mixed"]

    score = len(bullish) - len(bearish)
    if mixed and abs(score) < 3:
        direction = "横盘观望"
        confidence = "低"
        evidence = (mixed + bullish + bearish)[:3]
        risks = ["新增企业报价、矿山供应扰动或终端订单变化可能打破横盘。"]
        rationale = "存在多空混杂信号且方向性支持不足，短期方向不清晰。"
    elif score >= 2:
        direction = "稳中偏强"
        confidence = "中"
        evidence = bullish[:3]
        risks = _risks_with_mixed("若下游采购继续谨慎或成交放量不足，涨势可能受限。", mixed)
        rationale = "利多信号多于利空信号，矿端或报价支撑较强。"
    elif score <= -2:
        direction = "稳中偏弱"
        confidence = "中"
        evidence = bearish[:3]
        risks = _risks_with_mixed("若大厂长单上调或矿端供应收紧，弱势判断需修正。", mixed)
        rationale = "利空信号多于利多信号，下游观望和成交偏弱压制行情。"
    else:
        direction = "横盘观望"
        confidence = "低"
        evidence = (bullish + bearish + mixed)[:3] or ["有效方向性信号不足。"]
        risks = ["新增企业报价、矿山供应扰动或终端订单变化可能打破横盘。"]
        rationale = "多空信号接近或样本不足，短期方向不清晰。"

    return Forecast(
        direction=direction,
        confidence=confidence,
        rationale=rationale,
        evidence=evidence,
        risks=risks,
    )


def _price_key(price: PriceObservation) -> str:
    source = price.source_url or price.source_name
    return f"price:{source}:{price.product}:{price.market}:{price.price_text}"


def _news_key(item: NewsItem) -> str:
    if item.source_url:
        return item.source_url
    return f"news:{item.source_name}:{item.published_at.isoformat()}:{item.title}"


def _context(source_name: str, observed_date) -> str:
    return f"{source_name}，{observed_date.isoformat()}"


def _duplicates_price_evidence(item: NewsItem, prices: list[PriceObservation]) -> bool:
    if not item.source_url:
        return False

    news_text = f"{item.title} {item.summary} {item.impact_reason}"
    for price in prices:
        if price.source_url != item.source_url:
            continue
        if price.price_text and price.price_text in news_text:
            return True
    return False


def _deduplicate(records: list[_EvidenceRecord]) -> list[_EvidenceRecord]:
    seen = set()
    unique = []
    for record in records:
        if record.key in seen:
            continue
        seen.add(record.key)
        unique.append(record)
    return unique


def _risks_with_mixed(base_risk: str, mixed: list[str]) -> list[str]:
    risks = [base_risk]
    if mixed:
        risks.append(f"价格信息存在多空混杂信号，需谨慎解读：{mixed[0]}")
    return risks
