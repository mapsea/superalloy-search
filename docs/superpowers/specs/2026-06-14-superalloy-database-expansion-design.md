# Superalloy Database Expansion Design

## Goal

Expand the alloy database from the current 4 seed records to a first quality-focused set of 20 well-known superalloys. The first expansion should improve search usefulness while keeping source confidence visible.

## Initial 20 Alloy Scope

The first expansion targets these alloys:

- Inconel 600
- Inconel 601
- Inconel 617
- Inconel 625
- Inconel 690
- Inconel 718
- Inconel X-750
- Hastelloy B-2
- Hastelloy C-22
- Hastelloy C-276
- Haynes 188
- Haynes 230
- Haynes 282
- Waspaloy
- Nimonic 75
- Nimonic 80A
- Nimonic 90
- Udimet 500
- Udimet 520
- Rene 41

Existing records for Inconel 625, Inconel 718, Inconel X-750, and Waspaloy should be upgraded rather than duplicated.

## Source Policy

Use this source priority:

1. Official manufacturer pages or official manufacturer PDFs.
2. Official standards or designation pages when manufacturer data is unavailable.
3. Secondary technical references such as MatWeb, AZoM, distributor data sheets, Wikipedia, or other reference pages.

Every alloy must have at least one source entry. Source type remains:

- `official`: manufacturer or official product/data sheet.
- `reference`: secondary reference or distributor/technical article.
- `unverified`: incomplete or weak source that should be reviewed later.

If official composition and reference composition differ, keep one display composition for search and add a source note explaining the difference. Do not silently average conflicting ranges.

## Data Shape

Keep the existing frontend data shape:

```js
{
  id: "inconel-625",
  name: "Inconel 625",
  aliases: ["Alloy 625", "UNS N06625"],
  family: "Ni基耐食耐熱合金",
  elements: {
    Ni: { min: 58, unit: "wt%", display: "58.0 min" },
    Cr: { min: 20, max: 23, unit: "wt%", display: "20.0-23.0" }
  },
  sources: [
    {
      type: "official",
      company: "Special Metals",
      title: "INCONEL alloy 625 technical bulletin",
      url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-625.pdf",
      checkedAt: "2026-06-14",
      notes: "Chemical composition table."
    }
  ]
}
```

Composition values must support:

- range values: `min` and `max`
- minimum-only values: `min`
- maximum-only values: `max`
- balance values: `kind: "balance"`
- display text exactly as users should see it

## File Organization

The current `src/data/alloys.js` file is acceptable for 4 records but will become difficult to maintain at 20+ records.

Refactor data into these files:

- `src/data/constants.js`: `ELEMENT_COLUMNS` and `SOURCE_LABELS`.
- `src/data/alloys/inconel.js`: Inconel-family records.
- `src/data/alloys/hastelloy.js`: Hastelloy-family records.
- `src/data/alloys/haynes.js`: Haynes-family records.
- `src/data/alloys/nimonic.js`: Nimonic-family records.
- `src/data/alloys/other.js`: Waspaloy, Udimet, Rene, and similar records.
- `src/data/alloys.js`: imports and exports the combined `alloys` array plus constants.

This preserves existing imports from `src/app.js` and `src/render.js` while making future data additions smaller and easier to review.

## UI Impact

No UI redesign is required for this expansion.

The expanded dataset should work with the existing:

- alloy name and alias search
- element range filters
- source type filters
- desktop comparison table
- mobile result cards
- detail dialog source list

If new alloy records include elements not in `ELEMENT_COLUMNS`, those elements will not appear in the comparison table. For this first expansion, keep the existing element columns unless missing values make a major alloy misleading.

## Validation Rules

Before committing the expansion:

- Confirm exactly 20 target alloys are present.
- Confirm no duplicate `id` values.
- Confirm each alloy has `name`, `aliases`, `family`, `elements`, and `sources`.
- Confirm each source has `type`, `company`, `title`, `url`, `checkedAt`, and `notes`.
- Confirm source type is one of `official`, `reference`, or `unverified`.
- Confirm the browser search tests still pass.
- Manually verify the live app loads and common searches work.

## Known Limitations

The first 20-record expansion is not a complete superalloy database. It is a curated foundation. Some records may start as `reference` when official manufacturer data is not easily available. Those should remain visibly marked as reference data until upgraded.
