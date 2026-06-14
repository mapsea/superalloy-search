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
        "display": "72 min",
        "includes": "Co"
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
        "min": 15.1,
        "max": 15.1,
        "unit": "wt%",
        "display": "約15.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Limiting chemical composition table. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "display": "3.15-4.15",
        "includes": "Ta"
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
        "min": 18.4,
        "max": 18.4,
        "unit": "wt%",
        "display": "約18.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "display": "4.75-5.5",
        "includes": "Ta"
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
        "notes": "Table 1 limiting chemical composition. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "display": "0.70-1.20",
        "includes": "Ta"
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
        "min": 70.0,
        "max": 70.0,
        "unit": "wt%",
        "display": "約70.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 56.0,
        "max": 56.0,
        "unit": "wt%",
        "display": "約56.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 58.0,
        "max": 58.0,
        "unit": "wt%",
        "display": "約58.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 39.9,
        "max": 39.9,
        "unit": "wt%",
        "display": "約39.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference composition range; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 57.6,
        "max": 57.6,
        "unit": "wt%",
        "display": "約57.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference nominal composition from technical literature; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 57.3,
        "max": 57.3,
        "unit": "wt%",
        "display": "約57.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference chemistry table; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 76.9,
        "max": 76.9,
        "unit": "wt%",
        "display": "約76.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference composition table; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 75.3,
        "max": 75.3,
        "unit": "wt%",
        "display": "約75.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference composition table; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 56.4,
        "max": 56.4,
        "unit": "wt%",
        "display": "約56.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference composition description; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 52.0,
        "max": 52.0,
        "unit": "wt%",
        "display": "約52.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Placeholder range from common secondary references; needs replacement with a verified producer or standards source. Balance element shown as a reference midpoint estimate from listed major elements."
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
        "min": 51.7,
        "max": 51.7,
        "unit": "wt%",
        "display": "約51.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
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
        "notes": "Reference chemistry table; official manufacturer data should replace this when confirmed. Balance element shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "ti-grade-1",
    "name": "Titanium Grade 1",
    "aliases": [
      "CP Ti Grade 1",
      "UNS R50250"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "化学装置・熱交換器・耐食部材",
    "elements": {
      "Fe": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "Ti": {
        "min": 99.7,
        "max": 99.7,
        "unit": "wt%",
        "display": "約99.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "N": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "O": {
        "max": 0.18,
        "unit": "wt%",
        "display": "0.18 max"
      },
      "H": {
        "max": 0.015,
        "unit": "wt%",
        "display": "0.015 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Titanium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Titanium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public titanium grade composition reference; verify against current ASTM/JIS before procurement."
      }
    ]
  },
  {
    "id": "ti-grade-2",
    "name": "Titanium Grade 2",
    "aliases": [
      "CP Ti Grade 2",
      "UNS R50400"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "化学装置・海水熱交換器・医療部材",
    "elements": {
      "Fe": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Ti": {
        "min": 99.6,
        "max": 99.6,
        "unit": "wt%",
        "display": "約99.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "N": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "O": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "H": {
        "max": 0.015,
        "unit": "wt%",
        "display": "0.015 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Titanium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Titanium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public titanium grade composition reference; verify against current ASTM/JIS before procurement."
      }
    ]
  },
  {
    "id": "ti-6al-4v",
    "name": "Ti-6Al-4V",
    "aliases": [
      "Grade 5",
      "Ti64",
      "UNS R56400"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "航空機構造・医療インプラント・AM造形",
    "elements": {
      "Fe": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Ti": {
        "min": 89.7,
        "max": 89.7,
        "unit": "wt%",
        "display": "約89.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 5.5,
        "max": 6.75,
        "unit": "wt%",
        "display": "5.5-6.75"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "V": {
        "min": 3.5,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.5-4.5"
      },
      "N": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.05 max"
      },
      "O": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "H": {
        "max": 0.015,
        "unit": "wt%",
        "display": "0.015 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Ti-6Al-4V composition reference",
        "url": "https://en.wikipedia.org/wiki/Ti-6Al-4V",
        "checkedAt": "2026-06-14",
        "notes": "Chemistry table in wt%; titanium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "ti-6al-4v-eli",
    "name": "Ti-6Al-4V ELI",
    "aliases": [
      "Grade 23",
      "UNS R56401"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "医療インプラント・低温靭性部材",
    "elements": {
      "Fe": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "Ti": {
        "min": 89.7,
        "max": 89.7,
        "unit": "wt%",
        "display": "約89.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 5.5,
        "max": 6.5,
        "unit": "wt%",
        "display": "5.5-6.5"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "V": {
        "min": 3.5,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.5-4.5"
      },
      "N": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.05 max"
      },
      "O": {
        "max": 0.13,
        "unit": "wt%",
        "display": "0.13 max"
      },
      "H": {
        "max": 0.0125,
        "unit": "wt%",
        "display": "0.0125 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Titanium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Titanium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public ELI titanium grade reference; titanium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "ti-grade-7",
    "name": "Titanium Grade 7",
    "aliases": [
      "CP Ti Pd",
      "UNS R52400"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "還元性酸環境・化学プラント",
    "elements": {
      "Fe": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Ti": {
        "min": 99.4,
        "max": 99.4,
        "unit": "wt%",
        "display": "約99.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "N": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "O": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "H": {
        "max": 0.015,
        "unit": "wt%",
        "display": "0.015 max"
      },
      "Pd": {
        "min": 0.12,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.12-0.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Titanium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Titanium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public titanium-palladium grade reference; titanium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "ti-grade-9",
    "name": "Titanium Grade 9",
    "aliases": [
      "Ti-3Al-2.5V",
      "UNS R56320"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "航空配管・自転車フレーム・圧力容器",
    "elements": {
      "Fe": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "Ti": {
        "min": 94.1,
        "max": 94.1,
        "unit": "wt%",
        "display": "約94.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 2.5,
        "max": 3.5,
        "unit": "wt%",
        "display": "2.5-3.5"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "V": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2-3"
      },
      "N": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "O": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "H": {
        "max": 0.015,
        "unit": "wt%",
        "display": "0.015 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Titanium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Titanium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public titanium grade reference; titanium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "ti-grade-12",
    "name": "Titanium Grade 12",
    "aliases": [
      "Ti-0.3Mo-0.8Ni",
      "UNS R53400"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "化学装置・熱交換器・耐隙間腐食部材",
    "elements": {
      "Ni": {
        "min": 0.6,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.6-0.9"
      },
      "Fe": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.2-0.4"
      },
      "Ti": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "N": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "O": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "H": {
        "max": 0.015,
        "unit": "wt%",
        "display": "0.015 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Titanium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Titanium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public titanium grade reference; titanium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "ati-425",
    "name": "ATI 425 Titanium Alloy",
    "aliases": [
      "Grade 38",
      "UNS R54250"
    ],
    "family": "チタン合金",
    "category": "チタン合金",
    "usage": "防衛・航空・薄板構造材",
    "elements": {
      "Fe": {
        "min": 1.2,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.2-1.8"
      },
      "Ti": {
        "min": 91.7,
        "max": 91.7,
        "unit": "wt%",
        "display": "約91.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 3.5,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.5-4.5"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "V": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2.0-3.0"
      },
      "N": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "O": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "H": {
        "max": 0.015,
        "unit": "wt%",
        "display": "0.015 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "ATI 425 Titanium Alloy composition reference",
        "url": "https://en.wikipedia.org/wiki/ATI_425_Titanium_Alloy",
        "checkedAt": "2026-06-14",
        "notes": "Public ATI 425 composition table; titanium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-304",
    "name": "Stainless Steel 304",
    "aliases": [
      "SUS304",
      "AISI 304",
      "UNS S30400"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "食品設備・建築・一般耐食部材",
    "elements": {
      "Ni": {
        "min": 8.0,
        "max": 11.0,
        "unit": "wt%",
        "display": "8-11"
      },
      "Cr": {
        "min": 18.0,
        "max": 20.0,
        "unit": "wt%",
        "display": "18-20"
      },
      "Fe": {
        "min": 69.9,
        "max": 69.9,
        "unit": "wt%",
        "display": "約69.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "SAE 304 stainless steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_304_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "ASTM-derived public composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-304l",
    "name": "Stainless Steel 304L",
    "aliases": [
      "SUS304L",
      "UNS S30403"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "溶接構造・タンク・配管",
    "elements": {
      "Ni": {
        "min": 8.0,
        "max": 12.0,
        "unit": "wt%",
        "display": "8-12"
      },
      "Cr": {
        "min": 18.0,
        "max": 20.0,
        "unit": "wt%",
        "display": "18-20"
      },
      "Fe": {
        "min": 69.4,
        "max": 69.4,
        "unit": "wt%",
        "display": "約69.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "SAE 304 stainless steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_304_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived 304L carbon variant; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-316",
    "name": "Stainless Steel 316",
    "aliases": [
      "SUS316",
      "UNS S31600"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "海水周辺・化学設備・耐孔食部材",
    "elements": {
      "Ni": {
        "min": 10.0,
        "max": 14.0,
        "unit": "wt%",
        "display": "10-14"
      },
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 66.4,
        "max": 66.4,
        "unit": "wt%",
        "display": "約66.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2-3"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "SAE 316L stainless steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_316L_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public 316-series composition reference; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-316l",
    "name": "Stainless Steel 316L",
    "aliases": [
      "SUS316L",
      "UNS S31603"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "溶接配管・医療・化学設備",
    "elements": {
      "Ni": {
        "min": 10.0,
        "max": 12.0,
        "unit": "wt%",
        "display": "10-12"
      },
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 66.4,
        "max": 66.4,
        "unit": "wt%",
        "display": "約66.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2-3"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "SAE 316L stainless steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_316L_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public 316L composition reference; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-310s",
    "name": "Stainless Steel 310S",
    "aliases": [
      "SUS310S",
      "UNS S31008"
    ],
    "family": "耐熱ステンレス鋼",
    "category": "耐熱ステンレス鋼",
    "usage": "炉内部品・熱処理治具・高温酸化環境",
    "elements": {
      "Ni": {
        "min": 19.0,
        "max": 22.0,
        "unit": "wt%",
        "display": "19-22"
      },
      "Cr": {
        "min": 24.0,
        "max": 26.0,
        "unit": "wt%",
        "display": "24-26"
      },
      "Fe": {
        "min": 52.2,
        "max": 52.2,
        "unit": "wt%",
        "display": "約52.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "SAE 310S stainless steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_310S_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public 310S composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-321",
    "name": "Stainless Steel 321",
    "aliases": [
      "SUS321",
      "UNS S32100"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "高温配管・溶接熱影響部耐粒界腐食",
    "elements": {
      "Ni": {
        "min": 9.0,
        "max": 12.0,
        "unit": "wt%",
        "display": "9-12"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 69.0,
        "max": 69.0,
        "unit": "wt%",
        "display": "約69.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Ti": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "SAE steel grades stainless composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived public composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-347",
    "name": "Stainless Steel 347",
    "aliases": [
      "SUS347",
      "UNS S34700"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "高温溶接部・ボイラー部材",
    "elements": {
      "Ni": {
        "min": 9.0,
        "max": 13.0,
        "unit": "wt%",
        "display": "9-13"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 68.8,
        "max": 68.8,
        "unit": "wt%",
        "display": "約68.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Nb": {
        "min": 0.1,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.10-1.00",
        "includes": "Ta"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "SAE steel grades stainless composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived public composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-17-4ph",
    "name": "17-4 PH Stainless Steel",
    "aliases": [
      "SUS630",
      "AISI 630",
      "UNS S17400"
    ],
    "family": "析出硬化ステンレス鋼",
    "category": "析出硬化ステンレス鋼",
    "usage": "航空・シャフト・高強度耐食部品",
    "elements": {
      "Ni": {
        "min": 3.0,
        "max": 5.0,
        "unit": "wt%",
        "display": "3-5"
      },
      "Cr": {
        "min": 15.0,
        "max": 17.5,
        "unit": "wt%",
        "display": "15-17.5"
      },
      "Fe": {
        "min": 74.4,
        "max": 74.4,
        "unit": "wt%",
        "display": "約74.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Nb": {
        "min": 0.15,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.15-0.45",
        "includes": "Ta"
      },
      "C": {
        "max": 0.07,
        "unit": "wt%",
        "display": "0.07 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Cu": {
        "min": 3.0,
        "max": 5.0,
        "unit": "wt%",
        "display": "3-5"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.04 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "17-4 stainless steel composition reference",
        "url": "https://en.wikipedia.org/wiki/17-4_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-15-5ph",
    "name": "15-5 PH Stainless Steel",
    "aliases": [
      "UNS S15500",
      "XM-12"
    ],
    "family": "析出硬化ステンレス鋼",
    "category": "析出硬化ステンレス鋼",
    "usage": "航空機構造・高強度精密部品",
    "elements": {
      "Ni": {
        "min": 3.5,
        "max": 5.5,
        "unit": "wt%",
        "display": "3.5-5.5"
      },
      "Cr": {
        "min": 14.0,
        "max": 15.5,
        "unit": "wt%",
        "display": "14-15.5"
      },
      "Fe": {
        "min": 75.9,
        "max": 75.9,
        "unit": "wt%",
        "display": "約75.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Nb": {
        "min": 0.15,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.15-0.45",
        "includes": "Ta"
      },
      "C": {
        "max": 0.07,
        "unit": "wt%",
        "display": "0.07 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Cu": {
        "min": 2.5,
        "max": 4.5,
        "unit": "wt%",
        "display": "2.5-4.5"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.04 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "SAE steel grades stainless composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public stainless composition reference; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "stainless-904l",
    "name": "Stainless Steel 904L",
    "aliases": [
      "UNS N08904",
      "1.4539"
    ],
    "family": "高耐食ステンレス鋼",
    "category": "高耐食ステンレス鋼",
    "usage": "硫酸環境・化学プラント",
    "elements": {
      "Ni": {
        "min": 23.0,
        "max": 28.0,
        "unit": "wt%",
        "display": "23-28"
      },
      "Cr": {
        "min": 19.0,
        "max": 23.0,
        "unit": "wt%",
        "display": "19-23"
      },
      "Fe": {
        "min": 45.4,
        "max": 45.4,
        "unit": "wt%",
        "display": "約45.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 4.0,
        "max": 5.0,
        "unit": "wt%",
        "display": "4-5"
      },
      "C": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.02 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Cu": {
        "min": 1.0,
        "max": 2.0,
        "unit": "wt%",
        "display": "1-2"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "SAE steel grades stainless composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived public composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "duplex-2205",
    "name": "Duplex Stainless Steel 2205",
    "aliases": [
      "UNS S32205",
      "1.4462"
    ],
    "family": "二相ステンレス鋼",
    "category": "二相ステンレス鋼",
    "usage": "海水・化学配管・高強度耐食部材",
    "elements": {
      "Ni": {
        "min": 4.5,
        "max": 6.5,
        "unit": "wt%",
        "display": "4.5-6.5"
      },
      "Cr": {
        "min": 22.0,
        "max": 24.0,
        "unit": "wt%",
        "display": "22-24"
      },
      "Fe": {
        "min": 67.1,
        "max": 67.1,
        "unit": "wt%",
        "display": "約67.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 3.0,
        "max": 3.5,
        "unit": "wt%",
        "display": "3-3.5"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      },
      "N": {
        "min": 0.14,
        "max": 0.2,
        "unit": "wt%",
        "display": "0.14-0.20"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "Duplex stainless steel EN composition table",
        "url": "https://en.wikipedia.org/wiki/Duplex_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "EN 10088-derived public composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "super-duplex-2507",
    "name": "Super Duplex Stainless Steel 2507",
    "aliases": [
      "UNS S32750",
      "1.4410"
    ],
    "family": "二相ステンレス鋼",
    "category": "二相ステンレス鋼",
    "usage": "海洋・油ガス・高塩化物環境",
    "elements": {
      "Ni": {
        "min": 6.0,
        "max": 8.0,
        "unit": "wt%",
        "display": "6-8"
      },
      "Cr": {
        "min": 24.0,
        "max": 26.0,
        "unit": "wt%",
        "display": "24-26"
      },
      "Fe": {
        "min": 62.1,
        "max": 62.1,
        "unit": "wt%",
        "display": "約62.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 3.0,
        "max": 5.0,
        "unit": "wt%",
        "display": "3-5"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 1.2,
        "unit": "wt%",
        "display": "1.20 max"
      },
      "Si": {
        "max": 0.8,
        "unit": "wt%",
        "display": "0.80 max"
      },
      "Cu": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      },
      "N": {
        "min": 0.24,
        "max": 0.32,
        "unit": "wt%",
        "display": "0.24-0.32"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "Duplex stainless steel EN composition table",
        "url": "https://en.wikipedia.org/wiki/Duplex_stainless_steel",
        "checkedAt": "2026-06-14",
        "notes": "EN 10088-derived public composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "tool-steel-d2",
    "name": "D2 Tool Steel",
    "aliases": [
      "SKD11",
      "1.2379",
      "X153CrMoV12"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "冷間金型・せん断刃・耐摩耗部品",
    "elements": {
      "Cr": {
        "min": 11.0,
        "max": 13.0,
        "unit": "wt%",
        "display": "11-13"
      },
      "Fe": {
        "min": 83.8,
        "max": 83.8,
        "unit": "wt%",
        "display": "約83.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.9,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.9-0.9"
      },
      "C": {
        "min": 1.5,
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5-1.5"
      },
      "Mn": {
        "min": 0.45,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45-0.45"
      },
      "Si": {
        "min": 0.3,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30-0.30"
      },
      "V": {
        "min": 1.0,
        "max": 1.0,
        "unit": "wt%",
        "display": "1.0-1.0"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel D-series composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public D2 composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "tool-steel-h13",
    "name": "H13 Tool Steel",
    "aliases": [
      "SKD61",
      "1.2344",
      "AISI H13"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "ダイカスト金型・熱間工具",
    "elements": {
      "Cr": {
        "min": 5.4,
        "max": 5.4,
        "unit": "wt%",
        "display": "5.4-5.4"
      },
      "Fe": {
        "min": 90.9,
        "max": 90.9,
        "unit": "wt%",
        "display": "約90.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 1.35,
        "max": 1.35,
        "unit": "wt%",
        "display": "1.35-1.35"
      },
      "C": {
        "min": 0.39,
        "max": 0.39,
        "unit": "wt%",
        "display": "0.39-0.39"
      },
      "Si": {
        "min": 1.0,
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00-1.00"
      },
      "V": {
        "min": 1.0,
        "max": 1.0,
        "unit": "wt%",
        "display": "1.0-1.0"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel 1.2344 composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel_1.2344",
        "checkedAt": "2026-06-14",
        "notes": "Public H13 composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "high-speed-steel-m2",
    "name": "M2 High Speed Steel",
    "aliases": [
      "SKH51",
      "1.3343",
      "AISI M2"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "ドリル・タップ・切削工具",
    "elements": {
      "Cr": {
        "min": 4.0,
        "max": 4.0,
        "unit": "wt%",
        "display": "4.0-4.0"
      },
      "Fe": {
        "min": 82.2,
        "max": 82.2,
        "unit": "wt%",
        "display": "約82.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 5.0,
        "max": 5.0,
        "unit": "wt%",
        "display": "5.0-5.0"
      },
      "W": {
        "min": 6.0,
        "max": 6.0,
        "unit": "wt%",
        "display": "6.0-6.0"
      },
      "C": {
        "min": 0.85,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.85-0.85"
      },
      "V": {
        "min": 2.0,
        "max": 2.0,
        "unit": "wt%",
        "display": "2.0-2.0"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public HSS composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "high-speed-steel-m42",
    "name": "M42 High Speed Steel",
    "aliases": [
      "AISI M42",
      "Co-HSS"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "難削材切削工具・高温切削",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 3.75,
        "unit": "wt%",
        "display": "3.75-3.75"
      },
      "Co": {
        "min": 8.0,
        "max": 8.0,
        "unit": "wt%",
        "display": "8.0-8.0"
      },
      "Fe": {
        "min": 75.0,
        "max": 75.0,
        "unit": "wt%",
        "display": "約75.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 9.5,
        "max": 9.5,
        "unit": "wt%",
        "display": "9.5-9.5"
      },
      "W": {
        "min": 1.5,
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5-1.5"
      },
      "C": {
        "min": 1.1,
        "max": 1.1,
        "unit": "wt%",
        "display": "1.10-1.10"
      },
      "V": {
        "min": 1.15,
        "max": 1.15,
        "unit": "wt%",
        "display": "1.15-1.15"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public HSS composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "high-speed-steel-m35",
    "name": "M35 High Speed Steel",
    "aliases": [
      "HSSE",
      "Co-HSS"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "コバルト高速度工具・切削工具",
    "elements": {
      "Cr": {
        "min": 4.3,
        "max": 4.3,
        "unit": "wt%",
        "display": "4.3-4.3"
      },
      "Co": {
        "min": 5.0,
        "max": 5.0,
        "unit": "wt%",
        "display": "5.0-5.0"
      },
      "Fe": {
        "min": 76.2,
        "max": 76.2,
        "unit": "wt%",
        "display": "約76.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 5.0,
        "max": 5.0,
        "unit": "wt%",
        "display": "5.0-5.0"
      },
      "W": {
        "min": 6.4,
        "max": 6.4,
        "unit": "wt%",
        "display": "6.4-6.4"
      },
      "C": {
        "min": 0.92,
        "max": 0.92,
        "unit": "wt%",
        "display": "0.92-0.92"
      },
      "Si": {
        "min": 0.35,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.35-0.35"
      },
      "V": {
        "min": 1.8,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.8-1.8"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public HSS composition table; iron balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "monel-400",
    "name": "Monel 400",
    "aliases": [
      "Alloy 400",
      "UNS N04400"
    ],
    "family": "ニッケル銅合金",
    "category": "ニッケル銅合金",
    "usage": "海水・化学装置・熱交換器",
    "elements": {
      "Ni": {
        "min": 63.0,
        "unit": "wt%",
        "display": "63 min"
      },
      "Fe": {
        "max": 2.5,
        "unit": "wt%",
        "display": "2.5 max"
      },
      "C": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.0 max"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.5 max"
      },
      "Cu": {
        "min": 28.0,
        "max": 34.0,
        "unit": "wt%",
        "display": "28-34"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Monel alloy composition reference",
        "url": "https://en.wikipedia.org/wiki/Monel",
        "checkedAt": "2026-06-14",
        "notes": "Public Monel composition table."
      }
    ]
  },
  {
    "id": "monel-k-500",
    "name": "Monel K-500",
    "aliases": [
      "Alloy K-500",
      "UNS N05500"
    ],
    "family": "ニッケル銅合金",
    "category": "ニッケル銅合金",
    "usage": "ポンプシャフト・海洋高強度部品",
    "elements": {
      "Ni": {
        "min": 63.0,
        "unit": "wt%",
        "display": "63 min"
      },
      "Fe": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.0 max"
      },
      "Ti": {
        "min": 0.35,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.35-0.85"
      },
      "Al": {
        "min": 2.3,
        "max": 3.15,
        "unit": "wt%",
        "display": "2.3-3.15"
      },
      "C": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "Mn": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5 max"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.5 max"
      },
      "Cu": {
        "min": 27.0,
        "max": 33.0,
        "unit": "wt%",
        "display": "27-33"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Monel alloy composition reference",
        "url": "https://en.wikipedia.org/wiki/Monel",
        "checkedAt": "2026-06-14",
        "notes": "Public Monel composition table."
      }
    ]
  },
  {
    "id": "alloy-20",
    "name": "Alloy 20",
    "aliases": [
      "Carpenter 20",
      "UNS N08020",
      "Cb-3"
    ],
    "family": "高耐食合金",
    "category": "高耐食合金",
    "usage": "硫酸・化学プラント・耐応力腐食割れ",
    "elements": {
      "Ni": {
        "min": 32.0,
        "max": 38.0,
        "unit": "wt%",
        "display": "32-38"
      },
      "Cr": {
        "min": 19.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "19-21"
      },
      "Fe": {
        "min": 31.0,
        "max": 44.0,
        "unit": "wt%",
        "display": "31-44"
      },
      "Mo": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2-3"
      },
      "Nb": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.0 max"
      },
      "C": {
        "max": 0.06,
        "unit": "wt%",
        "display": "0.06 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.0 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.0 max"
      },
      "Cu": {
        "min": 3.0,
        "max": 4.0,
        "unit": "wt%",
        "display": "3-4"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Alloy 20 composition reference",
        "url": "https://en.wikipedia.org/wiki/Alloy_20",
        "checkedAt": "2026-06-14",
        "notes": "Public Alloy 20 composition table."
      }
    ]
  },
  {
    "id": "incoloy-800",
    "name": "Incoloy 800",
    "aliases": [
      "Alloy 800",
      "UNS N08800"
    ],
    "family": "鉄ニッケルクロム合金",
    "category": "鉄ニッケルクロム合金",
    "usage": "高温炉・熱交換器・酸化環境",
    "elements": {
      "Ni": {
        "min": 30.0,
        "max": 35.0,
        "unit": "wt%",
        "display": "30-35"
      },
      "Cr": {
        "min": 19.0,
        "max": 23.0,
        "unit": "wt%",
        "display": "19-23"
      },
      "Fe": {
        "min": 39.5,
        "unit": "wt%",
        "display": "39.5 min"
      },
      "Mn": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Incoloy composition reference",
        "url": "https://en.wikipedia.org/wiki/Incoloy",
        "checkedAt": "2026-06-14",
        "notes": "Public Incoloy composition table."
      }
    ]
  },
  {
    "id": "incoloy-825",
    "name": "Incoloy 825",
    "aliases": [
      "Alloy 825",
      "UNS N08825"
    ],
    "family": "ニッケル鉄クロム合金",
    "category": "ニッケル鉄クロム合金",
    "usage": "硫酸・リン酸・海水環境",
    "elements": {
      "Ni": {
        "min": 38.0,
        "max": 46.0,
        "unit": "wt%",
        "display": "38-46"
      },
      "Cr": {
        "min": 19.5,
        "max": 23.5,
        "unit": "wt%",
        "display": "19.5-23.5"
      },
      "Fe": {
        "min": 22.0,
        "unit": "wt%",
        "display": "22 min"
      },
      "Mo": {
        "min": 2.5,
        "max": 3.5,
        "unit": "wt%",
        "display": "2.5-3.5"
      },
      "Ti": {
        "min": 0.6,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.6-1.2"
      },
      "Al": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.2 max"
      },
      "C": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.05 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.0 max"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.5 max"
      },
      "Cu": {
        "min": 1.5,
        "max": 3.0,
        "unit": "wt%",
        "display": "1.5-3.0"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Incoloy composition reference",
        "url": "https://en.wikipedia.org/wiki/Incoloy",
        "checkedAt": "2026-06-14",
        "notes": "Public Incoloy composition table."
      }
    ]
  },
  {
    "id": "hastelloy-x",
    "name": "Hastelloy X",
    "aliases": [
      "Alloy X",
      "UNS N06002"
    ],
    "family": "耐熱耐食ニッケル合金",
    "category": "耐熱耐食ニッケル合金",
    "usage": "ガスタービン燃焼器・高温炉部材",
    "elements": {
      "Ni": {
        "min": 47.3,
        "max": 47.3,
        "unit": "wt%",
        "display": "約47.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Cr": {
        "min": 22.0,
        "max": 22.0,
        "unit": "wt%",
        "display": "22-22"
      },
      "Co": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5 max"
      },
      "Fe": {
        "max": 18.5,
        "unit": "wt%",
        "display": "18.5 max"
      },
      "Mo": {
        "min": 9.0,
        "max": 9.0,
        "unit": "wt%",
        "display": "9-9"
      },
      "W": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.6 max"
      },
      "C": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      },
      "Mn": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.5 max"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.5 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Hastelloy composition reference",
        "url": "https://fr.wikipedia.org/wiki/Hastelloy",
        "checkedAt": "2026-06-14",
        "notes": "Public Hastelloy composition table; nickel balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "hastelloy-g-30",
    "name": "Hastelloy G-30",
    "aliases": [
      "Alloy G-30",
      "UNS N06030"
    ],
    "family": "耐食ニッケル合金",
    "category": "耐食ニッケル合金",
    "usage": "リン酸・硝酸混酸・化学装置",
    "elements": {
      "Ni": {
        "min": 39.7,
        "max": 39.7,
        "unit": "wt%",
        "display": "約39.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Cr": {
        "min": 30.0,
        "max": 30.0,
        "unit": "wt%",
        "display": "30-30"
      },
      "Co": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.0 max"
      },
      "Fe": {
        "min": 15.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "15-15"
      },
      "Mo": {
        "min": 5.5,
        "max": 5.5,
        "unit": "wt%",
        "display": "5.5-5.5"
      },
      "Nb": {
        "max": 0.8,
        "unit": "wt%",
        "display": "0.8 max"
      },
      "W": {
        "min": 2.5,
        "max": 2.5,
        "unit": "wt%",
        "display": "2.5-2.5"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.5 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.0 max"
      },
      "Cu": {
        "min": 2.0,
        "max": 2.0,
        "unit": "wt%",
        "display": "2.0-2.0"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Hastelloy composition reference",
        "url": "https://fr.wikipedia.org/wiki/Hastelloy",
        "checkedAt": "2026-06-14",
        "notes": "Public Hastelloy composition table; nickel balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "pure-tungsten",
    "name": "Pure Tungsten",
    "aliases": [
      "W",
      "Tungsten 99.95"
    ],
    "family": "高融点金属",
    "category": "高融点金属",
    "usage": "電極・高温炉・放射線遮蔽",
    "elements": {
      "W": {
        "min": 99.95,
        "unit": "wt%",
        "display": "99.95 min"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Refractory metals reference",
        "url": "https://en.wikipedia.org/wiki/Refractory_metals",
        "checkedAt": "2026-06-14",
        "notes": "Public refractory metals reference; purity grade entered as minimum tungsten."
      }
    ]
  },
  {
    "id": "pure-molybdenum",
    "name": "Pure Molybdenum",
    "aliases": [
      "Mo",
      "Molybdenum 99.95"
    ],
    "family": "高融点金属",
    "category": "高融点金属",
    "usage": "高温炉部材・電極・真空部品",
    "elements": {
      "Mo": {
        "min": 99.95,
        "unit": "wt%",
        "display": "99.95 min"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Molybdenum reference",
        "url": "https://en.wikipedia.org/wiki/Molybdenum",
        "checkedAt": "2026-06-14",
        "notes": "Public molybdenum reference; purity grade entered as minimum molybdenum."
      }
    ]
  },
  {
    "id": "tzm-molybdenum",
    "name": "TZM Molybdenum Alloy",
    "aliases": [
      "Mo-Ti-Zr-C",
      "TZM"
    ],
    "family": "高融点合金",
    "category": "高融点合金",
    "usage": "ロケットノズル・高温金型・真空炉部材",
    "elements": {
      "Mo": {
        "min": 99.4,
        "max": 99.4,
        "unit": "wt%",
        "display": "約99.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Ti": {
        "min": 0.5,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.5-0.5"
      },
      "C": {
        "min": 0.02,
        "max": 0.03,
        "unit": "wt%",
        "display": "0.02-0.03"
      },
      "Zr": {
        "min": 0.08,
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08-0.08"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Molybdenum TZM composition reference",
        "url": "https://en.wikipedia.org/wiki/Molybdenum",
        "checkedAt": "2026-06-14",
        "notes": "Public TZM composition description; molybdenum balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "pure-tantalum",
    "name": "Pure Tantalum",
    "aliases": [
      "Ta",
      "Tantalum 99.9"
    ],
    "family": "高融点金属",
    "category": "高融点金属",
    "usage": "耐食化学装置・電子部品・医療",
    "elements": {
      "Ta": {
        "min": 99.9,
        "unit": "wt%",
        "display": "99.9 min"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Refractory metals reference",
        "url": "https://en.wikipedia.org/wiki/Refractory_metals",
        "checkedAt": "2026-06-14",
        "notes": "Public refractory metals reference; purity grade entered as minimum tantalum."
      }
    ]
  },
  {
    "id": "pure-niobium",
    "name": "Pure Niobium",
    "aliases": [
      "Nb",
      "Columbium"
    ],
    "family": "高融点金属",
    "category": "高融点金属",
    "usage": "超電導・化学装置・高温部材",
    "elements": {
      "Nb": {
        "min": 99.8,
        "unit": "wt%",
        "display": "99.8 min"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Refractory metals reference",
        "url": "https://en.wikipedia.org/wiki/Refractory_metals",
        "checkedAt": "2026-06-14",
        "notes": "Public refractory metals reference; purity grade entered as minimum niobium."
      }
    ]
  },
  {
    "id": "zircaloy-2",
    "name": "Zircaloy-2",
    "aliases": [
      "Zr-2",
      "UNS R60802"
    ],
    "family": "ジルコニウム合金",
    "category": "ジルコニウム合金",
    "usage": "原子炉燃料被覆管・構造部材",
    "elements": {
      "Ni": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Cr": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.3 max"
      },
      "Fe": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.3 max"
      },
      "Sn": {
        "min": 1.2,
        "max": 1.7,
        "unit": "wt%",
        "display": "1.2-1.7"
      },
      "Zr": {
        "min": 98.2,
        "max": 98.2,
        "unit": "wt%",
        "display": "約98.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "O": {
        "min": 0.1,
        "max": 0.14,
        "unit": "wt%",
        "display": "0.10-0.14"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Zirconium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Zirconium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public reactor-grade zirconium alloy table; zirconium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "zr-2-5nb",
    "name": "Zr-2.5Nb",
    "aliases": [
      "Zr2.5Nb",
      "Pressure tube alloy"
    ],
    "family": "ジルコニウム合金",
    "category": "ジルコニウム合金",
    "usage": "CANDU圧力管・原子力部材",
    "elements": {
      "Nb": {
        "min": 2.4,
        "max": 2.8,
        "unit": "wt%",
        "display": "2.4-2.8"
      },
      "Zr": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "O": {
        "min": 0.1,
        "max": 0.14,
        "unit": "wt%",
        "display": "0.10-0.14"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Zirconium alloys composition reference",
        "url": "https://en.wikipedia.org/wiki/Zirconium_alloys",
        "checkedAt": "2026-06-14",
        "notes": "Public zirconium alloy table; zirconium balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "c17200-beryllium-copper",
    "name": "C17200 Beryllium Copper",
    "aliases": [
      "BeCu C17200",
      "CuBe2"
    ],
    "family": "銅合金",
    "category": "銅合金",
    "usage": "ばね接点・非火花工具・精密部品",
    "elements": {
      "Co": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Cu": {
        "min": 98.0,
        "max": 98.0,
        "unit": "wt%",
        "display": "約98.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Be": {
        "min": 1.6,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.6-2.0"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Beryllium copper composition reference",
        "url": "https://en.wikipedia.org/wiki/Beryllium_copper",
        "checkedAt": "2026-06-14",
        "notes": "Public beryllium copper reference; copper balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "c17510-beryllium-copper",
    "name": "C17510 Beryllium Copper",
    "aliases": [
      "CuNiBe C17510"
    ],
    "family": "銅合金",
    "category": "銅合金",
    "usage": "高導電ばね・抵抗溶接電極",
    "elements": {
      "Ni": {
        "min": 1.4,
        "max": 2.2,
        "unit": "wt%",
        "display": "1.4-2.2"
      },
      "Cu": {
        "min": 97.6,
        "max": 97.6,
        "unit": "wt%",
        "display": "約97.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Be": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.2-0.6"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Beryllium copper composition reference",
        "url": "https://en.wikipedia.org/wiki/Beryllium_copper",
        "checkedAt": "2026-06-14",
        "notes": "Public high-conductivity beryllium copper reference; copper balance shown as reference estimate."
      }
    ]
  },
  {
    "id": "c71500-cupronickel",
    "name": "C71500 Cu-Ni 70/30",
    "aliases": [
      "CuNi30",
      "C71500"
    ],
    "family": "銅ニッケル合金",
    "category": "銅ニッケル合金",
    "usage": "海水配管・復水器・船舶部材",
    "elements": {
      "Ni": {
        "min": 29.0,
        "max": 33.0,
        "unit": "wt%",
        "display": "29-33"
      },
      "Fe": {
        "min": 0.4,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.4-1.0"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.0 max"
      },
      "Cu": {
        "min": 69.5,
        "max": 71.5,
        "unit": "wt%",
        "display": "69.5-71.5"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Cupronickel composition reference",
        "url": "https://en.wikipedia.org/wiki/Cupronickel",
        "checkedAt": "2026-06-14",
        "notes": "Public cupronickel reference; composition range for 70/30 class."
      }
    ]
  },
  {
    "id": "s10c",
    "name": "S10C",
    "aliases": [
      "JIS S10C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.07,
        "max": 0.13,
        "unit": "wt%",
        "display": "0.07-0.13"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s12c",
    "name": "S12C",
    "aliases": [
      "JIS S12C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.09,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.09-0.15"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s15c",
    "name": "S15C",
    "aliases": [
      "JIS S15C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.12,
        "max": 0.18,
        "unit": "wt%",
        "display": "0.12-0.18"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s17c",
    "name": "S17C",
    "aliases": [
      "JIS S17C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.14,
        "max": 0.2,
        "unit": "wt%",
        "display": "0.14-0.20"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s20c",
    "name": "S20C",
    "aliases": [
      "JIS S20C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.17,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.17-0.23"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s22c",
    "name": "S22C",
    "aliases": [
      "JIS S22C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.19,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.19-0.25"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s25c",
    "name": "S25C",
    "aliases": [
      "JIS S25C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.22,
        "max": 0.28,
        "unit": "wt%",
        "display": "0.22-0.28"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s28c",
    "name": "S28C",
    "aliases": [
      "JIS S28C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.8,
        "max": 98.8,
        "unit": "wt%",
        "display": "約98.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.25,
        "max": 0.31,
        "unit": "wt%",
        "display": "0.25-0.31"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s30c",
    "name": "S30C",
    "aliases": [
      "JIS S30C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.8,
        "max": 98.8,
        "unit": "wt%",
        "display": "約98.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.27,
        "max": 0.33,
        "unit": "wt%",
        "display": "0.27-0.33"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s33c",
    "name": "S33C",
    "aliases": [
      "JIS S33C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.8,
        "max": 98.8,
        "unit": "wt%",
        "display": "約98.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.3,
        "max": 0.36,
        "unit": "wt%",
        "display": "0.30-0.36"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s35c",
    "name": "S35C",
    "aliases": [
      "JIS S35C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.8,
        "max": 98.8,
        "unit": "wt%",
        "display": "約98.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.32,
        "max": 0.38,
        "unit": "wt%",
        "display": "0.32-0.38"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s38c",
    "name": "S38C",
    "aliases": [
      "JIS S38C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.35,
        "max": 0.41,
        "unit": "wt%",
        "display": "0.35-0.41"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s40c",
    "name": "S40C",
    "aliases": [
      "JIS S40C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.37,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.37-0.43"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s43c",
    "name": "S43C",
    "aliases": [
      "JIS S43C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.4,
        "max": 0.46,
        "unit": "wt%",
        "display": "0.40-0.46"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s45c",
    "name": "S45C",
    "aliases": [
      "JIS S45C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.42,
        "max": 0.48,
        "unit": "wt%",
        "display": "0.42-0.48"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s48c",
    "name": "S48C",
    "aliases": [
      "JIS S48C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.45,
        "max": 0.51,
        "unit": "wt%",
        "display": "0.45-0.51"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s50c",
    "name": "S50C",
    "aliases": [
      "JIS S50C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.47,
        "max": 0.53,
        "unit": "wt%",
        "display": "0.47-0.53"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s53c",
    "name": "S53C",
    "aliases": [
      "JIS S53C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.5,
        "max": 0.56,
        "unit": "wt%",
        "display": "0.50-0.56"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s55c",
    "name": "S55C",
    "aliases": [
      "JIS S55C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.52,
        "max": 0.58,
        "unit": "wt%",
        "display": "0.52-0.58"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "s58c",
    "name": "S58C",
    "aliases": [
      "JIS S58C"
    ],
    "family": "炭素鋼",
    "category": "炭素鋼",
    "usage": "機械部品・シャフト・一般構造部材",
    "elements": {
      "Fe": {
        "min": 98.5,
        "max": 98.5,
        "unit": "wt%",
        "display": "約98.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.55,
        "max": 0.61,
        "unit": "wt%",
        "display": "0.55-0.61"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS carbon steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived carbon steel chemistry; confirm against JIS G 4051 for procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1006",
    "name": "AISI 1006",
    "aliases": [
      "SAE 1006"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.03,
        "max": 0.09,
        "unit": "wt%",
        "display": "0.03-0.09"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1008",
    "name": "AISI 1008",
    "aliases": [
      "SAE 1008"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.05,
        "max": 0.11,
        "unit": "wt%",
        "display": "0.05-0.11"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1010",
    "name": "AISI 1010",
    "aliases": [
      "SAE 1010"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.07,
        "max": 0.13,
        "unit": "wt%",
        "display": "0.07-0.13"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1012",
    "name": "AISI 1012",
    "aliases": [
      "SAE 1012"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.09,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.09-0.15"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1015",
    "name": "AISI 1015",
    "aliases": [
      "SAE 1015"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 99.0,
        "max": 99.0,
        "unit": "wt%",
        "display": "約99.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.12,
        "max": 0.18,
        "unit": "wt%",
        "display": "0.12-0.18"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1018",
    "name": "AISI 1018",
    "aliases": [
      "SAE 1018"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.15,
        "max": 0.21,
        "unit": "wt%",
        "display": "0.15-0.21"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1020",
    "name": "AISI 1020",
    "aliases": [
      "SAE 1020"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.17,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.17-0.23"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1022",
    "name": "AISI 1022",
    "aliases": [
      "SAE 1022"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.19,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.19-0.25"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1025",
    "name": "AISI 1025",
    "aliases": [
      "SAE 1025"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.9,
        "max": 98.9,
        "unit": "wt%",
        "display": "約98.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.22,
        "max": 0.28,
        "unit": "wt%",
        "display": "0.22-0.28"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1030",
    "name": "AISI 1030",
    "aliases": [
      "SAE 1030"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.8,
        "max": 98.8,
        "unit": "wt%",
        "display": "約98.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.27,
        "max": 0.33,
        "unit": "wt%",
        "display": "0.27-0.33"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1035",
    "name": "AISI 1035",
    "aliases": [
      "SAE 1035"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.8,
        "max": 98.8,
        "unit": "wt%",
        "display": "約98.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.32,
        "max": 0.38,
        "unit": "wt%",
        "display": "0.32-0.38"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1040",
    "name": "AISI 1040",
    "aliases": [
      "SAE 1040"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.37,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.37-0.43"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1042",
    "name": "AISI 1042",
    "aliases": [
      "SAE 1042"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.39,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.39-0.45"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1045",
    "name": "AISI 1045",
    "aliases": [
      "SAE 1045"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.42,
        "max": 0.48,
        "unit": "wt%",
        "display": "0.42-0.48"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1050",
    "name": "AISI 1050",
    "aliases": [
      "SAE 1050"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.47,
        "max": 0.53,
        "unit": "wt%",
        "display": "0.47-0.53"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1055",
    "name": "AISI 1055",
    "aliases": [
      "SAE 1055"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.52,
        "max": 0.58,
        "unit": "wt%",
        "display": "0.52-0.58"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1060",
    "name": "AISI 1060",
    "aliases": [
      "SAE 1060"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.5,
        "max": 98.5,
        "unit": "wt%",
        "display": "約98.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.57,
        "max": 0.63,
        "unit": "wt%",
        "display": "0.57-0.63"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1065",
    "name": "AISI 1065",
    "aliases": [
      "SAE 1065"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.5,
        "max": 98.5,
        "unit": "wt%",
        "display": "約98.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.62,
        "max": 0.68,
        "unit": "wt%",
        "display": "0.62-0.68"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1070",
    "name": "AISI 1070",
    "aliases": [
      "SAE 1070"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.4,
        "max": 98.4,
        "unit": "wt%",
        "display": "約98.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.67,
        "max": 0.73,
        "unit": "wt%",
        "display": "0.67-0.73"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-1075",
    "name": "AISI 1075",
    "aliases": [
      "SAE 1075"
    ],
    "family": "普通鋼",
    "category": "普通鋼",
    "usage": "機械部品・冷間成形・一般用途",
    "elements": {
      "Fe": {
        "min": 98.4,
        "max": 98.4,
        "unit": "wt%",
        "display": "約98.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.72,
        "max": 0.78,
        "unit": "wt%",
        "display": "0.72-0.78"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.30-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE carbon steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE carbon steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4023",
    "name": "AISI 4023",
    "aliases": [
      "SAE 4023"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Fe": {
        "min": 98.4,
        "max": 98.4,
        "unit": "wt%",
        "display": "約98.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.2,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.20-0.25"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4027",
    "name": "AISI 4027",
    "aliases": [
      "SAE 4027"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Fe": {
        "min": 98.4,
        "max": 98.4,
        "unit": "wt%",
        "display": "約98.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.25,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.25-0.30"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4032",
    "name": "AISI 4032",
    "aliases": [
      "SAE 4032"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Fe": {
        "min": 98.3,
        "max": 98.3,
        "unit": "wt%",
        "display": "約98.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.3,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.30-0.35"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4042",
    "name": "AISI 4042",
    "aliases": [
      "SAE 4042"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Fe": {
        "min": 98.2,
        "max": 98.2,
        "unit": "wt%",
        "display": "約98.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.4,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.40-0.45"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4118",
    "name": "AISI 4118",
    "aliases": [
      "SAE 4118"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 98.1,
        "max": 98.1,
        "unit": "wt%",
        "display": "約98.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.08,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.08-0.15"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4120",
    "name": "AISI 4120",
    "aliases": [
      "SAE 4120"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.8,
        "max": 97.8,
        "unit": "wt%",
        "display": "約97.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.13,
        "max": 0.2,
        "unit": "wt%",
        "display": "0.13-0.20"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4121",
    "name": "AISI 4121",
    "aliases": [
      "SAE 4121"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.45,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.45-0.65"
      },
      "Fe": {
        "min": 97.8,
        "max": 97.8,
        "unit": "wt%",
        "display": "約97.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.75,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.75-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4130",
    "name": "AISI 4130",
    "aliases": [
      "SAE 4130",
      "Chromoly 4130"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.8,
        "max": 97.8,
        "unit": "wt%",
        "display": "約97.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.28,
        "max": 0.33,
        "unit": "wt%",
        "display": "0.28-0.33"
      },
      "Mn": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4135",
    "name": "AISI 4135",
    "aliases": [
      "SAE 4135"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.33,
        "max": 0.38,
        "unit": "wt%",
        "display": "0.33-0.38"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4140",
    "name": "AISI 4140",
    "aliases": [
      "SAE 4140",
      "SCM440 equivalent family"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.38,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.38-0.43"
      },
      "Mn": {
        "min": 0.75,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.75-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4142",
    "name": "AISI 4142",
    "aliases": [
      "SAE 4142"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.4,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.40-0.45"
      },
      "Mn": {
        "min": 0.75,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.75-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4145",
    "name": "AISI 4145",
    "aliases": [
      "SAE 4145"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.2,
        "max": 97.2,
        "unit": "wt%",
        "display": "約97.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.43,
        "max": 0.48,
        "unit": "wt%",
        "display": "0.43-0.48"
      },
      "Mn": {
        "min": 0.75,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.75-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4150",
    "name": "AISI 4150",
    "aliases": [
      "SAE 4150"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.2,
        "max": 97.2,
        "unit": "wt%",
        "display": "約97.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.48,
        "max": 0.53,
        "unit": "wt%",
        "display": "0.48-0.53"
      },
      "Mn": {
        "min": 0.75,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.75-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4320",
    "name": "AISI 4320",
    "aliases": [
      "SAE 4320"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 96.4,
        "max": 96.4,
        "unit": "wt%",
        "display": "約96.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.17,
        "max": 0.22,
        "unit": "wt%",
        "display": "0.17-0.22"
      },
      "Mn": {
        "min": 0.45,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.45-0.65"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4330",
    "name": "AISI 4330",
    "aliases": [
      "SAE 4330"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Cr": {
        "min": 0.7,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.70-0.95"
      },
      "Fe": {
        "min": 95.7,
        "max": 95.7,
        "unit": "wt%",
        "display": "約95.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.28,
        "max": 0.33,
        "unit": "wt%",
        "display": "0.28-0.33"
      },
      "Mn": {
        "min": 0.65,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.65-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4340",
    "name": "AISI 4340",
    "aliases": [
      "SAE 4340",
      "SNCM439 equivalent family"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Cr": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Fe": {
        "min": 95.7,
        "max": 95.7,
        "unit": "wt%",
        "display": "約95.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.38,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.38-0.43"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.60-0.80"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4340m",
    "name": "AISI 4340M",
    "aliases": [
      "300M family"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Cr": {
        "min": 0.7,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.70-0.95"
      },
      "Fe": {
        "min": 94.1,
        "max": 94.1,
        "unit": "wt%",
        "display": "約94.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.3,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.30-0.45"
      },
      "C": {
        "min": 0.38,
        "max": 0.46,
        "unit": "wt%",
        "display": "0.38-0.46"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.60-0.90"
      },
      "Si": {
        "min": 1.45,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.45-1.80"
      },
      "V": {
        "min": 0.05,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.05-0.10"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-300m",
    "name": "AISI 300M",
    "aliases": [
      "4340M",
      "Modified 4340"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Cr": {
        "min": 0.7,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.70-0.95"
      },
      "Fe": {
        "min": 94.1,
        "max": 94.1,
        "unit": "wt%",
        "display": "約94.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.3,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.30-0.45"
      },
      "C": {
        "min": 0.38,
        "max": 0.46,
        "unit": "wt%",
        "display": "0.38-0.46"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.60-0.90"
      },
      "Si": {
        "min": 1.45,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.45-1.80"
      },
      "V": {
        "min": 0.05,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.05-0.10"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4615",
    "name": "AISI 4615",
    "aliases": [
      "SAE 4615"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.13,
        "max": 0.18,
        "unit": "wt%",
        "display": "0.13-0.18"
      },
      "Mn": {
        "min": 0.45,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.45-0.70"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4620",
    "name": "AISI 4620",
    "aliases": [
      "SAE 4620"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.17,
        "max": 0.22,
        "unit": "wt%",
        "display": "0.17-0.22"
      },
      "Mn": {
        "min": 0.45,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.45-0.70"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4626",
    "name": "AISI 4626",
    "aliases": [
      "SAE 4626"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 1.65,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.65-2.00"
      },
      "Fe": {
        "min": 96.8,
        "max": 96.8,
        "unit": "wt%",
        "display": "約96.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.24,
        "max": 0.29,
        "unit": "wt%",
        "display": "0.24-0.29"
      },
      "Mn": {
        "min": 0.45,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.45-0.70"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-4820",
    "name": "AISI 4820",
    "aliases": [
      "SAE 4820"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 3.25,
        "max": 3.75,
        "unit": "wt%",
        "display": "3.25-3.75"
      },
      "Fe": {
        "min": 95.2,
        "max": 95.2,
        "unit": "wt%",
        "display": "約95.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.45,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.45-0.70"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-5015",
    "name": "AISI 5015",
    "aliases": [
      "SAE 5015"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.3,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.30-0.50"
      },
      "Fe": {
        "min": 98.7,
        "max": 98.7,
        "unit": "wt%",
        "display": "約98.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.13,
        "max": 0.18,
        "unit": "wt%",
        "display": "0.13-0.18"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-5046",
    "name": "AISI 5046",
    "aliases": [
      "SAE 5046"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.2,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.20-0.40"
      },
      "Fe": {
        "min": 98.1,
        "max": 98.1,
        "unit": "wt%",
        "display": "約98.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.43,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.43-0.50"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-5115",
    "name": "AISI 5115",
    "aliases": [
      "SAE 5115"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Fe": {
        "min": 98.0,
        "max": 98.0,
        "unit": "wt%",
        "display": "約98.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.13,
        "max": 0.18,
        "unit": "wt%",
        "display": "0.13-0.18"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-5120",
    "name": "AISI 5120",
    "aliases": [
      "SAE 5120"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Fe": {
        "min": 97.9,
        "max": 97.9,
        "unit": "wt%",
        "display": "約97.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.17,
        "max": 0.22,
        "unit": "wt%",
        "display": "0.17-0.22"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-5130",
    "name": "AISI 5130",
    "aliases": [
      "SAE 5130"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.7,
        "max": 97.7,
        "unit": "wt%",
        "display": "約97.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.28,
        "max": 0.33,
        "unit": "wt%",
        "display": "0.28-0.33"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-5140",
    "name": "AISI 5140",
    "aliases": [
      "SAE 5140"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Fe": {
        "min": 97.7,
        "max": 97.7,
        "unit": "wt%",
        "display": "約97.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.38,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.38-0.43"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-5150",
    "name": "AISI 5150",
    "aliases": [
      "SAE 5150"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Fe": {
        "min": 97.6,
        "max": 97.6,
        "unit": "wt%",
        "display": "約97.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.48,
        "max": 0.53,
        "unit": "wt%",
        "display": "0.48-0.53"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8615",
    "name": "AISI 8615",
    "aliases": [
      "SAE 8615"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.13,
        "max": 0.18,
        "unit": "wt%",
        "display": "0.13-0.18"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8620",
    "name": "AISI 8620",
    "aliases": [
      "SAE 8620"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8622",
    "name": "AISI 8622",
    "aliases": [
      "SAE 8622"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.2,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.20-0.25"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8625",
    "name": "AISI 8625",
    "aliases": [
      "SAE 8625"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.23,
        "max": 0.28,
        "unit": "wt%",
        "display": "0.23-0.28"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8630",
    "name": "AISI 8630",
    "aliases": [
      "SAE 8630"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.28,
        "max": 0.33,
        "unit": "wt%",
        "display": "0.28-0.33"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8640",
    "name": "AISI 8640",
    "aliases": [
      "SAE 8640"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.38,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.38-0.43"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8650",
    "name": "AISI 8650",
    "aliases": [
      "SAE 8650"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.2,
        "max": 97.2,
        "unit": "wt%",
        "display": "約97.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "C": {
        "min": 0.48,
        "max": 0.53,
        "unit": "wt%",
        "display": "0.48-0.53"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8720",
    "name": "AISI 8720",
    "aliases": [
      "SAE 8720"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-8822",
    "name": "AISI 8822",
    "aliases": [
      "SAE 8822"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.3,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.30-0.40"
      },
      "C": {
        "min": 0.2,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.20-0.25"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "aisi-9310",
    "name": "AISI 9310",
    "aliases": [
      "SAE 9310"
    ],
    "family": "低合金鋼",
    "category": "低合金鋼",
    "usage": "歯車・シャフト・航空機部品・機械構造部材",
    "elements": {
      "Ni": {
        "min": 3.0,
        "max": 3.5,
        "unit": "wt%",
        "display": "3.00-3.50"
      },
      "Cr": {
        "min": 1.0,
        "max": 1.4,
        "unit": "wt%",
        "display": "1.00-1.40"
      },
      "Fe": {
        "min": 94.5,
        "max": 94.5,
        "unit": "wt%",
        "display": "約94.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.08,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.08-0.15"
      },
      "C": {
        "min": 0.08,
        "max": 0.13,
        "unit": "wt%",
        "display": "0.08-0.13"
      },
      "Mn": {
        "min": 0.45,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.45-0.65"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE alloy steel grades composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE low-alloy steel family table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "scm415",
    "name": "SCM415",
    "aliases": [
      "JIS SCM415"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 97.6,
        "max": 97.6,
        "unit": "wt%",
        "display": "約97.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.13,
        "max": 0.18,
        "unit": "wt%",
        "display": "0.13-0.18"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.60-0.85"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "scm420",
    "name": "SCM420",
    "aliases": [
      "JIS SCM420"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.60-0.85"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "scm435",
    "name": "SCM435",
    "aliases": [
      "JIS SCM435"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.33,
        "max": 0.38,
        "unit": "wt%",
        "display": "0.33-0.38"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.60-0.85"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "scm440",
    "name": "SCM440",
    "aliases": [
      "JIS SCM440",
      "AISI 4140 family"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.38,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.38-0.43"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.60-0.85"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "scm445",
    "name": "SCM445",
    "aliases": [
      "JIS SCM445"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.43,
        "max": 0.48,
        "unit": "wt%",
        "display": "0.43-0.48"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.60-0.85"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sncm220",
    "name": "SNCM220",
    "aliases": [
      "JIS SNCM220"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Ni": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.40-0.65"
      },
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.17,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.17-0.23"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.60-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sncm420",
    "name": "SNCM420",
    "aliases": [
      "JIS SNCM420"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Ni": {
        "min": 1.6,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.60-2.00"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Fe": {
        "min": 96.4,
        "max": 96.4,
        "unit": "wt%",
        "display": "約96.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.17,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.17-0.23"
      },
      "Mn": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sncm439",
    "name": "SNCM439",
    "aliases": [
      "JIS SNCM439",
      "AISI 4340 family"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Ni": {
        "min": 1.6,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.60-2.00"
      },
      "Cr": {
        "min": 0.6,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.60-1.00"
      },
      "Fe": {
        "min": 95.8,
        "max": 95.8,
        "unit": "wt%",
        "display": "約95.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.36,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.36-0.43"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.60-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "scr420",
    "name": "SCr420",
    "aliases": [
      "JIS SCr420"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 97.7,
        "max": 97.7,
        "unit": "wt%",
        "display": "約97.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.18,
        "max": 0.23,
        "unit": "wt%",
        "display": "0.18-0.23"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.60-0.85"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "scr440",
    "name": "SCr440",
    "aliases": [
      "JIS SCr440"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.38,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.38-0.43"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.60-0.85"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "snc631",
    "name": "SNC631",
    "aliases": [
      "JIS SNC631"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Ni": {
        "min": 2.5,
        "max": 3.0,
        "unit": "wt%",
        "display": "2.50-3.00"
      },
      "Cr": {
        "min": 0.6,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.60-1.00"
      },
      "Fe": {
        "min": 95.4,
        "max": 95.4,
        "unit": "wt%",
        "display": "約95.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.27,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.27-0.35"
      },
      "Mn": {
        "min": 0.35,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.35-0.65"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "snc836",
    "name": "SNC836",
    "aliases": [
      "JIS SNC836"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Ni": {
        "min": 3.0,
        "max": 3.5,
        "unit": "wt%",
        "display": "3.00-3.50"
      },
      "Cr": {
        "min": 0.6,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.60-1.00"
      },
      "Fe": {
        "min": 94.8,
        "max": 94.8,
        "unit": "wt%",
        "display": "約94.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.32,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.32-0.40"
      },
      "Mn": {
        "min": 0.35,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.35-0.65"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sacm645",
    "name": "SACM645",
    "aliases": [
      "JIS SACM645"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Cr": {
        "min": 1.3,
        "max": 1.7,
        "unit": "wt%",
        "display": "1.30-1.70"
      },
      "Fe": {
        "min": 96.2,
        "max": 96.2,
        "unit": "wt%",
        "display": "約96.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "Al": {
        "min": 0.7,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.70-1.20"
      },
      "C": {
        "min": 0.4,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.40-0.50"
      },
      "Mn": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "Si": {
        "min": 0.15,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.15-0.50"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sum43",
    "name": "SUM43",
    "aliases": [
      "JIS SUM43"
    ],
    "family": "機械構造用鋼",
    "category": "機械構造用鋼",
    "usage": "歯車・軸・浸炭部品・窒化部品",
    "elements": {
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.37,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.37-0.45"
      },
      "Mn": {
        "min": 1.35,
        "max": 1.65,
        "unit": "wt%",
        "display": "1.35-1.65"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "min": 0.24,
        "max": 0.33,
        "unit": "wt%",
        "display": "0.24-0.33"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "Standards reference",
        "title": "JIS machinery steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Standards-derived machinery steel chemistry; verify against current JIS before procurement. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-201",
    "name": "Stainless Steel 201",
    "aliases": [
      "UNS S20100"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 3.5,
        "max": 5.5,
        "unit": "wt%",
        "display": "3.5-5.5"
      },
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 71.4,
        "max": 71.4,
        "unit": "wt%",
        "display": "約71.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "min": 5.5,
        "max": 7.5,
        "unit": "wt%",
        "display": "5.5-7.5"
      },
      "Si": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "P": {
        "max": 0.06,
        "unit": "wt%",
        "display": "0.060 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-202",
    "name": "Stainless Steel 202",
    "aliases": [
      "UNS S20200"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 4.0,
        "max": 6.0,
        "unit": "wt%",
        "display": "4-6"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 67.6,
        "max": 67.6,
        "unit": "wt%",
        "display": "約67.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "min": 7.5,
        "max": 10.0,
        "unit": "wt%",
        "display": "7.5-10.0"
      },
      "Si": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "P": {
        "max": 0.06,
        "unit": "wt%",
        "display": "0.060 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-205",
    "name": "Stainless Steel 205",
    "aliases": [
      "UNS S20500"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 1.0,
        "max": 1.75,
        "unit": "wt%",
        "display": "1-1.75"
      },
      "Cr": {
        "min": 16.5,
        "max": 18.0,
        "unit": "wt%",
        "display": "16.5-18"
      },
      "Fe": {
        "min": 65.7,
        "max": 65.7,
        "unit": "wt%",
        "display": "約65.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.12,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.12-0.25"
      },
      "Mn": {
        "min": 14.0,
        "max": 15.5,
        "unit": "wt%",
        "display": "14-15.5"
      },
      "Si": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "P": {
        "max": 0.06,
        "unit": "wt%",
        "display": "0.060 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "min": 0.32,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.32-0.40"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-254smo",
    "name": "Stainless Steel 254 SMO",
    "aliases": [
      "UNS S31254"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 17.5,
        "max": 18.5,
        "unit": "wt%",
        "display": "17.5-18.5"
      },
      "Cr": {
        "min": 19.5,
        "max": 20.5,
        "unit": "wt%",
        "display": "19.5-20.5"
      },
      "Fe": {
        "min": 53.9,
        "max": 53.9,
        "unit": "wt%",
        "display": "約53.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 6.0,
        "max": 6.5,
        "unit": "wt%",
        "display": "6.0-6.5"
      },
      "C": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.02 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 0.8,
        "unit": "wt%",
        "display": "0.80 max"
      },
      "Cu": {
        "min": 0.5,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.50-1.00"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      },
      "N": {
        "min": 0.18,
        "max": 0.22,
        "unit": "wt%",
        "display": "0.18-0.22"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-301",
    "name": "Stainless Steel 301",
    "aliases": [
      "UNS S30100"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 6.0,
        "max": 8.0,
        "unit": "wt%",
        "display": "6-8"
      },
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 74.5,
        "max": 74.5,
        "unit": "wt%",
        "display": "約74.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-302",
    "name": "Stainless Steel 302",
    "aliases": [
      "UNS S30200"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 8.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "8-10"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 71.5,
        "max": 71.5,
        "unit": "wt%",
        "display": "約71.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-302b",
    "name": "Stainless Steel 302B",
    "aliases": [
      "UNS S30215"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 8.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "8-10"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 69.4,
        "max": 69.4,
        "unit": "wt%",
        "display": "約69.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2.0-3.0"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-303",
    "name": "Stainless Steel 303",
    "aliases": [
      "UNS S30300"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 8.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "8-10"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 70.8,
        "max": 70.8,
        "unit": "wt%",
        "display": "約70.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "S": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-304n",
    "name": "Stainless Steel 304N",
    "aliases": [
      "UNS S30451"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 8.0,
        "max": 10.5,
        "unit": "wt%",
        "display": "8-10.5"
      },
      "Cr": {
        "min": 18.0,
        "max": 20.0,
        "unit": "wt%",
        "display": "18-20"
      },
      "Fe": {
        "min": 70.2,
        "max": 70.2,
        "unit": "wt%",
        "display": "約70.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "min": 0.1,
        "max": 0.16,
        "unit": "wt%",
        "display": "0.10-0.16"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-305",
    "name": "Stainless Steel 305",
    "aliases": [
      "UNS S30500"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 10.5,
        "max": 13.0,
        "unit": "wt%",
        "display": "10.5-13"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 68.7,
        "max": 68.7,
        "unit": "wt%",
        "display": "約68.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-308",
    "name": "Stainless Steel 308",
    "aliases": [
      "UNS S30800"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 10.0,
        "max": 12.0,
        "unit": "wt%",
        "display": "10-12"
      },
      "Cr": {
        "min": 19.0,
        "max": 21.0,
        "unit": "wt%",
        "display": "19-21"
      },
      "Fe": {
        "min": 67.4,
        "max": 67.4,
        "unit": "wt%",
        "display": "約67.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-309",
    "name": "Stainless Steel 309",
    "aliases": [
      "UNS S30900"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 12.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "12-15"
      },
      "Cr": {
        "min": 22.0,
        "max": 24.0,
        "unit": "wt%",
        "display": "22-24"
      },
      "Fe": {
        "min": 61.9,
        "max": 61.9,
        "unit": "wt%",
        "display": "約61.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-309s",
    "name": "Stainless Steel 309S",
    "aliases": [
      "UNS S30908"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 12.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "12-15"
      },
      "Cr": {
        "min": 22.0,
        "max": 24.0,
        "unit": "wt%",
        "display": "22-24"
      },
      "Fe": {
        "min": 61.9,
        "max": 61.9,
        "unit": "wt%",
        "display": "約61.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-316n",
    "name": "Stainless Steel 316N",
    "aliases": [
      "UNS S31651"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 10.0,
        "max": 14.0,
        "unit": "wt%",
        "display": "10-14"
      },
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 66.8,
        "max": 66.8,
        "unit": "wt%",
        "display": "約66.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2-3"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "min": 0.1,
        "max": 0.16,
        "unit": "wt%",
        "display": "0.10-0.16"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-316ti",
    "name": "Stainless Steel 316Ti",
    "aliases": [
      "UNS S31635"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 10.0,
        "max": 14.0,
        "unit": "wt%",
        "display": "10-14"
      },
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 66.3,
        "max": 66.3,
        "unit": "wt%",
        "display": "約66.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2-3"
      },
      "Ti": {
        "min": 0.5,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.5-0.7"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-317",
    "name": "Stainless Steel 317",
    "aliases": [
      "UNS S31700"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 11.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "11-15"
      },
      "Cr": {
        "min": 18.0,
        "max": 20.0,
        "unit": "wt%",
        "display": "18-20"
      },
      "Fe": {
        "min": 62.9,
        "max": 62.9,
        "unit": "wt%",
        "display": "約62.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 3.0,
        "max": 4.0,
        "unit": "wt%",
        "display": "3-4"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-317l",
    "name": "Stainless Steel 317L",
    "aliases": [
      "UNS S31703"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 11.0,
        "max": 15.0,
        "unit": "wt%",
        "display": "11-15"
      },
      "Cr": {
        "min": 18.0,
        "max": 20.0,
        "unit": "wt%",
        "display": "18-20"
      },
      "Fe": {
        "min": 62.9,
        "max": 62.9,
        "unit": "wt%",
        "display": "約62.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 3.0,
        "max": 4.0,
        "unit": "wt%",
        "display": "3-4"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-321h",
    "name": "Stainless Steel 321H",
    "aliases": [
      "UNS S32109"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 9.0,
        "max": 12.0,
        "unit": "wt%",
        "display": "9-12"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 69.5,
        "max": 69.5,
        "unit": "wt%",
        "display": "約69.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Ti": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "C": {
        "min": 0.04,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.04-0.10"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-347h",
    "name": "Stainless Steel 347H",
    "aliases": [
      "UNS S34709"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 9.0,
        "max": 13.0,
        "unit": "wt%",
        "display": "9-13"
      },
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 68.8,
        "max": 68.8,
        "unit": "wt%",
        "display": "約68.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Nb": {
        "min": 0.1,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.10-1.00"
      },
      "C": {
        "min": 0.04,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.04-0.10"
      },
      "Mn": {
        "max": 2.0,
        "unit": "wt%",
        "display": "2.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-405",
    "name": "Stainless Steel 405",
    "aliases": [
      "UNS S40500"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 11.5,
        "max": 14.5,
        "unit": "wt%",
        "display": "11.5-14.5"
      },
      "Fe": {
        "min": 85.7,
        "max": 85.7,
        "unit": "wt%",
        "display": "約85.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.1,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.10-0.30"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-409",
    "name": "Stainless Steel 409",
    "aliases": [
      "UNS S40900"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 10.5,
        "max": 11.75,
        "unit": "wt%",
        "display": "10.5-11.75"
      },
      "Fe": {
        "min": 87.2,
        "max": 87.2,
        "unit": "wt%",
        "display": "約87.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Ti": {
        "min": 0.48,
        "max": 0.75,
        "unit": "wt%",
        "display": "0.48-0.75"
      },
      "C": {
        "max": 0.08,
        "unit": "wt%",
        "display": "0.08 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      },
      "S": {
        "max": 0.045,
        "unit": "wt%",
        "display": "0.045 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-410",
    "name": "Stainless Steel 410",
    "aliases": [
      "UNS S41000"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 11.5,
        "max": 13.5,
        "unit": "wt%",
        "display": "11.5-13.5"
      },
      "Fe": {
        "min": 86.3,
        "max": 86.3,
        "unit": "wt%",
        "display": "約86.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.08,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.08-0.15"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-414",
    "name": "Stainless Steel 414",
    "aliases": [
      "UNS S41400"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 1.25,
        "max": 2.5,
        "unit": "wt%",
        "display": "1.25-2.50"
      },
      "Cr": {
        "min": 11.5,
        "max": 13.5,
        "unit": "wt%",
        "display": "11.5-13.5"
      },
      "Fe": {
        "min": 84.5,
        "max": 84.5,
        "unit": "wt%",
        "display": "約84.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-416",
    "name": "Stainless Steel 416",
    "aliases": [
      "UNS S41600"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 12.0,
        "max": 14.0,
        "unit": "wt%",
        "display": "12-14"
      },
      "Fe": {
        "min": 85.8,
        "max": 85.8,
        "unit": "wt%",
        "display": "約85.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "max": 1.25,
        "unit": "wt%",
        "display": "1.25 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.06,
        "unit": "wt%",
        "display": "0.060 max"
      },
      "S": {
        "min": 0.15,
        "unit": "wt%",
        "display": "0.15 min"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-420",
    "name": "Stainless Steel 420",
    "aliases": [
      "UNS S42000"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 12.0,
        "max": 14.0,
        "unit": "wt%",
        "display": "12-14"
      },
      "Fe": {
        "min": 86.0,
        "max": 86.0,
        "unit": "wt%",
        "display": "約86.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.15,
        "unit": "wt%",
        "display": "0.15 min"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-422",
    "name": "Stainless Steel 422",
    "aliases": [
      "UNS S42200"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 0.5,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.50-1.00"
      },
      "Cr": {
        "min": 11.0,
        "max": 13.0,
        "unit": "wt%",
        "display": "11-13"
      },
      "Fe": {
        "min": 83.9,
        "max": 83.9,
        "unit": "wt%",
        "display": "約83.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.75,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.75-1.25"
      },
      "W": {
        "min": 0.75,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.75-1.25"
      },
      "C": {
        "min": 0.2,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.20-0.25"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "V": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-429",
    "name": "Stainless Steel 429",
    "aliases": [
      "UNS S42900"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 14.0,
        "max": 16.0,
        "unit": "wt%",
        "display": "14-16"
      },
      "Fe": {
        "min": 83.9,
        "max": 83.9,
        "unit": "wt%",
        "display": "約83.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-430",
    "name": "Stainless Steel 430",
    "aliases": [
      "UNS S43000"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 81.9,
        "max": 81.9,
        "unit": "wt%",
        "display": "約81.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-430f",
    "name": "Stainless Steel 430F",
    "aliases": [
      "UNS S43020"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 81.8,
        "max": 81.8,
        "unit": "wt%",
        "display": "約81.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "max": 1.25,
        "unit": "wt%",
        "display": "1.25 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.06,
        "unit": "wt%",
        "display": "0.060 max"
      },
      "S": {
        "min": 0.15,
        "unit": "wt%",
        "display": "0.15 min"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-431",
    "name": "Stainless Steel 431",
    "aliases": [
      "UNS S43100"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 1.25,
        "max": 2.5,
        "unit": "wt%",
        "display": "1.25-2.50"
      },
      "Cr": {
        "min": 15.0,
        "max": 17.0,
        "unit": "wt%",
        "display": "15-17"
      },
      "Fe": {
        "min": 81.0,
        "max": 81.0,
        "unit": "wt%",
        "display": "約81.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-434",
    "name": "Stainless Steel 434",
    "aliases": [
      "UNS S43400"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 80.9,
        "max": 80.9,
        "unit": "wt%",
        "display": "約80.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.75,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.75-1.25"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-436",
    "name": "Stainless Steel 436",
    "aliases": [
      "UNS S43600"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 80.4,
        "max": 80.4,
        "unit": "wt%",
        "display": "約80.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.75,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.75-1.25"
      },
      "Nb": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-439",
    "name": "Stainless Steel 439",
    "aliases": [
      "UNS S43035"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 17.0,
        "max": 19.0,
        "unit": "wt%",
        "display": "17-19"
      },
      "Fe": {
        "min": 80.5,
        "max": 80.5,
        "unit": "wt%",
        "display": "約80.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Ti": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "C": {
        "max": 0.07,
        "unit": "wt%",
        "display": "0.07 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-440a",
    "name": "Stainless Steel 440A",
    "aliases": [
      "UNS S44002"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 80.9,
        "max": 80.9,
        "unit": "wt%",
        "display": "約80.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "C": {
        "min": 0.6,
        "max": 0.75,
        "unit": "wt%",
        "display": "0.60-0.75"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-440b",
    "name": "Stainless Steel 440B",
    "aliases": [
      "UNS S44003"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 80.7,
        "max": 80.7,
        "unit": "wt%",
        "display": "約80.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "C": {
        "min": 0.75,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.75-0.95"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-440c",
    "name": "Stainless Steel 440C",
    "aliases": [
      "UNS S44004"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 80.5,
        "max": 80.5,
        "unit": "wt%",
        "display": "約80.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.75,
        "unit": "wt%",
        "display": "0.75 max"
      },
      "C": {
        "min": 0.95,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.95-1.20"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-441",
    "name": "Stainless Steel 441",
    "aliases": [
      "UNS S44100"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 17.5,
        "max": 18.5,
        "unit": "wt%",
        "display": "17.5-18.5"
      },
      "Fe": {
        "min": 80.0,
        "max": 80.0,
        "unit": "wt%",
        "display": "約80.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Nb": {
        "min": 0.3,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.30-1.00"
      },
      "Ti": {
        "min": 0.1,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.10-0.60"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-442",
    "name": "Stainless Steel 442",
    "aliases": [
      "UNS S44200"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 18.0,
        "max": 23.0,
        "unit": "wt%",
        "display": "18-23"
      },
      "Fe": {
        "min": 78.4,
        "max": 78.4,
        "unit": "wt%",
        "display": "約78.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-444",
    "name": "Stainless Steel 444",
    "aliases": [
      "UNS S44400"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 17.5,
        "max": 19.5,
        "unit": "wt%",
        "display": "17.5-19.5"
      },
      "Fe": {
        "min": 78.3,
        "max": 78.3,
        "unit": "wt%",
        "display": "約78.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 1.75,
        "max": 2.5,
        "unit": "wt%",
        "display": "1.75-2.50"
      },
      "C": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-446",
    "name": "Stainless Steel 446",
    "aliases": [
      "UNS S44600"
    ],
    "family": "ステンレス鋼",
    "category": "ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Cr": {
        "min": 23.0,
        "max": 27.0,
        "unit": "wt%",
        "display": "23-27"
      },
      "Fe": {
        "min": 73.5,
        "max": 73.5,
        "unit": "wt%",
        "display": "約73.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "Mn": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.50 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-13-8mo",
    "name": "13-8 Mo Stainless Steel",
    "aliases": [
      "UNS S13800",
      "13-8PH"
    ],
    "family": "析出硬化ステンレス鋼",
    "category": "析出硬化ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 7.5,
        "max": 8.5,
        "unit": "wt%",
        "display": "7.5-8.5"
      },
      "Cr": {
        "min": 12.25,
        "max": 13.25,
        "unit": "wt%",
        "display": "12.25-13.25"
      },
      "Fe": {
        "min": 75.7,
        "max": 75.7,
        "unit": "wt%",
        "display": "約75.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 2.0,
        "max": 2.5,
        "unit": "wt%",
        "display": "2.0-2.5"
      },
      "Al": {
        "min": 0.9,
        "max": 1.35,
        "unit": "wt%",
        "display": "0.90-1.35"
      },
      "C": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.05 max"
      },
      "Mn": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      },
      "Si": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      },
      "P": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      },
      "S": {
        "max": 0.008,
        "unit": "wt%",
        "display": "0.008 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "stainless-17-7ph",
    "name": "17-7 PH Stainless Steel",
    "aliases": [
      "UNS S17700"
    ],
    "family": "析出硬化ステンレス鋼",
    "category": "析出硬化ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 6.5,
        "max": 7.75,
        "unit": "wt%",
        "display": "6.5-7.75"
      },
      "Cr": {
        "min": 16.0,
        "max": 18.0,
        "unit": "wt%",
        "display": "16-18"
      },
      "Fe": {
        "min": 73.7,
        "max": 73.7,
        "unit": "wt%",
        "display": "約73.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.75,
        "max": 1.5,
        "unit": "wt%",
        "display": "0.75-1.50"
      },
      "C": {
        "max": 0.09,
        "unit": "wt%",
        "display": "0.09 max"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "duplex-2304",
    "name": "Duplex Stainless Steel 2304",
    "aliases": [
      "UNS S32304"
    ],
    "family": "二相ステンレス鋼",
    "category": "二相ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 3.0,
        "max": 5.5,
        "unit": "wt%",
        "display": "3.0-5.5"
      },
      "Cr": {
        "min": 21.5,
        "max": 24.5,
        "unit": "wt%",
        "display": "21.5-24.5"
      },
      "Fe": {
        "min": 70.5,
        "max": 70.5,
        "unit": "wt%",
        "display": "約70.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.05,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.05-0.60"
      },
      "C": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      },
      "Mn": {
        "max": 2.5,
        "unit": "wt%",
        "display": "2.50 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "N": {
        "min": 0.05,
        "max": 0.2,
        "unit": "wt%",
        "display": "0.05-0.20"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "duplex-2101",
    "name": "Lean Duplex Stainless Steel 2101",
    "aliases": [
      "UNS S32101"
    ],
    "family": "二相ステンレス鋼",
    "category": "二相ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 1.35,
        "max": 1.7,
        "unit": "wt%",
        "display": "1.35-1.70"
      },
      "Cr": {
        "min": 21.0,
        "max": 22.0,
        "unit": "wt%",
        "display": "21-22"
      },
      "Fe": {
        "min": 70.7,
        "max": 70.7,
        "unit": "wt%",
        "display": "約70.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.1,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.10-0.80"
      },
      "C": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.04 max"
      },
      "Mn": {
        "min": 4.0,
        "max": 6.0,
        "unit": "wt%",
        "display": "4-6"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "min": 0.2,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.20-0.25"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "duplex-255",
    "name": "Duplex Stainless Steel 255",
    "aliases": [
      "UNS S32550"
    ],
    "family": "二相ステンレス鋼",
    "category": "二相ステンレス鋼",
    "usage": "耐食部材・配管・締結部品・高温部材",
    "elements": {
      "Ni": {
        "min": 4.5,
        "max": 6.5,
        "unit": "wt%",
        "display": "4.5-6.5"
      },
      "Cr": {
        "min": 24.0,
        "max": 27.0,
        "unit": "wt%",
        "display": "24-27"
      },
      "Fe": {
        "min": 62.1,
        "max": 62.1,
        "unit": "wt%",
        "display": "約62.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 2.9,
        "max": 3.9,
        "unit": "wt%",
        "display": "2.9-3.9"
      },
      "C": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.04 max"
      },
      "Mn": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.50 max"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Cu": {
        "min": 1.5,
        "max": 2.5,
        "unit": "wt%",
        "display": "1.5-2.5"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "N": {
        "min": 0.1,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.10-0.25"
      }
    },
    "sources": [
      {
        "type": "standard",
        "company": "SAE reference",
        "title": "SAE stainless steel designations composition table",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "SAE/UNS stainless composition table; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-w1",
    "name": "W1 Tool Steel",
    "aliases": [
      "AISI W1"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Fe": {
        "min": 98.2,
        "max": 98.2,
        "unit": "wt%",
        "display": "約98.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.7,
        "max": 1.5,
        "unit": "wt%",
        "display": "0.70-1.50"
      },
      "Mn": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "Si": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "V": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-w2",
    "name": "W2 Tool Steel",
    "aliases": [
      "AISI W2"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Fe": {
        "min": 98.0,
        "max": 98.0,
        "unit": "wt%",
        "display": "約98.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.85,
        "max": 1.5,
        "unit": "wt%",
        "display": "0.85-1.50"
      },
      "Mn": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "Si": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "V": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-w5",
    "name": "W5 Tool Steel",
    "aliases": [
      "AISI W5"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Fe": {
        "min": 98.0,
        "max": 98.0,
        "unit": "wt%",
        "display": "約98.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Mn": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "Si": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "V": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-o1",
    "name": "O1 Tool Steel",
    "aliases": [
      "AISI O1"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "Fe": {
        "min": 96.4,
        "max": 96.4,
        "unit": "wt%",
        "display": "約96.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 0.4,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.40-0.60"
      },
      "C": {
        "min": 0.85,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.85-1.00"
      },
      "Mn": {
        "min": 1.0,
        "max": 1.4,
        "unit": "wt%",
        "display": "1.00-1.40"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "V": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-o2",
    "name": "O2 Tool Steel",
    "aliases": [
      "AISI O2"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.85,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.85-0.95"
      },
      "Mn": {
        "min": 1.4,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.40-1.80"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "V": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-o6",
    "name": "O6 Tool Steel",
    "aliases": [
      "AISI O6"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Fe": {
        "min": 96.3,
        "max": 96.3,
        "unit": "wt%",
        "display": "約96.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "C": {
        "min": 1.25,
        "max": 1.45,
        "unit": "wt%",
        "display": "1.25-1.45"
      },
      "Mn": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "Si": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-a2",
    "name": "A2 Tool Steel",
    "aliases": [
      "AISI A2"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.50"
      },
      "Fe": {
        "min": 91.6,
        "max": 91.6,
        "unit": "wt%",
        "display": "約91.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.9,
        "max": 1.4,
        "unit": "wt%",
        "display": "0.90-1.40"
      },
      "C": {
        "min": 0.95,
        "max": 1.05,
        "unit": "wt%",
        "display": "0.95-1.05"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "V": {
        "min": 0.15,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.15-0.50"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-a6",
    "name": "A6 Tool Steel",
    "aliases": [
      "AISI A6"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 94.7,
        "max": 94.7,
        "unit": "wt%",
        "display": "約94.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.9,
        "max": 1.4,
        "unit": "wt%",
        "display": "0.90-1.40"
      },
      "C": {
        "min": 0.65,
        "max": 0.75,
        "unit": "wt%",
        "display": "0.65-0.75"
      },
      "Mn": {
        "min": 1.8,
        "max": 2.5,
        "unit": "wt%",
        "display": "1.80-2.50"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-a7",
    "name": "A7 Tool Steel",
    "aliases": [
      "AISI A7"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.50"
      },
      "Fe": {
        "min": 86.0,
        "max": 86.0,
        "unit": "wt%",
        "display": "約86.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.9,
        "max": 1.4,
        "unit": "wt%",
        "display": "0.90-1.40"
      },
      "C": {
        "min": 2.0,
        "max": 2.85,
        "unit": "wt%",
        "display": "2.00-2.85"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "V": {
        "min": 3.9,
        "max": 5.15,
        "unit": "wt%",
        "display": "3.90-5.15"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-a8",
    "name": "A8 Tool Steel",
    "aliases": [
      "AISI A8"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.50"
      },
      "Fe": {
        "min": 90.3,
        "max": 90.3,
        "unit": "wt%",
        "display": "約90.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 1.15,
        "max": 1.65,
        "unit": "wt%",
        "display": "1.15-1.65"
      },
      "W": {
        "min": 1.15,
        "max": 1.65,
        "unit": "wt%",
        "display": "1.15-1.65"
      },
      "C": {
        "min": 0.5,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.50-0.60"
      },
      "Mn": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Si": {
        "min": 0.75,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.75-1.10"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-a10",
    "name": "A10 Tool Steel",
    "aliases": [
      "AISI A10"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Ni": {
        "min": 1.55,
        "max": 2.05,
        "unit": "wt%",
        "display": "1.55-2.05"
      },
      "Cr": {
        "min": 1.25,
        "max": 1.75,
        "unit": "wt%",
        "display": "1.25-1.75"
      },
      "Fe": {
        "min": 91.4,
        "max": 91.4,
        "unit": "wt%",
        "display": "約91.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 1.25,
        "max": 1.75,
        "unit": "wt%",
        "display": "1.25-1.75"
      },
      "C": {
        "min": 1.25,
        "max": 1.5,
        "unit": "wt%",
        "display": "1.25-1.50"
      },
      "Mn": {
        "min": 1.6,
        "max": 2.1,
        "unit": "wt%",
        "display": "1.60-2.10"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-d3",
    "name": "D3 Tool Steel",
    "aliases": [
      "AISI D3"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 11.0,
        "max": 13.5,
        "unit": "wt%",
        "display": "11-13.5"
      },
      "Fe": {
        "min": 84.4,
        "max": 84.4,
        "unit": "wt%",
        "display": "約84.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 2.0,
        "max": 2.35,
        "unit": "wt%",
        "display": "2.00-2.35"
      },
      "Mn": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "Si": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "V": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-d4",
    "name": "D4 Tool Steel",
    "aliases": [
      "AISI D4"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 11.0,
        "max": 13.5,
        "unit": "wt%",
        "display": "11-13.5"
      },
      "Fe": {
        "min": 83.5,
        "max": 83.5,
        "unit": "wt%",
        "display": "約83.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.7,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.70-1.20"
      },
      "C": {
        "min": 2.0,
        "max": 2.35,
        "unit": "wt%",
        "display": "2.00-2.35"
      },
      "Mn": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "Si": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "V": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-d5",
    "name": "D5 Tool Steel",
    "aliases": [
      "AISI D5"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 11.0,
        "max": 13.5,
        "unit": "wt%",
        "display": "11-13.5"
      },
      "Co": {
        "min": 2.5,
        "max": 3.5,
        "unit": "wt%",
        "display": "2.50-3.50"
      },
      "Fe": {
        "min": 81.2,
        "max": 81.2,
        "unit": "wt%",
        "display": "約81.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.7,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.70-1.20"
      },
      "C": {
        "min": 1.4,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.40-1.60"
      },
      "Mn": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "Si": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "V": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-d7",
    "name": "D7 Tool Steel",
    "aliases": [
      "AISI D7"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 11.5,
        "max": 13.5,
        "unit": "wt%",
        "display": "11.5-13.5"
      },
      "Fe": {
        "min": 79.3,
        "max": 79.3,
        "unit": "wt%",
        "display": "約79.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.7,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.70-1.20"
      },
      "C": {
        "min": 2.2,
        "max": 2.6,
        "unit": "wt%",
        "display": "2.20-2.60"
      },
      "Mn": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Si": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "V": {
        "min": 3.5,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.50-4.50"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-h10",
    "name": "H10 Tool Steel",
    "aliases": [
      "AISI H10"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.0,
        "max": 3.75,
        "unit": "wt%",
        "display": "3.00-3.75"
      },
      "Fe": {
        "min": 91.8,
        "max": 91.8,
        "unit": "wt%",
        "display": "約91.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 2.0,
        "max": 3.0,
        "unit": "wt%",
        "display": "2.00-3.00"
      },
      "C": {
        "min": 0.35,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.35-0.45"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "V": {
        "min": 0.25,
        "max": 0.75,
        "unit": "wt%",
        "display": "0.25-0.75"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-h11",
    "name": "H11 Tool Steel",
    "aliases": [
      "AISI H11"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.50"
      },
      "Fe": {
        "min": 91.3,
        "max": 91.3,
        "unit": "wt%",
        "display": "約91.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 1.1,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.10-1.60"
      },
      "C": {
        "min": 0.33,
        "max": 0.43,
        "unit": "wt%",
        "display": "0.33-0.43"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "V": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-h12",
    "name": "H12 Tool Steel",
    "aliases": [
      "AISI H12"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.50"
      },
      "Fe": {
        "min": 89.9,
        "max": 89.9,
        "unit": "wt%",
        "display": "約89.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 1.25,
        "max": 1.75,
        "unit": "wt%",
        "display": "1.25-1.75"
      },
      "W": {
        "min": 1.0,
        "max": 1.75,
        "unit": "wt%",
        "display": "1.00-1.75"
      },
      "C": {
        "min": 0.3,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.30-0.40"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "V": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-h14",
    "name": "H14 Tool Steel",
    "aliases": [
      "AISI H14"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.50"
      },
      "Fe": {
        "min": 88.0,
        "max": 88.0,
        "unit": "wt%",
        "display": "約88.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 4.0,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.00-5.25"
      },
      "C": {
        "min": 0.35,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.35-0.45"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "V": {
        "min": 0.3,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.30-0.70"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-h19",
    "name": "H19 Tool Steel",
    "aliases": [
      "AISI H19"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 4.0,
        "max": 4.75,
        "unit": "wt%",
        "display": "4.00-4.75"
      },
      "Co": {
        "min": 4.0,
        "max": 4.75,
        "unit": "wt%",
        "display": "4.00-4.75"
      },
      "Fe": {
        "min": 82.9,
        "max": 82.9,
        "unit": "wt%",
        "display": "約82.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.35,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.35-0.60"
      },
      "W": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "C": {
        "min": 0.35,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.35-0.45"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-h21",
    "name": "H21 Tool Steel",
    "aliases": [
      "AISI H21"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.0,
        "max": 3.75,
        "unit": "wt%",
        "display": "3.00-3.75"
      },
      "Fe": {
        "min": 86.0,
        "max": 86.0,
        "unit": "wt%",
        "display": "約86.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 8.5,
        "max": 10.0,
        "unit": "wt%",
        "display": "8.50-10.00"
      },
      "C": {
        "min": 0.26,
        "max": 0.36,
        "unit": "wt%",
        "display": "0.26-0.36"
      },
      "Mn": {
        "min": 0.15,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.15-0.40"
      },
      "Si": {
        "min": 0.15,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.15-0.50"
      },
      "V": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-h26",
    "name": "H26 Tool Steel",
    "aliases": [
      "AISI H26"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Fe": {
        "min": 75.6,
        "max": 75.6,
        "unit": "wt%",
        "display": "約75.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 17.25,
        "max": 19.0,
        "unit": "wt%",
        "display": "17.25-19.00"
      },
      "C": {
        "min": 0.45,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.45-0.55"
      },
      "Mn": {
        "min": 0.15,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.15-0.40"
      },
      "Si": {
        "min": 0.15,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.15-0.50"
      },
      "V": {
        "min": 0.8,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.80-1.20"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-s1",
    "name": "S1 Shock-Resisting Tool Steel",
    "aliases": [
      "AISI S1"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 1.0,
        "max": 1.5,
        "unit": "wt%",
        "display": "1.00-1.50"
      },
      "Fe": {
        "min": 95.7,
        "max": 95.7,
        "unit": "wt%",
        "display": "約95.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 1.5,
        "max": 2.5,
        "unit": "wt%",
        "display": "1.50-2.50"
      },
      "C": {
        "min": 0.45,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.45-0.55"
      },
      "Mn": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "Si": {
        "min": 0.1,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.10-0.40"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-s2",
    "name": "S2 Shock-Resisting Tool Steel",
    "aliases": [
      "AISI S2"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "C": {
        "min": 0.4,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.40-0.55"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.30-0.50"
      },
      "Si": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "V": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-s5",
    "name": "S5 Shock-Resisting Tool Steel",
    "aliases": [
      "AISI S5"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 0.5,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.50-0.80"
      },
      "Fe": {
        "min": 95.5,
        "max": 95.5,
        "unit": "wt%",
        "display": "約95.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "C": {
        "min": 0.5,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.50-0.60"
      },
      "Mn": {
        "min": 0.6,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.60-1.00"
      },
      "Si": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-s7",
    "name": "S7 Shock-Resisting Tool Steel",
    "aliases": [
      "AISI S7"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.0,
        "max": 3.5,
        "unit": "wt%",
        "display": "3.00-3.50"
      },
      "Fe": {
        "min": 93.5,
        "max": 93.5,
        "unit": "wt%",
        "display": "約93.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 1.3,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.30-1.80"
      },
      "C": {
        "min": 0.45,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.45-0.55"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.20-0.90"
      },
      "Si": {
        "min": 0.2,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.20-1.00"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-l2",
    "name": "L2 Tool Steel",
    "aliases": [
      "AISI L2"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Ni": {
        "min": 0.25,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.25-1.00"
      },
      "Cr": {
        "min": 0.7,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.70-1.20"
      },
      "Fe": {
        "min": 96.7,
        "max": 96.7,
        "unit": "wt%",
        "display": "約96.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.45,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.45-1.10"
      },
      "Mn": {
        "min": 0.4,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.40-0.90"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-l6",
    "name": "L6 Tool Steel",
    "aliases": [
      "AISI L6"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Ni": {
        "min": 1.25,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.25-2.00"
      },
      "Cr": {
        "min": 0.6,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.60-1.20"
      },
      "Fe": {
        "min": 95.6,
        "max": 95.6,
        "unit": "wt%",
        "display": "約95.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "C": {
        "min": 0.65,
        "max": 0.75,
        "unit": "wt%",
        "display": "0.65-0.75"
      },
      "Mn": {
        "min": 0.5,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.50-0.80"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "tool-steel-f1",
    "name": "F1 Tool Steel",
    "aliases": [
      "AISI F1"
    ],
    "family": "工具鋼",
    "category": "工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Fe": {
        "min": 93.8,
        "max": 93.8,
        "unit": "wt%",
        "display": "約93.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 3.25,
        "max": 4.25,
        "unit": "wt%",
        "display": "3.25-4.25"
      },
      "C": {
        "min": 1.1,
        "max": 1.4,
        "unit": "wt%",
        "display": "1.10-1.40"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "V": {
        "min": 0.1,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.10-0.30"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Tool steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Tool_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m1",
    "name": "M1 High Speed Steel",
    "aliases": [
      "AISI M1"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.5,
        "max": 4.0,
        "unit": "wt%",
        "display": "3.50-4.00"
      },
      "Fe": {
        "min": 83.6,
        "max": 83.6,
        "unit": "wt%",
        "display": "約83.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 8.0,
        "max": 9.0,
        "unit": "wt%",
        "display": "8.00-9.00"
      },
      "W": {
        "min": 1.4,
        "max": 2.1,
        "unit": "wt%",
        "display": "1.40-2.10"
      },
      "C": {
        "min": 0.75,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.75-0.85"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.0,
        "max": 1.35,
        "unit": "wt%",
        "display": "1.00-1.35"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m3",
    "name": "M3 High Speed Steel",
    "aliases": [
      "AISI M3"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Fe": {
        "min": 79.7,
        "max": 79.7,
        "unit": "wt%",
        "display": "約79.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 4.75,
        "max": 6.5,
        "unit": "wt%",
        "display": "4.75-6.50"
      },
      "W": {
        "min": 5.5,
        "max": 6.75,
        "unit": "wt%",
        "display": "5.50-6.75"
      },
      "C": {
        "min": 1.15,
        "max": 1.25,
        "unit": "wt%",
        "display": "1.15-1.25"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 2.4,
        "max": 3.25,
        "unit": "wt%",
        "display": "2.40-3.25"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m4",
    "name": "M4 High Speed Steel",
    "aliases": [
      "AISI M4"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Fe": {
        "min": 79.3,
        "max": 79.3,
        "unit": "wt%",
        "display": "約79.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 4.25,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.25-5.50"
      },
      "W": {
        "min": 5.25,
        "max": 6.5,
        "unit": "wt%",
        "display": "5.25-6.50"
      },
      "C": {
        "min": 1.25,
        "max": 1.4,
        "unit": "wt%",
        "display": "1.25-1.40"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m7",
    "name": "M7 High Speed Steel",
    "aliases": [
      "AISI M7"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.5,
        "max": 4.0,
        "unit": "wt%",
        "display": "3.50-4.00"
      },
      "Fe": {
        "min": 82.4,
        "max": 82.4,
        "unit": "wt%",
        "display": "約82.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 8.2,
        "max": 9.2,
        "unit": "wt%",
        "display": "8.20-9.20"
      },
      "W": {
        "min": 1.4,
        "max": 2.1,
        "unit": "wt%",
        "display": "1.40-2.10"
      },
      "C": {
        "min": 0.97,
        "max": 1.07,
        "unit": "wt%",
        "display": "0.97-1.07"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m10",
    "name": "M10 High Speed Steel",
    "aliases": [
      "AISI M10"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Fe": {
        "min": 82.3,
        "max": 82.3,
        "unit": "wt%",
        "display": "約82.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 8.0,
        "max": 9.0,
        "unit": "wt%",
        "display": "8.00-9.00"
      },
      "W": {
        "min": 1.4,
        "max": 2.1,
        "unit": "wt%",
        "display": "1.40-2.10"
      },
      "C": {
        "min": 0.85,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.85-0.95"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m15",
    "name": "M15 High Speed Steel",
    "aliases": [
      "AISI M15"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 4.75,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.75-5.25"
      },
      "Fe": {
        "min": 73.6,
        "max": 73.6,
        "unit": "wt%",
        "display": "約73.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 3.25,
        "max": 4.25,
        "unit": "wt%",
        "display": "3.25-4.25"
      },
      "W": {
        "min": 6.25,
        "max": 7.0,
        "unit": "wt%",
        "display": "6.25-7.00"
      },
      "C": {
        "min": 1.45,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.45-1.60"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 4.75,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.75-5.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m30",
    "name": "M30 High Speed Steel",
    "aliases": [
      "AISI M30"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 4.75,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.75-5.25"
      },
      "Fe": {
        "min": 78.3,
        "max": 78.3,
        "unit": "wt%",
        "display": "約78.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 8.0,
        "max": 9.0,
        "unit": "wt%",
        "display": "8.00-9.00"
      },
      "W": {
        "min": 1.4,
        "max": 2.1,
        "unit": "wt%",
        "display": "1.40-2.10"
      },
      "C": {
        "min": 0.75,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.75-0.85"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.0,
        "max": 1.35,
        "unit": "wt%",
        "display": "1.00-1.35"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m33",
    "name": "M33 High Speed Steel",
    "aliases": [
      "AISI M33"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 7.75,
        "max": 8.75,
        "unit": "wt%",
        "display": "7.75-8.75"
      },
      "Fe": {
        "min": 73.1,
        "max": 73.1,
        "unit": "wt%",
        "display": "約73.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 9.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "9.00-10.00"
      },
      "W": {
        "min": 1.4,
        "max": 2.1,
        "unit": "wt%",
        "display": "1.40-2.10"
      },
      "C": {
        "min": 0.85,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.85-0.95"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m34",
    "name": "M34 High Speed Steel",
    "aliases": [
      "AISI M34"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 7.75,
        "max": 8.75,
        "unit": "wt%",
        "display": "7.75-8.75"
      },
      "Fe": {
        "min": 74.6,
        "max": 74.6,
        "unit": "wt%",
        "display": "約74.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 7.5,
        "max": 8.5,
        "unit": "wt%",
        "display": "7.50-8.50"
      },
      "W": {
        "min": 1.4,
        "max": 2.1,
        "unit": "wt%",
        "display": "1.40-2.10"
      },
      "C": {
        "min": 0.85,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.85-0.95"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-m36",
    "name": "M36 High Speed Steel",
    "aliases": [
      "AISI M36"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 7.75,
        "max": 8.75,
        "unit": "wt%",
        "display": "7.75-8.75"
      },
      "Fe": {
        "min": 73.2,
        "max": 73.2,
        "unit": "wt%",
        "display": "約73.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 4.75,
        "max": 5.5,
        "unit": "wt%",
        "display": "4.75-5.50"
      },
      "W": {
        "min": 5.5,
        "max": 6.75,
        "unit": "wt%",
        "display": "5.50-6.75"
      },
      "C": {
        "min": 0.8,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.80-0.90"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-t1",
    "name": "T1 High Speed Steel",
    "aliases": [
      "AISI T1",
      "18-4-1 HSS"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Fe": {
        "min": 75.6,
        "max": 75.6,
        "unit": "wt%",
        "display": "約75.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 17.25,
        "max": 18.75,
        "unit": "wt%",
        "display": "17.25-18.75"
      },
      "C": {
        "min": 0.65,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.65-0.80"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 0.9,
        "max": 1.3,
        "unit": "wt%",
        "display": "0.90-1.30"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-t2",
    "name": "T2 High Speed Steel",
    "aliases": [
      "AISI T2"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Fe": {
        "min": 73.7,
        "max": 73.7,
        "unit": "wt%",
        "display": "約73.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.75,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.75-1.25"
      },
      "W": {
        "min": 17.25,
        "max": 18.75,
        "unit": "wt%",
        "display": "17.25-18.75"
      },
      "C": {
        "min": 0.8,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.80-0.90"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-t4",
    "name": "T4 High Speed Steel",
    "aliases": [
      "AISI T4"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 4.75,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.75-5.25"
      },
      "Fe": {
        "min": 70.7,
        "max": 70.7,
        "unit": "wt%",
        "display": "約70.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 17.25,
        "max": 18.75,
        "unit": "wt%",
        "display": "17.25-18.75"
      },
      "C": {
        "min": 0.7,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.70-0.80"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 0.9,
        "max": 1.3,
        "unit": "wt%",
        "display": "0.90-1.30"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-t5",
    "name": "T5 High Speed Steel",
    "aliases": [
      "AISI T5"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 7.75,
        "max": 8.75,
        "unit": "wt%",
        "display": "7.75-8.75"
      },
      "Fe": {
        "min": 66.5,
        "max": 66.5,
        "unit": "wt%",
        "display": "約66.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 17.25,
        "max": 18.75,
        "unit": "wt%",
        "display": "17.25-18.75"
      },
      "C": {
        "min": 0.75,
        "max": 0.85,
        "unit": "wt%",
        "display": "0.75-0.85"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-t8",
    "name": "T8 High Speed Steel",
    "aliases": [
      "AISI T8"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 4.5,
        "unit": "wt%",
        "display": "3.75-4.50"
      },
      "Co": {
        "min": 4.75,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.75-5.25"
      },
      "Fe": {
        "min": 73.8,
        "max": 73.8,
        "unit": "wt%",
        "display": "約73.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 13.25,
        "max": 14.75,
        "unit": "wt%",
        "display": "13.25-14.75"
      },
      "C": {
        "min": 0.7,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.70-0.80"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 1.75,
        "max": 2.25,
        "unit": "wt%",
        "display": "1.75-2.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "high-speed-steel-t15",
    "name": "T15 High Speed Steel",
    "aliases": [
      "AISI T15"
    ],
    "family": "高速度工具鋼",
    "category": "高速度工具鋼",
    "usage": "金型・切削工具・耐摩耗工具",
    "elements": {
      "Cr": {
        "min": 3.75,
        "max": 5.0,
        "unit": "wt%",
        "display": "3.75-5.00"
      },
      "Co": {
        "min": 4.75,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.75-5.25"
      },
      "Fe": {
        "min": 71.5,
        "max": 71.5,
        "unit": "wt%",
        "display": "約71.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "W": {
        "min": 11.75,
        "max": 13.0,
        "unit": "wt%",
        "display": "11.75-13.00"
      },
      "C": {
        "min": 1.5,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.50-1.60"
      },
      "Mn": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Si": {
        "max": 0.45,
        "unit": "wt%",
        "display": "0.45 max"
      },
      "V": {
        "min": 4.5,
        "max": 5.25,
        "unit": "wt%",
        "display": "4.50-5.25"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "High-speed steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-speed_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public tool steel family composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "suj2",
    "name": "SUJ2 Bearing Steel",
    "aliases": [
      "JIS SUJ2",
      "AISI 52100 family"
    ],
    "family": "軸受鋼",
    "category": "軸受鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 1.3,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.30-1.60"
      },
      "Fe": {
        "min": 97.0,
        "max": 97.0,
        "unit": "wt%",
        "display": "約97.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.95,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.95-1.10"
      },
      "Mn": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Bearing steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "suj3",
    "name": "SUJ3 Bearing Steel",
    "aliases": [
      "JIS SUJ3"
    ],
    "family": "軸受鋼",
    "category": "軸受鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.2,
        "unit": "wt%",
        "display": "0.90-1.20"
      },
      "Fe": {
        "min": 96.3,
        "max": 96.3,
        "unit": "wt%",
        "display": "約96.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.95,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.95-1.10"
      },
      "Mn": {
        "min": 0.9,
        "max": 1.15,
        "unit": "wt%",
        "display": "0.90-1.15"
      },
      "Si": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Bearing steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "bearing-52100",
    "name": "AISI 52100 Bearing Steel",
    "aliases": [
      "SAE 52100",
      "100Cr6"
    ],
    "family": "軸受鋼",
    "category": "軸受鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 1.3,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.30-1.60"
      },
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.98,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.98-1.10"
      },
      "Mn": {
        "min": 0.25,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.25-0.45"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Bearing steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "bearing-51100",
    "name": "AISI 51100 Bearing Steel",
    "aliases": [
      "SAE 51100"
    ],
    "family": "軸受鋼",
    "category": "軸受鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.9,
        "max": 1.15,
        "unit": "wt%",
        "display": "0.90-1.15"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.95,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.95-1.10"
      },
      "Mn": {
        "min": 0.25,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.25-0.45"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Bearing steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "bearing-51200",
    "name": "AISI 51200 Bearing Steel",
    "aliases": [
      "SAE 51200"
    ],
    "family": "軸受鋼",
    "category": "軸受鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 1.2,
        "max": 1.45,
        "unit": "wt%",
        "display": "1.20-1.45"
      },
      "Fe": {
        "min": 97.0,
        "max": 97.0,
        "unit": "wt%",
        "display": "約97.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.95,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.95-1.10"
      },
      "Mn": {
        "min": 0.25,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.25-0.45"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Bearing steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup3",
    "name": "SUP3 Spring Steel",
    "aliases": [
      "JIS SUP3"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Fe": {
        "min": 98.4,
        "max": 98.4,
        "unit": "wt%",
        "display": "約98.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.75,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.75-0.90"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup6",
    "name": "SUP6 Spring Steel",
    "aliases": [
      "JIS SUP6"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.56,
        "max": 0.64,
        "unit": "wt%",
        "display": "0.56-0.64"
      },
      "Mn": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Si": {
        "min": 1.5,
        "max": 1.8,
        "unit": "wt%",
        "display": "1.50-1.80"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup7",
    "name": "SUP7 Spring Steel",
    "aliases": [
      "JIS SUP7"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Fe": {
        "min": 96.5,
        "max": 96.5,
        "unit": "wt%",
        "display": "約96.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.56,
        "max": 0.64,
        "unit": "wt%",
        "display": "0.56-0.64"
      },
      "Mn": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Si": {
        "min": 1.8,
        "max": 2.2,
        "unit": "wt%",
        "display": "1.80-2.20"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup9",
    "name": "SUP9 Spring Steel",
    "aliases": [
      "JIS SUP9"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.65,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.65-0.95"
      },
      "Fe": {
        "min": 97.6,
        "max": 97.6,
        "unit": "wt%",
        "display": "約97.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.52,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.52-0.60"
      },
      "Mn": {
        "min": 0.65,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.65-0.95"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup9a",
    "name": "SUP9A Spring Steel",
    "aliases": [
      "JIS SUP9A"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.56,
        "max": 0.64,
        "unit": "wt%",
        "display": "0.56-0.64"
      },
      "Mn": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup10",
    "name": "SUP10 Spring Steel",
    "aliases": [
      "JIS SUP10"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.47,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.47-0.55"
      },
      "Mn": {
        "min": 0.65,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.65-0.95"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "V": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup11a",
    "name": "SUP11A Spring Steel",
    "aliases": [
      "JIS SUP11A"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.56,
        "max": 0.64,
        "unit": "wt%",
        "display": "0.56-0.64"
      },
      "Mn": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "B": {
        "min": 0.0005,
        "max": 0.003,
        "unit": "wt%",
        "display": "0.0005-0.003"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup12",
    "name": "SUP12 Spring Steel",
    "aliases": [
      "JIS SUP12"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Fe": {
        "min": 96.4,
        "max": 96.4,
        "unit": "wt%",
        "display": "約96.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.51,
        "max": 0.59,
        "unit": "wt%",
        "display": "0.51-0.59"
      },
      "Mn": {
        "min": 0.65,
        "max": 0.95,
        "unit": "wt%",
        "display": "0.65-0.95"
      },
      "Si": {
        "min": 1.2,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.20-1.60"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sup13",
    "name": "SUP13 Spring Steel",
    "aliases": [
      "JIS SUP13"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Fe": {
        "min": 95.7,
        "max": 95.7,
        "unit": "wt%",
        "display": "約95.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.15,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.15-0.30"
      },
      "C": {
        "min": 0.56,
        "max": 0.64,
        "unit": "wt%",
        "display": "0.56-0.64"
      },
      "Mn": {
        "min": 0.7,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.70-1.00"
      },
      "Si": {
        "min": 1.5,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.50-2.00"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "spring-5160",
    "name": "SAE 5160 Spring Steel",
    "aliases": [
      "AISI 5160"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.56,
        "max": 0.64,
        "unit": "wt%",
        "display": "0.56-0.64"
      },
      "Mn": {
        "min": 0.75,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.75-1.00"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "spring-6150",
    "name": "SAE 6150 Spring Steel",
    "aliases": [
      "AISI 6150"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.8,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.80-1.10"
      },
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.48,
        "max": 0.53,
        "unit": "wt%",
        "display": "0.48-0.53"
      },
      "Mn": {
        "min": 0.7,
        "max": 0.9,
        "unit": "wt%",
        "display": "0.70-0.90"
      },
      "Si": {
        "min": 0.15,
        "max": 0.35,
        "unit": "wt%",
        "display": "0.15-0.35"
      },
      "V": {
        "min": 0.15,
        "unit": "wt%",
        "display": "0.15 min"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "spring-9254",
    "name": "SAE 9254 Spring Steel",
    "aliases": [
      "AISI 9254"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Cr": {
        "min": 0.6,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.60-0.80"
      },
      "Fe": {
        "min": 96.6,
        "max": 96.6,
        "unit": "wt%",
        "display": "約96.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.51,
        "max": 0.59,
        "unit": "wt%",
        "display": "0.51-0.59"
      },
      "Mn": {
        "min": 0.6,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.60-0.80"
      },
      "Si": {
        "min": 1.2,
        "max": 1.6,
        "unit": "wt%",
        "display": "1.20-1.60"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "spring-1074",
    "name": "SAE 1074 Spring Steel",
    "aliases": [
      "AISI 1074"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.7,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.70-0.80"
      },
      "Mn": {
        "min": 0.5,
        "max": 0.8,
        "unit": "wt%",
        "display": "0.50-0.80"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "spring-1095",
    "name": "SAE 1095 Spring Steel",
    "aliases": [
      "AISI 1095 spring temper"
    ],
    "family": "ばね鋼",
    "category": "ばね鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Fe": {
        "min": 98.6,
        "max": 98.6,
        "unit": "wt%",
        "display": "約98.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 0.9,
        "max": 1.03,
        "unit": "wt%",
        "display": "0.90-1.03"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.30-0.50"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Spring steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Spring_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "ar400",
    "name": "AR400 Wear Plate",
    "aliases": [
      "Abrasion Resistant 400"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 0.8,
        "unit": "wt%",
        "display": "0.80 max"
      },
      "Fe": {
        "min": 97.9,
        "max": 97.9,
        "unit": "wt%",
        "display": "約97.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.25,
        "unit": "wt%",
        "display": "0.25 max"
      },
      "C": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.005,
        "unit": "wt%",
        "display": "0.005 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "ar450",
    "name": "AR450 Wear Plate",
    "aliases": [
      "Abrasion Resistant 450"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 0.9,
        "unit": "wt%",
        "display": "0.90 max"
      },
      "Fe": {
        "min": 97.8,
        "max": 97.8,
        "unit": "wt%",
        "display": "約97.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.3,
        "unit": "wt%",
        "display": "0.30 max"
      },
      "C": {
        "max": 0.32,
        "unit": "wt%",
        "display": "0.32 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.005,
        "unit": "wt%",
        "display": "0.005 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "ar500",
    "name": "AR500 Wear Plate",
    "aliases": [
      "Abrasion Resistant 500"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Fe": {
        "min": 97.7,
        "max": 97.7,
        "unit": "wt%",
        "display": "約97.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.35,
        "unit": "wt%",
        "display": "0.35 max"
      },
      "C": {
        "max": 0.35,
        "unit": "wt%",
        "display": "0.35 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.005,
        "unit": "wt%",
        "display": "0.005 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "ar550",
    "name": "AR550 Wear Plate",
    "aliases": [
      "Abrasion Resistant 550"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 1.1,
        "unit": "wt%",
        "display": "1.10 max"
      },
      "Fe": {
        "min": 97.7,
        "max": 97.7,
        "unit": "wt%",
        "display": "約97.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.35,
        "unit": "wt%",
        "display": "0.35 max"
      },
      "C": {
        "max": 0.37,
        "unit": "wt%",
        "display": "0.37 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.005,
        "unit": "wt%",
        "display": "0.005 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "ar600",
    "name": "AR600 Wear Plate",
    "aliases": [
      "Abrasion Resistant 600"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 1.2,
        "unit": "wt%",
        "display": "1.20 max"
      },
      "Fe": {
        "min": 97.6,
        "max": 97.6,
        "unit": "wt%",
        "display": "約97.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.4,
        "unit": "wt%",
        "display": "0.40 max"
      },
      "C": {
        "max": 0.42,
        "unit": "wt%",
        "display": "0.42 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.005,
        "unit": "wt%",
        "display": "0.005 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "hadfield-manganese",
    "name": "Hadfield Manganese Steel",
    "aliases": [
      "X120Mn12",
      "Mangalloy"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Fe": {
        "min": 85.8,
        "max": 85.8,
        "unit": "wt%",
        "display": "約85.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 1.0,
        "max": 1.4,
        "unit": "wt%",
        "display": "1.00-1.40"
      },
      "Mn": {
        "min": 11.0,
        "max": 14.0,
        "unit": "wt%",
        "display": "11-14"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.07,
        "unit": "wt%",
        "display": "0.07 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.03 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "x120mn12",
    "name": "X120Mn12 Manganese Steel",
    "aliases": [
      "1.3401"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Fe": {
        "min": 85.7,
        "max": 85.7,
        "unit": "wt%",
        "display": "約85.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "min": 1.05,
        "max": 1.35,
        "unit": "wt%",
        "display": "1.05-1.35"
      },
      "Mn": {
        "min": 11.0,
        "max": 14.0,
        "unit": "wt%",
        "display": "11-14"
      },
      "Si": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "P": {
        "max": 0.1,
        "unit": "wt%",
        "display": "0.10 max"
      },
      "S": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.04 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "nm400",
    "name": "NM400 Wear-Resistant Steel",
    "aliases": [
      "GB NM400"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 1.0,
        "unit": "wt%",
        "display": "1.00 max"
      },
      "Fe": {
        "min": 97.7,
        "max": 97.7,
        "unit": "wt%",
        "display": "約97.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "C": {
        "max": 0.26,
        "unit": "wt%",
        "display": "0.26 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.004,
        "unit": "wt%",
        "display": "0.004 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "nm450",
    "name": "NM450 Wear-Resistant Steel",
    "aliases": [
      "GB NM450"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 1.1,
        "unit": "wt%",
        "display": "1.10 max"
      },
      "Fe": {
        "min": 97.6,
        "max": 97.6,
        "unit": "wt%",
        "display": "約97.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "C": {
        "max": 0.28,
        "unit": "wt%",
        "display": "0.28 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.004,
        "unit": "wt%",
        "display": "0.004 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "nm500",
    "name": "NM500 Wear-Resistant Steel",
    "aliases": [
      "GB NM500"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "max": 1.2,
        "unit": "wt%",
        "display": "1.20 max"
      },
      "Fe": {
        "min": 97.6,
        "max": 97.6,
        "unit": "wt%",
        "display": "約97.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "C": {
        "max": 0.32,
        "unit": "wt%",
        "display": "0.32 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.004,
        "unit": "wt%",
        "display": "0.004 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "hardox-450",
    "name": "Hardox 450",
    "aliases": [
      "Wear plate 450 HBW"
    ],
    "family": "耐摩耗鋼",
    "category": "耐摩耗鋼",
    "usage": "軸受・ばね・耐摩耗ライナー・建設機械部材",
    "elements": {
      "Ni": {
        "max": 1.5,
        "unit": "wt%",
        "display": "1.50 max"
      },
      "Cr": {
        "max": 1.4,
        "unit": "wt%",
        "display": "1.40 max"
      },
      "Fe": {
        "min": 97.0,
        "max": 97.0,
        "unit": "wt%",
        "display": "約97.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "C": {
        "max": 0.26,
        "unit": "wt%",
        "display": "0.26 max"
      },
      "Mn": {
        "max": 1.6,
        "unit": "wt%",
        "display": "1.60 max"
      },
      "Si": {
        "max": 0.7,
        "unit": "wt%",
        "display": "0.70 max"
      },
      "B": {
        "max": 0.005,
        "unit": "wt%",
        "display": "0.005 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Wear-resistant steel composition reference",
        "url": "https://en.wikipedia.org/wiki/High-strength_low-alloy_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "p11",
    "name": "ASTM A335 P11",
    "aliases": [
      "1.25Cr-0.5Mo",
      "P11"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 1.0,
        "max": 1.5,
        "unit": "wt%",
        "display": "1.00-1.50"
      },
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.44,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.44-0.65"
      },
      "C": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "min": 0.5,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.50-1.00"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "p22",
    "name": "ASTM A335 P22",
    "aliases": [
      "2.25Cr-1Mo",
      "P22"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 1.9,
        "max": 2.6,
        "unit": "wt%",
        "display": "1.90-2.60"
      },
      "Fe": {
        "min": 95.9,
        "max": 95.9,
        "unit": "wt%",
        "display": "約95.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.87,
        "max": 1.13,
        "unit": "wt%",
        "display": "0.87-1.13"
      },
      "C": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "p5",
    "name": "ASTM A335 P5",
    "aliases": [
      "5Cr-0.5Mo",
      "P5"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 4.0,
        "max": 6.0,
        "unit": "wt%",
        "display": "4.00-6.00"
      },
      "Fe": {
        "min": 93.7,
        "max": 93.7,
        "unit": "wt%",
        "display": "約93.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.45,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.45-0.65"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "p9",
    "name": "ASTM A335 P9",
    "aliases": [
      "9Cr-1Mo",
      "P9"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 8.0,
        "max": 10.0,
        "unit": "wt%",
        "display": "8.00-10.00"
      },
      "Fe": {
        "min": 88.7,
        "max": 88.7,
        "unit": "wt%",
        "display": "約88.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.9,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.90-1.10"
      },
      "C": {
        "max": 0.15,
        "unit": "wt%",
        "display": "0.15 max"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "min": 0.5,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.50-1.00"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "p91",
    "name": "ASTM A335 P91",
    "aliases": [
      "T91",
      "9Cr-1Mo-V-Nb"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 8.0,
        "max": 9.5,
        "unit": "wt%",
        "display": "8.00-9.50"
      },
      "Fe": {
        "min": 89.0,
        "max": 89.0,
        "unit": "wt%",
        "display": "約89.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.85,
        "max": 1.05,
        "unit": "wt%",
        "display": "0.85-1.05"
      },
      "Nb": {
        "min": 0.06,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.06-0.10"
      },
      "C": {
        "min": 0.08,
        "max": 0.12,
        "unit": "wt%",
        "display": "0.08-0.12"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "V": {
        "min": 0.18,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.18-0.25"
      },
      "P": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      },
      "S": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.010 max"
      },
      "N": {
        "min": 0.03,
        "max": 0.07,
        "unit": "wt%",
        "display": "0.03-0.07"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "p92",
    "name": "ASTM A335 P92",
    "aliases": [
      "T92",
      "9Cr-W-Mo-V-Nb"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 8.5,
        "max": 9.5,
        "unit": "wt%",
        "display": "8.50-9.50"
      },
      "Fe": {
        "min": 87.7,
        "max": 87.7,
        "unit": "wt%",
        "display": "約87.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Nb": {
        "min": 0.04,
        "max": 0.09,
        "unit": "wt%",
        "display": "0.04-0.09"
      },
      "W": {
        "min": 1.5,
        "max": 2.0,
        "unit": "wt%",
        "display": "1.50-2.00"
      },
      "C": {
        "min": 0.07,
        "max": 0.13,
        "unit": "wt%",
        "display": "0.07-0.13"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "V": {
        "min": 0.15,
        "max": 0.25,
        "unit": "wt%",
        "display": "0.15-0.25"
      },
      "B": {
        "min": 0.001,
        "max": 0.006,
        "unit": "wt%",
        "display": "0.001-0.006"
      },
      "N": {
        "min": 0.03,
        "max": 0.07,
        "unit": "wt%",
        "display": "0.03-0.07"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "t11",
    "name": "ASTM A213 T11",
    "aliases": [
      "T11 boiler tube"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 1.0,
        "max": 1.5,
        "unit": "wt%",
        "display": "1.00-1.50"
      },
      "Fe": {
        "min": 96.9,
        "max": 96.9,
        "unit": "wt%",
        "display": "約96.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.44,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.44-0.65"
      },
      "C": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "min": 0.5,
        "max": 1.0,
        "unit": "wt%",
        "display": "0.50-1.00"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "t22",
    "name": "ASTM A213 T22",
    "aliases": [
      "T22 boiler tube"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 1.9,
        "max": 2.6,
        "unit": "wt%",
        "display": "1.90-2.60"
      },
      "Fe": {
        "min": 95.9,
        "max": 95.9,
        "unit": "wt%",
        "display": "約95.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.87,
        "max": 1.13,
        "unit": "wt%",
        "display": "0.87-1.13"
      },
      "C": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.30-0.60"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "P": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      },
      "S": {
        "max": 0.025,
        "unit": "wt%",
        "display": "0.025 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "t23",
    "name": "ASTM A213 T23",
    "aliases": [
      "T23 boiler tube"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 1.9,
        "max": 2.6,
        "unit": "wt%",
        "display": "1.90-2.60"
      },
      "Fe": {
        "min": 95.0,
        "max": 95.0,
        "unit": "wt%",
        "display": "約95.0",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.05,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.05-0.30"
      },
      "Nb": {
        "min": 0.02,
        "max": 0.08,
        "unit": "wt%",
        "display": "0.02-0.08"
      },
      "W": {
        "min": 1.45,
        "max": 1.75,
        "unit": "wt%",
        "display": "1.45-1.75"
      },
      "C": {
        "min": 0.04,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.04-0.10"
      },
      "Mn": {
        "min": 0.1,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.10-0.60"
      },
      "Si": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "V": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "B": {
        "min": 0.0005,
        "max": 0.006,
        "unit": "wt%",
        "display": "0.0005-0.006"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "t24",
    "name": "ASTM A213 T24",
    "aliases": [
      "T24 boiler tube"
    ],
    "family": "耐熱鋼",
    "category": "耐熱鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Cr": {
        "min": 2.2,
        "max": 2.6,
        "unit": "wt%",
        "display": "2.20-2.60"
      },
      "Fe": {
        "min": 95.5,
        "max": 95.5,
        "unit": "wt%",
        "display": "約95.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Mo": {
        "min": 0.9,
        "max": 1.1,
        "unit": "wt%",
        "display": "0.90-1.10"
      },
      "C": {
        "min": 0.05,
        "max": 0.1,
        "unit": "wt%",
        "display": "0.05-0.10"
      },
      "Mn": {
        "min": 0.3,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.30-0.70"
      },
      "Si": {
        "min": 0.15,
        "max": 0.45,
        "unit": "wt%",
        "display": "0.15-0.45"
      },
      "V": {
        "min": 0.2,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.20-0.30"
      },
      "B": {
        "min": 0.0015,
        "max": 0.007,
        "unit": "wt%",
        "display": "0.0015-0.007"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Heat-resistant Cr-Mo steel composition reference",
        "url": "https://en.wikipedia.org/wiki/SAE_steel_grades",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "corten-a",
    "name": "COR-TEN A",
    "aliases": [
      "ASTM A242 type weathering steel"
    ],
    "family": "耐候性鋼",
    "category": "耐候性鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Ni": {
        "max": 0.65,
        "unit": "wt%",
        "display": "0.65 max"
      },
      "Cr": {
        "min": 0.5,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.50-1.25"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 0.25,
        "max": 0.75,
        "unit": "wt%",
        "display": "0.25-0.75"
      },
      "Cu": {
        "min": 0.25,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.25-0.55"
      },
      "P": {
        "min": 0.07,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.07-0.15"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Weathering steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Weathering_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "corten-b",
    "name": "COR-TEN B",
    "aliases": [
      "ASTM A588 type weathering steel"
    ],
    "family": "耐候性鋼",
    "category": "耐候性鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Ni": {
        "max": 0.4,
        "unit": "wt%",
        "display": "0.40 max"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.40-0.65"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.16,
        "unit": "wt%",
        "display": "0.16 max"
      },
      "Mn": {
        "min": 0.8,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.80-1.25"
      },
      "Si": {
        "min": 0.3,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.30-0.65"
      },
      "Cu": {
        "min": 0.25,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.25-0.40"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Weathering steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Weathering_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "astm-a588-a",
    "name": "ASTM A588 Grade A",
    "aliases": [
      "A588-A weathering steel"
    ],
    "family": "耐候性鋼",
    "category": "耐候性鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Ni": {
        "max": 0.4,
        "unit": "wt%",
        "display": "0.40 max"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.40-0.65"
      },
      "Fe": {
        "min": 97.3,
        "max": 97.3,
        "unit": "wt%",
        "display": "約97.3",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.19,
        "unit": "wt%",
        "display": "0.19 max"
      },
      "Mn": {
        "min": 0.8,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.80-1.25"
      },
      "Si": {
        "min": 0.3,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.30-0.65"
      },
      "Cu": {
        "min": 0.25,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.25-0.40"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Weathering steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Weathering_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "astm-a588-b",
    "name": "ASTM A588 Grade B",
    "aliases": [
      "A588-B weathering steel"
    ],
    "family": "耐候性鋼",
    "category": "耐候性鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Ni": {
        "max": 0.5,
        "unit": "wt%",
        "display": "0.50 max"
      },
      "Cr": {
        "min": 0.4,
        "max": 0.7,
        "unit": "wt%",
        "display": "0.40-0.70"
      },
      "Fe": {
        "min": 97.4,
        "max": 97.4,
        "unit": "wt%",
        "display": "約97.4",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.2,
        "unit": "wt%",
        "display": "0.20 max"
      },
      "Mn": {
        "min": 0.75,
        "max": 1.35,
        "unit": "wt%",
        "display": "0.75-1.35"
      },
      "Si": {
        "min": 0.15,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.15-0.50"
      },
      "Cu": {
        "min": 0.2,
        "max": 0.4,
        "unit": "wt%",
        "display": "0.20-0.40"
      },
      "P": {
        "max": 0.04,
        "unit": "wt%",
        "display": "0.040 max"
      },
      "S": {
        "max": 0.05,
        "unit": "wt%",
        "display": "0.050 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Weathering steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Weathering_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "spa-h",
    "name": "SPA-H Weathering Steel",
    "aliases": [
      "JIS G3125 SPA-H"
    ],
    "family": "耐候性鋼",
    "category": "耐候性鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Ni": {
        "max": 0.65,
        "unit": "wt%",
        "display": "0.65 max"
      },
      "Cr": {
        "min": 0.3,
        "max": 1.25,
        "unit": "wt%",
        "display": "0.30-1.25"
      },
      "Fe": {
        "min": 97.5,
        "max": 97.5,
        "unit": "wt%",
        "display": "約97.5",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.12,
        "unit": "wt%",
        "display": "0.12 max"
      },
      "Mn": {
        "max": 0.6,
        "unit": "wt%",
        "display": "0.60 max"
      },
      "Si": {
        "min": 0.25,
        "max": 0.75,
        "unit": "wt%",
        "display": "0.25-0.75"
      },
      "Cu": {
        "min": 0.25,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.25-0.55"
      },
      "P": {
        "min": 0.07,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.07-0.15"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Weathering steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Weathering_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sma400aw",
    "name": "SMA400AW Weathering Steel",
    "aliases": [
      "JIS SMA400AW"
    ],
    "family": "耐候性鋼",
    "category": "耐候性鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Ni": {
        "min": 0.05,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.05-0.30"
      },
      "Cr": {
        "min": 0.3,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.30-0.55"
      },
      "Fe": {
        "min": 97.9,
        "max": 97.9,
        "unit": "wt%",
        "display": "約97.9",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.18,
        "unit": "wt%",
        "display": "0.18 max"
      },
      "Mn": {
        "max": 1.25,
        "unit": "wt%",
        "display": "1.25 max"
      },
      "Si": {
        "min": 0.15,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.15-0.65"
      },
      "Cu": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Weathering steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Weathering_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "sma490aw",
    "name": "SMA490AW Weathering Steel",
    "aliases": [
      "JIS SMA490AW"
    ],
    "family": "耐候性鋼",
    "category": "耐候性鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Ni": {
        "min": 0.05,
        "max": 0.3,
        "unit": "wt%",
        "display": "0.05-0.30"
      },
      "Cr": {
        "min": 0.3,
        "max": 0.55,
        "unit": "wt%",
        "display": "0.30-0.55"
      },
      "Fe": {
        "min": 97.8,
        "max": 97.8,
        "unit": "wt%",
        "display": "約97.8",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "C": {
        "max": 0.18,
        "unit": "wt%",
        "display": "0.18 max"
      },
      "Mn": {
        "max": 1.4,
        "unit": "wt%",
        "display": "1.40 max"
      },
      "Si": {
        "min": 0.15,
        "max": 0.65,
        "unit": "wt%",
        "display": "0.15-0.65"
      },
      "Cu": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "P": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      },
      "S": {
        "max": 0.035,
        "unit": "wt%",
        "display": "0.035 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Weathering steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Weathering_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "electrical-m19",
    "name": "M19 Electrical Steel",
    "aliases": [
      "Non-oriented silicon steel M19"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 96.2,
        "max": 96.2,
        "unit": "wt%",
        "display": "約96.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 2.5,
        "max": 3.5,
        "unit": "wt%",
        "display": "2.50-3.50"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "electrical-m27",
    "name": "M27 Electrical Steel",
    "aliases": [
      "Non-oriented silicon steel M27"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 96.6,
        "max": 96.6,
        "unit": "wt%",
        "display": "約96.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 2.0,
        "max": 3.2,
        "unit": "wt%",
        "display": "2.00-3.20"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "electrical-m36",
    "name": "M36 Electrical Steel",
    "aliases": [
      "Non-oriented silicon steel M36"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 97.1,
        "max": 97.1,
        "unit": "wt%",
        "display": "約97.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 1.5,
        "max": 2.7,
        "unit": "wt%",
        "display": "1.50-2.70"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "electrical-50a470",
    "name": "50A470 Electrical Steel",
    "aliases": [
      "JIS 50A470"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 96.6,
        "max": 96.6,
        "unit": "wt%",
        "display": "約96.6",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 2.0,
        "max": 3.2,
        "unit": "wt%",
        "display": "2.00-3.20"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "electrical-50a600",
    "name": "50A600 Electrical Steel",
    "aliases": [
      "JIS 50A600"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 97.1,
        "max": 97.1,
        "unit": "wt%",
        "display": "約97.1",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 1.5,
        "max": 2.7,
        "unit": "wt%",
        "display": "1.50-2.70"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "electrical-35a300",
    "name": "35A300 Electrical Steel",
    "aliases": [
      "JIS 35A300"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 96.2,
        "max": 96.2,
        "unit": "wt%",
        "display": "約96.2",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.2,
        "max": 0.6,
        "unit": "wt%",
        "display": "0.20-0.60"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.2,
        "max": 0.5,
        "unit": "wt%",
        "display": "0.20-0.50"
      },
      "Si": {
        "min": 2.5,
        "max": 3.5,
        "unit": "wt%",
        "display": "2.50-3.50"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "go-m3",
    "name": "M3 Grain-Oriented Electrical Steel",
    "aliases": [
      "GOES M3"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 96.7,
        "max": 96.7,
        "unit": "wt%",
        "display": "約96.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.02,
        "max": 0.05,
        "unit": "wt%",
        "display": "0.02-0.05"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      },
      "Si": {
        "min": 3.0,
        "max": 3.3,
        "unit": "wt%",
        "display": "3.00-3.30"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  },
  {
    "id": "go-m5",
    "name": "M5 Grain-Oriented Electrical Steel",
    "aliases": [
      "GOES M5"
    ],
    "family": "電磁鋼",
    "category": "電磁鋼",
    "usage": "高温配管・屋外構造・モーター鉄心・変圧器",
    "elements": {
      "Fe": {
        "min": 96.7,
        "max": 96.7,
        "unit": "wt%",
        "display": "約96.7",
        "estimated": true,
        "estimateMethod": "balance midpoint estimate from listed major elements"
      },
      "Al": {
        "min": 0.02,
        "max": 0.05,
        "unit": "wt%",
        "display": "0.02-0.05"
      },
      "C": {
        "max": 0.01,
        "unit": "wt%",
        "display": "0.01 max"
      },
      "Mn": {
        "min": 0.05,
        "max": 0.15,
        "unit": "wt%",
        "display": "0.05-0.15"
      },
      "Si": {
        "min": 3.0,
        "max": 3.3,
        "unit": "wt%",
        "display": "3.00-3.30"
      },
      "P": {
        "max": 0.03,
        "unit": "wt%",
        "display": "0.030 max"
      },
      "S": {
        "max": 0.02,
        "unit": "wt%",
        "display": "0.020 max"
      }
    },
    "sources": [
      {
        "type": "reference",
        "company": "Reference data",
        "title": "Electrical steel composition reference",
        "url": "https://en.wikipedia.org/wiki/Electrical_steel",
        "checkedAt": "2026-06-14",
        "notes": "Public steel grade composition reference; Fe balance calculated for search display. Iron balance shown as a reference midpoint estimate from listed major elements."
      }
    ]
  }
];
