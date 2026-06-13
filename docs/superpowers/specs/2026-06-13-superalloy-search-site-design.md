# Superalloy Search Site Design

## Goal

Build a responsive Japanese website for searching and comparing special metals and superalloys by alloy name, element, and composition range. The first version focuses on well-known superalloys such as Inconel 718, Inconel 625, Waspaloy, X-750, Hastelloy-family alloys, and similar high-temperature alloys.

The site must work well on both desktop and smartphone screens.

## Data Sourcing

The data collection priority is:

1. Official manufacturer pages and official PDFs.
2. Secondary references such as MatWeb, Wikipedia, distributors, standards tables, and other technical reference pages.

Target source organizations include Carpenter Technology, ATI, Daido Steel, Nippon Steel, Kobe Steel, Mitsubishi Heavy Industries, and other relevant alloy makers or official material sources.

Every composition value must keep source metadata:

- Source type: `official`, `reference`, or `unverified`.
- Company or publisher name.
- Source title when available.
- Source URL.
- Date checked.
- Notes when the value is approximate, differs by source, or is listed as balance/min/max only.

## Recommended UX Direction

Use the comparison-table-centered design selected as option B.

The desktop homepage is the main search and comparison screen:

- Top search bar for alloy names and aliases.
- Left or upper filter area for element filters.
- Main comparison table for composition values.
- Source confidence indicators in the table.
- Row click opens alloy detail.

The smartphone layout changes the comparison results into cards:

- A filter button opens the element filters.
- Each result card shows alloy name, family, key elements, source confidence, and a details action.
- Full composition and all sources are shown in the detail view.

## Element Range Search

Element search must support draggable range controls.

For each element filter, users can specify a minimum and maximum composition value in wt%:

- Desktop: dual-handle range slider operated by mouse drag.
- Smartphone: touch-friendly dual-handle range slider.
- Numeric min/max inputs next to the slider for precise values.
- Filters can be added for multiple elements, for example `Ni 40-70%` and `Cr 10-25%`.

The matching rule is range overlap. An alloy matches an element filter when the alloy's composition range overlaps the requested range. If a source lists `balance`, the app should treat it as searchable but display the value as `Bal.` instead of forcing a calculated numeric value.

## Screens

### Search And Compare

Primary screen for searching:

- Alloy name search.
- Element range filters.
- Source type filter.
- Alloy family filter.
- Desktop comparison table.
- Mobile result cards.

### Alloy Detail

Shows one alloy in detail:

- Alloy name and aliases.
- Alloy family.
- Full element composition.
- Source list.
- Manufacturer or publisher references.
- Notes about source differences.
- Similar alloys when available.

### Sources

Shows source metadata:

- Official and reference source grouping.
- URL.
- Date checked.
- Notes and warnings.

## Data Model

Use static JSON for the first version. This keeps the first implementation simple and allows deployment without a backend. The structure can later be generated from CSV or managed through an admin tool.

Schema sample:

```json
{
  "id": "inconel-718",
  "name": "Inconel 718",
  "aliases": ["Alloy 718", "UNS N07718"],
  "family": "Ni-base superalloy",
  "elements": {
    "Ni": { "min": 50.0, "max": 55.0, "unit": "wt%", "display": "50-55" },
    "Cr": { "min": 17.0, "max": 21.0, "unit": "wt%", "display": "17-21" },
    "Nb": { "min": 4.75, "max": 5.5, "unit": "wt%", "display": "4.75-5.5" }
  },
  "sources": [
    {
      "type": "official",
      "company": "Special Metals",
      "title": "INCONEL alloy 718 technical bulletin",
      "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-718.pdf",
      "checkedAt": "2026-06-13",
      "notes": "Composition values copied from official data sheet."
    }
  ]
}
```

The data model must support:

- Composition ranges.
- Minimum-only values.
- Maximum-only values.
- Balance values.
- Trace or nominal values.
- Multiple sources for the same alloy.

## Components

Core frontend components:

- `SearchBar`: searches alloy names and aliases.
- `ElementRangeFilter`: dual-handle range slider plus numeric min/max fields.
- `FilterPanel`: groups element, family, and source filters.
- `ComparisonTable`: desktop table view.
- `AlloyResultCard`: mobile card view.
- `AlloyDetail`: detailed alloy view.
- `SourceBadge`: official/reference/unverified indicator.
- `SourceList`: detailed source display.

## Error Handling And Data Quality

The site should never hide source uncertainty.

Rules:

- If an alloy has no official source, show a reference-source badge.
- If sources disagree, show the preferred display value and list source differences in detail.
- If an element value is unknown, display `-`.
- If a value is `balance`, display `Bal.` and explain it in the detail screen.
- If a URL is missing or unavailable, keep the source note but mark it as incomplete.

## Testing

Verify:

- Alloy name and alias search.
- Element range overlap filtering.
- Multiple element filters together.
- Official/reference/unverified source filters.
- Desktop table readability.
- Smartphone card readability.
- Range slider keyboard, mouse, and touch usability where supported.
- Data rendering for range, min-only, max-only, balance, trace, and missing values.

## Initial Implementation Scope

The first implementation should include:

- A responsive static web app.
- JSON seed data for a focused set of famous superalloys.
- Search by alloy name and alias.
- Search by element composition ranges.
- Desktop comparison table.
- Mobile result cards.
- Alloy detail view.
- Source badges and source details.

Out of scope for the first implementation:

- User login.
- Backend database.
- Automated web scraping scheduler.
- Admin editing interface.
- Export to Excel or CSV.
