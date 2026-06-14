# Multilingual Language Switcher Design

## Goal

Add a language setting to the superalloy composition search site. Users can choose Japanese, Simplified Chinese, or English from a control in the upper-right area of the page. The selected language changes the page UI and all displayed alloy content.

The site must not show multiple languages at the same time except for language names inside the language selector. English alloy names can remain unchanged. Alloy names that are currently Japanese-only need English and Simplified Chinese display names.

## Selected Approach

Use CSV-backed multilingual data columns.

`data/alloys.csv` remains the source of truth. The data build script reads new language-specific columns and writes generated JavaScript with localized fields for each alloy. This keeps the existing data update workflow intact and avoids a separate translation dictionary that can drift away from the CSV.

## Languages

Supported language codes:

- `ja`: Japanese, current default.
- `zh`: Simplified Chinese.
- `en`: English.

Japanese remains the fallback language when a localized value is missing. The UI should still prefer complete translations, and tests should catch missing required localized fields after the multilingual migration is complete.

## User Experience

Place a compact language selector in the upper-right area of the header. The control should be visible on desktop and mobile without disrupting the existing search-first layout.

Behavior:

- Initial language comes from `localStorage` when present.
- If no stored setting exists, use Japanese.
- Changing the selector updates the page immediately.
- The selection is persisted in `localStorage`.
- `document.documentElement.lang` is updated to match the selected language.
- Search criteria and active element filters are preserved when the language changes.

## UI Localization

Move UI strings into a dedicated localization module, for example `src/i18n.js`.

The module should cover:

- Site title, eyebrow, and lead text.
- Filter labels and placeholders.
- Element filter add/remove labels.
- Source filter legend and source type labels.
- Results heading and result count suffix.
- Table headers.
- Card action labels.
- Detail dialog labels.
- Dialog close accessible label.
- Source metadata labels such as checked date.
- Element notes such as estimated values and included elements.

Rendering functions receive the active language or a translator object instead of hard-coding Japanese strings.

## Data Localization

Add multilingual columns to `data/alloys.csv` for display content. Required localized content should include:

- Alloy name.
- Category.
- Usage.
- Properties.
- Representative makers.
- Japanese makers label/content as appropriate for the selected language.
- Source notes when displayed to users.

Suggested CSV columns:

- `name_en`, `name_zh`
- `category_en`, `category_zh`
- `usage_en`, `usage_zh`
- `properties_en`, `properties_zh`
- `representative_makers_en`, `representative_makers_zh`
- `japanese_makers_en`, `japanese_makers_zh`
- `source_notes_en`, `source_notes_zh`

The generated alloy record should keep the existing top-level Japanese fields for compatibility and add localized content:

```js
localized: {
  ja: {
    name,
    category,
    family,
    usage,
    properties,
    representativeMakers,
    japaneseMakers,
    sourceNotes
  },
  en: {
    name,
    category,
    family,
    usage,
    properties,
    representativeMakers,
    japaneseMakers,
    sourceNotes
  },
  zh: {
    name,
    category,
    family,
    usage,
    properties,
    representativeMakers,
    japaneseMakers,
    sourceNotes
  }
}
```

`family` can be derived from localized category unless a record has a specific legacy family override. Existing legacy family overrides should receive English and Simplified Chinese equivalents where needed.

## Search Behavior

Search should use the selected language for display text while preserving useful cross-language lookup:

- Always search alloy IDs, aliases, and base alloy names.
- Search the active language's name, category, family, usage, and properties.
- Also include Japanese text as a fallback so existing Japanese queries continue to work when a user has switched languages.

Element filters and source type filters are language-independent.

## Rendering Changes

Update rendering helpers so localized alloy fields are resolved in one place. A helper such as `localizedAlloy(alloy, language)` can return the selected language object with Japanese fallback.

Rendering should use localized values for:

- Table alloy name and usage.
- Mobile card alloy name and usage.
- Detail metadata, properties, representative makers, Japanese makers, composition notes, and source notes.
- Source badges through localized source type labels.

Composition values such as `Bal.`, ranges, `min`, and `max` can stay in their current technical notation. User-facing explanatory labels around them must be localized.

## Data Generation

Update `scripts/build-data.py` to:

- Require the new localized CSV columns listed above.
- Generate localized values with Japanese fallback.
- Preserve existing validations for required base fields.
- Validate that required localized columns are present. For display fields that can be inferred by existing build logic, generate localized values before validation; after inference, `name`, `category`, `usage`, `properties`, `representativeMakers`, `japaneseMakers`, and `sourceNotes` must be non-empty for all three languages.
- Keep `src/data/generated/alloys.js` as generated output only.

The README and data import workflow should mention the new multilingual columns so future data additions include translations.

## Testing

Add or update tests for:

- Localization constants and source labels in all three languages.
- Generated alloy records include `localized.ja`, `localized.en`, and `localized.zh`.
- Japanese fallback works when a localized value is absent.
- Search matches active-language fields and aliases.
- Language selector updates UI text, result count text, table headers, and detail labels.
- Existing range filtering and source filtering behavior remains unchanged.

Manual verification should include desktop and mobile widths to ensure the selector does not crowd the header.

## Out Of Scope

- Machine translation service integration.
- Side-by-side multilingual display.
- User accounts or per-device server-side language preferences.
- Translating external source titles that are official document names.
