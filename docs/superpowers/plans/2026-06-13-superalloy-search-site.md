# Superalloy Search Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a responsive Japanese static website for searching and comparing superalloy compositions by alloy name, element, and draggable composition ranges.

**Architecture:** Use a static HTML/CSS/JavaScript app with no build step so it runs in the current environment without Node. Keep alloy data, search logic, and rendering logic in separate files. Use a small browser-based test runner for the pure filtering functions.

**Tech Stack:** HTML, CSS, vanilla JavaScript ES modules, JSON-like JavaScript data module, local `python3 -m http.server` for preview.

---

## File Structure

- Create `index.html`: application shell with search form, filter panel, comparison table, mobile card container, and detail dialog.
- Create `src/styles.css`: responsive visual design, table layout, mobile cards, slider controls, dialog styling.
- Create `src/data/alloys.js`: seed alloy dataset and source metadata.
- Create `src/search.js`: pure search and range-overlap functions.
- Create `src/render.js`: DOM rendering for table rows, mobile cards, source badges, and alloy detail.
- Create `src/app.js`: browser event wiring and application state.
- Create `tests/search-tests.html`: browser-based unit tests for `src/search.js`.
- Modify `.gitignore`: add local server or screenshot artifacts only if implementation creates them.

## Task 1: App Shell And Responsive Layout

**Files:**
- Create: `index.html`
- Create: `src/styles.css`

- [x] **Step 1: Create the static app shell**

Write `index.html`:

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>スーパーアロイ成分検索</title>
  <link rel="stylesheet" href="src/styles.css">
</head>
<body>
  <header class="site-header">
    <div>
      <p class="eyebrow">Superalloy Composition Finder</p>
      <h1>スーパーアロイ成分検索</h1>
      <p class="lead">合金名、元素、成分レンジから特殊金属・スーパーアロイを比較できます。</p>
    </div>
  </header>

  <main class="app-shell">
    <section class="filters" aria-label="検索条件">
      <label class="search-field">
        <span>合金名・別名</span>
        <input id="queryInput" type="search" placeholder="例: Inconel 718, UNS N07718">
      </label>

      <div class="filter-row">
        <label>
          <span>元素</span>
          <select id="elementSelect"></select>
        </label>
        <button id="addElementFilter" type="button">元素条件を追加</button>
      </div>

      <div id="elementFilters" class="element-filters"></div>

      <fieldset class="source-filter">
        <legend>出典</legend>
        <label><input type="checkbox" name="sourceType" value="official" checked> 公式</label>
        <label><input type="checkbox" name="sourceType" value="reference" checked> 参考</label>
        <label><input type="checkbox" name="sourceType" value="unverified" checked> 未確認</label>
      </fieldset>
    </section>

    <section class="results" aria-live="polite">
      <div class="results-header">
        <h2>比較結果</h2>
        <p id="resultCount">0件</p>
      </div>
      <div class="table-wrap">
        <table class="comparison-table">
          <thead>
            <tr id="tableHead"></tr>
          </thead>
          <tbody id="tableBody"></tbody>
        </table>
      </div>
      <div id="cardResults" class="card-results"></div>
    </section>
  </main>

  <dialog id="alloyDialog" class="alloy-dialog">
    <button id="closeDialog" class="dialog-close" type="button" aria-label="閉じる">×</button>
    <div id="dialogContent"></div>
  </dialog>

  <script type="module" src="src/app.js"></script>
</body>
</html>
```

- [x] **Step 2: Add base responsive CSS**

Write `src/styles.css`:

```css
:root {
  --ink: #17212b;
  --muted: #607080;
  --line: #d8e0e8;
  --panel: #ffffff;
  --page: #eef2f5;
  --accent: #0f7f7a;
  --warning: #b98712;
  --danger: #b94c35;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink);
  background: var(--page);
}

.site-header {
  padding: 28px clamp(18px, 4vw, 48px);
  background: #fff;
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 8px;
  font-size: clamp(28px, 4vw, 44px);
  letter-spacing: 0;
}

.lead {
  margin: 0;
  color: var(--muted);
  max-width: 760px;
}

.app-shell {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 18px;
  padding: 22px clamp(14px, 3vw, 42px) 42px;
}

.filters,
.results {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: 0 12px 26px rgba(27, 42, 55, 0.08);
}

.filters {
  padding: 16px;
  align-self: start;
}

label span,
legend {
  display: block;
  margin-bottom: 6px;
  color: #435160;
  font-size: 13px;
  font-weight: 700;
}

input,
select,
button {
  font: inherit;
}

input,
select {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 10px 11px;
  background: #fff;
  color: var(--ink);
}

button {
  border: 0;
  border-radius: 6px;
  padding: 10px 12px;
  background: var(--accent);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}

.search-field,
.filter-row,
.source-filter {
  display: block;
  margin-bottom: 16px;
}

.filter-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.results-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid var(--line);
}

.results-header h2,
.results-header p {
  margin: 0;
}

.table-wrap {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
}

.comparison-table th,
.comparison-table td {
  padding: 10px 9px;
  border-bottom: 1px solid var(--line);
  text-align: left;
  white-space: nowrap;
  font-size: 13px;
}

.comparison-table th {
  background: #f5f7fa;
  color: #485767;
  font-size: 12px;
}

.card-results {
  display: none;
}

.alloy-dialog {
  width: min(760px, calc(100vw - 28px));
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0;
}

.dialog-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 34px;
  height: 34px;
  padding: 0;
  background: #eef2f5;
  color: var(--ink);
}

@media (max-width: 820px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .table-wrap {
    display: none;
  }

  .card-results {
    display: grid;
    gap: 12px;
    padding: 14px;
  }
}
```

- [x] **Step 3: Verify static shell loads**

Run:

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

Expected: page title, filter panel, empty comparison table area, and no console errors related to missing CSS.

- [x] **Step 4: Commit**

```bash
git add index.html src/styles.css
git commit -m "feat: add responsive app shell"
```

## Task 2: Seed Alloy Dataset

**Files:**
- Create: `src/data/alloys.js`

- [x] **Step 1: Add initial data module**

Write `src/data/alloys.js`:

```js
export const ELEMENT_COLUMNS = ["Ni", "Cr", "Co", "Fe", "Mo", "Nb", "Ti", "Al", "W", "Ta", "C"];

export const SOURCE_LABELS = {
  official: "公式",
  reference: "参考",
  unverified: "未確認"
};

export const alloys = [
  {
    id: "inconel-718",
    name: "Inconel 718",
    aliases: ["Alloy 718", "UNS N07718", "2.4668"],
    family: "Ni基スーパーアロイ",
    elements: {
      Ni: { min: 50, max: 55, unit: "wt%", display: "50.00-55.00" },
      Cr: { min: 17, max: 21, unit: "wt%", display: "17.00-21.00" },
      Fe: { kind: "balance", unit: "wt%", display: "Bal." },
      Nb: { min: 4.75, max: 5.5, unit: "wt%", display: "4.75-5.50", includes: "Ta" },
      Mo: { min: 2.8, max: 3.3, unit: "wt%", display: "2.80-3.30" },
      Ti: { min: 0.65, max: 1.15, unit: "wt%", display: "0.65-1.15" },
      Al: { min: 0.2, max: 0.8, unit: "wt%", display: "0.20-0.80" },
      Co: { max: 1, unit: "wt%", display: "1.00 max" },
      C: { max: 0.08, unit: "wt%", display: "0.08 max" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy 718 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-718.pdf",
        checkedAt: "2026-06-13",
        notes: "Table 1 limiting chemical composition."
      }
    ]
  },
  {
    id: "inconel-625",
    name: "Inconel 625",
    aliases: ["Alloy 625", "UNS N06625"],
    family: "Ni基耐食耐熱合金",
    elements: {
      Ni: { min: 58, unit: "wt%", display: "58.0 min" },
      Cr: { min: 20, max: 23, unit: "wt%", display: "20.0-23.0" },
      Mo: { min: 8, max: 10, unit: "wt%", display: "8.0-10.0" },
      Nb: { min: 3.15, max: 4.15, unit: "wt%", display: "3.15-4.15", includes: "Ta" },
      Fe: { max: 5, unit: "wt%", display: "5.0 max" },
      Co: { max: 1, unit: "wt%", display: "1.0 max" },
      C: { max: 0.1, unit: "wt%", display: "0.10 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Common Alloy 625 composition range",
        url: "https://en.wikipedia.org/wiki/Inconel",
        checkedAt: "2026-06-13",
        notes: "Use as reference seed until a current official manufacturer PDF is confirmed."
      }
    ]
  },
  {
    id: "inconel-x-750",
    name: "Inconel X-750",
    aliases: ["Alloy X-750", "UNS N07750"],
    family: "Ni基析出強化合金",
    elements: {
      Ni: { min: 70, unit: "wt%", display: "70.0 min" },
      Cr: { min: 14, max: 17, unit: "wt%", display: "14.0-17.0" },
      Fe: { min: 5, max: 9, unit: "wt%", display: "5.0-9.0" },
      Nb: { min: 0.7, max: 1.2, unit: "wt%", display: "0.70-1.20", includes: "Ta" },
      Ti: { min: 2.25, max: 2.75, unit: "wt%", display: "2.25-2.75" },
      Al: { min: 0.4, max: 1, unit: "wt%", display: "0.40-1.00" },
      C: { max: 0.08, unit: "wt%", display: "0.08 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Common Alloy X-750 composition range",
        url: "https://en.wikipedia.org/wiki/Inconel",
        checkedAt: "2026-06-13",
        notes: "Use as reference seed until an official manufacturer PDF is confirmed."
      }
    ]
  },
  {
    id: "waspaloy",
    name: "Waspaloy",
    aliases: ["UNS N07001"],
    family: "Ni基スーパーアロイ",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18, max: 21, unit: "wt%", display: "18.0-21.0" },
      Co: { min: 12, max: 15, unit: "wt%", display: "12.0-15.0" },
      Mo: { min: 3.5, max: 5, unit: "wt%", display: "3.5-5.0" },
      Ti: { min: 2.75, max: 3.25, unit: "wt%", display: "2.75-3.25" },
      Al: { min: 1.2, max: 1.6, unit: "wt%", display: "1.2-1.6" },
      Fe: { max: 2, unit: "wt%", display: "2.0 max" },
      C: { min: 0.02, max: 0.1, unit: "wt%", display: "0.02-0.10" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Common Waspaloy composition range",
        url: "https://en.wikipedia.org/wiki/Waspaloy",
        checkedAt: "2026-06-13",
        notes: "Use as reference seed until current official source is confirmed."
      }
    ]
  }
];
```

- [x] **Step 2: Verify module syntax**

Open `http://localhost:8000/src/data/alloys.js` in the browser.

Expected: browser displays JavaScript text without a 404.

- [x] **Step 3: Commit**

```bash
git add src/data/alloys.js
git commit -m "feat: add seed superalloy data"
```

## Task 3: Search Logic With Range Overlap Tests

**Files:**
- Create: `src/search.js`
- Create: `tests/search-tests.html`

- [ ] **Step 1: Write browser tests first**

Write `tests/search-tests.html`:

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>Search Logic Tests</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; }
    .pass { color: #0f7f7a; }
    .fail { color: #b94c35; }
  </style>
</head>
<body>
  <h1>Search Logic Tests</h1>
  <pre id="output"></pre>
  <script type="module">
    import { overlapsRange, matchesAlloy, filterAlloys } from "../src/search.js";

    const output = document.querySelector("#output");
    const lines = [];

    function test(name, fn) {
      try {
        fn();
        lines.push(`PASS ${name}`);
      } catch (error) {
        lines.push(`FAIL ${name}: ${error.message}`);
      }
    }

    function assertEqual(actual, expected) {
      if (actual !== expected) {
        throw new Error(`expected ${expected}, got ${actual}`);
      }
    }

    const alloy718 = {
      name: "Inconel 718",
      aliases: ["Alloy 718", "UNS N07718"],
      family: "Ni基",
      elements: {
        Ni: { min: 50, max: 55, display: "50-55" },
        Fe: { kind: "balance", display: "Bal." },
        C: { max: 0.08, display: "0.08 max" }
      },
      sources: [{ type: "official" }]
    };

    test("range overlap matches intersecting ranges", () => {
      assertEqual(overlapsRange({ min: 50, max: 55 }, { min: 54, max: 60 }), true);
    });

    test("range overlap rejects non-intersecting ranges", () => {
      assertEqual(overlapsRange({ min: 50, max: 55 }, { min: 56, max: 60 }), false);
    });

    test("max-only value can match low range", () => {
      assertEqual(overlapsRange({ max: 0.08 }, { min: 0, max: 0.1 }), true);
    });

    test("balance value matches element presence", () => {
      assertEqual(overlapsRange({ kind: "balance" }, { min: 0, max: 100 }), true);
    });

    test("alloy name query matches aliases", () => {
      assertEqual(matchesAlloy(alloy718, { query: "N07718", elementFilters: [], sourceTypes: ["official"] }), true);
    });

    test("source type filter rejects unmatched source type", () => {
      assertEqual(matchesAlloy(alloy718, { query: "", elementFilters: [], sourceTypes: ["reference"] }), false);
    });

    test("element filter matches overlapping composition", () => {
      assertEqual(matchesAlloy(alloy718, {
        query: "",
        sourceTypes: ["official"],
        elementFilters: [{ symbol: "Ni", min: 40, max: 52 }]
      }), true);
    });

    test("filterAlloys returns matching alloys", () => {
      const result = filterAlloys([alloy718], {
        query: "718",
        sourceTypes: ["official"],
        elementFilters: [{ symbol: "Ni", min: 50, max: 55 }]
      });
      assertEqual(result.length, 1);
    });

    output.textContent = lines.join("\\n");
    output.className = lines.some((line) => line.startsWith("FAIL")) ? "fail" : "pass";
  </script>
</body>
</html>
```

- [ ] **Step 2: Run tests and verify they fail**

Open:

```text
http://localhost:8000/tests/search-tests.html
```

Expected: import failure or failing tests because `src/search.js` does not exist yet.

- [ ] **Step 3: Implement search functions**

Write `src/search.js`:

```js
function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function numericMin(composition) {
  if (typeof composition.min === "number") return composition.min;
  if (typeof composition.max === "number") return 0;
  return 0;
}

function numericMax(composition) {
  if (typeof composition.max === "number") return composition.max;
  if (typeof composition.min === "number") return 100;
  return 100;
}

export function overlapsRange(composition, requested) {
  if (!composition) return false;
  if (composition.kind === "balance") return true;

  const alloyMin = numericMin(composition);
  const alloyMax = numericMax(composition);
  const requestedMin = typeof requested.min === "number" ? requested.min : 0;
  const requestedMax = typeof requested.max === "number" ? requested.max : 100;

  return alloyMin <= requestedMax && requestedMin <= alloyMax;
}

export function matchesAlloy(alloy, criteria) {
  const query = normalize(criteria.query);
  const sourceTypes = criteria.sourceTypes || [];
  const elementFilters = criteria.elementFilters || [];

  if (query) {
    const haystack = [alloy.name, alloy.family, ...(alloy.aliases || [])].map(normalize).join(" ");
    if (!haystack.includes(query)) return false;
  }

  if (sourceTypes.length > 0) {
    const hasSource = (alloy.sources || []).some((source) => sourceTypes.includes(source.type));
    if (!hasSource) return false;
  }

  return elementFilters.every((filter) => {
    const composition = alloy.elements[filter.symbol];
    return overlapsRange(composition, filter);
  });
}

export function filterAlloys(alloys, criteria) {
  return alloys.filter((alloy) => matchesAlloy(alloy, criteria));
}
```

- [ ] **Step 4: Run tests and verify they pass**

Open:

```text
http://localhost:8000/tests/search-tests.html
```

Expected: all lines begin with `PASS`.

- [ ] **Step 5: Commit**

```bash
git add src/search.js tests/search-tests.html
git commit -m "feat: add alloy search logic"
```

## Task 4: Render Table, Cards, And Detail Dialog

**Files:**
- Create: `src/render.js`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement rendering functions**

Write `src/render.js`:

```js
import { ELEMENT_COLUMNS, SOURCE_LABELS } from "./data/alloys.js";

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

export function sourceRank(alloy) {
  const types = new Set((alloy.sources || []).map((source) => source.type));
  if (types.has("official")) return "official";
  if (types.has("reference")) return "reference";
  return "unverified";
}

export function formatElement(alloy, symbol) {
  const value = alloy.elements[symbol];
  return value ? value.display : "-";
}

export function renderTableHead(container) {
  container.innerHTML = [
    "<th>合金</th>",
    "<th>系統</th>",
    ...ELEMENT_COLUMNS.map((symbol) => `<th>${symbol}</th>`),
    "<th>出典</th>"
  ].join("");
}

export function renderTableBody(container, alloys, onSelect) {
  container.innerHTML = alloys.map((alloy) => {
    const rank = sourceRank(alloy);
    const cells = ELEMENT_COLUMNS.map((symbol) => `<td>${escapeHtml(formatElement(alloy, symbol))}</td>`).join("");
    return `
      <tr>
        <td><button class="link-button" type="button" data-alloy-id="${escapeHtml(alloy.id)}">${escapeHtml(alloy.name)}</button></td>
        <td>${escapeHtml(alloy.family)}</td>
        ${cells}
        <td><span class="source-badge ${rank}">${SOURCE_LABELS[rank]}</span></td>
      </tr>
    `;
  }).join("");

  container.querySelectorAll("[data-alloy-id]").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.alloyId));
  });
}

export function renderCards(container, alloys, onSelect) {
  container.innerHTML = alloys.map((alloy) => {
    const rank = sourceRank(alloy);
    const keyElements = ELEMENT_COLUMNS
      .filter((symbol) => alloy.elements[symbol])
      .slice(0, 5)
      .map((symbol) => `<span><strong>${symbol}</strong> ${escapeHtml(formatElement(alloy, symbol))}</span>`)
      .join("");

    return `
      <article class="alloy-card">
        <div class="card-title-row">
          <div>
            <h3>${escapeHtml(alloy.name)}</h3>
            <p>${escapeHtml(alloy.family)}</p>
          </div>
          <span class="source-badge ${rank}">${SOURCE_LABELS[rank]}</span>
        </div>
        <div class="element-pills">${keyElements}</div>
        <button type="button" data-alloy-id="${escapeHtml(alloy.id)}">詳細を見る</button>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-alloy-id]").forEach((button) => {
    button.addEventListener("click", () => onSelect(button.dataset.alloyId));
  });
}

export function renderDetail(container, alloy) {
  const elementRows = ELEMENT_COLUMNS
    .filter((symbol) => alloy.elements[symbol])
    .map((symbol) => {
      const value = alloy.elements[symbol];
      const note = value.includes ? ` (${escapeHtml(value.includes)}含む)` : "";
      return `<tr><th>${symbol}</th><td>${escapeHtml(value.display)}${note}</td></tr>`;
    })
    .join("");

  const sourceRows = (alloy.sources || []).map((source) => `
    <li>
      <span class="source-badge ${escapeHtml(source.type)}">${escapeHtml(SOURCE_LABELS[source.type] || source.type)}</span>
      <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.title)}</a>
      <p>${escapeHtml(source.company)} / 確認日: ${escapeHtml(source.checkedAt)}</p>
      <p>${escapeHtml(source.notes)}</p>
    </li>
  `).join("");

  container.innerHTML = `
    <div class="detail-body">
      <h2>${escapeHtml(alloy.name)}</h2>
      <p class="muted">${escapeHtml(alloy.family)} / ${escapeHtml((alloy.aliases || []).join(", "))}</p>
      <h3>成分</h3>
      <table class="detail-table"><tbody>${elementRows}</tbody></table>
      <h3>出典</h3>
      <ul class="source-list">${sourceRows}</ul>
    </div>
  `;
}
```

- [ ] **Step 2: Add rendering styles**

Append to `src/styles.css`:

```css
.link-button {
  padding: 0;
  background: transparent;
  color: var(--accent);
  text-align: left;
}

.source-badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 700;
}

.source-badge.official {
  background: #e7f5f3;
  color: #0f6f6b;
}

.source-badge.reference {
  background: #fff4d8;
  color: #8a620d;
}

.source-badge.unverified {
  background: #fbe8e3;
  color: #963b29;
}

.alloy-card {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 14px;
  background: #fff;
}

.card-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.alloy-card h3 {
  margin: 0 0 4px;
}

.alloy-card p {
  margin: 0;
  color: var(--muted);
}

.element-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 12px 0;
}

.element-pills span {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 5px 8px;
  font-size: 12px;
}

.detail-body {
  padding: 22px;
}

.muted {
  color: var(--muted);
}

.detail-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 18px;
}

.detail-table th,
.detail-table td {
  border-bottom: 1px solid var(--line);
  padding: 9px;
  text-align: left;
}

.source-list {
  display: grid;
  gap: 14px;
  padding-left: 18px;
}

.source-list p {
  margin: 5px 0 0;
  color: var(--muted);
}
```

- [ ] **Step 3: Commit**

```bash
git add src/render.js src/styles.css
git commit -m "feat: render alloy results"
```

## Task 5: Draggable Element Range Filters

**Files:**
- Modify: `src/app.js`
- Modify: `src/styles.css`

- [ ] **Step 1: Implement app wiring and dual range controls**

Write `src/app.js`:

```js
import { alloys, ELEMENT_COLUMNS } from "./data/alloys.js";
import { filterAlloys } from "./search.js";
import { renderCards, renderDetail, renderTableBody, renderTableHead } from "./render.js";

const state = {
  query: "",
  sourceTypes: ["official", "reference", "unverified"],
  elementFilters: []
};

const queryInput = document.querySelector("#queryInput");
const elementSelect = document.querySelector("#elementSelect");
const addElementFilter = document.querySelector("#addElementFilter");
const elementFilters = document.querySelector("#elementFilters");
const tableHead = document.querySelector("#tableHead");
const tableBody = document.querySelector("#tableBody");
const cardResults = document.querySelector("#cardResults");
const resultCount = document.querySelector("#resultCount");
const dialog = document.querySelector("#alloyDialog");
const closeDialog = document.querySelector("#closeDialog");
const dialogContent = document.querySelector("#dialogContent");

function initElementOptions() {
  elementSelect.innerHTML = ELEMENT_COLUMNS
    .map((symbol) => `<option value="${symbol}">${symbol}</option>`)
    .join("");
}

function selectedSourceTypes() {
  return [...document.querySelectorAll("input[name='sourceType']:checked")].map((input) => input.value);
}

function clampRange(filter) {
  filter.min = Math.max(0, Math.min(100, Number(filter.min)));
  filter.max = Math.max(0, Math.min(100, Number(filter.max)));
  if (filter.min > filter.max) {
    const midpoint = filter.min;
    filter.min = filter.max;
    filter.max = midpoint;
  }
}

function renderElementFilters() {
  elementFilters.innerHTML = state.elementFilters.map((filter, index) => `
    <div class="range-filter" data-index="${index}">
      <div class="range-filter-header">
        <strong>${filter.symbol}</strong>
        <button type="button" data-remove="${index}">削除</button>
      </div>
      <div class="range-values">
        <label><span>最小%</span><input type="number" min="0" max="100" step="0.1" value="${filter.min}" data-min="${index}"></label>
        <label><span>最大%</span><input type="number" min="0" max="100" step="0.1" value="${filter.max}" data-max="${index}"></label>
      </div>
      <div class="dual-range" style="--min:${filter.min}; --max:${filter.max}">
        <input type="range" min="0" max="100" step="0.1" value="${filter.min}" data-min-range="${index}" aria-label="${filter.symbol} 最小値">
        <input type="range" min="0" max="100" step="0.1" value="${filter.max}" data-max-range="${index}" aria-label="${filter.symbol} 最大値">
      </div>
    </div>
  `).join("");
}

function readCriteria() {
  state.query = queryInput.value;
  state.sourceTypes = selectedSourceTypes();
  return state;
}

function showDetail(alloyId) {
  const alloy = alloys.find((item) => item.id === alloyId);
  if (!alloy) return;
  renderDetail(dialogContent, alloy);
  dialog.showModal();
}

function render() {
  const criteria = readCriteria();
  const filtered = filterAlloys(alloys, criteria);
  resultCount.textContent = `${filtered.length}件`;
  renderTableHead(tableHead);
  renderTableBody(tableBody, filtered, showDetail);
  renderCards(cardResults, filtered, showDetail);
}

function updateFilter(index, key, value) {
  const filter = state.elementFilters[index];
  if (!filter) return;
  filter[key] = Number(value);
  clampRange(filter);
  renderElementFilters();
  bindRangeEvents();
  render();
}

function bindRangeEvents() {
  elementFilters.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.elementFilters.splice(Number(button.dataset.remove), 1);
      renderElementFilters();
      bindRangeEvents();
      render();
    });
  });

  elementFilters.querySelectorAll("[data-min], [data-min-range]").forEach((input) => {
    input.addEventListener("input", () => updateFilter(Number(input.dataset.min ?? input.dataset.minRange), "min", input.value));
  });

  elementFilters.querySelectorAll("[data-max], [data-max-range]").forEach((input) => {
    input.addEventListener("input", () => updateFilter(Number(input.dataset.max ?? input.dataset.maxRange), "max", input.value));
  });
}

queryInput.addEventListener("input", render);

document.querySelectorAll("input[name='sourceType']").forEach((input) => {
  input.addEventListener("change", render);
});

addElementFilter.addEventListener("click", () => {
  const symbol = elementSelect.value;
  if (state.elementFilters.some((filter) => filter.symbol === symbol)) return;
  state.elementFilters.push({ symbol, min: 0, max: 100 });
  renderElementFilters();
  bindRangeEvents();
  render();
});

closeDialog.addEventListener("click", () => dialog.close());

initElementOptions();
renderTableHead(tableHead);
render();
```

- [ ] **Step 2: Add dual range styles**

Append to `src/styles.css`:

```css
.element-filters {
  display: grid;
  gap: 12px;
}

.range-filter {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px;
  background: #f9fafb;
}

.range-filter-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}

.range-filter-header button {
  background: #e8edf2;
  color: var(--ink);
  padding: 6px 9px;
}

.range-values {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
}

.range-values input {
  padding: 8px;
}

.dual-range {
  position: relative;
  height: 34px;
  background:
    linear-gradient(
      to right,
      #dfe7ee 0%,
      #dfe7ee calc(var(--min) * 1%),
      var(--accent) calc(var(--min) * 1%),
      var(--accent) calc(var(--max) * 1%),
      #dfe7ee calc(var(--max) * 1%),
      #dfe7ee 100%
    );
  border-radius: 999px;
}

.dual-range input[type="range"] {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 34px;
  margin: 0;
  padding: 0;
  appearance: none;
  background: transparent;
  pointer-events: none;
}

.dual-range input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 22px;
  height: 22px;
  border: 3px solid #fff;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  pointer-events: auto;
}

.dual-range input[type="range"]::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border: 3px solid #fff;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  pointer-events: auto;
}
```

- [ ] **Step 3: Manual verification**

Open:

```text
http://localhost:8000/
```

Verify:

- Select `Ni`, click `元素条件を追加`, drag the handles to `50-60`.
- Result count includes Inconel 718 and Inconel 625.
- Change max to `54`; Inconel 718 remains because ranges overlap.
- Change min to `56`; Inconel 718 is removed.
- Search `N07718`; only Inconel 718 remains.
- Uncheck `公式`; Inconel 718 is removed.

- [ ] **Step 4: Commit**

```bash
git add src/app.js src/styles.css
git commit -m "feat: add draggable element filters"
```

## Task 6: Responsive Polish And Accessibility

**Files:**
- Modify: `src/styles.css`
- Modify: `index.html`

- [ ] **Step 1: Improve mobile layout and focus states**

Append to `src/styles.css`:

```css
button:focus-visible,
input:focus-visible,
select:focus-visible {
  outline: 3px solid rgba(15, 127, 122, 0.28);
  outline-offset: 2px;
}

tr:hover td {
  background: #fbfcfd;
}

@media (max-width: 560px) {
  .site-header {
    padding: 22px 16px;
  }

  .app-shell {
    padding: 14px 10px 28px;
  }

  .filters,
  .results {
    border-radius: 8px;
  }

  .results-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .range-values {
    grid-template-columns: 1fr;
  }

  .card-title-row {
    flex-direction: column;
  }

  .alloy-dialog {
    width: calc(100vw - 18px);
  }

  .detail-body {
    padding: 18px;
  }
}
```

- [ ] **Step 2: Verify desktop and smartphone screenshots**

Open desktop:

```text
http://localhost:8000/
```

Set browser viewport to smartphone width around `390x844` and verify:

- Filter panel appears above results.
- Table is hidden.
- Cards are visible.
- Slider handles are large enough to drag.
- Text does not overlap.

- [ ] **Step 3: Commit**

```bash
git add src/styles.css index.html
git commit -m "style: polish responsive alloy search UI"
```

## Task 7: Final Verification And Handoff

**Files:**
- No required source changes unless verification finds issues.

- [ ] **Step 1: Run search logic tests**

Open:

```text
http://localhost:8000/tests/search-tests.html
```

Expected: all test lines begin with `PASS`.

- [ ] **Step 2: Verify app behavior**

Open:

```text
http://localhost:8000/
```

Verify:

- Search by `718` returns Inconel 718.
- Search by `UNS N07718` returns Inconel 718.
- `Ni 50-55` range returns Inconel 718.
- `Cr 18-21` range returns Inconel 718, Inconel 625, and Waspaloy.
- Clicking an alloy opens the detail dialog.
- Source badges display `公式` or `参考`.
- Source links open in a new tab.

- [ ] **Step 3: Capture screenshots**

Capture:

- Desktop screenshot of the comparison table.
- Smartphone-width screenshot of result cards and range filter.

Save screenshots under:

```text
mockups/final-desktop.png
mockups/final-mobile.png
```

- [ ] **Step 4: Check Git status**

Run:

```bash
git status --short
```

Expected: no unexpected uncommitted source changes. Screenshot files may be untracked if they are only deliverables.

- [ ] **Step 5: Final response**

Report:

- Local preview URL.
- Test result.
- Screenshot paths.
- Any known data limitations, especially which seed alloy entries still use reference sources instead of official manufacturer documents.
