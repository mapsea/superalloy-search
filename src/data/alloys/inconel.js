export const inconelAlloys = [
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
        checkedAt: "2026-06-13",
        notes: "Table 1 limiting chemical composition."
      }
    ]
  },
  {
    id: "inconel-625",
    name: "Inconel 625",
    aliases: ["Alloy 625", "UNS N06625"],
    family: "Ni基耐食耐熱合金",
    elements: {
      Ni: { min: 58, unit: "wt%", display: "58.0 min" },
      Cr: { min: 20, max: 23, unit: "wt%", display: "20.0-23.0" },
      Mo: { min: 8, max: 10, unit: "wt%", display: "8.0-10.0" },
      Nb: { min: 3.15, max: 4.15, unit: "wt%", display: "3.15-4.15", includes: "Ta" },
      Fe: { max: 5, unit: "wt%", display: "5.0 max" },
      Co: { max: 1, unit: "wt%", display: "1.0 max" },
      C: { max: 0.1, unit: "wt%", display: "0.10 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Common Alloy 625 composition range",
        url: "https://en.wikipedia.org/wiki/Inconel",
        checkedAt: "2026-06-13",
        notes: "Use as reference seed until a current official manufacturer PDF is confirmed."
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
        type: "reference",
        company: "Reference data",
        title: "Common Alloy X-750 composition range",
        url: "https://en.wikipedia.org/wiki/Inconel",
        checkedAt: "2026-06-13",
        notes: "Use as reference seed until an official manufacturer PDF is confirmed."
      }
    ]
  }
];
