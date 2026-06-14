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
