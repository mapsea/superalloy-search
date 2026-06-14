# Multilingual Language Switcher Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Japanese, Simplified Chinese, and English language switcher that localizes the UI and all displayed alloy content.

**Architecture:** Keep `data/alloys.csv` as the source of truth and add language-specific columns for display fields. `scripts/build-data.py` generates a `localized` object on each alloy, while the frontend resolves the active language through a small `src/i18n.js` module and passes localization helpers into render/search functions.

**Tech Stack:** Static HTML, ES modules, CSS, Python CSV build script, browser-based HTML tests.

---

## File Structure

- Modify `index.html`: add header language selector markup hooks and replace hard-coded text nodes with IDs/data attributes that app code can localize.
- Create `src/i18n.js`: supported language definitions, UI strings, source labels, language persistence helpers, and localized alloy/source lookup helpers.
- Modify `src/app.js`: add `state.language`, bind the selector, localize static UI, pass language to search and render helpers, and preserve filters during language changes.
- Modify `src/render.js`: accept localization helpers and use localized alloy fields, source labels, and UI strings.
- Modify `src/search.js`: search active-language fields plus aliases/base Japanese fallback.
- Modify `src/data/constants.js`: export language-aware source labels or stop using the old single-language `SOURCE_LABELS`.
- Modify `scripts/build-data.py`: require multilingual CSV columns, infer missing generated values before localization validation, and emit `localized`.
- Modify `data/alloys.csv`: add multilingual columns and populate English/Simplified Chinese values for all 500 rows.
- Regenerate `src/data/generated/alloys.js` with `python3 scripts/build-data.py`.
- Modify `tests/data-tests.html`: validate localized data shape and localized source labels.
- Modify `tests/search-tests.html`: validate language-aware search.
- Create `tests/i18n-tests.html`: validate UI localization helpers and fallback behavior.
- Modify `README.md` and `docs/data-import-workflow.md`: document new multilingual CSV columns.

---

### Task 1: UI Localization Module

**Files:**
- Create: `src/i18n.js`
- Test: `tests/i18n-tests.html`

- [ ] **Step 1: Write the failing test**

Create `tests/i18n-tests.html` with:

```html
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <title>I18n Tests</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; }
    .pass { color: #0f7f7a; }
    .fail { color: #b94c35; }
  </style>
</head>
<body>
  <h1>I18n Tests</h1>
  <pre id="output"></pre>
  <script type="module">
    import {
      DEFAULT_LANGUAGE,
      SUPPORTED_LANGUAGES,
      sourceLabel,
      t,
      localizedAlloy,
      localizedSourceNotes
    } from "../src/i18n.js";

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

    function assert(condition, message) {
      if (!condition) throw new Error(message);
    }

    const alloy = {
      name: "日本語合金",
      category: "スーパーアロイ",
      usage: "熱処理炉",
      properties: "高温環境向け合金。",
      representativeMakers: "大同特殊鋼",
      japaneseMakers: "大同特殊鋼",
      localized: {
        ja: {
          name: "日本語合金",
          category: "スーパーアロイ",
          family: "スーパーアロイ",
          usage: "熱処理炉",
          properties: "高温環境向け合金。",
          representativeMakers: "大同特殊鋼",
          japaneseMakers: "大同特殊鋼",
          sourceNotes: "確認済み。"
        },
        en: {
          name: "Japanese Alloy",
          category: "Superalloy",
          family: "Superalloy",
          usage: "Heat-treatment furnaces",
          properties: "Alloy for high-temperature environments.",
          representativeMakers: "Daido Steel",
          japaneseMakers: "Daido Steel",
          sourceNotes: "Verified."
        }
      }
    };

    test("exports supported languages", () => {
      assertEqual(DEFAULT_LANGUAGE, "ja");
      assertEqual(SUPPORTED_LANGUAGES.length, 3);
      assert(SUPPORTED_LANGUAGES.some((language) => language.code === "zh"), "zh language missing");
      assert(SUPPORTED_LANGUAGES.some((language) => language.code === "en"), "en language missing");
    });

    test("translates UI strings", () => {
      assertEqual(t("ja", "siteTitle"), "スーパーアロイ成分検索");
      assertEqual(t("zh", "siteTitle"), "高温合金成分搜索");
      assertEqual(t("en", "siteTitle"), "Superalloy Composition Search");
      assertEqual(t("en", "missing.key"), "missing.key");
    });

    test("translates source labels", () => {
      assertEqual(sourceLabel("ja", "official"), "公式");
      assertEqual(sourceLabel("zh", "standard"), "标准");
      assertEqual(sourceLabel("en", "reference"), "Reference");
      assertEqual(sourceLabel("en", "unknown"), "Unverified");
    });

    test("returns localized alloy fields with Japanese fallback", () => {
      assertEqual(localizedAlloy(alloy, "en").name, "Japanese Alloy");
      assertEqual(localizedAlloy(alloy, "zh").name, "日本語合金");
      assertEqual(localizedAlloy(alloy, "invalid").usage, "熱処理炉");
    });

    test("returns localized source notes with fallback", () => {
      assertEqual(localizedSourceNotes(alloy, "en"), "Verified.");
      assertEqual(localizedSourceNotes(alloy, "zh"), "確認済み。");
    });

    output.textContent = lines.join("\n");
    output.className = lines.some((line) => line.startsWith("FAIL")) ? "fail" : "pass";
  </script>
</body>
</html>
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `python3 -m http.server 8000`

Open: `http://localhost:8000/tests/i18n-tests.html`

Expected: the page reports `FAIL` because `src/i18n.js` does not exist.

- [ ] **Step 3: Implement the minimal localization module**

Create `src/i18n.js` with:

```js
export const DEFAULT_LANGUAGE = "ja";

export const SUPPORTED_LANGUAGES = [
  { code: "ja", label: "日本語", htmlLang: "ja" },
  { code: "zh", label: "简体中文", htmlLang: "zh-Hans" },
  { code: "en", label: "English", htmlLang: "en" }
];

export const UI_STRINGS = {
  ja: {
    siteEyebrow: "Superalloy Composition Finder",
    siteTitle: "スーパーアロイ成分検索",
    siteLead: "合金名、元素、成分レンジから特殊金属・スーパーアロイを比較できます。",
    languageLabel: "表示言語",
    filtersAriaLabel: "検索条件",
    searchLabel: "合金名・別名",
    searchPlaceholder: "例: Inconel 718, UNS N07718",
    elementLabel: "元素",
    addElementFilter: "元素条件を追加",
    removeFilter: "削除",
    minPercent: "最小%",
    maxPercent: "最大%",
    minAria: "{symbol} 最小値",
    maxAria: "{symbol} 最大値",
    sourceLegend: "出典",
    resultsHeading: "比較結果",
    resultCount: "{count}件",
    tableAlloy: "合金",
    tableUsage: "用途",
    tableSource: "出典",
    detailsButton: "詳細を見る",
    closeDialog: "閉じる",
    propertiesHeading: "特性",
    representativeMakersHeading: "代表メーカー",
    japaneseMakersHeading: "日本の代表メーカー",
    compositionHeading: "成分",
    sourcesHeading: "出典",
    includedElements: " ({value}含む)",
    estimatedNote: "（参考計算）",
    checkedAt: "確認日"
  },
  zh: {
    siteEyebrow: "Superalloy Composition Finder",
    siteTitle: "高温合金成分搜索",
    siteLead: "可按合金名称、元素和成分范围比较特殊金属与高温合金。",
    languageLabel: "显示语言",
    filtersAriaLabel: "搜索条件",
    searchLabel: "合金名称・别名",
    searchPlaceholder: "例: Inconel 718, UNS N07718",
    elementLabel: "元素",
    addElementFilter: "添加元素条件",
    removeFilter: "删除",
    minPercent: "最小%",
    maxPercent: "最大%",
    minAria: "{symbol} 最小值",
    maxAria: "{symbol} 最大值",
    sourceLegend: "来源",
    resultsHeading: "比较结果",
    resultCount: "{count}项",
    tableAlloy: "合金",
    tableUsage: "用途",
    tableSource: "来源",
    detailsButton: "查看详情",
    closeDialog: "关闭",
    propertiesHeading: "特性",
    representativeMakersHeading: "主要制造商",
    japaneseMakersHeading: "日本主要制造商",
    compositionHeading: "成分",
    sourcesHeading: "来源",
    includedElements: "（含{value}）",
    estimatedNote: "（参考计算）",
    checkedAt: "确认日期"
  },
  en: {
    siteEyebrow: "Superalloy Composition Finder",
    siteTitle: "Superalloy Composition Search",
    siteLead: "Compare special metals and superalloys by alloy name, element, and composition range.",
    languageLabel: "Language",
    filtersAriaLabel: "Search filters",
    searchLabel: "Alloy name or alias",
    searchPlaceholder: "e.g. Inconel 718, UNS N07718",
    elementLabel: "Element",
    addElementFilter: "Add element filter",
    removeFilter: "Remove",
    minPercent: "Min %",
    maxPercent: "Max %",
    minAria: "{symbol} minimum",
    maxAria: "{symbol} maximum",
    sourceLegend: "Source",
    resultsHeading: "Comparison Results",
    resultCount: "{count} results",
    tableAlloy: "Alloy",
    tableUsage: "Use",
    tableSource: "Source",
    detailsButton: "View Details",
    closeDialog: "Close",
    propertiesHeading: "Properties",
    representativeMakersHeading: "Representative Makers",
    japaneseMakersHeading: "Representative Japanese Makers",
    compositionHeading: "Composition",
    sourcesHeading: "Sources",
    includedElements: " (includes {value})",
    estimatedNote: " (reference calculation)",
    checkedAt: "Checked"
  }
};

export const SOURCE_LABELS_BY_LANGUAGE = {
  ja: {
    official: "公式",
    standard: "規格",
    reference: "参考",
    unverified: "未確認"
  },
  zh: {
    official: "官方",
    standard: "标准",
    reference: "参考",
    unverified: "未确认"
  },
  en: {
    official: "Official",
    standard: "Standard",
    reference: "Reference",
    unverified: "Unverified"
  }
};

export function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.some((item) => item.code === language) ? language : DEFAULT_LANGUAGE;
}

export function t(language, key, values = {}) {
  const normalized = normalizeLanguage(language);
  const template = UI_STRINGS[normalized][key] ?? UI_STRINGS[DEFAULT_LANGUAGE][key] ?? key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template
  );
}

export function sourceLabel(language, type) {
  const normalized = normalizeLanguage(language);
  const labels = SOURCE_LABELS_BY_LANGUAGE[normalized] ?? SOURCE_LABELS_BY_LANGUAGE[DEFAULT_LANGUAGE];
  return labels[type] ?? labels.unverified;
}

export function localizedAlloy(alloy, language) {
  const normalized = normalizeLanguage(language);
  const fallback = alloy.localized?.ja ?? {
    name: alloy.name,
    category: alloy.category,
    family: alloy.family,
    usage: alloy.usage,
    properties: alloy.properties,
    representativeMakers: alloy.representativeMakers,
    japaneseMakers: alloy.japaneseMakers,
    sourceNotes: ""
  };
  return {
    ...fallback,
    ...(alloy.localized?.[normalized] ?? {})
  };
}

export function localizedSourceNotes(alloy, language) {
  return localizedAlloy(alloy, language).sourceNotes || localizedAlloy(alloy, DEFAULT_LANGUAGE).sourceNotes || "";
}
```

- [ ] **Step 4: Run the test to verify it passes**

Refresh `http://localhost:8000/tests/i18n-tests.html`.

Expected: every line begins with `PASS`.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/i18n.js tests/i18n-tests.html
git commit -m "Add localization helpers"
```

---

### Task 2: Generated Data Localization

**Files:**
- Modify: `scripts/build-data.py`
- Modify: `data/alloys.csv`
- Modify: `src/data/generated/alloys.js`
- Modify: `src/data/constants.js`
- Test: `tests/data-tests.html`

- [ ] **Step 1: Write the failing data test**

In `tests/data-tests.html`, update the import to include language labels:

```js
import { alloys, ELEMENT_COLUMNS, SOURCE_LABELS } from "../src/data/alloys.js";
```

Keep that import and add this test after `exports expected constants`:

```js
test("exports localized source labels", () => {
  assert(SOURCE_LABELS.ja.official === "公式", "Japanese official label missing");
  assert(SOURCE_LABELS.zh.official === "官方", "Chinese official label missing");
  assert(SOURCE_LABELS.en.official === "Official", "English official label missing");
});
```

Add this test after `all alloys have required top-level fields`:

```js
test("all alloys have complete localized display fields", () => {
  const languages = ["ja", "zh", "en"];
  const fields = ["name", "category", "family", "usage", "properties", "representativeMakers", "japaneseMakers", "sourceNotes"];

  alloys.forEach((alloy) => {
    assert(alloy.localized && typeof alloy.localized === "object", `${alloy.id} localized missing`);
    languages.forEach((language) => {
      assert(alloy.localized[language] && typeof alloy.localized[language] === "object", `${alloy.id}.${language} localized missing`);
      fields.forEach((field) => {
        assert(
          typeof alloy.localized[language][field] === "string" && alloy.localized[language][field].length > 0,
          `${alloy.id}.${language}.${field} missing`
        );
      });
    });
  });
});
```

- [ ] **Step 2: Run the data test to verify it fails**

Open: `http://localhost:8000/tests/data-tests.html`

Expected: failures mention `SOURCE_LABELS.ja` or missing `localized`.

- [ ] **Step 3: Update constants for language-aware labels**

Modify `src/data/constants.js` so `SOURCE_LABELS` becomes:

```js
export const SOURCE_LABELS = {
  ja: {
    official: "公式",
    standard: "規格",
    reference: "参考",
    unverified: "未確認"
  },
  zh: {
    official: "官方",
    standard: "标准",
    reference: "参考",
    unverified: "未确认"
  },
  en: {
    official: "Official",
    standard: "Standard",
    reference: "Reference",
    unverified: "Unverified"
  }
};
```

- [ ] **Step 4: Add localized columns to the CSV header**

Modify the `data/alloys.csv` header by inserting these columns after `source_notes`:

```csv
name_en,name_zh,category_en,category_zh,usage_en,usage_zh,properties_en,properties_zh,representative_makers_en,representative_makers_zh,japanese_makers_en,japanese_makers_zh,source_notes_en,source_notes_zh
```

For each row, add values for these columns before the `Ni` element column.

- [ ] **Step 5: Update build-data constants**

In `scripts/build-data.py`, add:

```python
LANGUAGES = ["ja", "zh", "en"]
LOCALIZED_FIELD_COLUMNS = {
    "en": {
        "name": "name_en",
        "category": "category_en",
        "usage": "usage_en",
        "properties": "properties_en",
        "representativeMakers": "representative_makers_en",
        "japaneseMakers": "japanese_makers_en",
        "sourceNotes": "source_notes_en",
    },
    "zh": {
        "name": "name_zh",
        "category": "category_zh",
        "usage": "usage_zh",
        "properties": "properties_zh",
        "representativeMakers": "representative_makers_zh",
        "japaneseMakers": "japanese_makers_zh",
        "sourceNotes": "source_notes_zh",
    },
}
```

Add all column names from `LOCALIZED_FIELD_COLUMNS` to `REQUIRED_COLUMNS`.

- [ ] **Step 6: Add localized fallback helpers to the build script**

In `scripts/build-data.py`, add helper functions before `parse_row`:

```python
def localized_value(row, language, field, fallback):
    if language == "ja":
        return fallback.strip()
    column = LOCALIZED_FIELD_COLUMNS[language][field]
    return (row.get(column) or "").strip() or fallback.strip()


def localized_family(language, alloy_id, category_value):
    if language == "ja":
        return LEGACY_FAMILIES.get(alloy_id, category_value)
    return category_value


def build_localized(row, alloy_id, base_values):
    localized = {}
    for language in LANGUAGES:
        category = localized_value(row, language, "category", base_values["category"])
        localized[language] = {
            "name": localized_value(row, language, "name", base_values["name"]),
            "category": category,
            "family": localized_family(language, alloy_id, category),
            "usage": localized_value(row, language, "usage", base_values["usage"]),
            "properties": localized_value(row, language, "properties", base_values["properties"]),
            "representativeMakers": localized_value(row, language, "representativeMakers", base_values["representativeMakers"]),
            "japaneseMakers": localized_value(row, language, "japaneseMakers", base_values["japaneseMakers"]),
            "sourceNotes": localized_value(row, language, "sourceNotes", base_values["sourceNotes"]),
        }

    for language, fields in localized.items():
        for field, value in fields.items():
            if not value:
                fail(f"{alloy_id}: localized.{language}.{field} is required")
    return localized
```

- [ ] **Step 7: Attach localized data in `parse_row`**

In `parse_row`, after inferred values are computed, define:

```python
    base_values = {
        "name": name,
        "category": category,
        "usage": usage,
        "properties": properties,
        "representativeMakers": representative_makers,
        "japaneseMakers": japanese_makers,
        "sourceNotes": row["source_notes"].strip(),
    }
    localized = build_localized(row, alloy_id, base_values)
```

Then add `"localized": localized,` to the returned object.

- [ ] **Step 8: Populate multilingual CSV fields**

Populate all new CSV columns. Use domain-specific deterministic translations for repeated categories/usages/properties and preserve official English alloy names. For Japanese-only alloy names, provide English and Simplified Chinese display names in `name_en` and `name_zh`.

Minimum rules:

```text
スーパーアロイ -> Superalloy / 高温合金
耐熱鋼 -> Heat-resistant steel / 耐热钢
ステンレス鋼 -> Stainless steel / 不锈钢
工具鋼 -> Tool steel / 工具钢
炭素鋼 -> Carbon steel / 碳素钢
化学装置 -> chemical equipment / 化工设备
ガスタービン -> gas turbines / 燃气轮机
熱処理炉 -> heat-treatment furnaces / 热处理炉
高温環境向け合金。 -> Alloy for high-temperature environments. / 面向高温环境的合金。
```

If many rows share inferred Japanese templates from `infer_properties`, translate those templates once and apply the translation consistently.

- [ ] **Step 9: Regenerate generated data**

Run:

```bash
python3 scripts/build-data.py
```

Expected: `Generated src/data/generated/alloys.js from 500 records.`

- [ ] **Step 10: Run the data test to verify it passes**

Refresh `http://localhost:8000/tests/data-tests.html`.

Expected: every line begins with `PASS`.

- [ ] **Step 11: Commit**

Run:

```bash
git add scripts/build-data.py data/alloys.csv src/data/constants.js src/data/generated/alloys.js tests/data-tests.html
git commit -m "Add localized alloy data"
```

---

### Task 3: Language-Aware Search

**Files:**
- Modify: `src/search.js`
- Test: `tests/search-tests.html`

- [ ] **Step 1: Write the failing search tests**

In `tests/search-tests.html`, add this test after `alloy text query matches usage`:

```js
test("active language query matches localized usage", () => {
  const alloy = {
    name: "Example Alloy",
    aliases: [],
    category: "スーパーアロイ",
    usage: "熱処理炉",
    elements: {},
    sources: [{ type: "official" }],
    localized: {
      ja: {
        name: "Example Alloy",
        category: "スーパーアロイ",
        family: "スーパーアロイ",
        usage: "熱処理炉",
        properties: "高温環境向け合金。"
      },
      en: {
        name: "Example Alloy",
        category: "Superalloy",
        family: "Superalloy",
        usage: "heat-treatment furnaces",
        properties: "Alloy for high-temperature environments."
      },
      zh: {
        name: "Example Alloy",
        category: "高温合金",
        family: "高温合金",
        usage: "热处理炉",
        properties: "面向高温环境的合金。"
      }
    }
  };

  assert(matchesAlloy(alloy, { query: "heat-treatment", language: "en" }), "English usage should be searchable");
  assert(matchesAlloy(alloy, { query: "热处理", language: "zh" }), "Chinese usage should be searchable");
});
```

Add this test after it:

```js
test("Japanese fallback query still works in another active language", () => {
  const alloy = {
    name: "Example Alloy",
    aliases: [],
    category: "スーパーアロイ",
    usage: "熱処理炉",
    elements: {},
    sources: [{ type: "official" }],
    localized: {
      ja: {
        name: "Example Alloy",
        category: "スーパーアロイ",
        family: "スーパーアロイ",
        usage: "熱処理炉",
        properties: "高温環境向け合金。"
      },
      en: {
        name: "Example Alloy",
        category: "Superalloy",
        family: "Superalloy",
        usage: "heat-treatment furnaces",
        properties: "Alloy for high-temperature environments."
      }
    }
  };

  assert(matchesAlloy(alloy, { query: "熱処理", language: "en" }), "Japanese fallback should remain searchable");
});
```

- [ ] **Step 2: Run the search test to verify it fails**

Open: `http://localhost:8000/tests/search-tests.html`

Expected: the active language query test fails.

- [ ] **Step 3: Implement language-aware search**

Modify `src/search.js` to import `localizedAlloy`:

```js
import { localizedAlloy } from "./i18n.js";
```

Replace the query haystack block in `matchesAlloy` with:

```js
  if (query) {
    const language = criteria.language || "ja";
    const active = localizedAlloy(alloy, language);
    const fallback = localizedAlloy(alloy, "ja");
    const haystack = [
      alloy.id,
      alloy.name,
      alloy.family,
      alloy.category,
      alloy.usage,
      active.name,
      active.family,
      active.category,
      active.usage,
      active.properties,
      fallback.name,
      fallback.family,
      fallback.category,
      fallback.usage,
      fallback.properties,
      ...(alloy.aliases || [])
    ]
      .map(normalize)
      .join(" ");
    if (!haystack.includes(query)) return false;
  }
```

- [ ] **Step 4: Run the search test to verify it passes**

Refresh `http://localhost:8000/tests/search-tests.html`.

Expected: every line begins with `PASS`.

- [ ] **Step 5: Commit**

Run:

```bash
git add src/search.js tests/search-tests.html
git commit -m "Search localized alloy fields"
```

---

### Task 4: Render Localized Content

**Files:**
- Modify: `src/render.js`
- Test: `tests/i18n-tests.html`

- [ ] **Step 1: Add render-focused failing tests**

In `tests/i18n-tests.html`, add this import:

```js
import { renderDetail, renderTableBody, renderTableHead } from "../src/render.js";
```

Add this test before the output assignment:

```js
test("renders localized table and detail content", () => {
  const head = document.createElement("tr");
  renderTableHead(head, "en");
  assert(head.textContent.includes("Alloy"), "English table header missing");
  assert(head.textContent.includes("Source"), "English source header missing");

  const body = document.createElement("tbody");
  renderTableBody(body, [{
    id: "example",
    name: "日本語合金",
    aliases: [],
    category: "スーパーアロイ",
    usage: "熱処理炉",
    elements: { Ni: { min: 50, max: 55, display: "50-55" } },
    sources: [{ type: "official" }],
    localized: {
      ja: {
        name: "日本語合金",
        category: "スーパーアロイ",
        family: "スーパーアロイ",
        usage: "熱処理炉",
        properties: "高温環境向け合金。",
        representativeMakers: "大同特殊鋼",
        japaneseMakers: "大同特殊鋼",
        sourceNotes: "確認済み。"
      },
      en: {
        name: "Japanese Alloy",
        category: "Superalloy",
        family: "Superalloy",
        usage: "Heat-treatment furnaces",
        properties: "Alloy for high-temperature environments.",
        representativeMakers: "Daido Steel",
        japaneseMakers: "Daido Steel",
        sourceNotes: "Verified."
      }
    }
  }], () => {}, "en");
  assert(body.textContent.includes("Japanese Alloy"), "English alloy name missing");
  assert(body.textContent.includes("Official"), "English source label missing");

  const detail = document.createElement("div");
  renderDetail(detail, {
    id: "example",
    name: "日本語合金",
    aliases: [],
    category: "スーパーアロイ",
    usage: "熱処理炉",
    properties: "高温環境向け合金。",
    representativeMakers: "大同特殊鋼",
    japaneseMakers: "大同特殊鋼",
    elements: { Ni: { min: 50, max: 55, display: "50-55" } },
    sources: [{
      type: "official",
      company: "Example Maker",
      title: "Example source",
      url: "https://example.com",
      checkedAt: "2026-06-14",
      notes: "確認済み。"
    }],
    localized: {
      ja: {
        name: "日本語合金",
        category: "スーパーアロイ",
        family: "スーパーアロイ",
        usage: "熱処理炉",
        properties: "高温環境向け合金。",
        representativeMakers: "大同特殊鋼",
        japaneseMakers: "大同特殊鋼",
        sourceNotes: "確認済み。"
      },
      en: {
        name: "Japanese Alloy",
        category: "Superalloy",
        family: "Superalloy",
        usage: "Heat-treatment furnaces",
        properties: "Alloy for high-temperature environments.",
        representativeMakers: "Daido Steel",
        japaneseMakers: "Daido Steel",
        sourceNotes: "Verified."
      }
    }
  }, "en");
  assert(detail.textContent.includes("Properties"), "English detail heading missing");
  assert(detail.textContent.includes("Verified."), "English source note missing");
});
```

- [ ] **Step 2: Run the i18n test to verify it fails**

Open: `http://localhost:8000/tests/i18n-tests.html`

Expected: failures mention missing localized render output because render functions do not accept a language argument yet.

- [ ] **Step 3: Update render imports**

Modify the top of `src/render.js`:

```js
import { ELEMENT_COLUMNS } from "./data/alloys.js?v=20260614h";
import { localizedAlloy, localizedSourceNotes, sourceLabel, t } from "./i18n.js";
```

- [ ] **Step 4: Update source labels and table head**

Replace `renderTableHead` with:

```js
export function renderTableHead(container, language = "ja") {
  container.innerHTML = [
    `<th scope="col">${escapeHtml(t(language, "tableAlloy"))}</th>`,
    `<th scope="col">${escapeHtml(t(language, "tableUsage"))}</th>`,
    ...ELEMENT_COLUMNS.map((symbol) => `<th scope="col">${escapeHtml(symbol)}</th>`),
    `<th scope="col">${escapeHtml(t(language, "tableSource"))}</th>`
  ].join("");
}
```

- [ ] **Step 5: Update table/card/detail render functions**

In `renderTableBody`, add `language = "ja"` as the fourth parameter and use:

```js
const localized = localizedAlloy(alloy, language);
```

Then render `localized.name`, `localized.usage`, and `sourceLabel(language, rank)`.

In `renderCards`, add `language = "ja"` as the fourth parameter and use `localized.name`, `localized.usage`, `sourceLabel(language, rank)`, and `t(language, "detailsButton")`.

In `renderDetail`, add `language = "ja"` as the third parameter. Use:

```js
const localized = localizedAlloy(alloy, language);
const aliases = (alloy.aliases || []).join(", ");
const detailMeta = [localized.usage, localized.category, aliases].filter(Boolean).join(" / ");
```

Use `localized.properties`, `localized.representativeMakers`, and `localized.japaneseMakers`. Replace hard-coded headings with `t(language, "...")`. Replace source badges with `sourceLabel(language, type)`. Replace source notes with `localizedSourceNotes(alloy, language)` when present, otherwise `source.notes`.

- [ ] **Step 6: Run the i18n test to verify it passes**

Refresh `http://localhost:8000/tests/i18n-tests.html`.

Expected: every line begins with `PASS`.

- [ ] **Step 7: Run existing search/data tests**

Refresh:

- `http://localhost:8000/tests/search-tests.html`
- `http://localhost:8000/tests/data-tests.html`

Expected: every line begins with `PASS`.

- [ ] **Step 8: Commit**

Run:

```bash
git add src/render.js tests/i18n-tests.html
git commit -m "Render localized alloy content"
```

---

### Task 5: Language Selector App Integration

**Files:**
- Modify: `index.html`
- Modify: `src/app.js`
- Modify: `src/styles.css`
- Test: `tests/i18n-tests.html`

- [ ] **Step 1: Add app integration test**

In `tests/i18n-tests.html`, add this test before the output assignment:

```js
test("translation templates format result counts and aria labels", () => {
  assertEqual(t("ja", "resultCount", { count: 3 }), "3件");
  assertEqual(t("zh", "resultCount", { count: 3 }), "3项");
  assertEqual(t("en", "resultCount", { count: 3 }), "3 results");
  assertEqual(t("en", "minAria", { symbol: "Ni" }), "Ni minimum");
});
```

- [ ] **Step 2: Run the i18n test**

Open: `http://localhost:8000/tests/i18n-tests.html`

Expected: every line begins with `PASS`.

- [ ] **Step 3: Add language selector markup**

Modify `index.html` header to:

```html
<header class="site-header">
  <div>
    <p class="eyebrow" data-i18n="siteEyebrow">Superalloy Composition Finder</p>
    <h1 data-i18n="siteTitle">スーパーアロイ成分検索</h1>
    <p class="lead" data-i18n="siteLead">合金名、元素、成分レンジから特殊金属・スーパーアロイを比較できます。</p>
  </div>
  <label class="language-switcher">
    <span data-i18n="languageLabel">表示言語</span>
    <select id="languageSelect"></select>
  </label>
</header>
```

Add `data-i18n` attributes to existing labels/buttons/headings where possible:

```html
<section class="filters" aria-label="検索条件" data-i18n-aria-label="filtersAriaLabel">
<span data-i18n="searchLabel">合金名・別名</span>
<input id="queryInput" type="search" placeholder="例: Inconel 718, UNS N07718" data-i18n-placeholder="searchPlaceholder">
<span data-i18n="elementLabel">元素</span>
<button id="addElementFilter" type="button" data-i18n="addElementFilter">元素条件を追加</button>
<legend data-i18n="sourceLegend">出典</legend>
<h2 data-i18n="resultsHeading">比較結果</h2>
```

Add `data-source-type-label` spans around source labels:

```html
<label><input type="checkbox" name="sourceType" value="official" checked> <span data-source-type-label="official">公式</span></label>
```

Repeat for `standard`, `reference`, and `unverified`.

- [ ] **Step 4: Bind language state in app**

Modify `src/app.js` imports:

```js
import {
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
  normalizeLanguage,
  sourceLabel,
  t
} from "./i18n.js";
```

Add to `state`:

```js
language: normalizeLanguage(localStorage.getItem("superalloy-language") || DEFAULT_LANGUAGE),
```

Add:

```js
const languageSelect = document.querySelector("#languageSelect");
```

- [ ] **Step 5: Add language UI helpers in app**

Add these functions to `src/app.js`:

```js
function initLanguageOptions() {
  languageSelect.innerHTML = SUPPORTED_LANGUAGES
    .map((language) => `<option value="${language.code}">${language.label}</option>`)
    .join("");
  languageSelect.value = state.language;
}

function applyStaticTranslations() {
  document.documentElement.lang = SUPPORTED_LANGUAGES.find((language) => language.code === state.language)?.htmlLang || "ja";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(state.language, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(state.language, element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(state.language, element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-source-type-label]").forEach((element) => {
    element.textContent = sourceLabel(state.language, element.dataset.sourceTypeLabel);
  });

  closeDialog.setAttribute("aria-label", t(state.language, "closeDialog"));
}
```

- [ ] **Step 6: Use language in existing app render flow**

In `renderElementFilters`, replace hard-coded text with `t(state.language, ...)`:

```js
<button type="button" data-remove="${index}">${t(state.language, "removeFilter")}</button>
<label><span>${t(state.language, "minPercent")}</span><input ...></label>
<label><span>${t(state.language, "maxPercent")}</span><input ...></label>
aria-label="${t(state.language, "minAria", { symbol: filter.symbol })}"
aria-label="${t(state.language, "maxAria", { symbol: filter.symbol })}"
```

In `readCriteria`, include:

```js
language: state.language,
```

In `showDetail`, call:

```js
renderDetail(dialogContent, alloy, state.language);
```

In `render`, set:

```js
resultCount.textContent = t(state.language, "resultCount", { count: filtered.length });
renderTableHead(tableHead, state.language);
renderTableBody(tableBody, filtered, showDetail, state.language);
renderCards(cardResults, filtered, showDetail, state.language);
```

- [ ] **Step 7: Bind selector event**

Add:

```js
languageSelect.addEventListener("change", () => {
  state.language = normalizeLanguage(languageSelect.value);
  localStorage.setItem("superalloy-language", state.language);
  applyStaticTranslations();
  renderElementFilters();
  bindRangeEvents();
  render();
});
```

At startup, call in this order:

```js
initLanguageOptions();
applyStaticTranslations();
initElementOptions();
renderElementFilters();
bindRangeEvents();
render();
```

Keep `renderElementFilters()` harmless when there are no active filters.

- [ ] **Step 8: Style the selector**

Add to `src/styles.css`:

```css
.site-header {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-start;
}

.language-switcher {
  display: grid;
  gap: 6px;
  min-width: 150px;
  color: #f8fafc;
  font-size: 0.85rem;
}

.language-switcher select {
  min-height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.78);
  color: #fff;
  padding: 0 10px;
}

@media (max-width: 680px) {
  .site-header {
    flex-direction: column;
  }

  .language-switcher {
    width: 100%;
  }
}
```

If `.site-header` already defines conflicting layout, merge rather than duplicate.

- [ ] **Step 9: Manual browser verification**

Open `http://localhost:8000/`.

Verify:

- Japanese is the default.
- The language selector appears in the upper-right on desktop.
- Switching to English updates header, labels, source badges, result count, table headers, cards, and detail dialog.
- Switching to Simplified Chinese updates the same areas.
- Active search text and element filters remain in place after switching languages.
- Refresh preserves selected language.

- [ ] **Step 10: Commit**

Run:

```bash
git add index.html src/app.js src/styles.css tests/i18n-tests.html
git commit -m "Add language selector UI"
```

---

### Task 6: Documentation And Final Verification

**Files:**
- Modify: `README.md`
- Modify: `docs/data-import-workflow.md`

- [ ] **Step 1: Update README data workflow**

Add this paragraph under the CSV source-of-truth explanation in `README.md`:

```markdown
多言語表示用に、CSVには日本語の基本列に加えて `name_en`、`name_zh`、`category_en`、`category_zh`、`usage_en`、`usage_zh`、`properties_en`、`properties_zh`、`representative_makers_en`、`representative_makers_zh`、`japanese_makers_en`、`japanese_makers_zh`、`source_notes_en`、`source_notes_zh` を入力します。ページ右上の言語切替では、これらの列から生成された表示データが使われます。
```

- [ ] **Step 2: Update data import workflow**

In `docs/data-import-workflow.md`, add a section titled `## 多言語列` with:

```markdown
## 多言語列

サイトは日本語、簡体字中国語、英語を切り替えて表示します。新しい合金を追加するときは、日本語の基本列に加えて以下の列も入力します。

- `name_en`, `name_zh`
- `category_en`, `category_zh`
- `usage_en`, `usage_zh`
- `properties_en`, `properties_zh`
- `representative_makers_en`, `representative_makers_zh`
- `japanese_makers_en`, `japanese_makers_zh`
- `source_notes_en`, `source_notes_zh`

英語名として一般に使われる合金名はそのまま使います。日本語だけの名称は、英語と簡体字中国語の表示名をそれぞれ入力します。外部資料の正式タイトルは原題を維持して構いません。
```

- [ ] **Step 3: Run build verification**

Run:

```bash
python3 scripts/build-data.py
```

Expected: `Generated src/data/generated/alloys.js from 500 records.`

- [ ] **Step 4: Run browser test pages**

With `python3 -m http.server 8000` running, open:

- `http://localhost:8000/tests/i18n-tests.html`
- `http://localhost:8000/tests/search-tests.html`
- `http://localhost:8000/tests/data-tests.html`

Expected: every line on every page begins with `PASS`.

- [ ] **Step 5: Final app verification**

Open `http://localhost:8000/` at desktop width and mobile width.

Verify:

- The selector is usable and does not overlap header text.
- English display contains English UI and English alloy detail content.
- Simplified Chinese display contains Chinese UI and Chinese alloy detail content.
- Japanese display still matches the previous site behavior.
- Search and filters still work after switching language.

- [ ] **Step 6: Commit docs and verification updates**

Run:

```bash
git add README.md docs/data-import-workflow.md src/data/generated/alloys.js
git commit -m "Document multilingual data workflow"
```

---

## Completion Criteria

- `data/alloys.csv` contains populated English and Simplified Chinese columns for all 500 alloy records.
- `src/data/generated/alloys.js` contains complete `localized.ja`, `localized.zh`, and `localized.en` objects.
- The page selector persists language and updates all visible UI/content immediately.
- Data, search, and i18n browser tests pass.
- Manual desktop and mobile checks confirm the selector does not crowd or overlap the header.
