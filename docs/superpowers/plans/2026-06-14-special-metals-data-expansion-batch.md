# Special Metals Data Expansion Batch Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the next source-backed special-metals data batch and make calculated balance values visibly distinct from official composition limits.

**Architecture:** Keep `data/alloys.csv` as the source of truth. Extend the CSV generator to support estimated element metadata, then render that metadata in the existing detail view while keeping table and card summaries compact.

**Tech Stack:** Static HTML/CSS/JavaScript, Python CSV-to-JS generator, browser-based HTML tests, GitHub Pages.

---

## File Structure

- Modify `scripts/build-data.py`: add estimate metadata column discovery, validation, and generated object fields.
- Modify `data/alloys.csv`: add estimate metadata columns and source-backed alloy rows.
- Modify `src/render.js`: mark estimated composition values in the detail dialog.
- Modify `tests/data-tests.html`: test estimate metadata and avoid fixed 20-record expectations.
- Modify `tests/search-tests.html`: test range matching against estimated numeric entries.
- Regenerate `src/data/generated/alloys.js`: generated output from the CSV.
- Optionally modify `src/data/alloys.js`, `src/app.js`, and `src/render.js` cache query strings if browser cache needs a version bump.

## Task 1: Data Tests For Expansion And Estimate Metadata

**Files:**
- Modify: `tests/data-tests.html`

- [ ] **Step 1: Replace fixed-count data test with flexible baseline**

Change the current fixed ID test so it checks that the original 20 IDs are still present and that the dataset has grown.

```js
test("keeps original 20 target alloy ids and allows expansion", () => {
  const ids = alloys.map((alloy) => alloy.id);
  TARGET_IDS.forEach((id) => assert(ids.includes(id), `${id} missing`));
  assert(alloys.length > TARGET_IDS.length, `expected more than ${TARGET_IDS.length} records, got ${alloys.length}`);
});
```

- [ ] **Step 2: Add estimated element metadata test**

Add this test after the element-entry shape test:

```js
test("estimated element entries are marked and documented", () => {
  const estimatedEntries = alloys.flatMap((alloy) =>
    Object.entries(alloy.elements)
      .filter(([, value]) => value.estimated)
      .map(([symbol, value]) => ({ alloy, symbol, value }))
  );

  assert(estimatedEntries.length > 0, "at least one estimated balance value should exist");
  estimatedEntries.forEach(({ alloy, symbol, value }) => {
    assert(value.unit === "wt%", `${alloy.id}.${symbol} estimated value must use wt%`);
    assert(typeof value.display === "string" && value.display.startsWith("約"), `${alloy.id}.${symbol} estimated display must start with 約`);
    assert(typeof value.estimateMethod === "string" && value.estimateMethod.length > 0, `${alloy.id}.${symbol} estimate method missing`);
    assert(value.kind !== "balance", `${alloy.id}.${symbol} estimated value must not remain balance kind`);
  });
});
```

- [ ] **Step 3: Run test and verify red**

Run: open `http://localhost:<port>/tests/data-tests.html` after starting the local server.

Expected before implementation: FAIL for expanded-count expectation and estimated metadata expectation.

## Task 2: Generator Support For Estimated Element Metadata

**Files:**
- Modify: `scripts/build-data.py`
- Modify: `data/alloys.csv`

- [ ] **Step 1: Add estimate metadata constants**

Add constants beside `INCLUDES_COLUMN_SUFFIX`:

```python
ESTIMATED_COLUMN_SUFFIX = "_estimated"
ESTIMATE_METHOD_COLUMN_SUFFIX = "_estimate_method"
TRUTHY_VALUES = {"1", "true", "yes", "y"}
FALSY_VALUES = {"", "0", "false", "no", "n"}
```

- [ ] **Step 2: Add estimate column discovery**

Add a function that maps estimate metadata columns to element symbols and rejects unsupported base symbols.

```python
def discover_estimate_columns(fieldnames):
    estimate_columns = {}
    for column in fieldnames:
        suffix = None
        if column.endswith(ESTIMATED_COLUMN_SUFFIX):
            suffix = ESTIMATED_COLUMN_SUFFIX
        elif column.endswith(ESTIMATE_METHOD_COLUMN_SUFFIX):
            suffix = ESTIMATE_METHOD_COLUMN_SUFFIX
        if suffix is None:
            continue

        symbol = column[: -len(suffix)]
        if symbol not in ELEMENT_COLUMNS:
            fail(f"{column}: estimate metadata base element is not supported")
        estimate_columns.setdefault(symbol, {})[suffix] = column
    return estimate_columns
```

- [ ] **Step 3: Parse truthy estimate values**

Add a helper:

```python
def parse_bool_metadata(value, alloy_id, column):
    normalized = (value or "").strip().lower()
    if normalized in TRUTHY_VALUES:
        return True
    if normalized in FALSY_VALUES:
        return False
    fail(f"{alloy_id}.{column}: expected boolean metadata value")
```

- [ ] **Step 4: Apply estimate metadata during row parsing**

Update `parse_row` to accept `estimate_columns`, then after include metadata:

```python
for symbol, columns in estimate_columns.items():
    estimated_column = columns.get(ESTIMATED_COLUMN_SUFFIX)
    method_column = columns.get(ESTIMATE_METHOD_COLUMN_SUFFIX)
    is_estimated = parse_bool_metadata(row.get(estimated_column), alloy_id, estimated_column) if estimated_column else False
    method = (row.get(method_column) or "").strip() if method_column else ""

    if not is_estimated and method:
        fail(f"{alloy_id}.{method_column}: estimate method requires {symbol} estimated flag")
    if not is_estimated:
        continue
    if symbol not in elements:
        fail(f"{alloy_id}.{estimated_column}: estimate metadata requires {symbol} value")
    if not method:
        fail(f"{alloy_id}.{method_column}: estimate method is required when {symbol} is estimated")
    if elements[symbol].get("kind") == "balance":
        fail(f"{alloy_id}.{symbol}: estimated value must be numeric display, not Bal.")

    elements[symbol]["estimated"] = True
    elements[symbol]["estimateMethod"] = method
```

- [ ] **Step 5: Wire discovery through loader**

In `load_alloys`, call `discover_estimate_columns(fieldnames)` and pass the result to `parse_row`.

- [ ] **Step 6: Add CSV columns**

Append these columns to the CSV header:

```csv
Fe_estimated,Fe_estimate_method,Ni_estimated,Ni_estimate_method,Co_estimated,Co_estimate_method,Ti_estimated,Ti_estimate_method
```

Existing rows get empty cells for these new columns unless a balance value is converted to a calculated reference estimate.

- [ ] **Step 7: Run test and verify green after implementation**

Run:

```bash
python3 scripts/build-data.py
```

Expected: generator succeeds and reports the new record count.

Then open `tests/data-tests.html`.

Expected: all data tests pass after data rows and estimate metadata are added.

## Task 3: Detail View Marker For Estimated Values

**Files:**
- Modify: `src/render.js`
- Modify: `tests/data-tests.html`

- [ ] **Step 1: Add estimated marker in detail rows**

Change the detail element row construction to include a marker:

```js
const note = value.includes ? ` (${escapeHtml(value.includes)}含む)` : "";
const estimateNote = value.estimated ? "（参考計算）" : "";
return `<tr><th scope="row">${escapeHtml(symbol)}</th><td>${escapeHtml(value.display)}${estimateNote}${note}</td></tr>`;
```

- [ ] **Step 2: Add a data assertion for display-ready estimated entries**

Add this assertion to `tests/data-tests.html`:

```js
test("generated data includes display-ready estimated balance markers", () => {
  const alloy = alloys.find((item) =>
    Object.values(item.elements).some((value) => value.estimated)
  );
  assert(Boolean(alloy), "estimated alloy missing");
});
```

- [ ] **Step 3: Verify with browser**

Open the app, select a row with an estimated element, and confirm the detail dialog shows `（参考計算）`.

## Task 4: Source-Backed Data Batch

**Files:**
- Modify: `data/alloys.csv`
- Modify: `docs/data-source-inventory.md`

- [ ] **Step 1: Research candidate source pages**

Use current web sources and record each source URL in `source_url`. Prioritize manufacturer and standards-derived pages. Accept secondary public references only when official pages are not available in the first batch.

- [ ] **Step 2: Add special-metals rows**

Add rows across these groups:

- Titanium alloys: Ti Grade 1, Ti Grade 2, Ti Grade 5 / Ti-6Al-4V, Ti Grade 7, Ti Grade 9, Ti Grade 12, Ti Grade 23 / Ti-6Al-4V ELI, ATI 425.
- Stainless and heat-resistant steels: 304, 304L, 316, 316L, 310S, 321, 347, 17-4PH, 15-5PH, 253MA, 904L, 2205, 2507.
- Tool and high-speed steels: D2 / SKD11, H13 / SKD61, M2 / SKH51, M42, A2, O1, S7.
- Corrosion-resistant and nickel/copper alloys: Monel 400, Monel K-500, Alloy 20, Incoloy 800, Incoloy 825, Hastelloy X, Hastelloy G-30.
- Refractory and high-melting materials: pure W, W-Ni-Fe heavy alloy, molybdenum TZM, pure Ta, pure Nb, C-103.
- High-performance copper alloys: C17200 beryllium copper, C17510, C18150 Cu-Cr-Zr, C71500 Cu-Ni 70/30.

- [ ] **Step 3: Estimate balance values only when defensible**

For balance rows, calculate the display value from listed major elements and use:

```csv
約<value>,1,balance midpoint estimate from listed major elements
```

Only apply this to balance elements with a credible estimate. Keep `Bal.` when the estimate would be misleading.

- [ ] **Step 4: Update source inventory**

Add a short dated section to `docs/data-source-inventory.md` listing source groups and whether they were used as `official`, `standard`, or `reference`.

## Task 5: Regenerate, Verify, Commit, Push

**Files:**
- Generated: `src/data/generated/alloys.js`
- Modify if needed: `src/data/alloys.js`, `src/app.js`, `src/render.js`

- [ ] **Step 1: Regenerate data**

Run:

```bash
python3 scripts/build-data.py
```

Expected: exit code 0 and a message like `Generated src/data/generated/alloys.js from 50 records.` or a larger record count.

- [ ] **Step 2: Start local static server**

Run:

```bash
python3 -m http.server 8002
```

Expected: server starts on port 8002. If occupied, use the next free port.

- [ ] **Step 3: Run browser tests**

Open:

- `http://localhost:8002/tests/data-tests.html`
- `http://localhost:8002/tests/search-tests.html`

Expected: every line starts with `PASS`.

- [ ] **Step 4: Verify app manually**

Open `http://localhost:8002/` and check:

- result count is greater than 20,
- source filters still work,
- element range sliders still filter results,
- a detail dialog shows `（参考計算）` for at least one estimated value,
- mobile-width layout has no horizontal overflow.

- [ ] **Step 5: Commit and push**

Run:

```bash
git add data/alloys.csv docs/data-source-inventory.md scripts/build-data.py src/data/generated/alloys.js src/render.js tests/data-tests.html tests/search-tests.html
git commit -m "Expand special metals database batch"
git push
```

Expected: commit and push succeed, then GitHub Pages publishes the updated site.
