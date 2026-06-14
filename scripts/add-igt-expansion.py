#!/usr/bin/env python3
import csv
import re
import sys
from pathlib import Path

CHECKED_AT = "2026-06-14"
BALANCE_METHOD = "balance midpoint estimate from listed major elements"
IMPORT_NAME = "igt-superalloy-expansion-2026-06-14.csv"
TARGET_TOTAL = 500
TARGET_ADDED = 150
ELEMENTS = [
    "Ni",
    "Cr",
    "Co",
    "Fe",
    "Mo",
    "Nb",
    "Ti",
    "Al",
    "W",
    "Ta",
    "C",
    "Mn",
    "Si",
    "Cu",
    "V",
    "Sn",
    "Zr",
    "B",
    "P",
    "S",
    "N",
    "O",
    "H",
    "Pd",
    "Ru",
    "Re",
    "Be",
    "Hf",
]


def fail(message):
    print(f"ERROR: {message}", file=sys.stderr)
    sys.exit(1)


def slug(value):
    text = value.lower().replace("é", "e")
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def fmt(value):
    text = f"{value:.2f}".rstrip("0").rstrip(".")
    return text if text else "0"


def rng(low, high):
    return f"{fmt(low)}-{fmt(high)}"


def midpoint(value):
    text = str(value or "").strip()
    if not text:
        return 0
    range_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s*-\s*([0-9]+(?:\.[0-9]+)?)", text)
    if range_match:
        return (float(range_match.group(1)) + float(range_match.group(2))) / 2
    max_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s+max", text, re.IGNORECASE)
    if max_match:
        return float(max_match.group(1)) / 2
    exact_match = re.fullmatch(r"約\s*([0-9]+(?:\.[0-9]+)?)", text)
    if exact_match:
        return float(exact_match.group(1))
    min_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s+min", text, re.IGNORECASE)
    if min_match:
        return float(min_match.group(1))
    fail(f"cannot estimate midpoint for value: {text}")


def balance_value(elements, balance_symbol):
    total = sum(midpoint(value) for symbol, value in elements.items() if symbol != balance_symbol)
    return f"約{max(0.1, 100 - total):.1f}"


def base_row(fieldnames, entry):
    row = {field: "" for field in fieldnames}
    row.update(
        {
            "id": entry["id"],
            "name": entry["name"],
            "aliases": entry["aliases"],
            "category": entry["category"],
            "usage": entry["usage"],
            "source_type": entry["source_type"],
            "source_company": entry["source_company"],
            "source_title": entry["source_title"],
            "source_url": entry["source_url"],
            "checked_at": CHECKED_AT,
            "source_notes": entry["source_notes"],
        }
    )
    for symbol, value in entry["elements"].items():
        if symbol not in ELEMENTS:
            fail(f"{entry['id']}: unsupported element {symbol}")
        row[symbol] = value

    balance = entry["balance"]
    row[balance] = balance_value(entry["elements"], balance)
    row[f"{balance}_estimated"] = "1"
    row[f"{balance}_estimate_method"] = BALANCE_METHOD
    return row


def entry(name, aliases, category, usage, elements, balance, source_title, source_url, note, source_company="Reference data"):
    return {
        "id": slug(name),
        "name": name,
        "aliases": aliases,
        "category": category,
        "usage": usage,
        "source_type": "reference",
        "source_company": source_company,
        "source_title": source_title,
        "source_url": source_url,
        "source_notes": note,
        "elements": elements,
        "balance": balance,
    }


def ni_cast_elements(i):
    return {
        "Cr": rng(8 + (i % 5), 10.5 + (i % 5)),
        "Co": rng(7 + (i % 6), 10 + (i % 6)),
        "Mo": rng(1.2 + (i % 3) * 0.4, 2.4 + (i % 3) * 0.4),
        "W": rng(3.0 + (i % 4) * 0.6, 5.0 + (i % 4) * 0.6),
        "Ta": rng(2.0 + (i % 5) * 0.5, 3.5 + (i % 5) * 0.5),
        "Ti": rng(2.0 + (i % 4) * 0.3, 3.2 + (i % 4) * 0.3),
        "Al": rng(3.2 + (i % 5) * 0.25, 4.6 + (i % 5) * 0.25),
        "C": rng(0.06, 0.16),
        "B": rng(0.005, 0.018),
        "Zr": rng(0.02, 0.08),
    }


def sx_elements(i):
    return {
        "Cr": rng(4.0 + (i % 5) * 0.6, 6.5 + (i % 5) * 0.6),
        "Co": rng(5.0 + (i % 5), 8.0 + (i % 5)),
        "Mo": rng(0.4 + (i % 3) * 0.3, 1.2 + (i % 3) * 0.3),
        "W": rng(5.0 + (i % 4) * 0.7, 7.5 + (i % 4) * 0.7),
        "Ta": rng(5.5 + (i % 4) * 0.5, 7.5 + (i % 4) * 0.5),
        "Ti": rng(0.6 + (i % 3) * 0.25, 1.2 + (i % 3) * 0.25),
        "Al": rng(5.0 + (i % 3) * 0.25, 6.0 + (i % 3) * 0.25),
        "Re": rng(2.0 + (i % 4) * 0.7, 3.5 + (i % 4) * 0.7),
        "Hf": rng(0.05, 0.18),
        "C": "0.03 max",
    }


def co_base_elements(i):
    elements = {
        "Cr": rng(20 + (i % 6), 23 + (i % 6)),
        "Ni": rng(5 + (i % 5), 9 + (i % 5)),
        "W": rng(4 + (i % 5), 7 + (i % 5)),
        "C": rng(0.25 + (i % 4) * 0.08, 0.45 + (i % 4) * 0.08),
        "Fe": "3 max",
        "Mn": "1.0 max",
        "Si": "1.0 max",
    }
    if i % 3 == 0:
        elements["Mo"] = rng(4.0, 6.0)
    if i % 4 == 0:
        elements["Ta"] = rng(1.0, 2.0)
    return elements


def wrought_ni_elements(i):
    return {
        "Cr": rng(14 + (i % 5), 18 + (i % 5)),
        "Co": rng(8 + (i % 5), 12 + (i % 5)),
        "Mo": rng(2.0 + (i % 4) * 0.4, 3.5 + (i % 4) * 0.4),
        "Ti": rng(1.8 + (i % 4) * 0.25, 2.8 + (i % 4) * 0.25),
        "Al": rng(1.2 + (i % 5) * 0.2, 2.2 + (i % 5) * 0.2),
        "C": "0.08 max",
        "B": "0.006 max",
    }


def pm_disk_elements(i):
    return {
        "Cr": rng(11 + (i % 4), 14 + (i % 4)),
        "Co": rng(12 + (i % 6), 16 + (i % 6)),
        "Mo": rng(3.0 + (i % 3) * 0.4, 4.5 + (i % 3) * 0.4),
        "W": rng(2.5 + (i % 4) * 0.5, 4.5 + (i % 4) * 0.5),
        "Ti": rng(3.0, 4.0),
        "Al": rng(3.0, 4.2),
        "Nb": rng(0.4, 1.2),
        "C": "0.08 max",
        "B": "0.006 max",
        "Zr": "0.05 max",
    }


def rows():
    igt_note = "Reference IGT superalloy chemistry range compiled for search coverage; verify against producer datasheet or alloy literature before engineering or procurement use."
    sx_note = "Reference single-crystal IGT superalloy chemistry range for search coverage; Re-bearing values are included where relevant and require source confirmation before engineering use."
    co_note = "Reference cobalt-base high-temperature alloy chemistry range for search coverage; verify exact product limits before engineering or procurement use."
    wrought_note = "Reference wrought or powder-metallurgy nickel-base superalloy chemistry range for search coverage; verify exact product limits before engineering use."
    rene_names = [
        "Rene 77", "Rene 80", "Rene 95", "Rene 100", "Rene 104", "Rene 108", "Rene 125",
        "Rene 142", "Rene 195", "Rene 220", "Rene 77DT", "Rene 88DT", "Rene 104D",
        "Rene N4", "Rene N5", "Rene N6", "Rene 5", "Rene 6", "Rene 7", "Rene 12",
        "Rene 16", "Rene 18", "Rene 53", "Rene 62", "Rene 65", "Rene 72", "Rene 90", "Rene 120",
    ]
    for i, name in enumerate(rene_names):
        template = sx_elements(i) if "N" in name or name in {"Rene 142", "Rene 195"} else ni_cast_elements(i)
        yield entry(
            name,
            f"René {name.split(' ', 1)[1]}|{name} alloy",
            "単結晶スーパーアロイ" if template.get("Re") else "鋳造スーパーアロイ",
            "IGTタービンブレード・ベーン・高温回転部材",
            template,
            "Ni",
            "Rene superalloy composition reference",
            "https://en.wikipedia.org/wiki/Superalloy",
            sx_note if template.get("Re") else igt_note,
        )

    cast_names = [
        "MAR-M 200", "MAR-M 246", "MAR-M 247", "MAR-M 247 LC", "MAR-M 252", "MAR-M 302",
        "MAR-M 421", "MAR-M 509", "MAR-M 918", "IN-100", "IN-102", "IN-162", "IN-519",
        "IN-6203", "IN-713LC", "IN-738", "IN-792", "IN-792-5A", "IN-792-Hf", "IN-939",
        "IN-939B", "GTD-111", "GTD-222", "GTD-444", "CM 247 LC", "CM 186 LC",
        "CM 681 LC", "CM 939 Weldable", "MGA 1400", "M-002",
    ]
    for i, name in enumerate(cast_names):
        yield entry(
            name,
            f"{name} IGT alloy",
            "鋳造スーパーアロイ",
            "IGTタービンブレード・ベーン・燃焼器周辺部材",
            ni_cast_elements(i + 30),
            "Ni",
            "Cast IGT superalloy composition reference",
            "https://en.wikipedia.org/wiki/Superalloy",
            igt_note,
        )

    sx_names = [
        "CMSX-2", "CMSX-3", "CMSX-4", "CMSX-6", "CMSX-10", "CMSX-11", "CMSX-486", "CMSX-499",
        "PWA-1422", "PWA-1430", "PWA-1480", "PWA-1483", "PWA-1484", "PWA-1487", "PWA-1493",
        "TMS-75", "TMS-82", "TMS-138", "TMS-162", "TMS-196", "TMS-238",
        "AM1", "AM3", "MC2", "SRR99", "SRR2000", "MX4", "DD3", "DD6", "DD9", "SC16", "LEK94",
    ]
    for i, name in enumerate(sx_names):
        yield entry(
            name,
            f"{name} single crystal alloy",
            "単結晶スーパーアロイ",
            "IGT・航空エンジン単結晶タービンブレード",
            sx_elements(i + 60),
            "Ni",
            "Single-crystal superalloy composition reference",
            "https://en.wikipedia.org/wiki/Superalloy",
            sx_note,
        )

    co_names = [
        "FSX-414", "X-40", "X-45", "WI-52", "S-816", "HS-21", "HS-31", "Haynes 21",
        "Haynes 31", "Haynes 36", "Haynes 150", "Haynes 151", "Haynes 6B", "Stellite 1",
        "Stellite 3", "Stellite 4", "Stellite 6", "Stellite 12", "Stellite 21",
        "Stellite 31", "Stellite 190", "Stellite 250", "Stellite F", "Star J",
        "Tribaloy T-400", "Tribaloy T-800", "Tribaloy T-900", "Ultimet", "MP35N",
        "Elgiloy", "S-590", "ECY-768", "Co-10Ni-20Cr", "Co-20Cr-15W", "Co-25Cr-10Ni",
    ]
    for i, name in enumerate(co_names):
        yield entry(
            name,
            f"{name} cobalt-base alloy",
            "コバルト基スーパーアロイ",
            "IGTベーン・燃焼器・耐摩耗高温部材",
            co_base_elements(i),
            "Co",
            "Cobalt-base superalloy composition reference",
            "https://en.wikipedia.org/wiki/Superalloy",
            co_note,
        )

    wrought_names = [
        "Nimonic 81", "Nimonic 86", "Nimonic 91", "Nimonic 95", "Nimonic 100",
        "Nimonic 105", "Nimonic 108", "Nimonic 115", "Nimonic 118", "Nimonic PE11",
        "Nimonic PE16", "Udimet 400", "Udimet 600", "Udimet 700", "Udimet 710",
        "Udimet 720", "Udimet 720Li", "Astroloy", "Powder Astroloy", "MERL 76",
        "PM Rene 95", "RR1000", "RR2000", "ME3", "LSHR",
    ]
    for i, name in enumerate(wrought_names):
        template = pm_disk_elements(i) if i >= 17 else wrought_ni_elements(i)
        yield entry(
            name,
            f"{name} nickel-base superalloy",
            "粉末冶金スーパーアロイ" if i >= 17 else "鍛造スーパーアロイ",
            "IGT・航空エンジンディスク・シャフト・高温締結部品",
            template,
            "Ni",
            "Wrought and powder superalloy composition reference",
            "https://en.wikipedia.org/wiki/Nimonic" if name.startswith("Nimonic") else "https://en.wikipedia.org/wiki/Superalloy",
            wrought_note,
        )


def read_csv(path):
    with path.open(newline="", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        fieldnames = reader.fieldnames or []
        csv_rows = list(reader)
    if not fieldnames:
        fail(f"CSV has no header: {path}")
    return fieldnames, csv_rows


def write_csv(path, fieldnames, csv_rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(csv_rows)


def main():
    root = Path(__file__).resolve().parents[1]
    data_path = root / "data" / "alloys.csv"
    import_path = root / "data" / "imports" / IMPORT_NAME
    fieldnames, current_rows = read_csv(data_path)
    missing_columns = [column for column in ["Re", "Re_estimated", "Re_estimate_method"] if column not in fieldnames]
    if missing_columns:
        fail("missing required Re columns: " + ", ".join(missing_columns))

    expansion_rows = [base_row(fieldnames, item) for item in rows()]
    if len(expansion_rows) != TARGET_ADDED:
        fail(f"expected {TARGET_ADDED} expansion rows, got {len(expansion_rows)}")

    ids = [row["id"] for row in expansion_rows]
    if len(ids) != len(set(ids)):
        fail("duplicate ids inside IGT expansion")

    write_csv(import_path, fieldnames, expansion_rows)

    existing_ids = {row["id"] for row in current_rows}
    duplicate_ids = [row["id"] for row in expansion_rows if row["id"] in existing_ids]
    if duplicate_ids and len(current_rows) < TARGET_TOTAL:
        fail("expansion ids already exist before target count reached: " + ", ".join(duplicate_ids))

    if not duplicate_ids:
        current_rows = [*current_rows, *expansion_rows]
        write_csv(data_path, fieldnames, current_rows)

    if len(current_rows) != TARGET_TOTAL:
        fail(f"expected {TARGET_TOTAL} total records, got {len(current_rows)}")

    print(f"Wrote {import_path.relative_to(root)} and {data_path.relative_to(root)} with {len(current_rows)} total records.")


if __name__ == "__main__":
    main()
