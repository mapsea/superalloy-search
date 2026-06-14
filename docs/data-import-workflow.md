# Data Import Workflow

This project keeps alloy data in a human-editable CSV and generates the JavaScript data file used by the static site.

## Source of Truth

The editable master file is `data/alloys.csv`. Make alloy additions and corrections there first.

Do not edit `src/data/generated/alloys.js` by hand. It is generated from the CSV. After CSV changes, regenerate the site data with:

```bash
python3 scripts/build-data.py
```

## Required CSV Columns

Every row must include these identity and display columns:

- `id`
- `name`
- `aliases`
- `category`
- `usage`
- `properties`
- `representative_makers`
- `japanese_makers`

`properties`, `representative_makers`, and `japanese_makers` may be left blank when adding rows in bulk. The generator fills safe category/family defaults for blank values. Fill these fields directly when a specific alloy has known characteristics or producer names that should override the default text.

Every row must include the source columns:

- `source_type`
- `source_company`
- `source_title`
- `source_url`
- `checked_at`
- `source_notes`

Every row must include the element columns supported by the importer:

- `Ni`
- `Cr`
- `Co`
- `Fe`
- `Mo`
- `Nb`
- `Ti`
- `Al`
- `W`
- `Ta`
- `C`
- `Mn`
- `Si`
- `Cu`
- `V`
- `Sn`
- `Zr`
- `B`
- `P`
- `S`
- `N`
- `O`
- `H`
- `Pd`
- `Ru`
- `Re`
- `Be`
- `Hf`

Optional include metadata columns may be added for supported elements by using the `_includes` suffix. Current examples include `Ni_includes` and `Nb_includes`. Use these when a reported composition value includes related elements, such as nickel including cobalt or niobium including tantalum.

## Field Formats

Use `|` to separate aliases in the `aliases` column:

```text
Alloy 625|UNS N06625|2.4856
```

Element cells accept these formats:

- `50-55`
- `58 min`
- `5 max`
- `Bal.`
- empty cell

Source types must be one of:

- `official`
- `standard`
- `reference`
- `unverified`

Use `official` for manufacturer or producer technical bulletins, `standard` for recognized specifications, `reference` for secondary public references, and `unverified` for placeholder data that needs replacement before production-grade use.

Validation rules enforced by the importer:

- `id` must be unique.
- Required identity, display, and source fields cannot be blank.
- `checked_at` must use ISO date format, for example `2026-06-14`.
- `source_url` must start with `http://` or `https://`.
- Element ranges must have the smaller value first, for example `50-55`.
- Include metadata such as `Nb_includes` can only reference supported element symbols.

## Generate Data

From the repository root, run:

```bash
python3 scripts/build-data.py
```

The script validates the CSV and regenerates the static data consumed by the site. Fix any reported validation errors before continuing.

## Verify Locally

Start a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Then verify the app and browser tests:

- `http://localhost:8000/`
- `http://localhost:8000/tests/data-tests.html`
- `http://localhost:8000/tests/search-tests.html`

The test pages should show only `PASS` lines. Also search for the edited or newly added alloys in the main app and confirm the displayed source type, aliases, and composition ranges.

Do not publish or deploy the data update if generation fails or any browser test fails.
