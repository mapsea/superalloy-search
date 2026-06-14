# Special Metals Database Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the current hand-edited alloy dataset into a CSV-master special-metals data platform, replace the visible `系統` field with `用途`, and keep the static GitHub Pages site working.

**Architecture:** Add a human-editable `data/alloys.csv` as the source of truth and a Python standard-library generator that writes `src/data/generated/alloys.js`. Keep the browser API as `src/data/alloys.js` so the app and tests can migrate incrementally, then update rendering/search to use `usage` and `category` fields.

**Tech Stack:** Static HTML/CSS/vanilla JavaScript ES modules, Python 3 standard library CSV generation, browser test pages, GitHub Pages.

---

## File Structure

- Create `data/alloys.csv`: CSV master containing the current 20 records with `category` and `usage`.
- Create `scripts/build-data.py`: Validates CSV rows and generates `src/data/generated/alloys.js`.
- Create `src/data/generated/alloys.js`: Generated data module, committed so GitHub Pages can serve it directly.
- Modify `src/data/constants.js`: Add `standard` source label and CSV-supported element list if needed.
- Modify `src/data/alloys.js`: Re-export generated `alloys`, `ELEMENT_COLUMNS`, and `SOURCE_LABELS`.
- Modify `src/app.js`: Add `standard` source filter state and bump cache version imports.
- Modify `src/render.js`: Replace visible family/system display with usage and category.
- Modify `src/search.js`: Include `usage` and `category` in text search.
- Modify `index.html`: Replace source checkbox list with `公式`, `規格`, `参考`, `未確認`; bump asset version.
- Modify `tests/data-tests.html`: Validate generated data shape, `usage`, `category`, and `standard` source support.
- Modify `tests/search-tests.html`: Add coverage for usage/category text search and `standard` source filter.
- Modify `docs/data-source-inventory.md`: Document CSV master workflow and current source confidence.
- Delete or stop importing legacy files under `src/data/alloys/*.js` after generated data is wired.

## CSV Columns

The CSV header must be:

```csv
id,name,aliases,category,usage,source_type,source_company,source_title,source_url,checked_at,source_notes,Ni,Cr,Co,Fe,Mo,Nb,Ti,Al,W,Ta,C
```

Rules:

- `aliases` uses `|` between aliases.
- Element values use `50-55`, `58 min`, `5 max`, `Bal.`, or empty.
- Source type must be `official`, `standard`, `reference`, or `unverified`.
- Generated records use camelCase source field `checkedAt`.

## Task 1: Expand Validation Expectations

**Files:**
- Modify: `tests/data-tests.html`
- Modify: `tests/search-tests.html`
- Modify: `src/data/constants.js`

- [ ] **Step 1: Update constants for standard source labels**

Modify `src/data/constants.js` to add the `standard` source label:

```js
export const ELEMENT_COLUMNS = ["Ni", "Cr", "Co", "Fe", "Mo", "Nb", "Ti", "Al", "W", "Ta", "C"];

export const SOURCE_LABELS = {
  official: "公式",
  standard: "規格",
  reference: "参考",
  unverified: "未確認"
};
```

- [ ] **Step 2: Update data validation test expectations**

In `tests/data-tests.html`, change:

```js
const VALID_SOURCE_TYPES = ["official", "reference", "unverified"];
```

to:

```js
const VALID_SOURCE_TYPES = ["official", "standard", "reference", "unverified"];
```

Add these checks inside `all alloys have required top-level fields`:

```js
assert(typeof alloy.category === "string" && alloy.category.length > 0, `${alloy.id} category missing`);
assert(typeof alloy.usage === "string" && alloy.usage.length > 0, `${alloy.id} usage missing`);
```

Add this assertion in `exports expected constants`:

```js
assert(SOURCE_LABELS.standard === "規格", "standard label missing");
```

- [ ] **Step 3: Add search test coverage for usage/category**

In `tests/search-tests.html`, add tests after the existing query test:

```js
test("alloy text query matches usage", () => {
  const alloy = {
    name: "Example Alloy",
    aliases: [],
    category: "チタン合金",
    usage: "医療インプラント",
    elements: {},
    sources: [{ type: "official" }]
  };
  assert(matchesAlloy(alloy, { query: "インプラント" }), "usage should be searchable");
});

test("alloy text query matches category", () => {
  const alloy = {
    name: "Example Alloy",
    aliases: [],
    category: "工具鋼",
    usage: "金型",
    elements: {},
    sources: [{ type: "standard" }]
  };
  assert(matchesAlloy(alloy, { query: "工具鋼" }), "category should be searchable");
});

test("source type filter accepts standard sources", () => {
  const alloy = {
    name: "Example Alloy",
    aliases: [],
    category: "耐熱鋼",
    usage: "ボイラー",
    elements: {},
    sources: [{ type: "standard" }]
  };
  assert(matchesAlloy(alloy, { sourceTypes: ["standard"] }), "standard source should match");
});
```

- [ ] **Step 4: Run tests and verify expected failure**

Run a local server:

```bash
python3 -m http.server 8004
```

Open:

```text
http://localhost:8004/tests/data-tests.html
http://localhost:8004/tests/search-tests.html
```

Expected before implementation:

- `data-tests.html` fails because current records do not have `category` and `usage`.
- `search-tests.html` fails because `matchesAlloy` does not search `usage` or `category`.

- [ ] **Step 5: Commit failing validation updates**

```bash
git add src/data/constants.js tests/data-tests.html tests/search-tests.html
git commit -m "test: define special metals data expectations"
```

## Task 2: Add CSV Master and Generator

**Files:**
- Create: `data/alloys.csv`
- Create: `scripts/build-data.py`
- Create: `src/data/generated/alloys.js`
- Modify: `src/data/alloys.js`

- [ ] **Step 1: Create the CSV master with current 20 records**

Create `data/alloys.csv` with the required header and the current 20 records. Use these usage values for the first migration:

```csv
id,name,aliases,category,usage,source_type,source_company,source_title,source_url,checked_at,source_notes,Ni,Cr,Co,Fe,Mo,Nb,Ti,Al,W,Ta,C
inconel-600,Inconel 600,Alloy 600|UNS N06600|2.4816,スーパーアロイ,熱処理炉・化学装置,official,Special Metals,INCONEL alloy 600 technical bulletin,https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-600.pdf,2026-06-14,Limiting chemical composition table.,72 min,14-17,,6-10,,,,,,,0.15 max
inconel-601,Inconel 601,Alloy 601|UNS N06601|2.4851,スーパーアロイ,高温酸化環境・工業炉,official,Special Metals,INCONEL alloy 601 technical bulletin,https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-601.pdf,2026-06-14,Limiting chemical composition table.,58-63,21-25,,Bal.,,,,1-1.7,,,0.10 max
inconel-617,Inconel 617,Alloy 617|UNS N06617|2.4663,スーパーアロイ,ガスタービン・高温機器,official,Special Metals,INCONEL alloy 617 technical bulletin,https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-617.pdf,2026-06-14,Limiting chemical composition table.,44.5 min,20-24,10-15,3 max,8-10,,0.6 max,0.8-1.5,,,0.05-0.15
inconel-625,Inconel 625,Alloy 625|UNS N06625|2.4856,スーパーアロイ,海洋・化学プラント・耐食部材,official,Special Metals,INCONEL alloy 625 technical bulletin,https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-625.pdf,2026-06-14,Limiting chemical composition table.,58 min,20-23,1 max,5 max,8-10,3.15-4.15,0.40 max,0.40 max,,,0.10 max
inconel-690,Inconel 690,Alloy 690|UNS N06690,スーパーアロイ,原子力・高温水環境,official,Special Metals,INCONEL alloy 690 technical bulletin,https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-690.pdf,2026-06-14,Limiting chemical composition table.,58 min,27-31,,7-11,,,,,,,0.05 max
inconel-718,Inconel 718,Alloy 718|UNS N07718|2.4668,スーパーアロイ,航空エンジン・ガスタービン,official,Special Metals,INCONEL alloy 718 technical bulletin,https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-718.pdf,2026-06-14,Table 1 limiting chemical composition.,50-55,17-21,1 max,Bal.,2.8-3.3,4.75-5.5,0.65-1.15,0.2-0.8,,,0.08 max
inconel-x-750,Inconel X-750,Alloy X-750|UNS N07750,スーパーアロイ,ばね・高温締結部品,official,Special Metals,INCONEL alloy X-750 technical bulletin,https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-x-750.pdf,2026-06-14,Limiting chemical composition table.,70 min,14-17,,5-9,,0.70-1.20,2.25-2.75,0.40-1.00,,,0.08 max
hastelloy-b-2,Hastelloy B-2,Alloy B-2|UNS N10665,耐食合金,還元性酸・化学プラント,reference,Reference data,Hastelloy composition reference,https://fr.wikipedia.org/wiki/Hastelloy,2026-06-14,Reference composition range; official manufacturer data should replace this when confirmed.,Bal.,1 max,1 max,2 max,26-30,,,,,,0.01 max
hastelloy-c-22,Hastelloy C-22,Alloy C-22|UNS N06022,耐食合金,酸化性・還元性混酸環境,reference,Reference data,Hastelloy composition reference,https://fr.wikipedia.org/wiki/Hastelloy,2026-06-14,Reference composition range; official manufacturer data should replace this when confirmed.,Bal.,20-22.5,2.5 max,2-6,12.5-14.5,,,,2.5-3.5,,0.01 max
hastelloy-c-276,Hastelloy C-276,Alloy C-276|UNS N10276|2.4819,耐食合金,化学プラント・排煙脱硫,reference,Reference data,Hastelloy composition reference,https://fr.wikipedia.org/wiki/Hastelloy,2026-06-14,Reference composition range; official manufacturer data should replace this when confirmed.,Bal.,14.5-16.5,2.5 max,4-7,15-17,,,,3-4.5,,0.01 max
haynes-188,Haynes 188,Alloy 188|UNS R30188,コバルト合金,燃焼器・高温ガス部材,reference,Reference data,Haynes alloy reference,https://en.wikipedia.org/wiki/Haynes_International,2026-06-14,Reference composition range; official manufacturer data should replace this when confirmed.,20-24,20-24,Bal.,3 max,,,,,13-16,,0.05-0.15
haynes-230,Haynes 230,Alloy 230|UNS N06230,スーパーアロイ,高温炉・ガスタービン部材,reference,Reference data,Alloy 230 composition reference,https://en.wikipedia.org/wiki/Alloy_230,2026-06-14,Reference composition table; official manufacturer data should replace this when confirmed.,47-65,20-24,5 max,,1-3,,,0.2-0.5,13-15,,0.05-0.15
haynes-282,Haynes 282,Alloy 282|UNS N07208,スーパーアロイ,航空エンジン・高温構造材,reference,Reference data,Haynes 282 composition reference,https://arxiv.org/abs/2012.10114,2026-06-14,Reference nominal composition from technical literature; official manufacturer data should replace this when confirmed.,Bal.,18.5-20.5,9-11,1.5 max,8-9,,1.9-2.3,1.38-1.65,,,0.04-0.08
waspaloy,Waspaloy,UNS N07001,スーパーアロイ,航空エンジンディスク・シャフト,reference,Reference data,Waspaloy composition reference,https://en.wikipedia.org/wiki/Waspaloy,2026-06-14,Reference chemistry table; official manufacturer data should replace this when confirmed.,Bal.,18-21,12-15,2 max,3.5-5,,2.75-3.25,1.2-1.6,,,0.02-0.10
nimonic-75,Nimonic 75,Alloy 75|UNS N06075,スーパーアロイ,高温板材・熱処理治具,reference,Reference data,Nimonic composition reference,https://it.wikipedia.org/wiki/Nimonic,2026-06-14,Reference composition table; official manufacturer data should replace this when confirmed.,Bal.,18-21,,5 max,,,0.2-0.6,,,,0.08-0.15
nimonic-80a,Nimonic 80A,Alloy 80A|UNS N07080|2.4952,スーパーアロイ,高温ボルト・バルブ部品,reference,Reference data,Nimonic composition reference,https://it.wikipedia.org/wiki/Nimonic,2026-06-14,Reference composition table; official manufacturer data should replace this when confirmed.,Bal.,18-21,2 max,3 max,,,1.8-2.7,1-1.8,,,0.10 max
nimonic-90,Nimonic 90,Alloy 90|UNS N07090|2.4632,スーパーアロイ,タービンブレード・高温ばね,reference,Reference data,Nimonic composition reference,https://fr.wikipedia.org/wiki/Nimonic,2026-06-14,Reference composition description; official manufacturer data should replace this when confirmed.,Bal.,18-21,15-21,,,,2-3,1-2,,,0.13 max
udimet-500,Udimet 500,Udimet alloy 500,スーパーアロイ,タービンブレード・高温部材,reference,Reference data,Typical nickel-base superalloy compositions,https://es.wikipedia.org/wiki/Superaleaci%C3%B3n,2026-06-14,Reference nominal composition; official manufacturer data should replace this when confirmed.,53-55,17-19,17-19,,3.5-4.5,,2.6-3.2,2.6-3.2,,,0.12 max
udimet-520,Udimet 520,Udimet alloy 520,スーパーアロイ,タービンブレード・高温回転部材,unverified,Unverified reference data,Udimet 520 temporary composition range,https://en.wikipedia.org/wiki/Superalloy,2026-06-14,Temporary range from common secondary references; needs replacement with a verified producer or standards source.,Bal.,18-20,11-13,,5.5-6.5,,2.8-3.4,1.7-2.3,0.8-1.2,,0.08 max
rene-41,Rene 41,René 41|UNS N07041,スーパーアロイ,航空機高温構造材・ロケット部材,reference,Reference data,Rene 41 composition reference,https://en.wikipedia.org/wiki/Ren%C3%A9_41,2026-06-14,Reference chemistry table; official manufacturer data should replace this when confirmed.,Bal.,18-20,10-12,5 max,9-10.5,,3-3.3,1.4-1.8,,,0.06-0.12
```

- [ ] **Step 2: Create the generated data directory**

```bash
mkdir -p src/data/generated scripts data
```

- [ ] **Step 3: Create `scripts/build-data.py`**

Create `scripts/build-data.py` with this complete script:

```python
#!/usr/bin/env python3
import csv
import json
import re
import sys
from pathlib import Path

ELEMENT_COLUMNS = ["Ni", "Cr", "Co", "Fe", "Mo", "Nb", "Ti", "Al", "W", "Ta", "C"]
SOURCE_LABELS = {
    "official": "公式",
    "standard": "規格",
    "reference": "参考",
    "unverified": "未確認",
}
REQUIRED_COLUMNS = [
    "id",
    "name",
    "aliases",
    "category",
    "usage",
    "source_type",
    "source_company",
    "source_title",
    "source_url",
    "checked_at",
    "source_notes",
    *ELEMENT_COLUMNS,
]


def fail(message):
    print(f"ERROR: {message}", file=sys.stderr)
    sys.exit(1)


def parse_element(value):
    text = (value or "").strip()
    if not text:
        return None
    if text.lower() in {"bal.", "bal", "balance"}:
        return {"kind": "balance", "unit": "wt%", "display": "Bal."}

    range_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s*-\s*([0-9]+(?:\.[0-9]+)?)", text)
    if range_match:
        min_value = float(range_match.group(1))
        max_value = float(range_match.group(2))
        if min_value > max_value:
            fail(f"invalid element range {text}")
        return {"min": min_value, "max": max_value, "unit": "wt%", "display": text}

    min_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s*min", text, re.IGNORECASE)
    if min_match:
        return {"min": float(min_match.group(1)), "unit": "wt%", "display": text}

    max_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s*max", text, re.IGNORECASE)
    if max_match:
        return {"max": float(max_match.group(1)), "unit": "wt%", "display": text}

    fail(f"unsupported element value: {text}")


def validate_columns(fieldnames):
    missing = [column for column in REQUIRED_COLUMNS if column not in fieldnames]
    if missing:
        fail(f"missing CSV columns: {', '.join(missing)}")


def build_record(row, line_number):
    for key in ["id", "name", "category", "usage", "source_type", "source_company", "source_title", "source_url", "checked_at", "source_notes"]:
        if not row[key].strip():
            fail(f"line {line_number}: {key} is required")

    source_type = row["source_type"].strip()
    if source_type not in SOURCE_LABELS:
        fail(f"line {line_number}: invalid source_type {source_type}")

    if not row["source_url"].startswith(("http://", "https://")):
        fail(f"line {line_number}: source_url must start with http:// or https://")

    elements = {}
    for symbol in ELEMENT_COLUMNS:
        parsed = parse_element(row[symbol])
        if parsed:
            elements[symbol] = parsed

    if not elements:
        fail(f"line {line_number}: at least one element is required")

    return {
        "id": row["id"].strip(),
        "name": row["name"].strip(),
        "aliases": [item.strip() for item in row["aliases"].split("|") if item.strip()],
        "category": row["category"].strip(),
        "usage": row["usage"].strip(),
        "elements": elements,
        "sources": [
            {
                "type": source_type,
                "company": row["source_company"].strip(),
                "title": row["source_title"].strip(),
                "url": row["source_url"].strip(),
                "checkedAt": row["checked_at"].strip(),
                "notes": row["source_notes"].strip(),
            }
        ],
    }


def main():
    root = Path(__file__).resolve().parents[1]
    csv_path = root / "data" / "alloys.csv"
    output_path = root / "src" / "data" / "generated" / "alloys.js"

    with csv_path.open(newline="", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        validate_columns(reader.fieldnames or [])
        records = [build_record(row, index) for index, row in enumerate(reader, start=2)]

    ids = [record["id"] for record in records]
    duplicates = sorted({record_id for record_id in ids if ids.count(record_id) > 1})
    if duplicates:
        fail(f"duplicate ids: {', '.join(duplicates)}")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(records, ensure_ascii=False, indent=2)
    output_path.write_text(
        "import { ELEMENT_COLUMNS, SOURCE_LABELS } from \"../constants.js\";\n\n"
        "export { ELEMENT_COLUMNS, SOURCE_LABELS };\n\n"
        f"export const alloys = {payload};\n",
        encoding="utf-8",
    )
    print(f"Generated {output_path} from {len(records)} records.")


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Generate the site data module**

Run:

```bash
python3 scripts/build-data.py
```

Expected output:

```text
Generated /Users/huyoucheng/Documents/钨金属/src/data/generated/alloys.js from 20 records.
```

- [ ] **Step 5: Re-export generated data**

Replace `src/data/alloys.js` with:

```js
export { alloys, ELEMENT_COLUMNS, SOURCE_LABELS } from "./generated/alloys.js";
```

- [ ] **Step 6: Run browser data test**

Open:

```text
http://localhost:8004/tests/data-tests.html
```

Expected: data tests still fail only on missing app-side behavior if Task 1 added search tests first; generated records should now satisfy data shape.

- [ ] **Step 7: Commit CSV generator and migration**

```bash
git add data/alloys.csv scripts/build-data.py src/data/alloys.js src/data/generated/alloys.js
git commit -m "Add CSV-backed alloy data generation"
```

## Task 3: Replace Visible System Field With Usage

**Files:**
- Modify: `src/render.js`
- Modify: `src/search.js`
- Modify: `src/app.js`
- Modify: `index.html`

- [ ] **Step 1: Update search text fields**

In `src/search.js`, replace the haystack line with:

```js
const haystack = [
  alloy.name,
  alloy.family,
  alloy.category,
  alloy.usage,
  ...(alloy.aliases || [])
].map(normalize).join(" ");
```

- [ ] **Step 2: Update table heading**

In `src/render.js`, change:

```js
'<th scope="col">系統</th>',
```

to:

```js
'<th scope="col">用途</th>',
```

- [ ] **Step 3: Update table body usage cell**

In `src/render.js`, replace:

```js
<td>${escapeHtml(alloy.family)}</td>
```

with:

```js
<td>${escapeHtml(alloy.usage)}</td>
```

- [ ] **Step 4: Update card usage text**

In `src/render.js`, replace:

```js
<p>${escapeHtml(alloy.family)}</p>
```

with:

```js
<p>${escapeHtml(alloy.usage)}</p>
```

- [ ] **Step 5: Update detail metadata**

In `src/render.js`, replace:

```js
const detailMeta = [alloy.family, (alloy.aliases || []).join(", ")]
  .filter(Boolean)
  .join(" / ");
```

with:

```js
const detailMeta = [
  alloy.usage,
  alloy.category,
  (alloy.aliases || []).join(", ")
].filter(Boolean).join(" / ");
```

- [ ] **Step 6: Add standard source filter state**

In `src/app.js`, change:

```js
sourceTypes: ["official", "reference", "unverified"],
```

to:

```js
sourceTypes: ["official", "standard", "reference", "unverified"],
```

Bump imports in `src/app.js` and `src/render.js` from `v=20260614a` to `v=20260614b`.

- [ ] **Step 7: Add standard checkbox and bump assets**

In `index.html`, add this checkbox between `公式` and `参考`:

```html
<label><input type="checkbox" name="sourceType" value="standard" checked> 規格</label>
```

Bump asset query strings from `v=20260614a` to `v=20260614b`.

- [ ] **Step 8: Run browser verification**

Open:

```text
http://localhost:8004/
http://localhost:8004/tests/search-tests.html
```

Expected:

- The table heading shows `用途`, not `系統`.
- Cards show usage text.
- Searching `航空エンジン` returns Inconel 718, Haynes 282, Waspaloy, and related records.
- Search tests pass.

- [ ] **Step 9: Commit UI migration**

```bash
git add index.html src/app.js src/render.js src/search.js
git commit -m "Replace system display with usage"
```

## Task 4: Remove Legacy Hand-Edited Data Modules

**Files:**
- Delete: `src/data/alloys/inconel.js`
- Delete: `src/data/alloys/hastelloy.js`
- Delete: `src/data/alloys/haynes.js`
- Delete: `src/data/alloys/nimonic.js`
- Delete: `src/data/alloys/other.js`
- Modify: `tests/data-tests.html`
- Modify: `docs/data-source-inventory.md`

- [ ] **Step 1: Confirm no imports reference legacy modules**

Run:

```bash
rg "alloys/(inconel|hastelloy|haynes|nimonic|other)" src tests index.html
```

Expected: no output.

- [ ] **Step 2: Delete legacy modules**

Delete these files:

```text
src/data/alloys/inconel.js
src/data/alloys/hastelloy.js
src/data/alloys/haynes.js
src/data/alloys/nimonic.js
src/data/alloys/other.js
```

- [ ] **Step 3: Update data inventory documentation**

Add this section near the top of `docs/data-source-inventory.md`:

```md
## Source of Truth

The human-editable source of truth is `data/alloys.csv`.

Run `python3 scripts/build-data.py` after editing the CSV. The script validates the rows and regenerates `src/data/generated/alloys.js`, which is committed for GitHub Pages.
```

- [ ] **Step 4: Run full local checks**

Open:

```text
http://localhost:8004/tests/data-tests.html
http://localhost:8004/tests/search-tests.html
http://localhost:8004/
```

Expected:

- Data tests pass.
- Search tests pass.
- App shows `20件`.
- App has no console errors.

- [ ] **Step 5: Commit cleanup**

```bash
git add docs/data-source-inventory.md tests/data-tests.html src/data/alloys
git commit -m "Remove legacy alloy data modules"
```

## Task 5: Add Import Workflow Documentation

**Files:**
- Create: `docs/data-import-workflow.md`
- Modify: `README.md`

- [ ] **Step 1: Create import workflow docs**

Create `docs/data-import-workflow.md`:

```md
# Data Import Workflow

The editable master data file is `data/alloys.csv`.

## Edit Data

Open `data/alloys.csv` in Excel, Numbers, Google Sheets, or a text editor.

Required columns:

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
- Element columns such as `Ni`, `Cr`, `Co`, `Fe`, `Mo`, `Nb`, `Ti`, `Al`, `W`, `Ta`, `C`

Use `|` to separate aliases.

Element formats:

- `50-55`
- `58 min`
- `5 max`
- `Bal.`
- Empty cell

## Source Types

- `official`: Manufacturer or producer document.
- `standard`: Standards document such as JIS, ASTM, AMS, or ISO.
- `reference`: Public secondary reference.
- `unverified`: Temporary data that needs replacement.

## Generate Site Data

Run:

```bash
python3 scripts/build-data.py
```

The generated site file is `src/data/generated/alloys.js`.

## Verify

Run a local server:

```bash
python3 -m http.server 8004
```

Open:

- `http://localhost:8004/tests/data-tests.html`
- `http://localhost:8004/tests/search-tests.html`
- `http://localhost:8004/`

Do not publish if tests fail.
```

- [ ] **Step 2: Link docs from README**

Add this section to `README.md`:

```md
## データ追加

データの正本は `data/alloys.csv` です。

CSVを編集したら、以下を実行してサイト用データを生成します。

```bash
python3 scripts/build-data.py
```

詳しい手順は `docs/data-import-workflow.md` を参照してください。
```

- [ ] **Step 3: Commit docs**

```bash
git add README.md docs/data-import-workflow.md
git commit -m "Document CSV data import workflow"
```

## Task 6: Final Verification and Publish

**Files:**
- No code changes expected unless verification finds a bug.

- [ ] **Step 1: Run generator from clean data**

Run:

```bash
python3 scripts/build-data.py
```

Expected:

```text
Generated /Users/huyoucheng/Documents/钨金属/src/data/generated/alloys.js from 20 records.
```

- [ ] **Step 2: Run whitespace check**

Run:

```bash
git diff --check HEAD
```

Expected: no output and exit code 0.

- [ ] **Step 3: Run browser tests**

Start server if needed:

```bash
python3 -m http.server 8004
```

Open and verify:

```text
http://localhost:8004/tests/data-tests.html
http://localhost:8004/tests/search-tests.html
```

Expected:

- Both pages show only `PASS` lines.

- [ ] **Step 4: Verify desktop and mobile app behavior**

Open:

```text
http://localhost:8004/
```

Verify:

- Desktop shows `20件`.
- Table heading shows `用途`.
- Source filter includes `規格`.
- Searching `航空エンジン` returns usage-based matches.
- Mobile width around `375px` has no page-level horizontal overflow.

- [ ] **Step 5: Push to GitHub**

```bash
git push origin main
```

- [ ] **Step 6: Verify GitHub Pages**

Open:

```text
https://mapsea.github.io/superalloy-search/?v=20260614b
```

Expected:

- Public site shows `20件`.
- Table/cards show usage text.
- Public site has no console errors.

## Notes for Future 1000-Record Growth

After this plan is complete, records can be added by editing `data/alloys.csv` in batches. Each batch should:

- Prefer `official` or `standard` source types.
- Keep `reference` and `unverified` visible when necessary.
- Run `python3 scripts/build-data.py`.
- Run browser data/search tests before publishing.
