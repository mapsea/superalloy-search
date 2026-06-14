#!/usr/bin/env python3
import csv
import json
import re
import sys
from datetime import date
from pathlib import Path

ELEMENT_COLUMNS = ["Ni", "Cr", "Co", "Fe", "Mo", "Nb", "Ti", "Al", "W", "Ta", "C"]
INCLUDES_COLUMN_SUFFIX = "_includes"
SOURCE_LABELS = {
    "official": "公式",
    "standard": "規格",
    "reference": "参考",
    "unverified": "未確認",
}
LEGACY_FAMILIES = {
    "inconel-600": "Ni-Cr-Fe耐熱耐食合金",
    "inconel-601": "Ni-Cr-Fe耐酸化合金",
    "inconel-617": "Ni-Cr-Co-Mo高温合金",
    "inconel-625": "Ni基耐食耐熱合金",
    "inconel-690": "高Cr Ni基耐食合金",
    "inconel-718": "Ni基スーパーアロイ",
    "inconel-x-750": "Ni基析出強化合金",
    "hastelloy-b-2": "Ni-Mo耐食合金",
    "hastelloy-c-22": "Ni-Cr-Mo-W耐食合金",
    "hastelloy-c-276": "Ni-Cr-Mo-W耐食合金",
    "haynes-188": "Co-Ni-Cr-W高温合金",
    "haynes-230": "Ni-Cr-W-Mo高温合金",
    "haynes-282": "Ni-Cr-Co-Mo析出強化合金",
    "waspaloy": "Ni基スーパーアロイ",
    "nimonic-75": "Ni-Cr耐熱合金",
    "nimonic-80a": "Ni-Cr析出強化合金",
    "nimonic-90": "Ni-Cr-Co析出強化合金",
    "udimet-500": "Ni-Co-Cr-Mo析出強化合金",
    "udimet-520": "Ni-Co-Cr-Mo析出強化合金",
    "rene-41": "Ni-Cr-Co-Mo高強度合金",
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
REQUIRED_FIELDS = [
    "id",
    "name",
    "category",
    "usage",
    "source_type",
    "source_company",
    "source_title",
    "source_url",
    "checked_at",
    "source_notes",
]


def fail(message):
    print(f"ERROR: {message}", file=sys.stderr)
    sys.exit(1)


def parse_element(value, row_id, symbol):
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
            fail(f"{row_id}.{symbol}: range minimum exceeds maximum: {text}")
        return {"min": min_value, "max": max_value, "unit": "wt%", "display": text}

    min_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s+min", text, re.IGNORECASE)
    if min_match:
        return {"min": float(min_match.group(1)), "unit": "wt%", "display": text}

    max_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s+max", text, re.IGNORECASE)
    if max_match:
        return {"max": float(max_match.group(1)), "unit": "wt%", "display": text}

    fail(f"{row_id}.{symbol}: unsupported element value: {text}")


def validate_columns(fieldnames):
    missing = [column for column in REQUIRED_COLUMNS if column not in fieldnames]
    if missing:
        fail(f"missing required columns: {', '.join(missing)}")


def discover_include_columns(fieldnames):
    include_columns = {}
    for column in fieldnames:
        if not column.endswith(INCLUDES_COLUMN_SUFFIX):
            continue
        symbol = column[: -len(INCLUDES_COLUMN_SUFFIX)]
        if symbol not in ELEMENT_COLUMNS:
            fail(f"{column}: include metadata base element is not supported")
        include_columns[column] = symbol
    return include_columns


def validate_row_shape(row, row_number, fieldnames):
    if None in row:
        fail(f"row {row_number}: extra cells beyond declared columns")
    for field in fieldnames:
        if row[field] is None:
            fail(f"row {row_number}: missing cell for declared column {field}")


def validate_required_fields(row, row_number):
    for field in REQUIRED_FIELDS:
        if not (row.get(field) or "").strip():
            fail(f"row {row_number}: {field} is required")


def validate_checked_at(row, alloy_id):
    checked_at = row["checked_at"].strip()
    try:
        date.fromisoformat(checked_at)
    except ValueError:
        fail(f"{alloy_id}: checked_at must be an ISO date: {checked_at}")
    return checked_at


def validate_include_symbols(value, alloy_id, column):
    for token in re.split(r"[+/,\s]+", value):
        if token and token not in ELEMENT_COLUMNS:
            fail(f"{alloy_id}.{column}: unsupported include symbol: {token}")


def parse_aliases(value):
    text = (value or "").strip()
    if not text:
        return []
    return [alias.strip() for alias in text.split("|") if alias.strip()]


def parse_row(row, row_number, include_columns):
    validate_required_fields(row, row_number)

    alloy_id = row["id"].strip()
    checked_at = validate_checked_at(row, alloy_id)
    source_type = row["source_type"].strip()
    if source_type not in SOURCE_LABELS:
        fail(f"{alloy_id}: unsupported source_type: {source_type}")

    source_url = row["source_url"].strip()
    if not (source_url.startswith("http://") or source_url.startswith("https://")):
        fail(f"{alloy_id}: source_url must start with http:// or https://")

    elements = {}
    for symbol in ELEMENT_COLUMNS:
        parsed = parse_element(row.get(symbol), alloy_id, symbol)
        if parsed is not None:
            elements[symbol] = parsed

    for column, symbol in include_columns.items():
        includes = row[column].strip()
        if not includes:
            continue
        if symbol not in elements:
            fail(f"{alloy_id}.{column}: include metadata requires {symbol} value")
        validate_include_symbols(includes, alloy_id, column)
        elements[symbol]["includes"] = includes

    category = row["category"].strip()
    return {
        "id": alloy_id,
        "name": row["name"].strip(),
        "aliases": parse_aliases(row.get("aliases")),
        "family": LEGACY_FAMILIES.get(alloy_id, category),
        "category": category,
        "usage": row["usage"].strip(),
        "elements": elements,
        "sources": [
            {
                "type": source_type,
                "company": row["source_company"].strip(),
                "title": row["source_title"].strip(),
                "url": source_url,
                "checkedAt": checked_at,
                "notes": row["source_notes"].strip(),
            }
        ],
    }


def load_alloys(csv_path):
    if not csv_path.exists():
        fail(f"CSV file not found: {csv_path}")

    with csv_path.open(newline="", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        fieldnames = reader.fieldnames or []
        validate_columns(fieldnames)
        include_columns = discover_include_columns(fieldnames)

        seen_ids = set()
        alloys = []
        for row_number, row in enumerate(reader, start=2):
            validate_row_shape(row, row_number, fieldnames)
            alloy = parse_row(row, row_number, include_columns)
            if alloy["id"] in seen_ids:
                fail(f"duplicate id: {alloy['id']}")
            seen_ids.add(alloy["id"])
            alloys.append(alloy)

    return alloys


def write_js(alloys, output_path):
    output_path.parent.mkdir(parents=True, exist_ok=True)
    data = json.dumps(alloys, ensure_ascii=False, indent=2)
    output = "\n".join(
        [
            'import { ELEMENT_COLUMNS, SOURCE_LABELS } from "../constants.js";',
            "",
            "export { ELEMENT_COLUMNS, SOURCE_LABELS };",
            "",
            f"export const alloys = {data};",
            "",
        ]
    )
    output_path.write_text(output, encoding="utf-8")


def main():
    root = Path(__file__).resolve().parents[1]
    csv_path = root / "data" / "alloys.csv"
    output_path = root / "src" / "data" / "generated" / "alloys.js"
    alloys = load_alloys(csv_path)
    write_js(alloys, output_path)
    print(f"Generated {output_path.relative_to(root)} from {len(alloys)} records.")


if __name__ == "__main__":
    main()
