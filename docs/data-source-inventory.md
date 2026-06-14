# Superalloy Data Source Inventory

Checked at: 2026-06-14

## Source of Truth

The human-editable source of truth is `data/alloys.csv`.

Run `python3 scripts/build-data.py` after editing the CSV. The script validates the rows and regenerates `src/data/generated/alloys.js`, which is committed for GitHub Pages.

This file tracks the first 20 alloys in the static database. Source confidence is intentionally explicit:

- `official`: manufacturer or producer technical bulletin confirmed.
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

## Data Quality Notes

- The app is a search and comparison aid, not a substitute for purchase specifications, AMS/ASTM standards, or mill certificates.
- Official Inconel data is the strongest part of this first expansion batch.
- Records marked `reference` or `unverified` are deliberately visible in the UI so users can filter by source confidence.
- Future collection work should prioritize Carpenter Technology, ATI, Daido Steel, Nippon Steel, Kobe Steel, Mitsubishi Heavy Industries, Haynes International, and Special Metals documents where they publish alloy chemistry.
