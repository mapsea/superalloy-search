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
