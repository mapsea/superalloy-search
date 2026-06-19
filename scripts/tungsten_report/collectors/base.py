from dataclasses import dataclass, field

from scripts.tungsten_report.models import NewsItem, PriceObservation, SourceGap


@dataclass
class CollectorResult:
    prices: list[PriceObservation] = field(default_factory=list)
    news: list[NewsItem] = field(default_factory=list)
    gaps: list[SourceGap] = field(default_factory=list)
