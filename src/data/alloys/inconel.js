export const inconelAlloys = [
  {
    id: "inconel-600",
    name: "Inconel 600",
    aliases: ["Alloy 600", "UNS N06600", "2.4816"],
    family: "Ni-Cr-Fe耐熱耐食合金",
    elements: {
      Ni: { min: 72, unit: "wt%", display: "72.0 min", includes: "Co" },
      Cr: { min: 14, max: 17, unit: "wt%", display: "14.0-17.0" },
      Fe: { min: 6, max: 10, unit: "wt%", display: "6.0-10.0" },
      C: { max: 0.15, unit: "wt%", display: "0.15 max" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy 600 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-600.pdf",
        checkedAt: "2026-06-14",
        notes: "Limiting chemical composition table."
      }
    ]
  },
  {
    id: "inconel-601",
    name: "Inconel 601",
    aliases: ["Alloy 601", "UNS N06601", "2.4851"],
    family: "Ni-Cr-Fe耐酸化合金",
    elements: {
      Ni: { min: 58, max: 63, unit: "wt%", display: "58.0-63.0" },
      Cr: { min: 21, max: 25, unit: "wt%", display: "21.0-25.0" },
      Fe: { kind: "balance", unit: "wt%", display: "Bal." },
      Al: { min: 1, max: 1.7, unit: "wt%", display: "1.0-1.7" },
      C: { max: 0.1, unit: "wt%", display: "0.10 max" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy 601 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-601.pdf",
        checkedAt: "2026-06-14",
        notes: "Limiting chemical composition table."
      }
    ]
  },
  {
    id: "inconel-617",
    name: "Inconel 617",
    aliases: ["Alloy 617", "UNS N06617", "2.4663"],
    family: "Ni-Cr-Co-Mo高温合金",
    elements: {
      Ni: { min: 44.5, unit: "wt%", display: "44.5 min" },
      Cr: { min: 20, max: 24, unit: "wt%", display: "20.0-24.0" },
      Co: { min: 10, max: 15, unit: "wt%", display: "10.0-15.0" },
      Mo: { min: 8, max: 10, unit: "wt%", display: "8.0-10.0" },
      Al: { min: 0.8, max: 1.5, unit: "wt%", display: "0.8-1.5" },
      Fe: { max: 3, unit: "wt%", display: "3.0 max" },
      Ti: { max: 0.6, unit: "wt%", display: "0.6 max" },
      C: { min: 0.05, max: 0.15, unit: "wt%", display: "0.05-0.15" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy 617 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-617.pdf",
        checkedAt: "2026-06-14",
        notes: "Limiting chemical composition table."
      }
    ]
  },
  {
    id: "inconel-625",
    name: "Inconel 625",
    aliases: ["Alloy 625", "UNS N06625", "2.4856"],
    family: "Ni基耐食耐熱合金",
    elements: {
      Ni: { min: 58, unit: "wt%", display: "58.0 min" },
      Cr: { min: 20, max: 23, unit: "wt%", display: "20.0-23.0" },
      Mo: { min: 8, max: 10, unit: "wt%", display: "8.0-10.0" },
      Nb: { min: 3.15, max: 4.15, unit: "wt%", display: "3.15-4.15", includes: "Ta" },
      Fe: { max: 5, unit: "wt%", display: "5.0 max" },
      Co: { max: 1, unit: "wt%", display: "1.0 max" },
      Ti: { max: 0.4, unit: "wt%", display: "0.40 max" },
      Al: { max: 0.4, unit: "wt%", display: "0.40 max" },
      C: { max: 0.1, unit: "wt%", display: "0.10 max" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy 625 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-625.pdf",
        checkedAt: "2026-06-14",
        notes: "Limiting chemical composition table."
      }
    ]
  },
  {
    id: "inconel-690",
    name: "Inconel 690",
    aliases: ["Alloy 690", "UNS N06690"],
    family: "高Cr Ni基耐食合金",
    elements: {
      Ni: { min: 58, unit: "wt%", display: "58.0 min" },
      Cr: { min: 27, max: 31, unit: "wt%", display: "27.0-31.0" },
      Fe: { min: 7, max: 11, unit: "wt%", display: "7.0-11.0" },
      C: { max: 0.05, unit: "wt%", display: "0.05 max" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy 690 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-690.pdf",
        checkedAt: "2026-06-14",
        notes: "Limiting chemical composition table."
      }
    ]
  },
  {
    id: "inconel-718",
    name: "Inconel 718",
    aliases: ["Alloy 718", "UNS N07718", "2.4668"],
    family: "Ni基スーパーアロイ",
    elements: {
      Ni: { min: 50, max: 55, unit: "wt%", display: "50.00-55.00" },
      Cr: { min: 17, max: 21, unit: "wt%", display: "17.00-21.00" },
      Fe: { kind: "balance", unit: "wt%", display: "Bal." },
      Nb: { min: 4.75, max: 5.5, unit: "wt%", display: "4.75-5.50", includes: "Ta" },
      Mo: { min: 2.8, max: 3.3, unit: "wt%", display: "2.80-3.30" },
      Ti: { min: 0.65, max: 1.15, unit: "wt%", display: "0.65-1.15" },
      Al: { min: 0.2, max: 0.8, unit: "wt%", display: "0.20-0.80" },
      Co: { max: 1, unit: "wt%", display: "1.00 max" },
      C: { max: 0.08, unit: "wt%", display: "0.08 max" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy 718 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-718.pdf",
        checkedAt: "2026-06-14",
        notes: "Table 1 limiting chemical composition."
      }
    ]
  },
  {
    id: "inconel-x-750",
    name: "Inconel X-750",
    aliases: ["Alloy X-750", "UNS N07750"],
    family: "Ni基析出強化合金",
    elements: {
      Ni: { min: 70, unit: "wt%", display: "70.0 min" },
      Cr: { min: 14, max: 17, unit: "wt%", display: "14.0-17.0" },
      Fe: { min: 5, max: 9, unit: "wt%", display: "5.0-9.0" },
      Nb: { min: 0.7, max: 1.2, unit: "wt%", display: "0.70-1.20", includes: "Ta" },
      Ti: { min: 2.25, max: 2.75, unit: "wt%", display: "2.25-2.75" },
      Al: { min: 0.4, max: 1, unit: "wt%", display: "0.40-1.00" },
      C: { max: 0.08, unit: "wt%", display: "0.08 max" }
    },
    sources: [
      {
        type: "official",
        company: "Special Metals",
        title: "INCONEL alloy X-750 technical bulletin",
        url: "https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-x-750.pdf",
        checkedAt: "2026-06-14",
        notes: "Limiting chemical composition table."
      }
    ]
  }
];
