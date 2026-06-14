# 300 Steel Grade Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the public alloy database from 62 to exactly 300 total records, centered on steel grades.

**Architecture:** Keep `data/alloys.csv` as the canonical source and generate `src/data/generated/alloys.js` from it. Build the new 238 rows in a temporary, reviewable import CSV, validate it, merge it into the main CSV, regenerate data, then publish.

**Tech Stack:** Static HTML/CSS/JavaScript, Python CSV generator, CSV source files, browser-oriented HTML tests, GitHub Pages.

---

## File Structure

- Create: `data/imports/steel-grade-expansion-2026-06-14.csv`  
  Holds the 238 new records before merge. Same schema as `data/alloys.csv`.
- Create: `scripts/merge-import-csv.py`  
  Merges the base CSV and import CSV into `data/alloys.csv`, rejects duplicate IDs, and verifies the final count.
- Modify: `data/alloys.csv`  
  Final 300-row source of truth after import merge.
- Modify: `scripts/build-data.py`  
  No change expected in this plan; keep the current element set.
- Modify: `src/data/constants.js`  
  No change expected in this plan; keep the current element set.
- Modify: `tests/data-tests.html`  
  Add exact 300-count assertion and category coverage checks.
- Modify: `docs/data-source-inventory.md`  
  Record the source groups used for the 300-record batch.
- Regenerate: `src/data/generated/alloys.js`  
  Generated output from the final 300-row CSV.
- Modify: `index.html`, `src/app.js`, `src/data/alloys.js`, `src/render.js`  
  Bump asset query strings from `v=20260614c` to `v=20260614d`.

## Task 1: Tests For 300-Record Target

**Files:**
- Modify: `tests/data-tests.html`

- [ ] **Step 1: Add exact 300-record assertion**

Add this test after the original-ID preservation test:

```js
test("contains exactly 300 alloy records", () => {
  assert(alloys.length === 300, `expected 300 records, got ${alloys.length}`);
});
```

- [ ] **Step 2: Add steel coverage assertion**

Add this test after the source-field test:

```js
test("contains broad steel-grade coverage", () => {
  const categoryCounts = alloys.reduce((counts, alloy) => {
    counts[alloy.category] = (counts[alloy.category] || 0) + 1;
    return counts;
  }, {});

  const totalFor = (patterns) => Object.entries(categoryCounts)
    .filter(([category]) => patterns.some((pattern) => category.includes(pattern)))
    .reduce((sum, [, count]) => sum + count, 0);

  assert(totalFor(["炭素鋼", "普通鋼"]) >= 35, "carbon/plain steel coverage too small");
  assert(totalFor(["合金鋼", "機械構造用鋼", "低合金鋼"]) >= 45, "low-alloy steel coverage too small");
  assert(totalFor(["ステンレス鋼", "二相ステンレス鋼", "析出硬化ステンレス鋼"]) >= 55, "stainless steel coverage too small");
  assert(totalFor(["工具鋼", "高速度工具鋼"]) >= 40, "tool steel coverage too small");
  assert(totalFor(["軸受鋼", "ばね鋼", "耐摩耗鋼"]) >= 25, "bearing/spring/wear steel coverage too small");
  assert(totalFor(["耐熱鋼", "耐候性鋼", "電磁鋼"]) >= 25, "heat/weathering/electrical steel coverage too small");
});
```

- [ ] **Step 3: Verify red**

Run this check in the Node REPL MCP:

```js
const { alloys } = await import(`file://${nodeRepl.cwd}/src/data/generated/alloys.js?red=${Date.now()}`);
if (alloys.length !== 300) throw new Error(`expected 300 records, got ${alloys.length}`);
```

Expected before data expansion: FAIL with `expected 300 records, got 62`.

## Task 2: Import Merge Helper

**Files:**
- Create: `scripts/merge-import-csv.py`
- Test through command execution.

- [ ] **Step 1: Create merge helper**

Create `scripts/merge-import-csv.py` with this complete content:

```python
#!/usr/bin/env python3
import csv
import sys
from pathlib import Path

EXPECTED_TOTAL = 300


def fail(message):
    print(f"ERROR: {message}", file=sys.stderr)
    sys.exit(1)


def read_csv(path):
    if not path.exists():
        fail(f"CSV not found: {path}")
    with path.open(newline="", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        fieldnames = reader.fieldnames or []
        rows = list(reader)
    if not fieldnames:
        fail(f"CSV has no header: {path}")
    return fieldnames, rows


def write_csv(path, fieldnames, rows):
    with path.open("w", newline="", encoding="utf-8") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def main():
    root = Path(__file__).resolve().parents[1]
    base_path = root / "data" / "alloys.csv"
    import_path = root / "data" / "imports" / "steel-grade-expansion-2026-06-14.csv"

    base_fields, base_rows = read_csv(base_path)
    import_fields, import_rows = read_csv(import_path)
    if base_fields != import_fields:
        fail("import CSV header must exactly match data/alloys.csv")

    seen_ids = set()
    merged_rows = []
    for row in [*base_rows, *import_rows]:
        alloy_id = (row.get("id") or "").strip()
        if not alloy_id:
            fail("row has empty id")
        if alloy_id in seen_ids:
            fail(f"duplicate id: {alloy_id}")
        seen_ids.add(alloy_id)
        merged_rows.append(row)

    if len(merged_rows) != EXPECTED_TOTAL:
        fail(f"expected {EXPECTED_TOTAL} records after merge, got {len(merged_rows)}")

    write_csv(base_path, base_fields, merged_rows)
    print(f"Merged {len(import_rows)} import rows into {base_path.relative_to(root)} for {len(merged_rows)} total records.")


if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Run helper without import file and verify failure**

Run:

```bash
python3 scripts/merge-import-csv.py
```

Expected: FAIL with `CSV not found: data/imports/steel-grade-expansion-2026-06-14.csv`.

- [ ] **Step 3: Commit helper after import batch passes**

Do not commit this helper alone. Commit it with the import CSV and final merged CSV after Task 5 passes.

## Task 3: Build 238-Row Import CSV

**Files:**
- Create: `data/imports/steel-grade-expansion-2026-06-14.csv`
- Read source pages from current web data.

- [ ] **Step 1: Create import CSV with matching header**

Copy the exact header line from `data/alloys.csv` into `data/imports/steel-grade-expansion-2026-06-14.csv`.

- [ ] **Step 2: Collect 40 carbon and plain steels**

Add exactly 40 rows with categories containing `炭素鋼` or `普通鋼`.

Required seed grades:

```text
S10C, S15C, S20C, S25C, S30C, S35C, S40C, S45C, S50C, S55C,
AISI 1006, 1008, 1010, 1015, 1018, 1020, 1022, 1030, 1035, 1040, 1045, 1050, 1060, 1070, 1080, 1095
```

Use `standard` when the row is based on standards-derived public composition tables. Use `Fe` as `約xx.x` with `Fe_estimated=1` and `Fe_estimate_method=balance midpoint estimate from listed major elements` when Fe is calculated.

- [ ] **Step 3: Collect 55 low-alloy and machinery steels**

Add exactly 55 rows with categories containing `合金鋼`, `機械構造用鋼`, or `低合金鋼`.

Required seed grades:

```text
SCM415, SCM420, SCM435, SCM440, SCM445, SNCM220, SNCM420, SNCM439, SCr420, SCr440,
4130, 4140, 4142, 4150, 4320, 4330, 4340, 8620, 8630, 8640, 9310, 300M
```

- [ ] **Step 4: Collect 45 stainless steels**

Add exactly 45 rows with categories containing `ステンレス鋼`, `二相ステンレス鋼`, or `析出硬化ステンレス鋼`.

Required seed grades:

```text
201, 202, 301, 302, 303, 304N, 309S, 316Ti, 317L,
405, 409, 410, 416, 420, 430, 430F, 431, 434, 436, 439, 440A, 440B, 440C, 441, 444,
13-8Mo, 17-7PH, 2304
```

Skip grades already present in `data/alloys.csv` unless the new row is a distinct standard variant with a distinct ID.

- [ ] **Step 5: Collect 45 tool and high-speed steels**

Add exactly 45 rows with categories containing `工具鋼` or `高速度工具鋼`.

Required seed grades:

```text
SKD11, SKD61, SKD62, SKH51, SKH55, SKH57, SKS3,
A2, A6, D3, H10, H11, M4, M7, O1, O2, S1, S2, S7, T1, W1
```

- [ ] **Step 6: Collect 53 bearing, spring, wear-resistant, heat-resistant, weathering, and electrical steels**

Add exactly 30 rows in categories containing `軸受鋼`, `ばね鋼`, or `耐摩耗鋼`.

Add exactly 23 rows in categories containing `耐熱鋼`, `耐候性鋼`, or `電磁鋼`.

Required seed grades:

```text
SUJ2, SUJ3, SUP3, SUP6, SUP7, SUP9, SUP10, SUP11A, SUP12, SUP13,
5160, 52100, 6150, 9254, AR400, AR450, AR500,
COR-TEN A, COR-TEN B, ASTM A588, SPA-H
```

- [ ] **Step 7: Verify exactly 238 import rows**

The import CSV must contain exactly 238 rows from Steps 2-6: 40 carbon/plain, 55 low-alloy/machinery, 45 stainless, 45 tool/high-speed, 30 bearing/spring/wear-resistant, and 23 heat-resistant/weathering/electrical rows.

Verify import row count:

```bash
python3 - <<'PY'
import csv
from pathlib import Path
path = Path("data/imports/steel-grade-expansion-2026-06-14.csv")
with path.open(newline="", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))
print(len(rows))
if len(rows) != 238:
    raise SystemExit(f"expected 238 import rows, got {len(rows)}")
PY
```

Expected: prints `238`.

## Task 4: Merge And Generate 300 Records

**Files:**
- Modify: `data/alloys.csv`
- Regenerate: `src/data/generated/alloys.js`

- [ ] **Step 1: Run merge helper**

Run:

```bash
python3 scripts/merge-import-csv.py
```

Expected: `Merged 238 import rows into data/alloys.csv for 300 total records.`

- [ ] **Step 2: Run generator**

Run:

```bash
python3 scripts/build-data.py
```

Expected: `Generated src/data/generated/alloys.js from 300 records.`

- [ ] **Step 3: Verify generated data count and original IDs**

Run this check in the Node REPL MCP:

```js
const data = await import(`file://${nodeRepl.cwd}/src/data/generated/alloys.js?verify=${Date.now()}`);
const required = ["inconel-718", "stainless-304", "ti-6al-4v", "tool-steel-d2", "c17200-beryllium-copper"];
if (data.alloys.length !== 300) throw new Error(`expected 300 records, got ${data.alloys.length}`);
for (const id of required) {
  if (!data.alloys.some((alloy) => alloy.id === id)) throw new Error(`${id} missing`);
}
nodeRepl.write("PASS");
```

Expected: `PASS`.

## Task 5: Update Tests, Inventory, And Cache Version

**Files:**
- Modify: `tests/data-tests.html`
- Modify: `docs/data-source-inventory.md`
- Modify: `index.html`
- Modify: `src/app.js`
- Modify: `src/data/alloys.js`
- Modify: `src/render.js`

- [ ] **Step 1: Confirm data tests include the 300-count and category coverage tests**

Check `tests/data-tests.html` contains:

```js
test("contains exactly 300 alloy records", () => {
  assert(alloys.length === 300, `expected 300 records, got ${alloys.length}`);
});
```

and:

```js
test("contains broad steel-grade coverage", () => {
```

- [ ] **Step 2: Update source inventory**

Append a new section to `docs/data-source-inventory.md`:

```markdown
## 2026-06-14 300-Record Steel Grade Batch

This batch expands the database from 62 to 300 total records. The added rows focus on steel grades: carbon steels, low-alloy machinery steels, stainless steels, tool steels, high-speed steels, bearing steels, spring steels, wear-resistant steels, heat-resistant steels, weathering steels, and electrical steels.

Most new rows use `standard` or `reference` source confidence. Balance Fe values are displayed as `約xx.x` and marked as reference calculations when calculated from listed major elements.
```

- [ ] **Step 3: Bump cache version**

Replace `20260614c` with `20260614d` in:

```text
index.html
src/app.js
src/data/alloys.js
src/render.js
```

Expected: `rg "20260614c" index.html src` returns no matches.

## Task 6: Verification, Commit, Push, Public Check

**Files:**
- All modified files.

- [ ] **Step 1: Run generator**

Run:

```bash
python3 scripts/build-data.py
```

Expected: `Generated src/data/generated/alloys.js from 300 records.`

- [ ] **Step 2: Run static diff check**

Run:

```bash
git diff --check
```

Expected: exit code 0 and no output.

- [ ] **Step 3: Run module-level data and search checks**

Run this check in the Node REPL MCP:

```js
const data = await import(`file://${nodeRepl.cwd}/src/data/generated/alloys.js?final=${Date.now()}`);
const search = await import(`file://${nodeRepl.cwd}/src/search.js?final=${Date.now()}`);
if (data.alloys.length !== 300) throw new Error("record count mismatch");
if (!search.filterAlloys(data.alloys, { query: "S45C", sourceTypes: ["official", "standard", "reference", "unverified"], elementFilters: [] }).length) throw new Error("S45C search failed");
if (!search.filterAlloys(data.alloys, { query: "4140", sourceTypes: ["official", "standard", "reference", "unverified"], elementFilters: [] }).length) throw new Error("4140 search failed");
if (!search.filterAlloys(data.alloys, { query: "440C", sourceTypes: ["official", "standard", "reference", "unverified"], elementFilters: [] }).length) throw new Error("440C search failed");
nodeRepl.write("PASS");
```

Expected: `PASS`.

- [ ] **Step 4: Commit**

Run:

```bash
git add data/alloys.csv data/imports/steel-grade-expansion-2026-06-14.csv docs/data-source-inventory.md index.html scripts/merge-import-csv.py src/app.js src/data/alloys.js src/data/generated/alloys.js src/render.js tests/data-tests.html
git commit -m "Expand steel grade database to 300 records"
```

Expected: commit succeeds.

- [ ] **Step 5: Push**

Run:

```bash
git push
```

Expected: `main -> main`.

- [ ] **Step 6: Verify public generated data**

Fetch the public generated JS and confirm:

- It contains 300 `"id"` entries.
- It contains seed grades such as `s45c`, `aisi-4140`, and `stainless-440c`.
- It contains cache version `20260614d` in the public HTML.

Expected: public GitHub Pages reflects the 300-record batch.
