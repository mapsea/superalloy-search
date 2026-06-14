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

## 2026-06-14 300-Record Steel Grade Batch

This batch expands the database from 62 to 300 total records. The added rows focus on steel grades: carbon steels, low-alloy machinery steels, stainless steels, tool steels, high-speed steels, bearing steels, spring steels, wear-resistant steels, heat-resistant steels, weathering steels, and electrical steels.

Most new rows use `standard` or `reference` source confidence. Balance Fe values are displayed as `約xx.x` and marked as reference calculations when calculated from listed major elements.

| Group | Added records | Primary source type | Source examples |
| --- | ---: | --- | --- |
| Carbon and plain steels | 40 | standard | SAE/JIS-derived carbon steel grade tables |
| Low-alloy and machinery steels | 53 | standard | SAE alloy steel and JIS machinery steel grade references |
| Stainless steels | 45 | standard | SAE/UNS stainless designation tables |
| Tool and high-speed steels | 45 | reference | Public tool steel and high-speed steel composition references |
| Bearing, spring, and wear-resistant steels | 30 | reference | Public bearing, spring, and wear-resistant steel references |
| Heat-resistant, weathering, and electrical steels | 25 | reference | Public Cr-Mo, weathering steel, and electrical steel references |

## 2026-06-14 Quality-First 350-Record Batch

This batch expands the database from 300 to 350 total records. The user requested an attempt toward 1000 records but accepted stopping short if source-backed collection became impractical, so this batch adds a conservative 50 records rather than filling with weak placeholders.

Rows are generated from `scripts/add-quality-expansion.py` into `data/imports/quality-expansion-2026-06-14.csv` and merged into `data/alloys.csv`. Balance values are still shown as `約xx.x` and marked as reference calculations.

| Group | Added records | Primary source type | Source examples |
| --- | ---: | --- | --- |
| Carbon, manganese, and free-machining steels | 15 | standard | SAE steel grade composition tables |
| Nickel, chromium, molybdenum, bearing, and carburizing steels | 13 | standard | SAE steel grade composition tables |
| Gray, ductile, and white cast irons | 10 | reference | Public cast iron and ductile iron composition references |
| Maraging steels | 4 | reference | Public maraging steel composition references |
| Superalloys and corrosion-resistant nickel/cobalt alloys | 8 | reference | Public superalloy, Haynes, Hastelloy, and nickel alloy references |

## 2026-06-14 IGT Superalloy 500-Record Batch

This batch expands the database from 350 to 500 total records. The added rows focus on industrial gas turbine and aircraft-engine high-temperature alloys, especially Co-base superalloys, Rene/René alloys, MAR-M, CMSX, PWA, TMS, GTD, Udimet, Nimonic, and related powder-metallurgy nickel-base alloys.

The schema now includes `Re` because rhenium is a key search element for second-generation and later single-crystal superalloys. Existing rows leave `Re` blank unless the source-backed reference range includes it.

Rows are generated from `scripts/add-igt-expansion.py` into `data/imports/igt-superalloy-expansion-2026-06-14.csv` and merged into `data/alloys.csv`. These records are search aids. Source notes explicitly require checking producer datasheets or alloy literature before engineering, procurement, or life assessment decisions.

| Group | Added records | Primary source type | Source examples |
| --- | ---: | --- | --- |
| Rene/René cast and single-crystal alloys | 28 | reference | Public superalloy and IGT alloy literature references |
| MAR-M, IN, GTD, CM, and related cast IGT alloys | 30 | reference | Public cast superalloy composition references |
| CMSX, PWA, TMS, AM, MC, SRR, DD, and other single-crystal alloys | 32 | reference | Public single-crystal superalloy composition references |
| Co-base superalloys and high-temperature cobalt alloys | 35 | reference | Public cobalt-base superalloy and wear alloy references |
| Nimonic, Udimet, RR, ME3, LSHR, and PM disk alloys | 25 | reference | Public wrought and powder-metallurgy superalloy references |

## 2026-06-14 Mainstream Titanium Alloy Expansion

This batch expands the database from 500 to 521 total records. The added rows improve titanium alloy coverage across commercially pure titanium, alpha and near-alpha alloys, alpha-beta alloys, and beta or near-beta titanium alloys.

Rows are generated by `scripts/add-mainstream-titanium-expansion.py` and appended to `data/alloys.csv`. Titanium balance values are calculated as reference estimates from listed elements. These records are search aids; procurement and engineering work should confirm chemistry against current ASTM, AMS, ISO, JIS, producer datasheets, or mill certificates.

| Group | Added records | Primary source type | Source examples |
| --- | ---: | --- | --- |
| Commercially pure and corrosion-resistant titanium grades | 3 | reference | Public ASTM titanium grade composition references |
| Alpha and near-alpha titanium alloys | 7 | reference | Ti-5Al-2.5Sn, Ti-6242, Ti-6246, Ti-1100, IMI 834 composition references |
| Alpha-beta titanium alloys | 2 | reference | Ti-6Al-6V-2Sn and Ti-6Al-7Nb composition references |
| Beta and near-beta titanium alloys | 9 | reference | Ti-10-2-3, Ti-15-3, Beta C, Ti-5553, Ti-15Mo, TMZF composition references |

## Data Quality Notes

- The app is a search and comparison aid, not a substitute for purchase specifications, AMS/ASTM standards, or mill certificates.
- Official Inconel data is the strongest part of this first expansion batch.
- Records marked `reference` or `unverified` are deliberately visible in the UI so users can filter by source confidence.
- Future collection work should prioritize Carpenter Technology, ATI, Daido Steel, Nippon Steel, Kobe Steel, Mitsubishi Heavy Industries, Haynes International, and Special Metals documents where they publish alloy chemistry.
