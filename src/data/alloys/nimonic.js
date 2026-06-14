export const nimonicAlloys = [
  {
    id: "nimonic-75",
    name: "Nimonic 75",
    aliases: ["Alloy 75", "UNS N06075"],
    family: "Ni-Cr耐熱合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18, max: 21, unit: "wt%", display: "18.0-21.0" },
      Fe: { max: 5, unit: "wt%", display: "5.0 max" },
      Ti: { min: 0.2, max: 0.6, unit: "wt%", display: "0.2-0.6" },
      C: { min: 0.08, max: 0.15, unit: "wt%", display: "0.08-0.15" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Nimonic composition reference",
        url: "https://it.wikipedia.org/wiki/Nimonic",
        checkedAt: "2026-06-14",
        notes: "Reference composition table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "nimonic-80a",
    name: "Nimonic 80A",
    aliases: ["Alloy 80A", "UNS N07080", "2.4952"],
    family: "Ni-Cr析出強化合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18, max: 21, unit: "wt%", display: "18.0-21.0" },
      Co: { max: 2, unit: "wt%", display: "2.0 max" },
      Fe: { max: 3, unit: "wt%", display: "3.0 max" },
      Ti: { min: 1.8, max: 2.7, unit: "wt%", display: "1.8-2.7" },
      Al: { min: 1, max: 1.8, unit: "wt%", display: "1.0-1.8" },
      C: { max: 0.1, unit: "wt%", display: "0.10 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Nimonic composition reference",
        url: "https://it.wikipedia.org/wiki/Nimonic",
        checkedAt: "2026-06-14",
        notes: "Reference composition table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "nimonic-90",
    name: "Nimonic 90",
    aliases: ["Alloy 90", "UNS N07090", "2.4632"],
    family: "Ni-Cr-Co析出強化合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18, max: 21, unit: "wt%", display: "18.0-21.0" },
      Co: { min: 15, max: 21, unit: "wt%", display: "15.0-21.0" },
      Ti: { min: 2, max: 3, unit: "wt%", display: "2.0-3.0" },
      Al: { min: 1, max: 2, unit: "wt%", display: "1.0-2.0" },
      C: { max: 0.13, unit: "wt%", display: "0.13 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Nimonic composition reference",
        url: "https://fr.wikipedia.org/wiki/Nimonic",
        checkedAt: "2026-06-14",
        notes: "Reference composition description; official manufacturer data should replace this when confirmed."
      }
    ]
  }
];
