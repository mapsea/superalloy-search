from html import escape
from urllib.parse import quote

from scripts.tungsten_report.models import Report


def _is_safe_url(url: str) -> bool:
    return url.startswith(("http://", "https://"))


def _markdown_text(text: str) -> str:
    escaped = escape(text, quote=False)
    return (
        escaped
        .replace("[", "\\[")
        .replace("]", "\\]")
        .replace("(", "\\(")
        .replace(")", "\\)")
    )


def _markdown_url(url: str) -> str:
    return quote(url, safe="%/:?&=#[]@!$'()*+,;")


def _markdown_link(label: str, url: str) -> str:
    if _is_safe_url(url):
        return f"[{label}]({_markdown_url(url)})"
    return _markdown_text(url)


def _html_link(label: str, url: str) -> str:
    if _is_safe_url(url):
        return f'<a href="{escape(url, quote=True)}">{escape(label, quote=True)}</a>'
    return escape(url, quote=True)


def _html_paragraph(content: str, css_class: str = "") -> str:
    class_attr = f' class="{css_class}"' if css_class else ""
    return f"<p{class_attr}>{content}</p>"


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
            f"- 判断：{_markdown_text(forecast.direction)}",
            f"- 置信度：{_markdown_text(forecast.confidence)}",
            f"- 理由：{_markdown_text(forecast.rationale)}",
        ])
    else:
        lines.append("- 判断：暂无足够数据")

    lines.extend(["", "## 价格行情"])
    if report.prices:
        for price in report.prices:
            lines.append(
                f"- {_markdown_text(price.product)}：{_markdown_text(price.price_text)}"
                f"（{_markdown_text(price.source_name)}，{price.date.isoformat()}）"
                f"{_markdown_link('来源', price.source_url)}"
            )
    else:
        lines.append("- 暂无可用价格数据。")

    lines.extend(["", "## 产业新闻"])
    if report.news:
        for item in report.news:
            lines.append(
                f"- {_markdown_text(item.title)}"
                f"（{_markdown_text(item.source_name)}，{item.published_at.isoformat()}）"
            )
            lines.append(f"  - 摘要：{_markdown_text(item.summary)}")
            lines.append(f"  - 影响：{_markdown_text(item.impact)}，{_markdown_text(item.impact_reason)}")
            lines.append(f"  - 链接：{_markdown_link('来源', item.source_url)}")
    else:
        lines.append("- 暂无可用新闻。")

    lines.extend(["", "## 短期预测" if report.report_type == "daily" else "## 下周预测"])
    if forecast:
        lines.append(f"- 方向：{_markdown_text(forecast.direction)}")
        lines.append("- 依据：")
        for evidence in forecast.evidence:
            lines.append(f"  - {_markdown_text(evidence)}")
        lines.append("- 风险：")
        for risk in forecast.risks:
            lines.append(f"  - {_markdown_text(risk)}")
    else:
        lines.append("- 暂无足够数据形成判断。")

    lines.extend(["", "## 数据缺口"])
    if report.source_gaps:
        for gap in report.source_gaps:
            lines.append(
                f"- {_markdown_text(gap.source_name)}：{_markdown_text(gap.reason)}，{_markdown_text(gap.detail)}"
            )
    else:
        lines.append("- 无。")

    return "\n".join(lines) + "\n"


def render_html(report: Report) -> str:
    body_lines = []
    forecast = report.forecast

    body_lines.append(f"<h1>{escape(report_title(report), quote=True)}</h1>")
    body_lines.append(_html_paragraph(f"生成时间：{escape(report.generated_at.isoformat(), quote=True)}"))
    body_lines.append(f"<h2>{'今日结论' if report.report_type == 'daily' else '本周结论'}</h2>")
    if forecast:
        body_lines.append(_html_paragraph(f"- 判断：{escape(forecast.direction, quote=True)}", "bullet"))
        body_lines.append(_html_paragraph(f"- 置信度：{escape(forecast.confidence, quote=True)}", "bullet"))
        body_lines.append(_html_paragraph(f"- 理由：{escape(forecast.rationale, quote=True)}", "bullet"))
    else:
        body_lines.append(_html_paragraph("- 判断：暂无足够数据", "bullet"))

    body_lines.append("<h2>价格行情</h2>")
    if report.prices:
        for price in report.prices:
            body_lines.append(_html_paragraph(
                f"- {escape(price.product, quote=True)}：{escape(price.price_text, quote=True)}"
                f"（{escape(price.source_name, quote=True)}，{escape(price.date.isoformat(), quote=True)}）"
                f"{_html_link('来源', price.source_url)}",
                "bullet",
            ))
    else:
        body_lines.append(_html_paragraph("- 暂无可用价格数据。", "bullet"))

    body_lines.append("<h2>产业新闻</h2>")
    if report.news:
        for item in report.news:
            body_lines.append(_html_paragraph(
                f"- {escape(item.title, quote=True)}"
                f"（{escape(item.source_name, quote=True)}，{escape(item.published_at.isoformat(), quote=True)}）",
                "bullet",
            ))
            body_lines.append(_html_paragraph(f"  - 摘要：{escape(item.summary, quote=True)}"))
            body_lines.append(_html_paragraph(
                f"  - 影响：{escape(item.impact, quote=True)}，{escape(item.impact_reason, quote=True)}"
            ))
            body_lines.append(_html_paragraph(f"  - 链接：{_html_link('来源', item.source_url)}"))
    else:
        body_lines.append(_html_paragraph("- 暂无可用新闻。", "bullet"))

    body_lines.append(f"<h2>{'短期预测' if report.report_type == 'daily' else '下周预测'}</h2>")
    if forecast:
        body_lines.append(_html_paragraph(f"- 方向：{escape(forecast.direction, quote=True)}", "bullet"))
        body_lines.append(_html_paragraph("- 依据：", "bullet"))
        for evidence in forecast.evidence:
            body_lines.append(_html_paragraph(f"  - {escape(evidence, quote=True)}"))
        body_lines.append(_html_paragraph("- 风险：", "bullet"))
        for risk in forecast.risks:
            body_lines.append(_html_paragraph(f"  - {escape(risk, quote=True)}"))
    else:
        body_lines.append(_html_paragraph("- 暂无足够数据形成判断。", "bullet"))

    body_lines.append("<h2>数据缺口</h2>")
    if report.source_gaps:
        for gap in report.source_gaps:
            body_lines.append(_html_paragraph(
                f"- {escape(gap.source_name, quote=True)}：{escape(gap.reason, quote=True)}，"
                f"{escape(gap.detail, quote=True)}",
                "bullet",
            ))
    else:
        body_lines.append(_html_paragraph("- 无。", "bullet"))

    return "\n".join([
        "<!doctype html>",
        "<html lang=\"zh-CN\">",
        "<head>",
        "<meta charset=\"utf-8\">",
        f"<title>{escape(report_title(report), quote=True)}</title>",
        "<style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.65;max-width:980px;margin:32px auto;padding:0 20px;color:#1f2933}h1,h2{line-height:1.25}.bullet{margin-left:1em}</style>",
        "</head>",
        "<body>",
        *body_lines,
        "</body>",
        "</html>",
    ])
