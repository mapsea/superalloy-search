import { ELEMENT_COLUMNS, SOURCE_LABELS } from "../constants.js";

export { ELEMENT_COLUMNS, SOURCE_LABELS };

export const alloys = [
  {
    "id": "inconel-600",
    "name": "Inconel 600",
    "aliases": [
      "Alloy 600",
      "UNS N06600",
      "2.4816"
    ],
    "family": "Ni-Cr-Fe耐熱耐食合金",
    "category": "スーパーアロイ",
    "usage": "熱処理炉・化学装置",
    "elements": {
      "Ni": {
        "min": 72.0,
        "unit": "wt%",
        "display": "72 min"
      },
      "Cr": {
        "min": 14.0,
        "max": 17.0,
        "unit": "wt%",
        "display": "14-17"
      },
      "Fe": {
        "min": 6.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "6-10"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      }
    },
    "sources": [
      {
        "type": "official",
        "company": "Special Metals",
        "title": "INCONEL alloy 600 technical bulletin",
        "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-600.pdf",
        "checkedAt": "2026-06-14",
        "notes": "Limiting chemical composition table."
      }
    ]
  },
  {
    "id": "inconel-601",
    "name": "Inconel 601",
    "aliases": [
      "Alloy 601",
      "UNS N06601",
      "2.4851"
    ],
    "family": "Ni-Cr-Fe耐酸化合金",
    "category": "スーパーアロイ",
    "usage": "高温酸化環境・工業炉",
    "elements": {
      "Ni": {
        "min": 58.0,
        "max": 63.0,
        "unit": "wt%",
        "display": "58-63"
      },
      "Cr": {
        "min": 21.0,
        "max": 25.0,
        "unit": "wt%",
        "display": "21-25"
      },
      "Fe": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Al": {
        "min": 1.0,
        "max": 1.7,
        "unit": "wt%",
        "display": "1-1.7"
      },
      "C": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "official",
        "company": "Special Metals",
        "title": "INCONEL alloy 601 technical bulletin",
        "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-601.pdf",
        "checkedAt": "2026-06-14",
        "notes": "Limiting chemical composition table."
      }
    ]
  },
  {
    "id": "inconel-617",
    "name": "Inconel 617",
    "aliases": [
      "Alloy 617",
      "UNS N06617",
      "2.4663"
    ],
    "family": "Ni-Cr-Co-Mo高温合金",
    "category": "スーパーアロイ",
    "usage": "ガスタービン・高温機器",
    "elements": {
      "Ni": {
        "min": 44.5,
        "unit": "wt%",
        "display": "44.5 min"
      },
      "Cr": {
        "min": 20.0,
        "max": 24.0,
        "unit": "wt%",
        "display": "20-24"
      },
      "Co": {
        "min": 10.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "10-15"
      },
      "Fe": {
        "max": 3.0,
        "unit": "wt%",
        "display": "3 max"
      },
      "Mo": {
        "min": 8.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "8-10"
      },
      "Ti": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.6 max"
      },
      "Al": {
        "min": 0.8,
        "max": 1.5,
        "unit": "wt%",
        "display": "0.8-1.5"
      },
      "C": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      }
    },
    "sources": [
      {
        "type": "official",
        "company": "Special Metals",
        "title": "INCONEL alloy 617 technical bulletin",
        "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-617.pdf",
        "checkedAt": "2026-06-14",
        "notes": "Limiting chemical composition table."
      }
    ]
  },
  {
    "id": "inconel-625",
    "name": "Inconel 625",
    "aliases": [
      "Alloy 625",
      "UNS N06625",
      "2.4856"
    ],
    "family": "Ni基耐食耐熱合金",
    "category": "スーパーアロイ",
    "usage": "海洋・化学プラント・耐食部材",
    "elements": {
      "Ni": {
        "min": 58.0,
        "unit": "wt%",
        "display": "58 min"
      },
      "Cr": {
        "min": 20.0,
        "max": 23.0,
        "unit": "wt%",
        "display": "20-23"
      },
      "Co": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1 max"
      },
      "Fe": {
        "max": 5.0,
        "unit": "wt%",
        "display": "5 max"
      },
      "Mo": {
        "min": 8.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "8-10"
      },
      "Nb": {
        "min": 3.15,
        "max": 4.15,
        "unit": "wt%",
        "display": "3.15-4.15"
      },
      "Ti": {
        "max": 0.4,
        "unit": "wt%",
        "display": "0.40 max"
      },
      "Al": {
        "max": 0.4,
        "unit": "wt%",
        "display": "0.40 max"
      },
      "C": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "official",
        "company": "Special Metals",
        "title": "INCONEL alloy 625 technical bulletin",
        "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-625.pdf",
        "checkedAt": "2026-06-14",
        "notes": "Limiting chemical composition table."
      }
    ]
  },
  {
    "id": "inconel-690",
    "name": "Inconel 690",
    "aliases": [
      "Alloy 690",
      "UNS N06690"
    ],
    "family": "高Cr Ni基耐食合金",
    "category": "スーパーアロイ",
    "usage": "原子力・高温水環境",
    "elements": {
      "Ni": {
        "min": 58.0,
        "unit": "wt%",
        "display": "58 min"
      },
      "Cr": {
        "min": 27.0,
        "max": 31.0,
        "unit": "wt%",
        "display": "27-31"
      },
      "Fe": {
        "min": 7.0,
        "max": 11.0,
        "unit": "wt%",
        "display": "7-11"
      },
      "C": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.05 max"
      }
    },
    "sources": [
      {
        "type": "official",
        "company": "Special Metals",
        "title": "INCONEL alloy 690 technical bulletin",
        "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-690.pdf",
        "checkedAt": "2026-06-14",
        "notes": "Limiting chemical composition table."
      }
    ]
  },
  {
    "id": "inconel-718",
    "name": "Inconel 718",
    "aliases": [
      "Alloy 718",
      "UNS N07718",
      "2.4668"
    ],
    "family": "Ni基スーパーアロイ",
    "category": "スーパーアロイ",
    "usage": "航空エンジン・ガスタービン",
    "elements": {
      "Ni": {
        "min": 50.0,
        "max": 55.0,
        "unit": "wt%",
        "display": "50-55"
      },
      "Cr": {
        "min": 17.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "17-21"
      },
      "Co": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1 max"
      },
      "Fe": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Mo": {
        "min": 2.8,
        "max": 3.3,
        "unit": "wt%",
        "display": "2.8-3.3"
      },
      "Nb": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.5"
      },
      "Ti": {
        "min": 0.65,
        "max": 1.15,
        "unit": "wt%",
        "display": "0.65-1.15"
      },
      "Al": {
        "min": 0.2,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.2-0.8"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      }
    },
    "sources": [
      {
        "type": "official",
        "company": "Special Metals",
        "title": "INCONEL alloy 718 technical bulletin",
        "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-718.pdf",
        "checkedAt": "2026-06-14",
        "notes": "Table 1 limiting chemical composition."
      }
    ]
  },
  {
    "id": "inconel-x-750",
    "name": "Inconel X-750",
    "aliases": [
      "Alloy X-750",
      "UNS N07750"
    ],
    "family": "Ni基析出強化合金",
    "category": "スーパーアロイ",
    "usage": "ばね・高温締結部品",
    "elements": {
      "Ni": {
        "min": 70.0,
        "unit": "wt%",
        "display": "70 min"
      },
      "Cr": {
        "min": 14.0,
        "max": 17.0,
        "unit": "wt%",
        "display": "14-17"
      },
      "Fe": {
        "min": 5.0,
        "max": 9.0,
        "unit": "wt%",
        "display": "5-9"
      },
      "Nb": {
        "min": 0.7,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.70-1.20"
      },
      "Ti": {
        "min": 2.25,
        "max": 2.75,
        "unit": "wt%",
        "display": "2.25-2.75"
      },
      "Al": {
        "min": 0.4,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.40-1.00"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      }
    },
    "sources": [
      {
        "type": "official",
        "company": "Special Metals",
        "title": "INCONEL alloy X-750 technical bulletin",
        "url": "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-x-750.pdf",
        "checkedAt": "2026-06-14",
        "notes": "Limiting chemical composition table."
      }
    ]
  },
  {
    "id": "hastelloy-b-2",
    "name": "Hastelloy B-2",
    "aliases": [
      "Alloy B-2",
      "UNS N10665"
    ],
    "family": "Ni-Mo耐食合金",
    "category": "耐食合金",
    "usage": "還元性酸・化学プラント",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1 max"
      },
      "Co": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1 max"
      },
      "Fe": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2 max"
      },
      "Mo": {
        "min": 26.0,
        "max": 30.0,
        "unit": "wt%",
        "display": "26-30"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Hastelloy composition reference",
        "url": "https://fr.wikipedia.org/wiki/Hastelloy",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "hastelloy-c-22",
    "name": "Hastelloy C-22",
    "aliases": [
      "Alloy C-22",
      "UNS N06022"
    ],
    "family": "Ni-Cr-Mo-W耐食合金",
    "category": "耐食合金",
    "usage": "酸化性・還元性混酸環境",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 20.0,
        "max": 22.5,
        "unit": "wt%",
        "display": "20-22.5"
      },
      "Co": {
        "max": 2.5,
        "unit": "wt%",
        "display": "2.5 max"
      },
      "Fe": {
        "min": 2.0,
        "max": 6.0,
        "unit": "wt%",
        "display": "2-6"
      },
      "Mo": {
        "min": 12.5,
        "max": 14.5,
        "unit": "wt%",
        "display": "12.5-14.5"
      },
      "W": {
        "min": 2.5,
        "max": 3.5,
        "unit": "wt%",
        "display": "2.5-3.5"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Hastelloy composition reference",
        "url": "https://fr.wikipedia.org/wiki/Hastelloy",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "hastelloy-c-276",
    "name": "Hastelloy C-276",
    "aliases": [
      "Alloy C-276",
      "UNS N10276",
      "2.4819"
    ],
    "family": "Ni-Cr-Mo-W耐食合金",
    "category": "耐食合金",
    "usage": "化学プラント・排煙脱硫",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 14.5,
        "max": 16.5,
        "unit": "wt%",
        "display": "14.5-16.5"
      },
      "Co": {
        "max": 2.5,
        "unit": "wt%",
        "display": "2.5 max"
      },
      "Fe": {
        "min": 4.0,
        "max": 7.0,
        "unit": "wt%",
        "display": "4-7"
      },
      "Mo": {
        "min": 15.0,
        "max": 17.0,
        "unit": "wt%",
        "display": "15-17"
      },
      "W": {
        "min": 3.0,
        "max": 4.5,
        "unit": "wt%",
        "display": "3-4.5"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Hastelloy composition reference",
        "url": "https://fr.wikipedia.org/wiki/Hastelloy",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "haynes-188",
    "name": "Haynes 188",
    "aliases": [
      "Alloy 188",
      "UNS R30188"
    ],
    "family": "Co-Ni-Cr-W高温合金",
    "category": "コバルト合金",
    "usage": "燃焼器・高温ガス部材",
    "elements": {
      "Ni": {
        "min": 20.0,
        "max": 24.0,
        "unit": "wt%",
        "display": "20-24"
      },
      "Cr": {
        "min": 20.0,
        "max": 24.0,
        "unit": "wt%",
        "display": "20-24"
      },
      "Co": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Fe": {
        "max": 3.0,
        "unit": "wt%",
        "display": "3 max"
      },
      "W": {
        "min": 13.0,
        "max": 16.0,
        "unit": "wt%",
        "display": "13-16"
      },
      "C": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Haynes alloy reference",
        "url": "https://en.wikipedia.org/wiki/Haynes_International",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "haynes-230",
    "name": "Haynes 230",
    "aliases": [
      "Alloy 230",
      "UNS N06230"
    ],
    "family": "Ni-Cr-W-Mo高温合金",
    "category": "スーパーアロイ",
    "usage": "高温炉・ガスタービン部材",
    "elements": {
      "Ni": {
        "min": 47.0,
        "max": 65.0,
        "unit": "wt%",
        "display": "47-65"
      },
      "Cr": {
        "min": 20.0,
        "max": 24.0,
        "unit": "wt%",
        "display": "20-24"
      },
      "Co": {
        "max": 5.0,
        "unit": "wt%",
        "display": "5 max"
      },
      "Mo": {
        "min": 1.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "1-3"
      },
      "Al": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.2-0.5"
      },
      "W": {
        "min": 13.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "13-15"
      },
      "C": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Alloy 230 composition reference",
        "url": "https://en.wikipedia.org/wiki/Alloy_230",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "haynes-282",
    "name": "Haynes 282",
    "aliases": [
      "Alloy 282",
      "UNS N07208"
    ],
    "family": "Ni-Cr-Co-Mo析出強化合金",
    "category": "スーパーアロイ",
    "usage": "航空エンジン・高温構造材",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 18.5,
        "max": 20.5,
        "unit": "wt%",
        "display": "18.5-20.5"
      },
      "Co": {
        "min": 9.0,
        "max": 11.0,
        "unit": "wt%",
        "display": "9-11"
      },
      "Fe": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5 max"
      },
      "Mo": {
        "min": 8.0,
        "max": 9.0,
        "unit": "wt%",
        "display": "8-9"
      },
      "Ti": {
        "min": 1.9,
        "max": 2.3,
        "unit": "wt%",
        "display": "1.9-2.3"
      },
      "Al": {
        "min": 1.38,
        "max": 1.65,
        "unit": "wt%",
        "display": "1.38-1.65"
      },
      "C": {
        "min": 0.04,
        "max": 0.08,
        "unit": "wt%",
        "display": "0.04-0.08"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Haynes 282 composition reference",
        "url": "https://arxiv.org/abs/2012.10114",
        "checkedAt": "2026-06-14",
        "notes": "Reference nominal composition from technical literature; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "waspaloy",
    "name": "Waspaloy",
    "aliases": [
      "UNS N07001"
    ],
    "family": "Ni基スーパーアロイ",
    "category": "スーパーアロイ",
    "usage": "航空エンジンディスク・シャフト",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 18.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "18-21"
      },
      "Co": {
        "min": 12.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "12-15"
      },
      "Fe": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2 max"
      },
      "Mo": {
        "min": 3.5,
        "max": 5.0,
        "unit": "wt%",
        "display": "3.5-5"
      },
      "Ti": {
        "min": 2.75,
        "max": 3.25,
        "unit": "wt%",
        "display": "2.75-3.25"
      },
      "Al": {
        "min": 1.2,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.2-1.6"
      },
      "C": {
        "min": 0.02,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.02-0.10"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Waspaloy composition reference",
        "url": "https://en.wikipedia.org/wiki/Waspaloy",
        "checkedAt": "2026-06-14",
        "notes": "Reference chemistry table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "nimonic-75",
    "name": "Nimonic 75",
    "aliases": [
      "Alloy 75",
      "UNS N06075"
    ],
    "family": "Ni-Cr耐熱合金",
    "category": "スーパーアロイ",
    "usage": "高温板材・熱処理治具",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 18.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "18-21"
      },
      "Fe": {
        "max": 5.0,
        "unit": "wt%",
        "display": "5 max"
      },
      "Ti": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.2-0.6"
      },
      "C": {
        "min": 0.08,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.08-0.15"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Nimonic composition reference",
        "url": "https://it.wikipedia.org/wiki/Nimonic",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "nimonic-80a",
    "name": "Nimonic 80A",
    "aliases": [
      "Alloy 80A",
      "UNS N07080",
      "2.4952"
    ],
    "family": "Ni-Cr析出強化合金",
    "category": "スーパーアロイ",
    "usage": "高温ボルト・バルブ部品",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 18.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "18-21"
      },
      "Co": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2 max"
      },
      "Fe": {
        "max": 3.0,
        "unit": "wt%",
        "display": "3 max"
      },
      "Ti": {
        "min": 1.8,
        "max": 2.7,
        "unit": "wt%",
        "display": "1.8-2.7"
      },
      "Al": {
        "min": 1.0,
        "max": 1.8,
        "unit": "wt%",
        "display": "1-1.8"
      },
      "C": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Nimonic composition reference",
        "url": "https://it.wikipedia.org/wiki/Nimonic",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "nimonic-90",
    "name": "Nimonic 90",
    "aliases": [
      "Alloy 90",
      "UNS N07090",
      "2.4632"
    ],
    "family": "Ni-Cr-Co析出強化合金",
    "category": "スーパーアロイ",
    "usage": "タービンブレード・高温ばね",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 18.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "18-21"
      },
      "Co": {
        "min": 15.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "15-21"
      },
      "Ti": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2-3"
      },
      "Al": {
        "min": 1.0,
        "max": 2.0,
        "unit": "wt%",
        "display": "1-2"
      },
      "C": {
        "max": 0.13,
        "unit": "wt%",
        "display": "0.13 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Nimonic composition reference",
        "url": "https://fr.wikipedia.org/wiki/Nimonic",
        "checkedAt": "2026-06-14",
        "notes": "Reference composition description; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "udimet-500",
    "name": "Udimet 500",
    "aliases": [
      "Udimet alloy 500"
    ],
    "family": "Ni-Co-Cr-Mo析出強化合金",
    "category": "スーパーアロイ",
    "usage": "タービンブレード・高温部材",
    "elements": {
      "Ni": {
        "min": 53.0,
        "max": 55.0,
        "unit": "wt%",
        "display": "53-55"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Co": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Mo": {
        "min": 3.5,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.5-4.5"
      },
      "Ti": {
        "min": 2.6,
        "max": 3.2,
        "unit": "wt%",
        "display": "2.6-3.2"
      },
      "Al": {
        "min": 2.6,
        "max": 3.2,
        "unit": "wt%",
        "display": "2.6-3.2"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Typical nickel-base superalloy compositions",
        "url": "https://es.wikipedia.org/wiki/Superaleaci%C3%B3n",
        "checkedAt": "2026-06-14",
        "notes": "Reference nominal composition; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    "id": "udimet-520",
    "name": "Udimet 520",
    "aliases": [
      "Udimet alloy 520"
    ],
    "family": "Ni-Co-Cr-Mo析出強化合金",
    "category": "スーパーアロイ",
    "usage": "タービンブレード・高温回転部材",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 18.0,
        "max": 20.0,
        "unit": "wt%",
        "display": "18-20"
      },
      "Co": {
        "min": 11.0,
        "max": 13.0,
        "unit": "wt%",
        "display": "11-13"
      },
      "Mo": {
        "min": 5.5,
        "max": 6.5,
        "unit": "wt%",
        "display": "5.5-6.5"
      },
      "Ti": {
        "min": 2.8,
        "max": 3.4,
        "unit": "wt%",
        "display": "2.8-3.4"
      },
      "Al": {
        "min": 1.7,
        "max": 2.3,
        "unit": "wt%",
        "display": "1.7-2.3"
      },
      "W": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.8-1.2"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      }
    },
    "sources": [
      {
        "type": "unverified",
        "company": "Unverified reference data",
        "title": "Udimet 520 composition placeholder",
        "url": "https://en.wikipedia.org/wiki/Superalloy",
        "checkedAt": "2026-06-14",
        "notes": "Placeholder range from common secondary references; needs replacement with a verified producer or standards source."
      }
    ]
  },
  {
    "id": "rene-41",
    "name": "Rene 41",
    "aliases": [
      "René 41",
      "UNS N07041"
    ],
    "family": "Ni-Cr-Co-Mo高強度合金",
    "category": "スーパーアロイ",
    "usage": "航空機高温構造材・ロケット部材",
    "elements": {
      "Ni": {
        "kind": "balance",
        "unit": "wt%",
        "display": "Bal."
      },
      "Cr": {
        "min": 18.0,
        "max": 20.0,
        "unit": "wt%",
        "display": "18-20"
      },
      "Co": {
        "min": 10.0,
        "max": 12.0,
        "unit": "wt%",
        "display": "10-12"
      },
      "Fe": {
        "max": 5.0,
        "unit": "wt%",
        "display": "5 max"
      },
      "Mo": {
        "min": 9.0,
        "max": 10.5,
        "unit": "wt%",
        "display": "9-10.5"
      },
      "Ti": {
        "min": 3.0,
        "max": 3.3,
        "unit": "wt%",
        "display": "3-3.3"
      },
      "Al": {
        "min": 1.4,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.4-1.8"
      },
      "C": {
        "min": 0.06,
        "max": 0.12,
        "unit": "wt%",
        "display": "0.06-0.12"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Rene 41 composition reference",
        "url": "https://en.wikipedia.org/wiki/Ren%C3%A9_41",
        "checkedAt": "2026-06-14",
        "notes": "Reference chemistry table; official manufacturer data should replace this when confirmed."
      }
    ]
  }
];
