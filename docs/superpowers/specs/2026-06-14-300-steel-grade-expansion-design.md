# 300 Steel Grade Expansion Design

Date: 2026-06-14

## Goal

Expand the public alloy database to 300 total records, centered on steel grades while preserving the existing special-metals and superalloy records.

The current database has 62 records, so this batch adds 238 records. The target is total count, not 300 additional rows.

## Recommended Approach

Use a hybrid source strategy:

- Prefer `official` manufacturer or producer datasheets when they are easy to verify.
- Use `standard` for standards-derived public composition tables such as JIS, SAE/AISI, ASTM/UNS, EN, DIN, and equivalent grade summaries.
- Use `reference` for reputable public secondary sources when a standard or official source is not available during this batch.
- Avoid adding `unverified` records unless a useful grade is strategically important and clearly marked for replacement.

This approach gets the site to 300 records quickly while keeping data confidence visible and maintainable.

## Scope

Included:

- Add 238 records to `data/alloys.csv`.
- Keep the existing 62 records.
- Focus on steel grades, with some related special alloys only when they help search coverage.
- Preserve source metadata for every row.
- Keep calculated balance values visibly marked as reference calculations.
- Regenerate `src/data/generated/alloys.js`.
- Update tests when record-count or element-list expectations change.
- Update the source inventory with the source groups used in this batch.
- Verify public GitHub Pages after push.

Not included:

- A server-side database.
- A full admin UI.
- Automatic scraping.
- Guaranteeing procurement-grade chemistry.
- Replacing every reference source with official manufacturer PDFs in this batch.

## Target Category Mix

The final 300-record database should use this priority distribution. The hard target is 300 total records; the minimums below prevent the batch from becoming too narrow.

| Category | Minimum contribution |
| --- | ---: |
| Existing superalloys and special metals | 62 existing records |
| Carbon and plain steels | 35 records |
| Low-alloy and machinery steels | 45 records |
| Stainless steels | 55 records |
| Tool steels and high-speed steels | 40 records |
| Bearing, spring, and wear-resistant steels | 25 records |
| Heat-resistant, weathering, and electrical steels | 25 records |
| Remaining records | Fill to exactly 300 using source-backed steel grades first, then related special metals only if they improve search coverage |

The exact mix can change during collection if source availability is uneven. The hard requirement is 300 total records and broad steel-grade coverage.

## Candidate Families

### Carbon And Plain Steels

Examples:

- JIS S10C, S15C, S20C, S25C, S30C, S35C, S40C, S45C, S50C, S55C.
- SAE/AISI 1006, 1008, 1010, 1015, 1018, 1020, 1022, 1030, 1035, 1040, 1045, 1050, 1060, 1070, 1080, 1095.

### Low-Alloy And Machinery Steels

Examples:

- JIS SCM415, SCM420, SCM435, SCM440, SCM445, SNCM220, SNCM420, SNCM439, SCr420, SCr440.
- SAE/AISI 4130, 4140, 4142, 4150, 4320, 4330, 4340, 8620, 8630, 8640, 9310, 300M.

### Stainless Steels

Examples:

- Austenitic: 201, 202, 301, 302, 303, 304, 304L, 304N, 309S, 310S, 316, 316L, 316Ti, 317L, 321, 347.
- Ferritic: 405, 409, 430, 430F, 434, 436, 439, 441, 444.
- Martensitic: 410, 416, 420, 431, 440A, 440B, 440C.
- PH and duplex: 13-8Mo, 15-5PH, 17-4PH, 17-7PH, 2205, 2304, 2507, 904L.

### Tool And High-Speed Steels

Examples:

- JIS SKD11, SKD61, SKD62, SKH51, SKH55, SKH57, SKS3.
- AISI A2, A6, D2, D3, H10, H11, H13, M2, M4, M7, M35, M42, O1, O2, S1, S2, S7, T1, W1.

### Bearing, Spring, And Wear-Resistant Steels

Examples:

- JIS SUJ2, SUJ3, SUP3, SUP6, SUP7, SUP9, SUP10, SUP11A, SUP12, SUP13.
- SAE 5160, 52100, 6150, 9254.
- AR400, AR450, AR500, Hadfield manganese steel where composition data is clear.

### Heat-Resistant, Weathering, And Electrical Steels

Examples:

- Heat-resistant steels: 253MA, 309, 310, 800H/HT-class records already present where applicable.
- Weathering steels: COR-TEN A/B, ASTM A588, SPA-H.
- Electrical steels: non-oriented and grain-oriented grades when chemistry tables are available.

## Source Rules

Each row must include:

- `source_type`
- `source_company`
- `source_title`
- `source_url`
- `checked_at`
- `source_notes`

Preferred source order:

1. Producer/manufacturer datasheet: `official`.
2. Standards-derived public table or recognized grade database: `standard`.
3. Public secondary reference: `reference`.
4. Temporary row: `unverified`. Use this only when the grade is important for search coverage and the row notes state what source must replace it.

Rows should not copy a source title generically when a more specific title is available. If many rows come from the same standard-derived table, use a consistent title and make notes precise.

## Balance Value Policy

Continue the current balance policy:

1. If a source provides a numeric range, use that numeric value.
2. If the source gives a balance element and enough major elements are listed, calculate a reference midpoint estimate.
3. Display calculated balances as `約xx.x`.
4. Mark calculated values with `estimated: true` and `estimateMethod`.
5. The detail view must show `（参考計算）`.
6. If the calculation would be misleading, keep `Bal.` and explain it in `source_notes`.

For steel grades, Fe is usually the balance element. Fe estimates are useful for element-range searching, but they must not be presented as official limits.

## Data Model

Keep the existing CSV and generated-JS model:

- `data/alloys.csv` remains the editable source of truth.
- `scripts/build-data.py` validates and generates `src/data/generated/alloys.js`.
- Element columns remain the current expanded set unless collection reveals a necessary missing element.
- Estimate metadata continues using `<Element>_estimated` and `<Element>_estimate_method`.

If new elements are needed, add them deliberately to:

- `scripts/build-data.py`
- `src/data/constants.js`
- `data/alloys.csv`
- `tests/data-tests.html`

## UI Behavior

No major UI redesign is required for this batch.

Required behavior:

- The result count should show 300 records with all source filters enabled.
- Existing name, alias, usage, category, source, and element-range searches must continue working.
- Detail rows must visibly mark calculated balances with `（参考計算）`.
- The table can become wider if additional elements are required; keep horizontal scrolling intact.

Optional follow-up after 300 records:

- Add category filters.
- Add source confidence summary counts.
- Add pagination or virtualized rendering if 300 rows feels slow on mobile.

## Validation

Before publishing:

- Run `python3 scripts/build-data.py`.
- Confirm generated record count is exactly 300.
- Confirm original 62 records still exist.
- Confirm no duplicate IDs.
- Confirm every row has source metadata.
- Confirm estimated entries have display, unit, and estimate method.
- Confirm `git diff --check` passes.
- Verify public GitHub Pages returns the updated generated data.

If browser automation remains unavailable in this environment, use the existing module-level checks plus HTTP checks and document that limitation in the final report.

## Publishing

After verification:

1. Commit the data expansion.
2. Push to `main`.
3. Confirm GitHub Pages serves the updated HTML/JS.
4. Confirm public generated data contains 300 records.

## Risks And Mitigations

- **Risk: too many weak reference rows.**  
  Mitigation: use source confidence labels and prefer `standard` over generic references.

- **Risk: Fe balance values look official.**  
  Mitigation: keep `約xx.x` and `（参考計算）` visible.

- **Risk: CSV becomes difficult to maintain.**  
  Mitigation: keep generation validation strict. Do not add importer helpers in this batch unless CSV editing becomes a blocker.

- **Risk: 300 rows strain mobile rendering.**  
  Mitigation: verify mobile behavior after generation; add pagination only if measurable issues appear.

## Success Criteria

- Public database contains exactly 300 records.
- Existing 62 records remain searchable.
- Steel-grade coverage is broad enough to support practical searches across Japanese, US, and European grade names.
- Source confidence remains visible.
- Calculated balance values remain clearly marked.
- Generation, static checks, and public deployment verification pass.
