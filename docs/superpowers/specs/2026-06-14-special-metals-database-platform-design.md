# Special Metals Database Platform Design

Date: 2026-06-14

## Goal

Expand the current superalloy composition search site into a broader special-metals database that can grow toward 1000 records without turning data maintenance into hand-edited JavaScript.

The first implementation should prioritize the data platform, not raw record count. The site should continue to work on desktop and mobile, preserve composition range search, replace the visible `系統` column with `用途`, and make source confidence clear.

## Scope

Included:

- Replace the visible `系統` display with `用途`.
- Keep internal classification as structured data so alloys can still be organized by material group.
- Move toward a CSV-master data workflow.
- Add a generated site data file that the browser can load efficiently.
- Keep source confidence visible: `公式`, `規格`, `参考`, `未確認`.
- Add validation so large imports cannot silently break search or display.
- Support special metals beyond superalloys, including nickel alloys, cobalt alloys, titanium alloys, stainless steels, tool steels, heat-resistant steels, corrosion-resistant alloys, refractory metals, and high-performance copper alloys.

Not included in the first implementation:

- Fully verified 1000-record data entry.
- A server-side database or login/admin UI.
- Paid/API data acquisition.
- Automatic web scraping from manufacturers.

## Recommended Approach

Use a CSV master as the human-editable source of truth, then generate a browser-friendly JavaScript data module from it.

This gives three benefits:

- The user can edit data in Excel, Numbers, or Google Sheets.
- The website keeps fast static GitHub Pages hosting.
- Validation can catch missing fields, duplicate IDs, invalid element ranges, and weak source metadata before publishing.

## Data Model

Each alloy record should support these fields:

- `id`: Stable URL-safe identifier.
- `name`: Main alloy name.
- `aliases`: Searchable aliases such as UNS, JIS, ASTM, EN, trade names, and Japanese names.
- `category`: Broad material category such as `スーパーアロイ`, `チタン合金`, `ステンレス`, `工具鋼`, `耐熱鋼`, `耐食合金`, `高融点金属`.
- `usage`: Visible usage text shown where `系統` is currently displayed.
- `elements`: Composition map keyed by element symbol.
- `sources`: Source metadata list.

Composition entries should keep the existing shape:

- `min`: Minimum wt%.
- `max`: Maximum wt%.
- `unit`: Usually `wt%`.
- `display`: Human-readable display value.
- `kind`: Optional, such as `balance`.
- `includes`: Optional note for combined values such as `Nb+Ta`.

Source entries should support:

- `type`: `official`, `standard`, `reference`, or `unverified`.
- `company`: Publisher or source owner.
- `title`: Document or page title.
- `url`: Source URL.
- `checkedAt`: Date when the source was checked.
- `notes`: Short explanation of source quality or table used.

## CSV Master Columns

The CSV master should use simple columns that are easy to edit in spreadsheet software:

- `id`
- `name`
- `aliases`
- `category`
- `usage`
- `source_type`
- `source_company`
- `source_title`
- `source_url`
- `checked_at`
- `source_notes`
- One column per tracked element, for example `Ni`, `Cr`, `Co`, `Fe`, `Mo`, `Nb`, `Ti`, `Al`, `W`, `Ta`, `C`.

Element cell formats should be intentionally simple:

- `50-55` for ranges.
- `58 min` for minimum-only values.
- `5 max` for maximum-only values.
- `Bal.` for balance.
- Empty cell for no listed value.

The importer should parse these into the existing structured element objects.

## UI Changes

The comparison table should change:

- Current: `合金`, `系統`, element columns, `出典`
- New: `合金`, `用途`, element columns, `出典`

Cards should show:

- Alloy name.
- Usage text.
- Source confidence badge.
- Key elements.

Details should show:

- Alloy name.
- Usage and category.
- Aliases.
- Composition table.
- Source list with confidence and checked date.

The existing source filter should be updated to include `規格`.

## Data Growth Strategy

The first implementation should preserve the current 20 records and migrate them into the new model with `usage` values.

After the platform is in place, data can be added in batches:

1. Official and standard-backed records from high-confidence sources.
2. Manufacturer references from companies such as Carpenter Technology, ATI, Daido Steel, Nippon Steel, Kobe Steel, Mitsubishi Heavy Industries, Haynes International, and Special Metals.
3. Lower-confidence reference records only when clearly marked.

The site should not hide weak data. It should expose confidence so users can filter out `参考` and `未確認`.

## Validation

Validation should run in a browser test page and, where possible, from a local script.

Validation should check:

- Required fields exist.
- IDs are unique.
- `usage` is present for every record.
- Source type is one of `official`, `standard`, `reference`, `unverified`.
- Source URL is valid.
- `checkedAt` is present.
- Element symbols are known.
- Element cell formats parse correctly.
- Parsed ranges have `min <= max`.
- The generated record count matches the CSV row count.

## Publishing

The site remains static and continues to publish through GitHub Pages from `main`.

To avoid stale GitHub Pages assets, version query strings should continue to be used on imported JavaScript and CSS files whenever the data format changes.

## Risks

- Official data collection for 1000 records is a long-running effort.
- Manufacturer pages can change or remove PDFs.
- Different standards may list slightly different ranges for the same alloy.
- CSV parsing must be strict enough to prevent silent data mistakes.

The design handles these risks by separating data confidence from display, keeping source metadata with each record, and validating imports before publishing.

## Success Criteria

- The visible `系統` field is replaced by `用途`.
- The app can load data generated from a CSV master.
- Current search by alloy name, alias, source type, element, and range still works.
- Current 20 records remain available after migration.
- Data validation catches malformed rows.
- The structure can scale toward 1000 records without editing large JavaScript object files by hand.
