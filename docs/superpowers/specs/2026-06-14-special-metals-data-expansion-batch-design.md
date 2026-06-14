# Special Metals Data Expansion Batch Design

Date: 2026-06-14

## Goal

Add the next data batch to the special-metals database while improving `Bal.` handling. The immediate target is roughly 50 additional records, not an arbitrary total count. Data quality, source clarity, and maintainability are more important than raw volume.

## Scope

Included:

- Add an initial expansion batch of about 50 records to `data/alloys.csv`.
- Cover special metals beyond the current superalloy-heavy dataset.
- Research and replace `Bal.` values where a direct source gives a numeric composition range.
- When only `Bal.` is available, add a clearly marked reference estimate instead of pretending it is official.
- Preserve source confidence using `official`, `standard`, `reference`, and `unverified`.
- Update generation and validation only as needed to support estimated balance values safely.
- Regenerate `src/data/generated/alloys.js` and verify the site.

Not included:

- Fully reaching 1000 records in this batch.
- Scraping manufacturer websites automatically.
- Treating estimated balance values as official chemistry limits.
- Adding a server-side database or admin UI.

## Material Coverage

The batch should broaden the database across special metals. Candidate groups:

- Titanium alloys: Ti-6Al-4V, Ti-6Al-2Sn-4Zr-2Mo, Ti-3Al-2.5V, Ti-5Al-2.5Sn, beta titanium alloys.
- Stainless and heat-resistant steels: 304, 316, 310S, 321, 347, 17-4PH, 15-5PH, 253MA, 800H/HT-class heat-resistant alloys where source data is reliable.
- Tool steels and high-speed steels: D2, H13, M2, SKD11, SKH51, and related grades.
- Corrosion-resistant alloys: Monel, Alloy 20, additional Hastelloy/Incoloy grades.
- Refractory and high-melting metals: tungsten, molybdenum, tantalum, niobium, and common alloys where composition data is useful.
- Copper and high-performance nonferrous alloys: beryllium copper, Cu-Ni, Cu-Cr-Zr if sources are available.

The final list can be adjusted based on source availability. Do not add weak records merely to hit a number.

## Source Priority

Use this order:

1. Manufacturer or producer datasheets: `official`.
2. Recognized standards or standards-derived public pages: `standard`.
3. Reputable public secondary references: `reference`.
4. Temporary records needing replacement: `unverified`.

For each row, keep source metadata specific enough that a future maintainer can re-check it.

## Balance Value Policy

`Bal.` means the source expresses an element as the balance after listed elements. The site should not silently convert that to a precise official value.

Use three cases:

1. **Direct numeric source exists**  
   Replace `Bal.` with the numeric range from that source and mark the row according to that source type.

2. **Only balance source exists but enough major elements are listed**  
   Keep a reference estimate as a calculated display value. The estimate is calculated from the main listed element ranges:
   - For each listed major element, use the midpoint of a range.
   - For `max` values, use half of the max as a conservative midpoint estimate.
   - For `min` values without max, do not use the value for balance estimation unless a practical upper bound is available from the source.
   - Estimated balance = `100 - sum(midpoints of listed elements)`.
   - Display as `約xx.x` rather than an official range.

3. **Balance estimate would be misleading**  
   Keep `Bal.` and add a source note explaining why it remains balance-only.

## Data Model Changes

Current element entries support:

- `min`
- `max`
- `unit`
- `display`
- `kind`
- `includes`

To support balance estimates clearly, add optional fields:

- `estimated`: boolean
- `estimateMethod`: short text such as `balance midpoint estimate`

Generated data example:

```js
Ni: {
  estimated: true,
  unit: "wt%",
  display: "約56.2",
  estimateMethod: "balance midpoint estimate"
}
```

The generator may support this through CSV helper columns or a simple cell syntax. The preferred CSV-compatible approach is to add optional columns:

- `<Element>_estimated`
- `<Element>_estimate_method`

The generator should emit `estimated: true` only when `<Element>_estimated` is truthy.

## UI Behavior

The table and cards can continue showing the `display` string.

The detail view should make estimated values visible. When an element has `estimated: true`, append `（参考計算）` next to the composition value.

Source notes should still carry the longer explanation.

## Validation

Validation should check:

- Estimated element entries still have `display` and `unit`.
- `estimated` is boolean when present.
- `estimateMethod` is present when `estimated` is true.
- The CSV generator rejects estimate metadata for an empty element cell.
- The generated record count equals the CSV row count.
- Existing data/search browser tests still pass.

## Batch Workflow

1. Choose candidate records from high-confidence sources.
2. Add records to `data/alloys.csv`.
3. Replace direct `Bal.` values with sourced numeric ranges when available.
4. Add estimated balance values only when the method is defensible and clearly marked.
5. Run `python3 scripts/build-data.py`.
6. Run browser data and search tests.
7. Verify the public-facing app shows the larger count and no console errors.

## Success Criteria

- The database gains an initial broad special-metals batch of about 50 records.
- Existing 20 records remain searchable.
- `Bal.` values are reduced where reliable numeric or reference-estimated values are available.
- Estimated balance values are visibly marked and not confused with official limits.
- CSV generation and browser tests pass.
- GitHub Pages publishes the updated site successfully.
