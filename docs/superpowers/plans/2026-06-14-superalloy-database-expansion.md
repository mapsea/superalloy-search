# Superalloy Database Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the alloy database to 20 well-known superalloys while preserving source confidence, search behavior, and the existing static GitHub Pages deployment.

**Architecture:** Split the current monolithic `src/data/alloys.js` into constants plus family-specific alloy modules, then re-export the same public API so existing app/render imports keep working. Add a browser-based data validation page before changing data so count, IDs, source fields, and schema mistakes are caught immediately.

**Tech Stack:** Static HTML/CSS/vanilla JavaScript ES modules, browser-based validation pages, local `python3 -m http.server` preview, GitHub Pages.

---

## File Structure

- Create `src/data/constants.js`: exports `ELEMENT_COLUMNS` and `SOURCE_LABELS`.
- Create `src/data/alloys/inconel.js`: Inconel 600, 601, 617, 625, 690, 718, X-750.
- Create `src/data/alloys/hastelloy.js`: Hastelloy B-2, C-22, C-276.
- Create `src/data/alloys/haynes.js`: Haynes 188, 230, 282.
- Create `src/data/alloys/nimonic.js`: Nimonic 75, 80A, 90.
- Create `src/data/alloys/other.js`: Waspaloy, Udimet 500, Udimet 520, Rene 41.
- Modify `src/data/alloys.js`: import family modules, export combined `alloys`, and re-export constants.
- Create `tests/data-tests.html`: browser validation for database shape and 20-record target.
- Create `docs/data-source-inventory.md`: human-readable source ledger for the 20 records.

## Target Alloy IDs

The final `alloys` export must contain exactly these IDs:

```js
[
  "inconel-600",
  "inconel-601",
  "inconel-617",
  "inconel-625",
  "inconel-690",
  "inconel-718",
  "inconel-x-750",
  "hastelloy-b-2",
  "hastelloy-c-22",
  "hastelloy-c-276",
  "haynes-188",
  "haynes-230",
  "haynes-282",
  "waspaloy",
  "nimonic-75",
  "nimonic-80a",
  "nimonic-90",
  "udimet-500",
  "udimet-520",
  "rene-41"
]
```

## Task 1: Data Validation Tests

**Files:**
- Create: `tests/data-tests.html`

- [ ] **Step 1: Write the failing data validation page**

Create `tests/data-tests.html`:

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Alloy Data Tests</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; }
    .pass { color: #0f7f7a; }
    .fail { color: #b94c35; }
  </style>
</head>
<body>
  <h1>Alloy Data Tests</h1>
  <pre id="output"></pre>
  <script type="module">
    import { alloys, ELEMENT_COLUMNS, SOURCE_LABELS } from "../src/data/alloys.js";

    const output = document.querySelector("#output");
    const lines = [];

    const TARGET_IDS = [
      "inconel-600",
      "inconel-601",
      "inconel-617",
      "inconel-625",
      "inconel-690",
      "inconel-718",
      "inconel-x-750",
      "hastelloy-b-2",
      "hastelloy-c-22",
      "hastelloy-c-276",
      "haynes-188",
      "haynes-230",
      "haynes-282",
      "waspaloy",
      "nimonic-75",
      "nimonic-80a",
      "nimonic-90",
      "udimet-500",
      "udimet-520",
      "rene-41"
    ];

    const VALID_SOURCE_TYPES = ["official", "reference", "unverified"];

    function test(name, fn) {
      try {
        fn();
        lines.push(`PASS ${name}`);
      } catch (error) {
        lines.push(`FAIL ${name}: ${error.message}`);
      }
    }

    function assert(condition, message) {
      if (!condition) throw new Error(message);
    }

    function assertArrayEqual(actual, expected, label) {
      const actualText = JSON.stringify(actual);
      const expectedText = JSON.stringify(expected);
      assert(actualText === expectedText, `${label}: expected ${expectedText}, got ${actualText}`);
    }

    test("exports expected constants", () => {
      assertArrayEqual(ELEMENT_COLUMNS, ["Ni", "Cr", "Co", "Fe", "Mo", "Nb", "Ti", "Al", "W", "Ta", "C"], "ELEMENT_COLUMNS");
      assert(SOURCE_LABELS.official === "公式", "official label missing");
      assert(SOURCE_LABELS.reference === "参考", "reference label missing");
      assert(SOURCE_LABELS.unverified === "未確認", "unverified label missing");
    });

    test("contains exactly the first 20 target alloy ids", () => {
      const ids = alloys.map((alloy) => alloy.id).sort();
      assertArrayEqual(ids, [...TARGET_IDS].sort(), "alloy ids");
    });

    test("has no duplicate ids", () => {
      const ids = alloys.map((alloy) => alloy.id);
      assert(new Set(ids).size === ids.length, "duplicate alloy id found");
    });

    test("all alloys have required top-level fields", () => {
      alloys.forEach((alloy) => {
        assert(typeof alloy.id === "string" && alloy.id.length > 0, `${alloy.name || "unknown"} id missing`);
        assert(typeof alloy.name === "string" && alloy.name.length > 0, `${alloy.id} name missing`);
        assert(Array.isArray(alloy.aliases), `${alloy.id} aliases must be an array`);
        assert(typeof alloy.family === "string" && alloy.family.length > 0, `${alloy.id} family missing`);
        assert(alloy.elements && typeof alloy.elements === "object", `${alloy.id} elements missing`);
        assert(Array.isArray(alloy.sources) && alloy.sources.length > 0, `${alloy.id} sources missing`);
      });
    });

    test("all element entries have display and unit or balance kind", () => {
      alloys.forEach((alloy) => {
        Object.entries(alloy.elements).forEach(([symbol, value]) => {
          assert(typeof value.display === "string" && value.display.length > 0, `${alloy.id}.${symbol} display missing`);
          assert(value.kind === "balance" || value.unit === "wt%", `${alloy.id}.${symbol} unit/kind invalid`);
          assert(
            value.kind === "balance" ||
            typeof value.min === "number" ||
            typeof value.max === "number",
            `${alloy.id}.${symbol} needs min, max, or balance`
          );
        });
      });
    });

    test("all sources have required fields and valid source types", () => {
      alloys.forEach((alloy) => {
        alloy.sources.forEach((source, index) => {
          assert(VALID_SOURCE_TYPES.includes(source.type), `${alloy.id}.sources[${index}] invalid type`);
          assert(typeof source.company === "string" && source.company.length > 0, `${alloy.id}.sources[${index}] company missing`);
          assert(typeof source.title === "string" && source.title.length > 0, `${alloy.id}.sources[${index}] title missing`);
          assert(typeof source.url === "string" && /^https?:\/\//.test(source.url), `${alloy.id}.sources[${index}] url invalid`);
          assert(typeof source.checkedAt === "string" && /^2026-06-14$/.test(source.checkedAt), `${alloy.id}.sources[${index}] checkedAt must be 2026-06-14`);
          assert(typeof source.notes === "string" && source.notes.length > 0, `${alloy.id}.sources[${index}] notes missing`);
        });
      });
    });

    output.textContent = lines.join("\n");
    output.className = lines.some((line) => line.startsWith("FAIL")) ? "fail" : "pass";
  </script>
</body>
</html>
```

- [ ] **Step 2: Run the data test and verify it fails**

Run a local server if one is not already running:

```bash
python3 -m http.server 8002
```

Open:

```text
http://localhost:8002/tests/data-tests.html
```

Expected: FAIL on the exact 20 target IDs because the current database has only 4 records.

- [ ] **Step 3: Commit the failing validation test**

```bash
git add tests/data-tests.html
git commit -m "test: add alloy data validation"
```

## Task 2: Split Data Modules Without Changing Records

**Files:**
- Create: `src/data/constants.js`
- Create: `src/data/alloys/inconel.js`
- Create: `src/data/alloys/other.js`
- Modify: `src/data/alloys.js`

- [ ] **Step 1: Move constants into their own module**

Create `src/data/constants.js`:

```js
export const ELEMENT_COLUMNS = ["Ni", "Cr", "Co", "Fe", "Mo", "Nb", "Ti", "Al", "W", "Ta", "C"];

export const SOURCE_LABELS = {
  official: "公式",
  reference: "参考",
  unverified: "未確認"
};
```

- [ ] **Step 2: Move current Inconel records**

Create `src/data/alloys/inconel.js` and export `inconelAlloys`. Move the current `inconel-718`, `inconel-625`, and `inconel-x-750` objects from `src/data/alloys.js` into that array without changing any field values.

After the move, `inconelAlloys.map((alloy) => alloy.id)` must return `["inconel-718", "inconel-625", "inconel-x-750"]`.

- [ ] **Step 3: Move current non-Inconel record**

Create `src/data/alloys/other.js` and export `otherAlloys`. Move the current `waspaloy` object from `src/data/alloys.js` into that array without changing any field values.

After the move, `otherAlloys.map((alloy) => alloy.id)` must return `["waspaloy"]`.

- [ ] **Step 4: Re-export the combined API**

Replace `src/data/alloys.js` with:

```js
import { ELEMENT_COLUMNS, SOURCE_LABELS } from "./constants.js";
import { inconelAlloys } from "./alloys/inconel.js";
import { otherAlloys } from "./alloys/other.js";

export { ELEMENT_COLUMNS, SOURCE_LABELS };

export const alloys = [
  ...inconelAlloys,
  ...otherAlloys
];
```

- [ ] **Step 5: Run existing search tests**

Open:

```text
http://localhost:8002/tests/search-tests.html
```

Expected: all lines begin with `PASS`.

- [ ] **Step 6: Run data tests**

Open:

```text
http://localhost:8002/tests/data-tests.html
```

Expected: still FAIL on target IDs because this task only refactors current records.

- [ ] **Step 7: Commit the refactor**

```bash
git add src/data/constants.js src/data/alloys.js src/data/alloys/inconel.js src/data/alloys/other.js
git commit -m "refactor: split alloy data modules"
```

## Task 3: Add Data Source Inventory

**Files:**
- Create: `docs/data-source-inventory.md`

- [ ] **Step 1: Create source ledger**

Create `docs/data-source-inventory.md`:

```markdown
# Superalloy Data Source Inventory

All sources in the first 20-record expansion were checked on 2026-06-14.

## Source Type Rules

- `official`: manufacturer page, manufacturer PDF, or official product data sheet.
- `reference`: secondary technical reference, distributor data sheet, encyclopedia page, or standards-derived public reference.
- `unverified`: incomplete source that should be replaced later.

## First 20 Records

| ID | Alloy | Preferred Source Type | Source Company / Publisher | Source Title | Source URL | Notes |
|---|---|---|---|---|---|---|
| inconel-600 | Inconel 600 | official | Special Metals | INCONEL alloy 600 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-600.pdf | Use Table 1 limiting chemical composition. |
| inconel-601 | Inconel 601 | official | Special Metals | INCONEL alloy 601 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-601.pdf | Use Table 1 limiting chemical composition. |
| inconel-617 | Inconel 617 | official | Special Metals | INCONEL alloy 617 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-617.pdf | Use Table 1 limiting chemical composition. |
| inconel-625 | Inconel 625 | official | Special Metals | INCONEL alloy 625 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-625.pdf | Upgrade existing reference record to official. |
| inconel-690 | Inconel 690 | official | Special Metals | INCONEL alloy 690 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-690.pdf | Use Table 1 limiting chemical composition. |
| inconel-718 | Inconel 718 | official | Special Metals | INCONEL alloy 718 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-718.pdf | Existing official record. |
| inconel-x-750 | Inconel X-750 | official | Special Metals | INCONEL alloy X-750 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-x-750.pdf | Upgrade existing reference record when source is confirmed. |
| hastelloy-b-2 | Hastelloy B-2 | official | Haynes International | HASTELLOY B-2 alloy brochure/data sheet | https://www.haynesintl.com/alloys/alloy-portfolio_/Corrosion-resistant-Alloys/HASTELLOY-B-2-alloy | Use composition table from official Haynes page or linked PDF. |
| hastelloy-c-22 | Hastelloy C-22 | official | Haynes International | HASTELLOY C-22 alloy brochure/data sheet | https://www.haynesintl.com/alloys/alloy-portfolio_/Corrosion-resistant-Alloys/HASTELLOY-C-22-alloy | Use composition table from official Haynes page or linked PDF. |
| hastelloy-c-276 | Hastelloy C-276 | official | Haynes International | HASTELLOY C-276 alloy brochure/data sheet | https://www.haynesintl.com/alloys/alloy-portfolio_/Corrosion-resistant-Alloys/HASTELLOY-C-276-alloy | Use composition table from official Haynes page or linked PDF. |
| haynes-188 | Haynes 188 | official | Haynes International | HAYNES 188 alloy brochure/data sheet | https://www.haynesintl.com/alloys/alloy-portfolio_/High-temperature-Alloys/HAYNES-188-alloy | Use composition table from official Haynes page or linked PDF. |
| haynes-230 | Haynes 230 | official | Haynes International | HAYNES 230 alloy brochure/data sheet | https://www.haynesintl.com/alloys/alloy-portfolio_/High-temperature-Alloys/HAYNES-230-alloy | Use composition table from official Haynes page or linked PDF. |
| haynes-282 | Haynes 282 | official | Haynes International | HAYNES 282 alloy brochure/data sheet | https://www.haynesintl.com/alloys/alloy-portfolio_/High-temperature-Alloys/HAYNES-282-alloy | Use composition table from official Haynes page or linked PDF. |
| waspaloy | Waspaloy | reference | Public technical reference | Common Waspaloy composition range | https://en.wikipedia.org/wiki/Waspaloy | Keep reference unless official source is found during implementation. |
| nimonic-75 | Nimonic 75 | official | Special Metals | NIMONIC alloy 75 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/nimonic/nimonic-alloy-75.pdf | Use limiting chemical composition table. |
| nimonic-80a | Nimonic 80A | official | Special Metals | NIMONIC alloy 80A technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/nimonic/nimonic-alloy-80a.pdf | Use limiting chemical composition table. |
| nimonic-90 | Nimonic 90 | official | Special Metals | NIMONIC alloy 90 technical bulletin | https://www.specialmetals.com/documents/technical-bulletins/nimonic/nimonic-alloy-90.pdf | Use limiting chemical composition table. |
| udimet-500 | Udimet 500 | reference | Public technical reference | Common Udimet 500 composition range | https://en.wikipedia.org/wiki/Udimet | Use as reference if official source is not found during implementation. |
| udimet-520 | Udimet 520 | reference | Public technical reference | Common Udimet 520 composition range | https://en.wikipedia.org/wiki/Udimet | Use as reference if official source is not found during implementation. |
| rene-41 | Rene 41 | reference | Public technical reference | Common Rene 41 composition range | https://en.wikipedia.org/wiki/Ren%C3%A9_41 | Use as reference if official source is not found during implementation. |
```

- [ ] **Step 2: Verify each official URL before using it**

For each `official` URL in the inventory:

1. Open the URL in a browser or with the web tool.
2. Confirm it returns a real official page/PDF.
3. If the URL fails, replace that row with the strongest official page found by searching the manufacturer site.
4. If no official source is found after focused search, change the row to `reference` and record the reference URL.

Expected: no official inventory row points to a 404 or unrelated page.

- [ ] **Step 3: Commit source inventory**

```bash
git add docs/data-source-inventory.md
git commit -m "docs: add alloy data source inventory"
```

## Task 4: Add Inconel Family Records

**Files:**
- Modify: `src/data/alloys/inconel.js`

- [ ] **Step 1: Confirm Inconel source tables**

Use `docs/data-source-inventory.md` and confirm composition tables for:

```text
Inconel 600
Inconel 601
Inconel 617
Inconel 625
Inconel 690
Inconel 718
Inconel X-750
```

Expected: each record has at least one source, with official source preferred.

- [ ] **Step 2: Update `src/data/alloys/inconel.js`**

Add or upgrade records so `inconelAlloys` exports exactly these IDs:

```js
[
  "inconel-600",
  "inconel-601",
  "inconel-617",
  "inconel-625",
  "inconel-690",
  "inconel-718",
  "inconel-x-750"
]
```

For each record, use this object contract:

```js
{
  id: "inconel-600",
  name: "Inconel 600",
  aliases: ["Alloy 600", "UNS N06600"],
  family: "Ni-Cr-Fe系耐熱耐食合金",
  elements: {
    Ni: { min: 72, unit: "wt%", display: "72.0 min" },
    Cr: { min: 14, max: 17, unit: "wt%", display: "14.0-17.0" },
    Fe: { min: 6, max: 10, unit: "wt%", display: "6.0-10.0" },
    C: { max: 0.15, unit: "wt%", display: "0.15 max" }
  },
  sources: [
    {
      type: "official",
      company: "Special Metals",
      title: "INCONEL alloy 600 technical bulletin",
      url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-600.pdf",
      checkedAt: "2026-06-14",
      notes: "Limiting chemical composition table."
    }
  ]
}
```

The `inconel-600` object above is the model. During execution, replace or adjust numeric values only when the confirmed source table differs.

- [ ] **Step 3: Run data tests**

Open:

```text
http://localhost:8002/tests/data-tests.html
```

Expected: still FAIL because non-Inconel families are not complete yet, but no failures should mention Inconel field shape.

- [ ] **Step 4: Commit Inconel data**

```bash
git add src/data/alloys/inconel.js docs/data-source-inventory.md
git commit -m "data: add Inconel alloy records"
```

## Task 5: Add Hastelloy And Haynes Records

**Files:**
- Create: `src/data/alloys/hastelloy.js`
- Create: `src/data/alloys/haynes.js`
- Modify: `src/data/alloys.js`
- Modify: `docs/data-source-inventory.md`

- [ ] **Step 1: Confirm Haynes International sources**

Confirm composition tables for:

```text
Hastelloy B-2
Hastelloy C-22
Hastelloy C-276
Haynes 188
Haynes 230
Haynes 282
```

Expected: each record has an official Haynes page or PDF source; if not, document the fallback reference source in the inventory.

- [ ] **Step 2: Create `src/data/alloys/hastelloy.js`**

Create `src/data/alloys/hastelloy.js` with `hastelloyAlloys` containing exactly these records:

```js
["hastelloy-b-2", "hastelloy-c-22", "hastelloy-c-276"]
```

Each record must include confirmed `elements` and at least one `sources` entry before commit. The data test in Task 1 will fail if any record is incomplete.

- [ ] **Step 3: Create `src/data/alloys/haynes.js`**

Create `src/data/alloys/haynes.js` with `haynesAlloys` containing exactly these records:

```js
["haynes-188", "haynes-230", "haynes-282"]
```

Each record must include confirmed `elements` and at least one `sources` entry before commit. The data test in Task 1 will fail if any record is incomplete.

- [ ] **Step 4: Include these modules in `src/data/alloys.js`**

Modify `src/data/alloys.js`:

```js
import { ELEMENT_COLUMNS, SOURCE_LABELS } from "./constants.js";
import { hastelloyAlloys } from "./alloys/hastelloy.js";
import { haynesAlloys } from "./alloys/haynes.js";
import { inconelAlloys } from "./alloys/inconel.js";
import { otherAlloys } from "./alloys/other.js";

export { ELEMENT_COLUMNS, SOURCE_LABELS };

export const alloys = [
  ...inconelAlloys,
  ...hastelloyAlloys,
  ...haynesAlloys,
  ...otherAlloys
];
```

- [ ] **Step 5: Run data tests**

Open:

```text
http://localhost:8002/tests/data-tests.html
```

Expected: still FAIL until Nimonic/Udimet/Rene records are added, but no failures should mention Hastelloy/Haynes field shape.

- [ ] **Step 6: Commit Hastelloy and Haynes data**

```bash
git add src/data/alloys.js src/data/alloys/hastelloy.js src/data/alloys/haynes.js docs/data-source-inventory.md
git commit -m "data: add Hastelloy and Haynes records"
```

## Task 6: Add Nimonic, Udimet, Rene, And Waspaloy Records

**Files:**
- Create: `src/data/alloys/nimonic.js`
- Modify: `src/data/alloys/other.js`
- Modify: `src/data/alloys.js`
- Modify: `docs/data-source-inventory.md`

- [ ] **Step 1: Confirm remaining sources**

Confirm or update source inventory for:

```text
Waspaloy
Nimonic 75
Nimonic 80A
Nimonic 90
Udimet 500
Udimet 520
Rene 41
```

Expected: Nimonic records should prefer Special Metals official PDFs if available. Waspaloy, Udimet, and Rene records may remain `reference` if official sources are not found.

- [ ] **Step 2: Create `src/data/alloys/nimonic.js`**

Create `src/data/alloys/nimonic.js` with `nimonicAlloys` containing exactly these records:

```js
["nimonic-75", "nimonic-80a", "nimonic-90"]
```

Each record must include confirmed `elements` and at least one `sources` entry before commit. The data test in Task 1 will fail if any record is incomplete.

- [ ] **Step 3: Update `src/data/alloys/other.js`**

Ensure `otherAlloys` exports exactly:

```js
[
  "waspaloy",
  "udimet-500",
  "udimet-520",
  "rene-41"
]
```

Upgrade the existing Waspaloy record in place, and add Udimet/Rene records with confirmed source data.

- [ ] **Step 4: Include Nimonic in `src/data/alloys.js`**

Modify `src/data/alloys.js`:

```js
import { ELEMENT_COLUMNS, SOURCE_LABELS } from "./constants.js";
import { hastelloyAlloys } from "./alloys/hastelloy.js";
import { haynesAlloys } from "./alloys/haynes.js";
import { inconelAlloys } from "./alloys/inconel.js";
import { nimonicAlloys } from "./alloys/nimonic.js";
import { otherAlloys } from "./alloys/other.js";

export { ELEMENT_COLUMNS, SOURCE_LABELS };

export const alloys = [
  ...inconelAlloys,
  ...hastelloyAlloys,
  ...haynesAlloys,
  ...nimonicAlloys,
  ...otherAlloys
];
```

- [ ] **Step 5: Run data tests**

Open:

```text
http://localhost:8002/tests/data-tests.html
```

Expected: all lines begin with `PASS`.

- [ ] **Step 6: Commit remaining data**

```bash
git add src/data/alloys.js src/data/alloys/nimonic.js src/data/alloys/other.js docs/data-source-inventory.md
git commit -m "data: add Nimonic and remaining alloy records"
```

## Task 7: Final Browser Verification And Publish

**Files:**
- No source files unless verification finds issues.

- [ ] **Step 1: Run search logic tests**

Open:

```text
http://localhost:8002/tests/search-tests.html
```

Expected: all lines begin with `PASS`.

- [ ] **Step 2: Run data validation tests**

Open:

```text
http://localhost:8002/tests/data-tests.html
```

Expected: all lines begin with `PASS`.

- [ ] **Step 3: Verify common searches**

Open:

```text
http://localhost:8002/
```

Verify:

- Initial count is `20件`.
- Search `625` includes Inconel 625.
- Search `C-276` includes Hastelloy C-276.
- Search `UNS N07718` includes Inconel 718.
- Search `Nimonic` includes Nimonic 75, Nimonic 80A, and Nimonic 90.
- `Cr 18-21` returns multiple records.
- Source badges show official/reference status.
- Detail dialog shows at least one source URL for a newly added alloy.

- [ ] **Step 4: Commit any verification fixes**

If verification required source fixes, commit them:

```bash
git add src/data docs/data-source-inventory.md tests/data-tests.html
git commit -m "fix: correct expanded alloy data"
```

If no fixes were needed, do not create an empty commit.

- [ ] **Step 5: Push to GitHub Pages repository**

Run:

```bash
git status --short
git push origin main
```

Expected: push succeeds. If authentication fails, report that the local commit is ready and the user must run `git push origin main` from their authenticated terminal.

- [ ] **Step 6: Verify live site**

Open:

```text
https://mapsea.github.io/superalloy-search/
```

Expected:

- Initial count is `20件`.
- `C-276` search works.
- No console errors.

- [ ] **Step 7: Final response**

Report:

- Number of records added.
- Which records are official vs reference.
- Test results.
- Live URL.
- Any records that still need official-source upgrades.
