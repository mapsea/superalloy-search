# Data Import Workflow

This project keeps alloy data in a human-editable CSV and generates the JavaScript data file used by the static site.

## Source of Truth

The editable master file is `data/alloys.csv`. Make alloy additions and corrections there first.

Do not edit generated data files by hand. After CSV changes, regenerate the site data with:

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
