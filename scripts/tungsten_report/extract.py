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
