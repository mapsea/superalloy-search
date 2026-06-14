export const DEFAULT_LANGUAGE = "ja";

export const SUPPORTED_LANGUAGES = [
  { code: "ja", label: "日本語", htmlLang: "ja" },
  { code: "zh", label: "简体中文", htmlLang: "zh-Hans" },
  { code: "en", label: "English", htmlLang: "en" }
];

export const UI_STRINGS = {
  ja: {
    siteEyebrow: "Superalloy Composition Finder",
    siteTitle: "スーパーアロイ成分検索",
    siteLead: "合金名、元素、成分レンジから特殊金属・スーパーアロイを比較できます。",
    languageLabel: "表示言語",
    filtersAriaLabel: "検索条件",
    searchLabel: "合金名・別名",
    searchPlaceholder: "例: Inconel 718, UNS N07718",
    elementLabel: "元素",
    addElementFilter: "元素条件を追加",
    removeFilter: "削除",
    minPercent: "最小%",
    maxPercent: "最大%",
    minAria: "{symbol} 最小値",
    maxAria: "{symbol} 最大値",
    sourceLegend: "出典",
    resultsHeading: "比較結果",
    resultCount: "{count}件",
    tableAlloy: "合金",
    tableUsage: "用途",
    tableSource: "出典",
    detailsButton: "詳細を見る",
    closeDialog: "閉じる",
    propertiesHeading: "特性",
    representativeMakersHeading: "代表メーカー",
    japaneseMakersHeading: "日本の代表メーカー",
    compositionHeading: "成分",
    sourcesHeading: "出典",
    includedElements: " ({value}含む)",
    estimatedNote: "（参考計算）",
    checkedAt: "確認日"
  },
  zh: {
    siteEyebrow: "Superalloy Composition Finder",
    siteTitle: "高温合金成分搜索",
    siteLead: "可按合金名称、元素和成分范围比较特殊金属与高温合金。",
    languageLabel: "显示语言",
    filtersAriaLabel: "搜索条件",
    searchLabel: "合金名称・别名",
    searchPlaceholder: "例: Inconel 718, UNS N07718",
    elementLabel: "元素",
    addElementFilter: "添加元素条件",
    removeFilter: "删除",
    minPercent: "最小%",
    maxPercent: "最大%",
    minAria: "{symbol} 最小值",
    maxAria: "{symbol} 最大值",
    sourceLegend: "来源",
    resultsHeading: "比较结果",
    resultCount: "{count}项",
    tableAlloy: "合金",
    tableUsage: "用途",
    tableSource: "来源",
    detailsButton: "查看详情",
    closeDialog: "关闭",
    propertiesHeading: "特性",
    representativeMakersHeading: "主要制造商",
    japaneseMakersHeading: "日本主要制造商",
    compositionHeading: "成分",
    sourcesHeading: "来源",
    includedElements: "（含{value}）",
    estimatedNote: "（参考计算）",
    checkedAt: "确认日期"
  },
  en: {
    siteEyebrow: "Superalloy Composition Finder",
    siteTitle: "Superalloy Composition Search",
    siteLead: "Compare special metals and superalloys by alloy name, element, and composition range.",
    languageLabel: "Language",
    filtersAriaLabel: "Search filters",
    searchLabel: "Alloy name or alias",
    searchPlaceholder: "e.g. Inconel 718, UNS N07718",
    elementLabel: "Element",
    addElementFilter: "Add element filter",
    removeFilter: "Remove",
    minPercent: "Min %",
    maxPercent: "Max %",
    minAria: "{symbol} minimum",
    maxAria: "{symbol} maximum",
    sourceLegend: "Source",
    resultsHeading: "Comparison Results",
    resultCount: "{count} results",
    tableAlloy: "Alloy",
    tableUsage: "Use",
    tableSource: "Source",
    detailsButton: "View Details",
    closeDialog: "Close",
    propertiesHeading: "Properties",
    representativeMakersHeading: "Representative Makers",
    japaneseMakersHeading: "Representative Japanese Makers",
    compositionHeading: "Composition",
    sourcesHeading: "Sources",
    includedElements: " (includes {value})",
    estimatedNote: " (reference calculation)",
    checkedAt: "Checked"
  }
};

export const SOURCE_LABELS_BY_LANGUAGE = {
  ja: {
    official: "公式",
    standard: "規格",
    reference: "参考",
    unverified: "未確認"
  },
  zh: {
    official: "官方",
    standard: "标准",
    reference: "参考",
    unverified: "未确认"
  },
  en: {
    official: "Official",
    standard: "Standard",
    reference: "Reference",
    unverified: "Unverified"
  }
};

export function normalizeLanguage(language) {
  return SUPPORTED_LANGUAGES.some((item) => item.code === language) ? language : DEFAULT_LANGUAGE;
}

export function t(language, key, values = {}) {
  const normalized = normalizeLanguage(language);
  const template = UI_STRINGS[normalized][key] ?? UI_STRINGS[DEFAULT_LANGUAGE][key] ?? key;
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template
  );
}

export function sourceLabel(language, type) {
  const normalized = normalizeLanguage(language);
  const labels = SOURCE_LABELS_BY_LANGUAGE[normalized] ?? SOURCE_LABELS_BY_LANGUAGE[DEFAULT_LANGUAGE];
  return labels[type] ?? labels.unverified;
}

export function localizedAlloy(alloy, language) {
  const normalized = normalizeLanguage(language);
  const fallback = alloy.localized?.ja ?? {
    name: alloy.name,
    category: alloy.category,
    family: alloy.family,
    usage: alloy.usage,
    properties: alloy.properties,
    representativeMakers: alloy.representativeMakers,
    japaneseMakers: alloy.japaneseMakers,
    sourceNotes: ""
  };
  return {
    ...fallback,
    ...(alloy.localized?.[normalized] ?? {})
  };
}

export function localizedSourceNotes(alloy, language) {
  return localizedAlloy(alloy, language).sourceNotes || localizedAlloy(alloy, DEFAULT_LANGUAGE).sourceNotes || "";
}
