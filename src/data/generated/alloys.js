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
  }
];
