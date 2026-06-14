#!/usr/bin/env python3
import csv
import re
import sys
from pathlib import Path

CHECKED_AT = "2026-06-14"
BALANCE_METHOD = "balance midpoint estimate from listed major elements"
IMPORT_NAME = "quality-expansion-2026-06-14.csv"
TARGET_TOTAL = 350
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
    "Be",
    "Hf",
]


def fail(message):
    print(f"ERROR: {message}", file=sys.stderr)
    sys.exit(1)


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
    balance = max(0.1, 100 - total)
    return f"約{balance:.1f}"


def base_row(fieldnames, row_id, name, aliases, category, usage, source_type, source_company, source_title, source_url, source_notes, elements, balance=None):
    row = {field: "" for field in fieldnames}
    row.update(
        {
            "id": row_id,
            "name": name,
            "aliases": aliases,
            "category": category,
            "usage": usage,
            "source_type": source_type,
            "source_company": source_company,
            "source_title": source_title,
            "source_url": source_url,
            "checked_at": CHECKED_AT,
            "source_notes": source_notes,
        }
    )
    for symbol, value in elements.items():
        if symbol not in ELEMENTS:
            fail(f"{row_id}: unsupported element {symbol}")
        row[symbol] = value
    if balance:
        if balance not in ELEMENTS:
            fail(f"{row_id}: unsupported balance element {balance}")
        row[balance] = balance_value(elements, balance)
        row[f"{balance}_estimated"] = "1"
        row[f"{balance}_estimate_method"] = BALANCE_METHOD
    return row


def steel(row_id, name, aliases, category, usage, elements, notes, title="SAE steel grades composition table"):
    return {
        "id": row_id,
        "name": name,
        "aliases": aliases,
        "category": category,
        "usage": usage,
        "source_type": "standard",
        "source_company": "SAE reference",
        "source_title": title,
        "source_url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "source_notes": notes,
        "elements": elements,
        "balance": "Fe",
    }


def reference(row_id, name, aliases, category, usage, elements, notes, source_title, source_url, balance="Fe"):
    return {
        "id": row_id,
        "name": name,
        "aliases": aliases,
        "category": category,
        "usage": usage,
        "source_type": "reference",
        "source_company": "Reference data",
        "source_title": source_title,
        "source_url": source_url,
        "source_notes": notes,
        "elements": elements,
        "balance": balance,
    }


def entries():
    steel_note = "Standards-derived public composition range; Fe balance calculated for search display."
    free_note = "Standards-derived free-machining steel composition range; Fe balance calculated for search display."
    cast_note = "Public cast iron composition range; Fe balance calculated for search display."
    maraging_note = "Public maraging steel nominal composition reference; Fe balance calculated for search display."
    super_note = "Public alloy composition reference; balance value calculated for search display and should be replaced with producer data when confirmed."
    return [
        steel("aisi-1084", "AISI 1084 Carbon Steel", "SAE 1084", "炭素鋼", "刃物・ばね・高炭素鋼部品", {"C": "0.80-0.93", "Mn": "0.60-0.90", "P": "0.040 max", "S": "0.050 max"}, steel_note),
        steel("aisi-1085", "AISI 1085 Carbon Steel", "SAE 1085", "炭素鋼", "刃物・ばね・高炭素鋼部品", {"C": "0.80-0.93", "Mn": "0.70-1.00", "P": "0.040 max", "S": "0.050 max"}, steel_note),
        steel("aisi-1090", "AISI 1090 Carbon Steel", "SAE 1090", "炭素鋼", "刃物・ばね・高炭素鋼部品", {"C": "0.85-0.98", "Mn": "0.60-0.90", "P": "0.040 max", "S": "0.050 max"}, steel_note),
        steel("aisi-1117", "AISI 1117 Resulfurized Steel", "SAE 1117", "快削鋼", "切削加工部品・シャフト・ねじ部品", {"C": "0.14-0.20", "Mn": "1.00-1.30", "P": "0.040 max", "S": "0.08-0.13"}, free_note),
        steel("aisi-1118", "AISI 1118 Resulfurized Steel", "SAE 1118", "快削鋼", "切削加工部品・シャフト・ねじ部品", {"C": "0.14-0.20", "Mn": "1.30-1.60", "P": "0.040 max", "S": "0.08-0.13"}, free_note),
        steel("aisi-1137", "AISI 1137 Resulfurized Steel", "SAE 1137", "快削鋼", "切削加工部品・シャフト・ねじ部品", {"C": "0.32-0.39", "Mn": "1.35-1.65", "P": "0.040 max", "S": "0.08-0.13"}, free_note),
        steel("aisi-1141", "AISI 1141 Resulfurized Steel", "SAE 1141", "快削鋼", "切削加工部品・シャフト・ねじ部品", {"C": "0.37-0.45", "Mn": "1.35-1.65", "P": "0.040 max", "S": "0.08-0.13"}, free_note),
        steel("aisi-1144", "AISI 1144 Stressproof Steel", "SAE 1144", "快削鋼", "切削加工部品・シャフト・ねじ部品", {"C": "0.40-0.48", "Mn": "1.35-1.65", "P": "0.040 max", "S": "0.24-0.33"}, free_note),
        steel("aisi-1211", "AISI 1211 Free-Cutting Steel", "SAE 1211", "快削鋼", "自動盤加工・小ねじ・精密切削部品", {"C": "0.13 max", "Mn": "0.60-0.90", "P": "0.07-0.12", "S": "0.10-0.20"}, free_note),
        steel("aisi-1212", "AISI 1212 Free-Cutting Steel", "SAE 1212", "快削鋼", "自動盤加工・小ねじ・精密切削部品", {"C": "0.13 max", "Mn": "0.70-1.00", "P": "0.07-0.12", "S": "0.16-0.23"}, free_note),
        steel("aisi-1213", "AISI 1213 Free-Cutting Steel", "SAE 1213", "快削鋼", "自動盤加工・小ねじ・精密切削部品", {"C": "0.13 max", "Mn": "0.70-1.00", "P": "0.07-0.12", "S": "0.24-0.33"}, free_note),
        steel("aisi-1215", "AISI 1215 Free-Cutting Steel", "SAE 1215", "快削鋼", "自動盤加工・小ねじ・精密切削部品", {"C": "0.09 max", "Mn": "0.75-1.05", "P": "0.04-0.09", "S": "0.26-0.35"}, free_note),
        steel("aisi-1330", "AISI 1330 Manganese Steel", "SAE 1330", "合金鋼", "歯車・軸・機械構造部品", {"C": "0.28-0.33", "Mn": "1.60-1.90", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-1340", "AISI 1340 Manganese Steel", "SAE 1340", "合金鋼", "歯車・軸・機械構造部品", {"C": "0.38-0.43", "Mn": "1.60-1.90", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-1345", "AISI 1345 Manganese Steel", "SAE 1345", "合金鋼", "歯車・軸・機械構造部品", {"C": "0.43-0.48", "Mn": "1.60-1.90", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-3140", "AISI 3140 Nickel-Chromium Steel", "SAE 3140", "合金鋼", "高強度軸・歯車・機械構造部品", {"Ni": "1.10-1.40", "Cr": "0.55-0.75", "C": "0.38-0.43", "Mn": "0.70-0.90", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-3310", "AISI 3310 Nickel-Chromium Steel", "SAE 3310", "浸炭鋼", "浸炭歯車・シャフト・高靭性部品", {"Ni": "3.25-3.75", "Cr": "1.40-1.75", "C": "0.08-0.13", "Mn": "0.45-0.60", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-3316", "AISI 3316 Nickel-Chromium Steel", "SAE 3316", "浸炭鋼", "浸炭歯車・シャフト・高靭性部品", {"Ni": "3.25-3.75", "Cr": "1.40-1.75", "C": "0.14-0.19", "Mn": "0.45-0.60", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-3318", "AISI 3318 Nickel-Chromium Steel", "SAE 3318", "浸炭鋼", "浸炭歯車・シャフト・高靭性部品", {"Ni": "3.25-3.75", "Cr": "1.40-1.75", "C": "0.17-0.22", "Mn": "0.45-0.60", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-4037", "AISI 4037 Molybdenum Steel", "SAE 4037", "低合金鋼", "機械構造部品・ボルト・シャフト", {"Mo": "0.20-0.30", "C": "0.35-0.40", "Mn": "0.70-0.90", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-4137", "AISI 4137 Chromium-Molybdenum Steel", "SAE 4137", "クロムモリブデン鋼", "ボルト・シャフト・機械構造部品", {"Cr": "0.80-1.10", "Mo": "0.15-0.25", "C": "0.35-0.40", "Mn": "0.70-0.90", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-4147", "AISI 4147 Chromium-Molybdenum Steel", "SAE 4147", "クロムモリブデン鋼", "高強度シャフト・工具部材・機械構造部品", {"Cr": "0.80-1.10", "Mo": "0.15-0.25", "C": "0.45-0.50", "Mn": "0.75-1.00", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-4317", "AISI 4317 Nickel-Chromium-Molybdenum Steel", "SAE 4317", "浸炭鋼", "浸炭歯車・高靭性機械部品", {"Ni": "1.65-2.00", "Cr": "0.40-0.60", "Mo": "0.20-0.30", "C": "0.15-0.20", "Mn": "0.45-0.65", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-4815", "AISI 4815 Nickel-Molybdenum Steel", "SAE 4815", "低合金鋼", "浸炭歯車・高靭性部品", {"Ni": "3.25-3.75", "Mo": "0.20-0.30", "C": "0.13-0.18", "Mn": "0.40-0.60", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-4817", "AISI 4817 Nickel-Molybdenum Steel", "SAE 4817", "低合金鋼", "浸炭歯車・高靭性部品", {"Ni": "3.25-3.75", "Mo": "0.20-0.30", "C": "0.15-0.20", "Mn": "0.40-0.60", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-4819", "AISI 4819 Nickel-Molybdenum Steel", "SAE 4819", "低合金鋼", "浸炭歯車・高靭性部品", {"Ni": "3.25-3.75", "Mo": "0.20-0.30", "C": "0.17-0.22", "Mn": "0.40-0.60", "P": "0.035 max", "S": "0.040 max"}, steel_note),
        steel("aisi-50100", "AISI 50100 Bearing Steel", "SAE 50100", "軸受鋼", "軸受・転動部品・耐摩耗部品", {"Cr": "0.40-0.60", "C": "0.98-1.10", "Mn": "0.25-0.45", "Si": "0.15-0.35", "P": "0.025 max", "S": "0.025 max"}, steel_note),
        steel("aisi-51100", "AISI 51100 Bearing Steel", "SAE 51100", "軸受鋼", "軸受・転動部品・耐摩耗部品", {"Cr": "0.90-1.15", "C": "0.98-1.10", "Mn": "0.25-0.45", "Si": "0.15-0.35", "P": "0.025 max", "S": "0.025 max"}, steel_note),
        reference("gray-cast-iron-class-20", "Gray Cast Iron Class 20", "ASTM A48 Class 20", "鋳鉄", "鋳物・機械ベース・ポンプハウジング", {"C": "3.20-3.60", "Si": "1.80-2.40", "Mn": "0.50-0.90", "P": "0.20 max", "S": "0.12 max"}, cast_note, "Cast iron composition reference", "https://en.wikipedia.org/wiki/Cast_iron"),
        reference("gray-cast-iron-class-25", "Gray Cast Iron Class 25", "ASTM A48 Class 25", "鋳鉄", "鋳物・機械ベース・ポンプハウジング", {"C": "3.10-3.50", "Si": "1.70-2.30", "Mn": "0.50-0.90", "P": "0.20 max", "S": "0.12 max"}, cast_note, "Cast iron composition reference", "https://en.wikipedia.org/wiki/Cast_iron"),
        reference("gray-cast-iron-class-30", "Gray Cast Iron Class 30", "ASTM A48 Class 30", "鋳鉄", "鋳物・機械ベース・ポンプハウジング", {"C": "3.00-3.40", "Si": "1.60-2.20", "Mn": "0.50-0.90", "P": "0.18 max", "S": "0.12 max"}, cast_note, "Cast iron composition reference", "https://en.wikipedia.org/wiki/Cast_iron"),
        reference("gray-cast-iron-class-35", "Gray Cast Iron Class 35", "ASTM A48 Class 35", "鋳鉄", "鋳物・工作機械部品・ブレーキ部品", {"C": "2.90-3.30", "Si": "1.50-2.10", "Mn": "0.60-1.00", "P": "0.15 max", "S": "0.12 max"}, cast_note, "Cast iron composition reference", "https://en.wikipedia.org/wiki/Cast_iron"),
        reference("gray-cast-iron-class-40", "Gray Cast Iron Class 40", "ASTM A48 Class 40", "鋳鉄", "鋳物・工作機械部品・ブレーキ部品", {"C": "2.80-3.20", "Si": "1.40-2.00", "Mn": "0.60-1.00", "P": "0.12 max", "S": "0.12 max"}, cast_note, "Cast iron composition reference", "https://en.wikipedia.org/wiki/Cast_iron"),
        reference("ductile-iron-60-40-18", "Ductile Iron 60-40-18", "ASTM A536 60-40-18", "球状黒鉛鋳鉄", "鋳物・配管継手・機械構造鋳物", {"C": "3.40-3.90", "Si": "2.20-2.80", "Mn": "0.10-0.40", "P": "0.05 max", "S": "0.02 max"}, cast_note, "Ductile iron composition reference", "https://en.wikipedia.org/wiki/Ductile_iron"),
        reference("ductile-iron-65-45-12", "Ductile Iron 65-45-12", "ASTM A536 65-45-12", "球状黒鉛鋳鉄", "鋳物・配管継手・機械構造鋳物", {"C": "3.40-3.90", "Si": "2.20-2.80", "Mn": "0.20-0.50", "P": "0.05 max", "S": "0.02 max"}, cast_note, "Ductile iron composition reference", "https://en.wikipedia.org/wiki/Ductile_iron"),
        reference("ductile-iron-80-55-06", "Ductile Iron 80-55-06", "ASTM A536 80-55-06", "球状黒鉛鋳鉄", "鋳物・歯車箱・高強度鋳物", {"C": "3.40-3.80", "Si": "2.20-2.70", "Mn": "0.30-0.70", "P": "0.05 max", "S": "0.02 max"}, cast_note, "Ductile iron composition reference", "https://en.wikipedia.org/wiki/Ductile_iron"),
        reference("ductile-iron-100-70-03", "Ductile Iron 100-70-03", "ASTM A536 100-70-03", "球状黒鉛鋳鉄", "鋳物・高強度機械部品・ギヤケース", {"C": "3.30-3.70", "Si": "2.10-2.60", "Mn": "0.40-0.80", "P": "0.05 max", "S": "0.02 max"}, cast_note, "Ductile iron composition reference", "https://en.wikipedia.org/wiki/Ductile_iron"),
        reference("white-cast-iron", "White Cast Iron", "Chilled iron", "鋳鉄", "耐摩耗ライナー・粉砕部品・ロール", {"C": "2.50-3.60", "Si": "0.50-1.90", "Mn": "0.25-0.80", "P": "0.20 max", "S": "0.12 max"}, cast_note, "Cast iron composition reference", "https://en.wikipedia.org/wiki/Cast_iron"),
        reference("maraging-200", "Maraging Steel 200", "18Ni(200)|C200", "マレージング鋼", "航空宇宙・高強度金型・シャフト", {"Ni": "17-19", "Co": "8-9", "Mo": "3.0-3.5", "Ti": "0.15-0.25", "Al": "0.05-0.15", "C": "0.03 max"}, maraging_note, "Maraging steel composition reference", "https://en.wikipedia.org/wiki/Maraging_steel"),
        reference("maraging-250", "Maraging Steel 250", "18Ni(250)|C250", "マレージング鋼", "航空宇宙・高強度金型・シャフト", {"Ni": "17-19", "Co": "7-8.5", "Mo": "4.6-5.2", "Ti": "0.30-0.50", "Al": "0.05-0.15", "C": "0.03 max"}, maraging_note, "Maraging steel composition reference", "https://en.wikipedia.org/wiki/Maraging_steel"),
        reference("maraging-300", "Maraging Steel 300", "18Ni(300)|C300", "マレージング鋼", "航空宇宙・高強度金型・シャフト", {"Ni": "17-19", "Co": "8.5-9.5", "Mo": "4.6-5.2", "Ti": "0.50-0.80", "Al": "0.05-0.15", "C": "0.03 max"}, maraging_note, "Maraging steel composition reference", "https://en.wikipedia.org/wiki/Maraging_steel"),
        reference("maraging-350", "Maraging Steel 350", "18Ni(350)|C350", "マレージング鋼", "航空宇宙・高強度金型・シャフト", {"Ni": "17-19", "Co": "11-13", "Mo": "4.0-5.0", "Ti": "1.20-1.60", "Al": "0.05-0.15", "C": "0.03 max"}, maraging_note, "Maraging steel composition reference", "https://en.wikipedia.org/wiki/Maraging_steel"),
        reference("inconel-706", "Inconel 706", "Alloy 706|UNS N09706", "スーパーアロイ", "タービンディスク・高温締結部品", {"Ni": "39-44", "Cr": "14.5-17.5", "Nb": "2.5-3.3", "Ti": "1.5-2.0", "Al": "0.40 max", "C": "0.06 max", "Mn": "0.35 max", "Si": "0.35 max"}, super_note, "Inconel 706 composition reference", "https://en.wikipedia.org/wiki/Superalloy"),
        reference("inconel-713c", "Inconel 713C", "Alloy 713C", "鋳造スーパーアロイ", "タービンホイール・高温鋳造部品", {"Cr": "12-14", "Mo": "3.8-5.2", "Nb": "1.8-2.8", "Ti": "0.5-1.0", "Al": "5.5-6.5", "C": "0.08-0.20", "Zr": "0.05-0.15", "B": "0.005-0.015"}, super_note, "Nickel superalloy composition reference", "https://en.wikipedia.org/wiki/Superalloy", balance="Ni"),
        reference("inconel-738lc", "Inconel 738LC", "IN-738LC", "鋳造スーパーアロイ", "ガスタービンブレード・高温鋳造部品", {"Cr": "15.7-16.3", "Co": "8-9", "Mo": "1.5-2.0", "Nb": "0.6-1.1", "Ti": "3.2-3.7", "Al": "3.2-3.7", "W": "2.4-2.8", "Ta": "1.5-2.0", "C": "0.09-0.13", "Zr": "0.03-0.08", "B": "0.007-0.012"}, super_note, "Nickel superalloy composition reference", "https://en.wikipedia.org/wiki/Superalloy", balance="Ni"),
        reference("haynes-556", "Haynes 556", "Alloy 556|UNS R30556", "耐熱耐食合金", "燃焼器・高温ダクト・熱処理炉部品", {"Ni": "20-22", "Cr": "21-23", "Co": "17-20", "Mo": "2.5-3.5", "W": "2.0-3.0", "C": "0.05-0.15", "Mn": "1.0-2.0", "Si": "0.20-0.60", "N": "0.10-0.25"}, super_note, "Haynes alloy composition reference", "https://en.wikipedia.org/wiki/Haynes_International"),
        reference("haynes-25", "Haynes 25", "L-605|UNS R30605", "コバルト合金", "タービン部品・高温ばね・燃焼器", {"Cr": "19-21", "Ni": "9-11", "W": "14-16", "Fe": "3 max", "C": "0.05-0.15", "Mn": "1-2", "Si": "0.40 max"}, super_note, "Haynes alloy composition reference", "https://en.wikipedia.org/wiki/Haynes_International", balance="Co"),
        reference("haynes-214", "Haynes 214", "Alloy 214|UNS N07214", "耐酸化ニッケル合金", "高温酸化環境・炉部品・熱処理治具", {"Cr": "15-17", "Al": "4.0-5.0", "Fe": "3 max", "C": "0.05 max", "Mn": "0.50 max", "Si": "0.20 max", "B": "0.01 max"}, super_note, "Haynes alloy composition reference", "https://en.wikipedia.org/wiki/Haynes_International", balance="Ni"),
        reference("alloy-31", "Alloy 31", "UNS N08031", "耐食ニッケル合金", "化学プラント・リン酸・硫酸環境", {"Ni": "30-32", "Cr": "26-28", "Mo": "6-7", "Cu": "1.0-1.4", "N": "0.15-0.25", "C": "0.015 max", "Mn": "2 max", "Si": "0.30 max"}, super_note, "Nickel alloy composition reference", "https://en.wikipedia.org/wiki/Superalloy"),
        reference("alloy-59", "Alloy 59", "UNS N06059", "耐食ニッケル合金", "塩化物・酸性環境・化学プラント", {"Cr": "22-24", "Mo": "15-16.5", "Fe": "1.5 max", "C": "0.01 max", "Mn": "0.50 max", "Si": "0.10 max", "Al": "0.40 max"}, super_note, "Nickel alloy composition reference", "https://en.wikipedia.org/wiki/Superalloy", balance="Ni"),
    ]


def read_csv(path):
    with path.open(newline="", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        fieldnames = reader.fieldnames or []
        rows = list(reader)
    if not fieldnames:
        fail(f"CSV has no header: {path}")
    return fieldnames, rows


def write_csv(path, fieldnames, rows):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", newline="", encoding="utf-8") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def materialize(fieldnames):
    rows = []
    seen = set()
    for entry in entries():
        if entry["id"] in seen:
            fail(f"duplicate expansion id: {entry['id']}")
        seen.add(entry["id"])
        rows.append(
            base_row(
                fieldnames,
                entry["id"],
                entry["name"],
                entry["aliases"],
                entry["category"],
                entry["usage"],
                entry["source_type"],
                entry["source_company"],
                entry["source_title"],
                entry["source_url"],
                entry["source_notes"],
                entry["elements"],
                entry["balance"],
            )
        )
    if len(rows) != 50:
        fail(f"expected 50 expansion rows, got {len(rows)}")
    return rows


def main():
    root = Path(__file__).resolve().parents[1]
    data_path = root / "data" / "alloys.csv"
    import_path = root / "data" / "imports" / IMPORT_NAME
    fieldnames, current_rows = read_csv(data_path)
    expansion_rows = materialize(fieldnames)

    write_csv(import_path, fieldnames, expansion_rows)

    current_by_id = {row["id"]: row for row in current_rows}
    duplicate_ids = [row["id"] for row in expansion_rows if row["id"] in current_by_id]
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
