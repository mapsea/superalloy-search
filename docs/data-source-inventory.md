# Superalloy Data Source Inventory

Checked at: 2026-06-14

## Source of Truth

The human-editable source of truth is `data/alloys.csv`.

Run `python3 scripts/build-data.py` after editing the CSV. The script validates the rows and regenerates `src/data/generated/alloys.js`, which is committed for GitHub Pages.

This file tracks the static database sources. Source confidence is intentionally explicit:

- `official`: manufacturer or producer technical bulletin confirmed.
- `standard`: standards-derived public composition table or standards summary.
- `reference`: secondary public reference used as a temporary source.
- `unverified`: placeholder data that must be replaced before relying on the record for engineering decisions.

## First 20 Records

| Alloy | Source type | Source | Notes |
| --- | --- | --- | --- |
| Inconel 600 | official | Special Metals INCONEL alloy 600 technical bulletin | Limiting chemical composition table. |
| Inconel 601 | official | Special Metals INCONEL alloy 601 technical bulletin | Limiting chemical composition table. |
| Inconel 617 | official | Special Metals INCONEL alloy 617 technical bulletin | Limiting chemical composition table. |
| Inconel 625 | official | Special Metals INCONEL alloy 625 technical bulletin | Limiting chemical composition table. |
| Inconel 690 | official | Special Metals INCONEL alloy 690 technical bulletin | Limiting chemical composition table. |
| Inconel 718 | official | Special Metals INCONEL alloy 718 technical bulletin | Existing record refreshed to the current checked date. |
| Inconel X-750 | official | Special Metals INCONEL alloy X-750 technical bulletin | Existing record promoted from reference to official after PDF confirmation. |
| Hastelloy B-2 | reference | Public Hastelloy composition reference | Replace with Haynes/producer technical bulletin when confirmed. |
| Hastelloy C-22 | reference | Public Hastelloy composition reference | Replace with Haynes/producer technical bulletin when confirmed. |
| Hastelloy C-276 | reference | Public Hastelloy composition reference | Replace with Haynes/producer technical bulletin when confirmed. |
| Haynes 188 | reference | Public Haynes alloy reference | Replace with Haynes International datasheet when confirmed. |
| Haynes 230 | reference | Public Alloy 230 composition reference | Replace with Haynes International datasheet when confirmed. |
| Haynes 282 | reference | Technical literature reference | Replace with Haynes International datasheet when confirmed. |
| Waspaloy | reference | Public Waspaloy chemistry table | Existing record checked date refreshed. |
| Nimonic 75 | reference | Public Nimonic composition table | Replace with Special Metals/producer datasheet when confirmed. |
| Nimonic 80A | reference | Public Nimonic composition table | Replace with Special Metals/producer datasheet when confirmed. |
| Nimonic 90 | reference | Public Nimonic composition description | Replace with Special Metals/producer datasheet when confirmed. |
| Udimet 500 | reference | Typical nickel-base superalloy composition table | Replace with producer or standards source when confirmed. |
| Udimet 520 | unverified | Placeholder range from common secondary references | High priority for replacement before production-grade use. |
| Rene 41 | reference | Public Rene 41 chemistry table | Replace with producer or standards source when confirmed. |

## 2026-06-14 Special Metals Batch

This batch expands the database from 20 to 62 records and broadens coverage beyond superalloys.

| Group | Source type | Source examples | Notes |
| --- | --- | --- | --- |
| Titanium alloys | reference | Public titanium alloy and Ti-6Al-4V composition references | Titanium balance values are shown as reference midpoint estimates where the source lists Ti as balance. |
| Stainless steels | standard/reference | SAE stainless composition pages, duplex stainless EN table references | Iron balance values are shown as reference midpoint estimates when the public table lists Fe as balance. |
| Tool and high-speed steels | reference | Public tool steel, H13, D2, and high-speed steel composition references | Iron balance values are reference midpoint estimates. |
| Nickel/copper corrosion-resistant alloys | reference | Public Monel, Alloy 20, Incoloy, and Hastelloy composition references | Balance values are estimated only when major listed elements make the estimate defensible. |
| Refractory metals and alloys | reference | Public refractory metals, molybdenum, and zirconium alloy references | Purity rows use `min` values; TZM and zirconium alloy balance values are marked as reference estimates. |
| Copper alloys | reference | Public beryllium copper and cupronickel references | Copper balance values are marked as reference estimates where applicable. |

Balance estimates use the method documented in `docs/superpowers/specs/2026-06-14-special-metals-data-expansion-batch-design.md`: midpoint of listed ranges, half of `max` values, and no use of unbounded `min` values unless a practical bound is available. These values are display aids, not official chemistry limits.

## Data Quality Notes

- The app is a search and comparison aid, not a substitute for purchase specifications, AMS/ASTM standards, or mill certificates.
- Official Inconel data is the strongest part of this first expansion batch.
- Records marked `reference` or `unverified` are deliberately visible in the UI so users can filter by source confidence.
- Future collection work should prioritize Carpenter Technology, ATI, Daido Steel, Nippon Steel, Kobe Steel, Mitsubishi Heavy Industries, Haynes International, and Special Metals documents where they publish alloy chemistry.
