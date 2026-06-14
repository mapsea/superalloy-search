#!/usr/bin/env python3
import csv
import json
import re
import sys
from datetime import date
from pathlib import Path

ELEMENT_COLUMNS = [
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
INCLUDES_COLUMN_SUFFIX = "_includes"
ESTIMATED_COLUMN_SUFFIX = "_estimated"
ESTIMATE_METHOD_COLUMN_SUFFIX = "_estimate_method"
TRUTHY_VALUES = {"1", "true", "yes", "y"}
FALSY_VALUES = {"", "0", "false", "no", "n"}
SOURCE_LABELS = {
    "official": "公式",
    "standard": "規格",
    "reference": "参考",
    "unverified": "未確認",
}
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
    "properties",
    "representative_makers",
    "japanese_makers",
    "source_type",
    "source_company",
    "source_title",
    "source_url",
    "checked_at",
    "source_notes",
    "name_en",
    "name_zh",
    "category_en",
    "category_zh",
    "usage_en",
    "usage_zh",
    "properties_en",
    "properties_zh",
    "representative_makers_en",
    "representative_makers_zh",
    "japanese_makers_en",
    "japanese_makers_zh",
    "source_notes_en",
    "source_notes_zh",
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

PROPERTY_OVERRIDES = {
    "inconel-600": "Ni-Cr-Fe系の耐熱耐食合金。高温での耐酸化性、塩化物応力腐食割れへの抵抗、化学装置向けの汎用性が特長。",
    "inconel-601": "高Cr-Ni系の耐酸化合金。高温酸化、浸炭、熱衝撃環境で使いやすい。",
    "inconel-617": "Ni-Cr-Co-Mo系の固溶強化合金。高温強度、酸化抵抗、ガスタービン周辺部材への適性が特長。",
    "inconel-625": "Mo-Nb添加Ni基耐食合金。海水、塩化物、酸性環境での耐食性と溶接性が特長。",
    "inconel-718": "Nbを含む析出強化Ni基合金。高強度、耐クリープ性、鍛造・AM部材への適用範囲の広さが特長。",
    "rene-41": "Ni-Cr-Co-Mo系の析出強化高温合金。高温引張強度と酸化抵抗に優れ、航空宇宙の高温構造材に使われる。",
    "cmsx-4": "Reを含む第2世代単結晶Ni基スーパーアロイ。単結晶タービンブレード向けに高温クリープ強度と耐酸化性を重視した合金。",
    "rene-n5": "Reを含む単結晶Ni基スーパーアロイ。IGT・航空エンジンブレード向けの高温クリープ強度と組織安定性が特長。",
    "mar-m-247": "Ta、W、Al、Tiを含む鋳造Ni基スーパーアロイ。タービンブレードやベーン向けの高温強度と鋳造性が特長。",
    "fsx-414": "Co-Cr-Ni-W系の鋳造コバルト基スーパーアロイ。高温耐食性、熱疲労抵抗、IGTベーン用途への適性が特長。",
    "stellite-6": "Co-Cr-W-C系の耐摩耗コバルト合金。高温硬さ、かじり抵抗、耐食性を兼ねる表面・摺動部材向け合金。",
}

MAKER_OVERRIDES = {
    "inconel-600": "Special Metals, VDM Metals, Haynes International, ATI",
    "inconel-601": "Special Metals, VDM Metals, Haynes International, ATI",
    "inconel-617": "Special Metals, VDM Metals, Haynes International, ATI",
    "inconel-625": "Special Metals, VDM Metals, Haynes International, ATI",
    "inconel-718": "Special Metals, Carpenter Technology, ATI, VDM Metals",
    "inconel-x-750": "Special Metals, ATI, VDM Metals, Carpenter Technology",
    "hastelloy-b-2": "Haynes International, VDM Metals, ATI, Special Metals",
    "hastelloy-c-22": "Haynes International, VDM Metals, ATI, Special Metals",
    "hastelloy-c-276": "Haynes International, VDM Metals, ATI, Special Metals",
    "haynes-188": "Haynes International, ATI, VDM Metals, Special Metals",
    "haynes-230": "Haynes International, ATI, VDM Metals, Special Metals",
    "haynes-282": "Haynes International, ATI, Carpenter Technology, Special Metals",
    "cmsx-4": "Cannon-Muskegon, Howmet Aerospace, PCC Structurals, Doncasters",
    "rene-n5": "GE Aerospace, Howmet Aerospace, PCC Structurals, Cannon-Muskegon",
    "mar-m-247": "Howmet Aerospace, Cannon-Muskegon, PCC Structurals, Doncasters",
    "fsx-414": "Howmet Aerospace, Doncasters, PCC Structurals, Cannon-Muskegon",
    "stellite-6": "Kennametal Stellite, Deloro, Wall Colmonoy, Höganäs",
}

JAPANESE_MAKER_OVERRIDES = {
    "inconel-600": "大同特殊鋼, プロテリアル, 日本冶金工業, 三菱マテリアル",
    "inconel-601": "大同特殊鋼, プロテリアル, 日本冶金工業, 三菱マテリアル",
    "inconel-617": "大同特殊鋼, プロテリアル, 日本冶金工業, IHI",
    "inconel-625": "大同特殊鋼, プロテリアル, 日本冶金工業, 三菱マテリアル",
    "inconel-718": "大同特殊鋼, プロテリアル, IHI, 三菱重工業",
    "inconel-x-750": "大同特殊鋼, プロテリアル, 日本冶金工業, 三菱マテリアル",
    "cmsx-4": "IHI, 三菱重工業, 川崎重工業, 大同特殊鋼",
    "rene-n5": "IHI, 三菱重工業, 川崎重工業, 大同特殊鋼",
    "mar-m-247": "IHI, 三菱重工業, 川崎重工業, 大同特殊鋼",
    "fsx-414": "IHI, 三菱重工業, 川崎重工業, 大同特殊鋼",
    "stellite-6": "三菱マテリアル, 大同特殊鋼, プロテリアル, 日本タングステン",
}


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

    approx_match = re.fullmatch(r"約\s*([0-9]+(?:\.[0-9]+)?)", text)
    if approx_match:
        value = float(approx_match.group(1))
        return {"min": value, "max": value, "unit": "wt%", "display": f"約{approx_match.group(1)}"}

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


def discover_estimate_columns(fieldnames):
    estimate_columns = {}
    for column in fieldnames:
        suffix = None
        if column.endswith(ESTIMATED_COLUMN_SUFFIX):
            suffix = ESTIMATED_COLUMN_SUFFIX
        elif column.endswith(ESTIMATE_METHOD_COLUMN_SUFFIX):
            suffix = ESTIMATE_METHOD_COLUMN_SUFFIX
        if suffix is None:
            continue

        symbol = column[: -len(suffix)]
        if symbol not in ELEMENT_COLUMNS:
            fail(f"{column}: estimate metadata base element is not supported")
        estimate_columns.setdefault(symbol, {})[suffix] = column
    return estimate_columns


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


def parse_bool_metadata(value, alloy_id, column):
    normalized = (value or "").strip().lower()
    if normalized in TRUTHY_VALUES:
        return True
    if normalized in FALSY_VALUES:
        return False
    fail(f"{alloy_id}.{column}: expected boolean metadata value")


def parse_aliases(value):
    text = (value or "").strip()
    if not text:
        return []
    return [alias.strip() for alias in text.split("|") if alias.strip()]


def infer_properties(alloy_id, name, category, usage):
    if alloy_id in PROPERTY_OVERRIDES:
        return PROPERTY_OVERRIDES[alloy_id]

    search_text = " ".join([alloy_id, name, category, usage]).lower()
    if any(token in search_text for token in ["cmsx", "pwa", "tms", "single crystal", "単結晶", "rene-n", "dd"]):
        return "単結晶Ni基スーパーアロイ。高温クリープ強度、耐酸化性、タービンブレード用途での組織安定性を重視した合金。"
    if any(token in search_text for token in ["rene", "mar-m", "gtd", "in-", "鋳造スーパーアロイ"]):
        return "鋳造Ni基スーパーアロイ。高温強度、耐酸化性、鋳造タービンブレード・ベーン用途への適性が特長。"
    if "コバルト基" in category or any(token in search_text for token in ["stellite", "tribaloy", "fsx", "x-40", "x-45", "haynes 25"]):
        return "コバルト基高温合金。高温耐食性、耐摩耗性、熱疲労抵抗に優れ、ベーン・燃焼器・摺動部材に使われる。"
    if "粉末冶金" in category or any(token in search_text for token in ["rr1000", "me3", "lshr", "astroloy", "merl"]):
        return "粉末冶金Ni基スーパーアロイ。高温ディスク用途に必要な高強度、疲労抵抗、組織均一性を重視した合金。"
    if "鍛造スーパーアロイ" in category or any(token in search_text for token in ["nimonic", "udimet", "waspaloy"]):
        return "鍛造Ni基スーパーアロイ。高温強度、耐酸化性、ディスク・シャフト・締結部品への加工適性が特長。"
    if "スーパーアロイ" in category or "耐熱" in category:
        return "高温環境向け合金。耐酸化性、高温強度、クリープ抵抗を重視し、熱処理炉・ガスタービン・高温装置に使われる。"
    if "耐食" in category or "ニッケル" in category:
        return "耐食性を重視した特殊合金。酸、塩化物、海水、化学プラント環境での腐食抵抗を主な特長とする。"
    if "チタン" in category:
        return "軽量で比強度と耐食性に優れるチタン合金。化学装置、航空構造、医療用途に使われる。"
    if "ステンレス" in category:
        return "Crを主成分に含む耐食鋼。耐食性、加工性、溶接性、耐熱性のバランスで設備・構造部材に使われる。"
    if "工具鋼" in category or "高速度工具鋼" in category:
        return "硬さ、耐摩耗性、焼入れ性を重視した工具用鋼。金型、切削工具、耐摩耗部品に使われる。"
    if "鋳鉄" in category:
        return "鋳造性、減衰性、耐摩耗性を活かす鉄系鋳造材料。機械ベース、ハウジング、耐摩耗部材に使われる。"
    if "電磁鋼" in category:
        return "磁気特性を重視した電磁用鋼。モーター鉄心、変圧器、発電機部材に使われる。"
    if "耐候性" in category:
        return "大気腐食環境で保護性さびを形成しやすい鋼。橋梁、屋外構造物、車両部材に使われる。"
    if "炭素鋼" in category or "普通鋼" in category or "合金鋼" in category or "低合金鋼" in category or "機械構造用鋼" in category:
        return "鉄を主成分とする構造用鋼。強度、靭性、熱処理性、加工性のバランスで機械部品や構造材に使われる。"
    return f"{category}に分類される特殊金属材料。用途は{usage}で、成分範囲から候補材の比較に使える。"


def infer_representative_makers(alloy_id, name, category, source_company):
    if alloy_id in MAKER_OVERRIDES:
        return MAKER_OVERRIDES[alloy_id]

    search_text = " ".join([alloy_id, name, category]).lower()
    if "inconel" in search_text or "incoloy" in search_text:
        return "Special Metals, VDM Metals, ATI, Carpenter Technology"
    if "hastelloy" in search_text or "haynes" in search_text:
        return "Haynes International, VDM Metals, ATI, Special Metals"
    if "nimonic" in search_text:
        return "Special Metals, ATI, VDM Metals, Doncasters"
    if "udimet" in search_text:
        return "Special Metals, ATI, Howmet Aerospace, Carpenter Technology"
    if "rene" in search_text:
        return "GE Aerospace, Howmet Aerospace, PCC Structurals, Cannon-Muskegon"
    if any(token in search_text for token in ["cmsx", "cm ", "cm-", "mar-m"]):
        return "Cannon-Muskegon, Howmet Aerospace, PCC Structurals, Doncasters"
    if any(token in search_text for token in ["pwa", "gtd", "tms", "single crystal", "dd"]):
        return "Pratt & Whitney, GE Aerospace, Howmet Aerospace, Cannon-Muskegon"
    if "コバルト基" in category or any(token in search_text for token in ["stellite", "tribaloy", "fsx", "x-40", "x-45"]):
        return "Kennametal Stellite, Haynes International, Deloro, Wall Colmonoy"
    if "チタン" in category:
        return "ATI, TIMET, Kobe Steel, Toho Titanium"
    if "ステンレス" in category or "鋼" in category or "鋳鉄" in category:
        return "Nippon Steel, JFE Steel, Daido Steel, Aichi Steel"
    if "銅" in category:
        return "Mitsubishi Materials, Wieland, Materion, KME"
    if "高融点" in category or "ジルコニウム" in category:
        return "H.C. Starck Solutions, ATI, Plansee, AMG"
    if source_company and source_company not in {"Reference data", "Standards reference", "SAE reference", "Unverified reference data"}:
        return source_company
    return "Special Metals, ATI, Carpenter Technology, Haynes International"


def infer_japanese_makers(alloy_id, name, category):
    if alloy_id in JAPANESE_MAKER_OVERRIDES:
        return JAPANESE_MAKER_OVERRIDES[alloy_id]

    search_text = " ".join([alloy_id, name, category]).lower()
    if any(token in search_text for token in ["cmsx", "pwa", "tms", "single crystal", "単結晶", "rene-n", "gtd", "mar-m", "鋳造スーパーアロイ"]):
        return "IHI, 三菱重工業, 川崎重工業, 大同特殊鋼"
    if "rene" in search_text:
        return "IHI, 三菱重工業, 川崎重工業, 大同特殊鋼"
    if "コバルト基" in category or any(token in search_text for token in ["stellite", "tribaloy", "fsx", "x-40", "x-45"]):
        return "三菱マテリアル, 大同特殊鋼, プロテリアル, 日本タングステン"
    if any(token in search_text for token in ["inconel", "incoloy", "hastelloy", "haynes", "nimonic", "udimet", "waspaloy"]):
        return "大同特殊鋼, プロテリアル, 日本冶金工業, 三菱マテリアル"
    if "スーパーアロイ" in category or "耐熱" in category or "ニッケル" in category:
        return "大同特殊鋼, プロテリアル, 日本冶金工業, IHI"
    if "チタン" in category:
        return "神戸製鋼所, 大阪チタニウムテクノロジーズ, 東邦チタニウム, 日本製鉄"
    if "ステンレス" in category or "鋼" in category or "鋳鉄" in category:
        return "日本製鉄, JFEスチール, 大同特殊鋼, 愛知製鋼"
    if "銅" in category:
        return "三菱マテリアル, JX金属, 古河電気工業, DOWAメタルテック"
    if "高融点" in category or "ジルコニウム" in category:
        return "A.L.M.T., JX金属, 東邦金属, 日本タングステン"
    return "大同特殊鋼, プロテリアル, 日本冶金工業, 三菱マテリアル"


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


def parse_row(row, row_number, include_columns, estimate_columns):
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

    for symbol, columns in estimate_columns.items():
        estimated_column = columns.get(ESTIMATED_COLUMN_SUFFIX)
        method_column = columns.get(ESTIMATE_METHOD_COLUMN_SUFFIX)
        is_estimated = parse_bool_metadata(row.get(estimated_column), alloy_id, estimated_column) if estimated_column else False
        method = (row.get(method_column) or "").strip() if method_column else ""

        if not is_estimated and method:
            fail(f"{alloy_id}.{method_column}: estimate method requires {symbol} estimated flag")
        if not is_estimated:
            continue
        if symbol not in elements:
            fail(f"{alloy_id}.{estimated_column}: estimate metadata requires {symbol} value")
        if not method:
            fail(f"{alloy_id}.{method_column}: estimate method is required when {symbol} is estimated")
        if elements[symbol].get("kind") == "balance":
            fail(f"{alloy_id}.{symbol}: estimated value must be numeric display, not Bal.")

        elements[symbol]["estimated"] = True
        elements[symbol]["estimateMethod"] = method

    category = row["category"].strip()
    name = row["name"].strip()
    usage = row["usage"].strip()
    source_company = row["source_company"].strip()
    properties = (row.get("properties") or "").strip() or infer_properties(alloy_id, name, category, usage)
    representative_makers = (row.get("representative_makers") or "").strip() or infer_representative_makers(alloy_id, name, category, source_company)
    japanese_makers = (row.get("japanese_makers") or "").strip() or infer_japanese_makers(alloy_id, name, category)
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

    return {
        "id": alloy_id,
        "name": name,
        "aliases": parse_aliases(row.get("aliases")),
        "family": LEGACY_FAMILIES.get(alloy_id, category),
        "category": category,
        "usage": usage,
        "properties": properties,
        "representativeMakers": representative_makers,
        "japaneseMakers": japanese_makers,
        "localized": localized,
        "elements": elements,
        "sources": [
            {
                "type": source_type,
                "company": source_company,
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
        estimate_columns = discover_estimate_columns(fieldnames)

        seen_ids = set()
        alloys = []
        for row_number, row in enumerate(reader, start=2):
            validate_row_shape(row, row_number, fieldnames)
            alloy = parse_row(row, row_number, include_columns, estimate_columns)
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
