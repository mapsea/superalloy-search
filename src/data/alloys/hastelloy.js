export const hastelloyAlloys = [
  {
    id: "hastelloy-b-2",
    name: "Hastelloy B-2",
    aliases: ["Alloy B-2", "UNS N10665"],
    family: "Ni-Mo耐食合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Mo: { min: 26, max: 30, unit: "wt%", display: "26.0-30.0" },
      Fe: { max: 2, unit: "wt%", display: "2.0 max" },
      Co: { max: 1, unit: "wt%", display: "1.0 max" },
      Cr: { max: 1, unit: "wt%", display: "1.0 max" },
      C: { max: 0.01, unit: "wt%", display: "0.01 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Hastelloy composition reference",
        url: "https://fr.wikipedia.org/wiki/Hastelloy",
        checkedAt: "2026-06-14",
        notes: "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "hastelloy-c-22",
    name: "Hastelloy C-22",
    aliases: ["Alloy C-22", "UNS N06022"],
    family: "Ni-Cr-Mo-W耐食合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 20, max: 22.5, unit: "wt%", display: "20.0-22.5" },
      Mo: { min: 12.5, max: 14.5, unit: "wt%", display: "12.5-14.5" },
      W: { min: 2.5, max: 3.5, unit: "wt%", display: "2.5-3.5" },
      Fe: { min: 2, max: 6, unit: "wt%", display: "2.0-6.0" },
      Co: { max: 2.5, unit: "wt%", display: "2.5 max" },
      C: { max: 0.01, unit: "wt%", display: "0.01 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Hastelloy composition reference",
        url: "https://fr.wikipedia.org/wiki/Hastelloy",
        checkedAt: "2026-06-14",
        notes: "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "hastelloy-c-276",
    name: "Hastelloy C-276",
    aliases: ["Alloy C-276", "UNS N10276", "2.4819"],
    family: "Ni-Cr-Mo-W耐食合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 14.5, max: 16.5, unit: "wt%", display: "14.5-16.5" },
      Mo: { min: 15, max: 17, unit: "wt%", display: "15.0-17.0" },
      W: { min: 3, max: 4.5, unit: "wt%", display: "3.0-4.5" },
      Fe: { min: 4, max: 7, unit: "wt%", display: "4.0-7.0" },
      Co: { max: 2.5, unit: "wt%", display: "2.5 max" },
      C: { max: 0.01, unit: "wt%", display: "0.01 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Hastelloy composition reference",
        url: "https://fr.wikipedia.org/wiki/Hastelloy",
        checkedAt: "2026-06-14",
        notes: "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  }
];
