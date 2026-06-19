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
