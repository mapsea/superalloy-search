#!/usr/bin/env python3
import csv
import re
import sys
from pathlib import Path

CHECKED_AT = "2026-06-14"
BALANCE_METHOD = "balance midpoint estimate from listed major elements"
TITANIUM_SOURCE_URL = "https://en.wikipedia.org/wiki/Titanium_alloys"
MAKERS = "ATI, TIMET, Perryman, Carpenter Additive, Kobe Steel, Toho Titanium"
MAKERS_ZH = "ATI, TIMET, Perryman, Carpenter Additive, 神户制钢所, 东邦钛"
JAPANESE_MAKERS = "神戸製鋼所, 大阪チタニウムテクノロジーズ, 東邦チタニウム, 日本製鉄"
JAPANESE_MAKERS_EN = "Kobe Steel, Osaka Titanium Technologies, Toho Titanium, Nippon Steel"
JAPANESE_MAKERS_ZH = "神户制钢所, 大阪钛技术, 东邦钛, 日本制铁"
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
    min_match = re.fullmatch(r"([0-9]+(?:\.[0-9]+)?)\s+min", text, re.IGNORECASE)
    if min_match:
        return float(min_match.group(1))
    fail(f"cannot estimate midpoint for value: {text}")


def balance_value(elements, balance_symbol):
    total = sum(midpoint(value) for symbol, value in elements.items() if symbol != balance_symbol)
    return f"約{max(0.1, 100 - total):.1f}"


def row(fieldnames, data):
    result = {field: "" for field in fieldnames}
    result.update(
        {
            "category": "チタン合金",
            "properties": data["properties_ja"],
            "representative_makers": MAKERS,
            "japanese_makers": JAPANESE_MAKERS,
            "source_type": "reference",
            "source_company": data.get("source_company", "Reference data"),
            "source_title": data.get("source_title", "Titanium alloys composition reference"),
            "source_url": data.get("source_url", TITANIUM_SOURCE_URL),
            "checked_at": CHECKED_AT,
            "source_notes": data.get(
                "source_notes_ja",
                "公開チタン合金成分の参考値。Ti余量は参考推定値として表示。調達前に現行ASTM/AMS/JISで確認が必要。",
            ),
            "category_en": "Titanium alloy",
            "category_zh": "钛合金",
            "properties_en": data["properties_en"],
            "properties_zh": data["properties_zh"],
            "representative_makers_en": MAKERS,
            "representative_makers_zh": MAKERS_ZH,
            "japanese_makers_en": JAPANESE_MAKERS_EN,
            "japanese_makers_zh": JAPANESE_MAKERS_ZH,
            "source_notes_en": data.get(
                "source_notes_en",
                "Public titanium alloy composition reference; titanium balance shown as a reference estimate. Verify against current ASTM/AMS/JIS before procurement.",
            ),
            "source_notes_zh": data.get(
                "source_notes_zh",
                "公开钛合金成分参考；钛余量按参考估算显示。采购前应根据现行ASTM/AMS/JIS核实。",
            ),
        }
    )
    for key in [
        "id",
        "name",
        "aliases",
        "usage",
        "name_en",
        "name_zh",
        "usage_en",
        "usage_zh",
    ]:
        result[key] = data[key]
    for symbol, value in data["elements"].items():
        if symbol not in ELEMENTS:
            fail(f"{data['id']}: unsupported element {symbol}")
        result[symbol] = value
    balance = data.get("balance")
    if balance:
        result[balance] = balance_value(data["elements"], balance)
        result[f"{balance}_estimated"] = "1"
        result[f"{balance}_estimate_method"] = BALANCE_METHOD
    return result


def main():
    root = Path(__file__).resolve().parents[1]
    csv_path = root / "data" / "alloys.csv"
    with csv_path.open(newline="", encoding="utf-8") as csv_file:
        reader = csv.DictReader(csv_file)
        fieldnames = reader.fieldnames or []
        rows = list(reader)
    if not fieldnames:
        fail("data/alloys.csv has no header")

    new_rows = [
        {
            "id": "ti-grade-3",
            "name": "Titanium Grade 3",
            "aliases": "CP Ti Grade 3|UNS R50550",
            "usage": "化学装置・航空部材・圧力容器",
            "name_en": "Titanium Grade 3",
            "name_zh": "Titanium Grade 3",
            "usage_en": "chemical equipment, aircraft components, pressure vessels",
            "usage_zh": "化工设备、航空部件、压力容器",
            "properties_ja": "商用純チタンの中強度グレード。Grade 2より強度が高く、耐食性と溶接性を保つ。",
            "properties_en": "Medium-strength commercially pure titanium with higher strength than Grade 2 while retaining corrosion resistance and weldability.",
            "properties_zh": "中等强度的商业纯钛，比Grade 2强度更高，同时保持耐蚀性和焊接性。",
            "elements": {"Fe": "0.30 max", "C": "0.08 max", "N": "0.05 max", "O": "0.35 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-grade-4",
            "name": "Titanium Grade 4",
            "aliases": "CP Ti Grade 4|UNS R50700",
            "usage": "航空構造・医療部材・耐食圧力部材",
            "name_en": "Titanium Grade 4",
            "name_zh": "Titanium Grade 4",
            "usage_en": "aircraft structures, medical components, corrosion-resistant pressure parts",
            "usage_zh": "航空结构、医疗部件、耐蚀承压部件",
            "properties_ja": "商用純チタンの高強度グレード。純チタン系の耐食性を維持しつつ機械強度を高めた材料。",
            "properties_en": "High-strength commercially pure titanium, retaining CP titanium corrosion resistance with increased mechanical strength.",
            "properties_zh": "高强度商业纯钛，在保持纯钛耐蚀性的同时提高机械强度。",
            "elements": {"Fe": "0.50 max", "C": "0.08 max", "N": "0.05 max", "O": "0.40 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-grade-11",
            "name": "Titanium Grade 11",
            "aliases": "CP Ti Grade 11|Ti-0.15Pd|UNS R52250",
            "usage": "化学プラント・塩化物環境・熱交換器",
            "name_en": "Titanium Grade 11",
            "name_zh": "Titanium Grade 11",
            "usage_en": "chemical plants, chloride environments, heat exchangers",
            "usage_zh": "化工装置、氯化物环境、换热器",
            "properties_ja": "Grade 1相当の純チタンにPdを添加した耐隙間腐食グレード。還元性酸や塩化物環境で使われる。",
            "properties_en": "Grade 1-type CP titanium with palladium for improved crevice-corrosion resistance in reducing acids and chloride media.",
            "properties_zh": "在Grade 1类纯钛中添加钯，提高还原性酸和氯化物介质中的缝隙腐蚀抗力。",
            "elements": {"Fe": "0.20 max", "C": "0.08 max", "N": "0.03 max", "O": "0.18 max", "H": "0.015 max", "Pd": "0.12-0.25"},
            "balance": "Ti",
        },
        {
            "id": "ti-grade-6",
            "name": "Titanium Grade 6",
            "aliases": "Ti-5Al-2.5Sn|UNS R54520",
            "usage": "航空エンジン・低温圧力容器・高温構造材",
            "name_en": "Titanium Grade 6",
            "name_zh": "Titanium Grade 6",
            "usage_en": "aircraft engines, cryogenic pressure vessels, elevated-temperature structures",
            "usage_zh": "航空发动机、低温压力容器、高温结构件",
            "properties_ja": "Ti-5Al-2.5Snのα系チタン合金。溶接性、組織安定性、高温強度と低温靭性のバランスがよい。",
            "properties_en": "Alpha titanium alloy Ti-5Al-2.5Sn with useful weldability, stability, elevated-temperature strength, and cryogenic toughness.",
            "properties_zh": "Ti-5Al-2.5Sn α型钛合金，兼具焊接性、组织稳定性、高温强度和低温韧性。",
            "elements": {"Fe": "0.50 max", "Ti": "", "Al": "4.5-5.75", "C": "0.08 max", "Sn": "2.0-3.0", "N": "0.05 max", "O": "0.20 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-5al-2-5sn-eli",
            "name": "Ti-5Al-2.5Sn ELI",
            "aliases": "Grade 6 ELI|UNS R54521",
            "usage": "低温タンク・宇宙機構造・液体水素/酸素設備",
            "name_en": "Ti-5Al-2.5Sn ELI",
            "name_zh": "Ti-5Al-2.5Sn ELI",
            "usage_en": "cryogenic tanks, spacecraft structures, liquid hydrogen and oxygen equipment",
            "usage_zh": "低温储罐、航天器结构、液氢/液氧设备",
            "properties_ja": "低侵入元素仕様のTi-5Al-2.5Sn。低温靭性を重視する宇宙・低温機器向け。",
            "properties_en": "Extra-low-interstitial Ti-5Al-2.5Sn for cryogenic toughness in spacecraft and low-temperature equipment.",
            "properties_zh": "低间隙元素Ti-5Al-2.5Sn，面向航天和低温设备的低温韧性应用。",
            "elements": {"Fe": "0.25 max", "Al": "4.5-5.75", "C": "0.08 max", "Sn": "2.0-3.0", "N": "0.03 max", "O": "0.13 max", "H": "0.0125 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-8al-1mo-1v",
            "name": "Ti-8Al-1Mo-1V",
            "aliases": "Ti-8-1-1|UNS R54810",
            "usage": "航空エンジン・圧縮機部品・高温シート部材",
            "name_en": "Ti-8Al-1Mo-1V",
            "name_zh": "Ti-8Al-1Mo-1V",
            "usage_en": "aircraft engines, compressor parts, elevated-temperature sheet components",
            "usage_zh": "航空发动机、压气机部件、高温板材部件",
            "properties_ja": "Alを多く含むnear-αチタン合金。高温強度とクリープ抵抗を重視した航空機エンジン向け材料。",
            "properties_en": "Near-alpha titanium alloy with high aluminum content for elevated-temperature strength and creep resistance in aero engines.",
            "properties_zh": "高铝含量近α钛合金，用于航空发动机中重视高温强度和抗蠕变的部件。",
            "elements": {"Fe": "0.30 max", "Mo": "0.75-1.25", "Al": "7.35-8.35", "C": "0.08 max", "V": "0.75-1.25", "N": "0.05 max", "O": "0.12 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-6al-2sn-4zr-2mo",
            "name": "Ti-6Al-2Sn-4Zr-2Mo",
            "aliases": "Ti-6242|UNS R54620",
            "usage": "ガスタービン圧縮機・航空エンジン・高温締結部品",
            "name_en": "Ti-6Al-2Sn-4Zr-2Mo",
            "name_zh": "Ti-6Al-2Sn-4Zr-2Mo",
            "usage_en": "gas-turbine compressors, aircraft engines, elevated-temperature fasteners",
            "usage_zh": "燃气轮机压气机、航空发动机、高温紧固件",
            "properties_ja": "Ti-6242として知られるnear-αチタン合金。高温強度、クリープ抵抗、航空エンジン部材への適性が特長。",
            "properties_en": "Near-alpha titanium alloy known as Ti-6242, valued for elevated-temperature strength, creep resistance, and aero-engine service.",
            "properties_zh": "称为Ti-6242的近α钛合金，特点是高温强度、抗蠕变和航空发动机适用性。",
            "source_title": "Ti-6Al-2Sn-4Zr-2Mo composition reference",
            "source_url": "https://en.wikipedia.org/wiki/Ti-6Al-2Sn-4Zr-2Mo",
            "elements": {"Fe": "0.25 max", "Mo": "1.8-2.2", "Al": "5.5-6.5", "C": "0.05 max", "Si": "0.06-0.10", "Sn": "1.8-2.2", "Zr": "3.6-4.4", "N": "0.05 max", "O": "0.12 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-6al-2sn-4zr-6mo",
            "name": "Ti-6Al-2Sn-4Zr-6Mo",
            "aliases": "Ti-6246|UNS R56260",
            "usage": "航空エンジンディスク・圧縮機部品・高強度鍛造材",
            "name_en": "Ti-6Al-2Sn-4Zr-6Mo",
            "name_zh": "Ti-6Al-2Sn-4Zr-6Mo",
            "usage_en": "aero-engine disks, compressor components, high-strength forgings",
            "usage_zh": "航空发动机盘件、压气机部件、高强度锻件",
            "properties_ja": "Ti-6246として使われる高強度near-α/α+β系チタン合金。Mo添加により焼入性と高温強度を高める。",
            "properties_en": "High-strength near-alpha/alpha-beta titanium alloy Ti-6246, using molybdenum to increase hardenability and hot strength.",
            "properties_zh": "高强度近α/α+β钛合金Ti-6246，通过钼提高淬透性和高温强度。",
            "elements": {"Fe": "0.25 max", "Mo": "5.5-6.5", "Al": "5.5-6.5", "C": "0.05 max", "Si": "0.06-0.20", "Sn": "1.8-2.2", "Zr": "3.6-4.4", "N": "0.05 max", "O": "0.15 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-1100",
            "name": "Ti-1100",
            "aliases": "Ti-6Al-2.75Sn-4Zr-0.4Mo-0.45Si",
            "usage": "航空エンジン・高温圧縮機部品・クリープ抵抗部材",
            "name_en": "Ti-1100",
            "name_zh": "Ti-1100",
            "usage_en": "aero engines, high-temperature compressor parts, creep-resistant components",
            "usage_zh": "航空发动机、高温压气机部件、抗蠕变部件",
            "properties_ja": "Ti-6242系を発展させたnear-αチタン合金。高温クリープ抵抗と組織安定性を重視する。",
            "properties_en": "Near-alpha titanium alloy developed from Ti-6242-type chemistry for high-temperature creep resistance and microstructural stability.",
            "properties_zh": "由Ti-6242类成分发展而来的近α钛合金，重视高温抗蠕变和组织稳定性。",
            "elements": {"Fe": "0.25 max", "Mo": "0.35-0.55", "Al": "5.5-6.5", "C": "0.05 max", "Si": "0.35-0.55", "Sn": "2.35-3.15", "Zr": "3.5-4.5", "N": "0.05 max", "O": "0.12 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "imi-834",
            "name": "IMI 834",
            "aliases": "Ti-834|Ti-5.8Al-4Sn-3.5Zr-0.7Nb-0.5Mo-0.35Si",
            "usage": "航空エンジン圧縮機ディスク・ブレード・高温鍛造材",
            "name_en": "IMI 834",
            "name_zh": "IMI 834",
            "usage_en": "aero-engine compressor disks, blades, elevated-temperature forgings",
            "usage_zh": "航空发动机压气机盘、叶片、高温锻件",
            "properties_ja": "高温用near-αチタン合金。圧縮機ディスクやブレード向けにクリープ強度と疲労強度を重視する。",
            "properties_en": "High-temperature near-alpha titanium alloy for compressor disks and blades, emphasizing creep and fatigue strength.",
            "properties_zh": "高温近α钛合金，用于压气机盘和叶片，重视蠕变强度和疲劳强度。",
            "elements": {"Fe": "0.25 max", "Mo": "0.3-0.7", "Nb": "0.5-1.0", "Al": "5.5-6.5", "C": "0.03-0.08", "Si": "0.25-0.45", "Sn": "3.5-4.5", "Zr": "3.0-4.0", "N": "0.05 max", "O": "0.12 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-6al-6v-2sn",
            "name": "Ti-6Al-6V-2Sn",
            "aliases": "Ti-662|UNS R56620",
            "usage": "航空機鍛造材・ロケットケース・高強度締結部品",
            "name_en": "Ti-6Al-6V-2Sn",
            "name_zh": "Ti-6Al-6V-2Sn",
            "usage_en": "aircraft forgings, rocket cases, high-strength fasteners",
            "usage_zh": "航空锻件、火箭壳体、高强度紧固件",
            "properties_ja": "Ti-6-6-2として知られる高強度α+βチタン合金。Ti-6Al-4Vより高強度化を狙う鍛造材に使われる。",
            "properties_en": "High-strength alpha-beta titanium alloy known as Ti-6-6-2, used where forgings need greater strength than Ti-6Al-4V.",
            "properties_zh": "称为Ti-6-6-2的高强度α+β钛合金，用于需要高于Ti-6Al-4V强度的锻件。",
            "elements": {"Fe": "0.35-1.0", "Al": "5.5-6.5", "C": "0.08 max", "Cu": "0.35-1.0", "V": "5.0-6.0", "Sn": "1.5-2.5", "N": "0.05 max", "O": "0.20 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-6al-7nb",
            "name": "Ti-6Al-7Nb",
            "aliases": "UNS R56700|ASTM F1295|ISO 5832-11",
            "usage": "人工関節・骨接合部材・医療インプラント",
            "name_en": "Ti-6Al-7Nb",
            "name_zh": "Ti-6Al-7Nb",
            "usage_en": "joint replacements, bone fixation components, medical implants",
            "usage_zh": "人工关节、骨固定部件、医疗植入物",
            "properties_ja": "VをNbで置き換えた医療向けα+βチタン合金。生体適合性と耐食性を重視する。",
            "properties_en": "Medical alpha-beta titanium alloy replacing vanadium with niobium, emphasizing biocompatibility and corrosion resistance.",
            "properties_zh": "以铌替代钒的医疗用α+β钛合金，重视生物相容性和耐蚀性。",
            "source_title": "Ti-6Al-7Nb composition reference",
            "source_url": "https://en.wikipedia.org/wiki/Ti-6Al-7Nb",
            "elements": {"Fe": "0.25 max", "Nb": "6.5-7.5", "Al": "5.5-6.5", "C": "0.08 max", "N": "0.05 max", "O": "0.20 max", "H": "0.009 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-10v-2fe-3al",
            "name": "Ti-10V-2Fe-3Al",
            "aliases": "Ti-10-2-3|UNS R56410",
            "usage": "航空機ランディングギア・高強度鍛造材・機体構造",
            "name_en": "Ti-10V-2Fe-3Al",
            "name_zh": "Ti-10V-2Fe-3Al",
            "usage_en": "aircraft landing gear, high-strength forgings, airframe structures",
            "usage_zh": "飞机起落架、高强度锻件、机体结构",
            "properties_ja": "near-βチタン合金。高強度、靭性、疲労特性が求められる大型航空機構造に使われる。",
            "properties_en": "Near-beta titanium alloy for aircraft structures requiring high strength, toughness, and fatigue performance.",
            "properties_zh": "近β钛合金，用于需要高强度、韧性和疲劳性能的大型航空结构。",
            "source_title": "Ti-10V-2Fe-3Al composition reference",
            "source_url": "https://en.wikipedia.org/wiki/Ti-10V-2Fe-3Al",
            "elements": {"Fe": "1.6-2.22", "Al": "2.6-3.4", "C": "0.05 max", "V": "9.0-11.0", "N": "0.05 max", "O": "0.13 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-15v-3cr-3sn-3al",
            "name": "Ti-15V-3Cr-3Sn-3Al",
            "aliases": "Ti-15-3|UNS R58153",
            "usage": "航空機シート材・ばね・ファスナー・高強度薄板",
            "name_en": "Ti-15V-3Cr-3Sn-3Al",
            "name_zh": "Ti-15V-3Cr-3Sn-3Al",
            "usage_en": "aircraft sheet, springs, fasteners, high-strength thin sections",
            "usage_zh": "航空板材、弹簧、紧固件、高强度薄壁件",
            "properties_ja": "冷間成形性に優れるmetastable βチタン合金。薄板、ばね、ファスナー用途で時効硬化を利用する。",
            "properties_en": "Metastable beta titanium alloy with good cold formability, using age hardening for sheet, springs, and fasteners.",
            "properties_zh": "具有良好冷成形性的亚稳β钛合金，板材、弹簧和紧固件中利用时效硬化。",
            "elements": {"Cr": "2.5-3.5", "Fe": "0.25 max", "Al": "2.5-3.5", "C": "0.05 max", "V": "14.0-16.0", "Sn": "2.5-3.5", "N": "0.05 max", "O": "0.13 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-beta-c",
            "name": "Titanium Beta C",
            "aliases": "Ti-3Al-8V-6Cr-4Mo-4Zr|Grade 19|UNS R58640",
            "usage": "航空機ランディングギア・油井部品・高強度締結部品",
            "name_en": "Titanium Beta C",
            "name_zh": "Titanium Beta C",
            "usage_en": "aircraft landing gear, oilfield components, high-strength fasteners",
            "usage_zh": "飞机起落架、油田部件、高强度紧固件",
            "properties_ja": "深部まで熱処理しやすいmetastable βチタン合金。高強度、靭性、塩水・サワー環境耐食性を重視する。",
            "properties_en": "Deep-hardenable metastable beta titanium alloy emphasizing high strength, toughness, and saline or sour-service corrosion resistance.",
            "properties_zh": "易于深截面热处理的亚稳β钛合金，重视高强度、韧性及盐水/含硫环境耐蚀性。",
            "source_title": "Titanium Beta C composition reference",
            "source_url": "https://en.wikipedia.org/wiki/Titanium_Beta_C",
            "elements": {"Cr": "5.5-6.5", "Fe": "0.25 max", "Mo": "3.5-4.5", "Al": "2.5-3.5", "C": "0.05 max", "V": "7.5-8.5", "Zr": "3.5-4.5", "N": "0.05 max", "O": "0.13 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-13v-11cr-3al",
            "name": "Ti-13V-11Cr-3Al",
            "aliases": "Ti-13-11-3|UNS R58010",
            "usage": "航空機構造・高強度板材・熱処理部品",
            "name_en": "Ti-13V-11Cr-3Al",
            "name_zh": "Ti-13V-11Cr-3Al",
            "usage_en": "aircraft structures, high-strength sheet, heat-treated components",
            "usage_zh": "航空结构、高强度板材、热处理部件",
            "properties_ja": "初期のβチタン合金として知られる高強度材。溶体化時効で高強度化できる。",
            "properties_en": "Early high-strength beta titanium alloy that can be strengthened by solution treatment and aging.",
            "properties_zh": "早期高强度β钛合金，可通过固溶时效提高强度。",
            "elements": {"Cr": "10.0-12.0", "Fe": "0.35 max", "Al": "2.5-3.5", "C": "0.08 max", "V": "12.5-14.5", "N": "0.05 max", "O": "0.17 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-5553",
            "name": "Ti-5553",
            "aliases": "Ti-5Al-5V-5Mo-3Cr|Ti-5553",
            "usage": "大型航空機構造・ランディングギア・高強度鍛造材",
            "name_en": "Ti-5553",
            "name_zh": "Ti-5553",
            "usage_en": "large aircraft structures, landing gear, high-strength forgings",
            "usage_zh": "大型飞机结构、起落架、高强度锻件",
            "properties_ja": "高強度near-βチタン合金。大型断面での強度、靭性、鍛造部品への適性が特長。",
            "properties_en": "High-strength near-beta titanium alloy with good strength and toughness in large forged sections.",
            "properties_zh": "高强度近β钛合金，在大型锻件截面中具有良好的强度和韧性。",
            "elements": {"Cr": "2.5-3.5", "Fe": "0.30-0.50", "Mo": "4.0-5.5", "Al": "4.4-5.7", "C": "0.08 max", "V": "4.0-5.5", "N": "0.05 max", "O": "0.18 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-15mo",
            "name": "Ti-15Mo",
            "aliases": "ASTM F2066|UNS R58150",
            "usage": "医療インプラント・歯科部材・低弾性率部品",
            "name_en": "Ti-15Mo",
            "name_zh": "Ti-15Mo",
            "usage_en": "medical implants, dental components, low-modulus parts",
            "usage_zh": "医疗植入物、牙科部件、低弹性模量部件",
            "properties_ja": "Moを主添加元素とするβチタン合金。V/Alを避けたい医療用途で低弾性率と耐食性を重視する。",
            "properties_en": "Beta titanium alloy using molybdenum as the main beta stabilizer for low-modulus, corrosion-resistant medical applications without V or Al.",
            "properties_zh": "以钼为主要β稳定元素的β钛合金，用于避免V/Al的低模量耐蚀医疗应用。",
            "elements": {"Fe": "0.10 max", "Mo": "14.0-16.0", "C": "0.05 max", "N": "0.05 max", "O": "0.15 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-12mo-6zr-2fe",
            "name": "Ti-12Mo-6Zr-2Fe",
            "aliases": "TMZF|ASTM F1813|UNS R58120",
            "usage": "整形外科インプラント・脊椎部材・低弾性率医療部品",
            "name_en": "Ti-12Mo-6Zr-2Fe",
            "name_zh": "Ti-12Mo-6Zr-2Fe",
            "usage_en": "orthopedic implants, spinal components, low-modulus medical parts",
            "usage_zh": "骨科植入物、脊柱部件、低模量医疗部件",
            "properties_ja": "TMZFとして知られるβチタン合金。低弾性率、高強度、生体適合性を医療用途で活かす。",
            "properties_en": "Beta titanium alloy known as TMZF, used in medical components for low modulus, high strength, and biocompatibility.",
            "properties_zh": "称为TMZF的β钛合金，在医疗部件中利用低模量、高强度和生物相容性。",
            "elements": {"Fe": "1.5-2.5", "Mo": "11.0-13.0", "C": "0.08 max", "Zr": "5.0-7.0", "N": "0.05 max", "O": "0.20 max", "H": "0.015 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-29nb-13ta-4-6zr",
            "name": "Ti-29Nb-13Ta-4.6Zr",
            "aliases": "TNTZ|Ti-29Nb-13Ta-4.6Zr",
            "usage": "医療インプラント・低弾性率部材・生体材料研究",
            "name_en": "Ti-29Nb-13Ta-4.6Zr",
            "name_zh": "Ti-29Nb-13Ta-4.6Zr",
            "usage_en": "medical implants, low-modulus components, biomaterials research",
            "usage_zh": "医疗植入物、低模量部件、生物材料研究",
            "properties_ja": "Nb、Ta、Zrを用いるβ系生体用チタン合金。低弾性率とV/Alフリー設計が特長。",
            "properties_en": "Biomedical beta titanium alloy using Nb, Ta, and Zr, notable for low modulus and V/Al-free design.",
            "properties_zh": "使用Nb、Ta、Zr的生物医用β钛合金，特点是低模量和无V/Al设计。",
            "elements": {"Nb": "28.0-30.0", "Ta": "12.0-14.0", "Zr": "4.0-5.0", "O": "0.20 max"},
            "balance": "Ti",
        },
        {
            "id": "ti-grade-21",
            "name": "Titanium Grade 21",
            "aliases": "Ti-15Mo-3Al-2.7Nb-0.25Si|UNS R58210",
            "usage": "航空宇宙構造・耐食高強度部材・深海/海洋部品",
            "name_en": "Titanium Grade 21",
            "name_zh": "Titanium Grade 21",
            "usage_en": "aerospace structures, corrosion-resistant high-strength parts, deep-sea and marine components",
            "usage_zh": "航空航天结构、耐蚀高强度部件、深海和海洋部件",
            "properties_ja": "βチタン合金Ti-15Mo-3Al-2.7Nb-0.25Si。高強度、靭性、耐食性の組合せを狙う。",
            "properties_en": "Beta titanium alloy Ti-15Mo-3Al-2.7Nb-0.25Si, targeting a combination of strength, toughness, and corrosion resistance.",
            "properties_zh": "β钛合金Ti-15Mo-3Al-2.7Nb-0.25Si，面向强度、韧性和耐蚀性的组合。",
            "elements": {"Fe": "0.25 max", "Mo": "14.0-16.0", "Nb": "2.3-3.1", "Al": "2.5-3.5", "C": "0.05 max", "Si": "0.15-0.35", "N": "0.05 max", "O": "0.15 max", "H": "0.015 max"},
            "balance": "Ti",
        },
    ]

    existing_ids = {existing["id"] for existing in rows}
    duplicate_ids = [item["id"] for item in new_rows if item["id"] in existing_ids]
    if duplicate_ids:
        fail(f"duplicate ids already present: {', '.join(duplicate_ids)}")

    rows.extend(row(fieldnames, item) for item in new_rows)
    with csv_path.open("w", newline="", encoding="utf-8") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fieldnames, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)
    print(f"Added {len(new_rows)} mainstream titanium alloy records to data/alloys.csv for {len(rows)} total records.")


if __name__ == "__main__":
    main()
