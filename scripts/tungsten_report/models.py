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
        observed_names = {item.source_name for item in self.news}
        observed_names.update(price.source_name for price in self.prices)
        return [name for name in self.sources_attempted if name in observed_names]
