export const haynesAlloys = [
  {
    id: "haynes-188",
    name: "Haynes 188",
    aliases: ["Alloy 188", "UNS R30188"],
    family: "Co-Ni-Cr-W高温合金",
    elements: {
      Co: { kind: "balance", unit: "wt%", display: "Bal." },
      Ni: { min: 20, max: 24, unit: "wt%", display: "20.0-24.0" },
      Cr: { min: 20, max: 24, unit: "wt%", display: "20.0-24.0" },
      W: { min: 13, max: 16, unit: "wt%", display: "13.0-16.0" },
      Fe: { max: 3, unit: "wt%", display: "3.0 max" },
      C: { min: 0.05, max: 0.15, unit: "wt%", display: "0.05-0.15" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Haynes alloy reference",
        url: "https://en.wikipedia.org/wiki/Haynes_International",
        checkedAt: "2026-06-14",
        notes: "Reference composition range; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "haynes-230",
    name: "Haynes 230",
    aliases: ["Alloy 230", "UNS N06230"],
    family: "Ni-Cr-W-Mo高温合金",
    elements: {
      Ni: { min: 47, max: 65, unit: "wt%", display: "47.0-65.0" },
      Cr: { min: 20, max: 24, unit: "wt%", display: "20.0-24.0" },
      W: { min: 13, max: 15, unit: "wt%", display: "13.0-15.0" },
      Mo: { min: 1, max: 3, unit: "wt%", display: "1.0-3.0" },
      Co: { max: 5, unit: "wt%", display: "5.0 max" },
      Al: { min: 0.2, max: 0.5, unit: "wt%", display: "0.2-0.5" },
      C: { min: 0.05, max: 0.15, unit: "wt%", display: "0.05-0.15" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Alloy 230 composition reference",
        url: "https://en.wikipedia.org/wiki/Alloy_230",
        checkedAt: "2026-06-14",
        notes: "Reference composition table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "haynes-282",
    name: "Haynes 282",
    aliases: ["Alloy 282", "UNS N07208"],
    family: "Ni-Cr-Co-Mo析出強化合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18.5, max: 20.5, unit: "wt%", display: "18.5-20.5" },
      Co: { min: 9, max: 11, unit: "wt%", display: "9.0-11.0" },
      Mo: { min: 8, max: 9, unit: "wt%", display: "8.0-9.0" },
      Ti: { min: 1.9, max: 2.3, unit: "wt%", display: "1.9-2.3" },
      Al: { min: 1.38, max: 1.65, unit: "wt%", display: "1.38-1.65" },
      Fe: { max: 1.5, unit: "wt%", display: "1.5 max" },
      C: { min: 0.04, max: 0.08, unit: "wt%", display: "0.04-0.08" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Haynes 282 composition reference",
        url: "https://arxiv.org/abs/2012.10114",
        checkedAt: "2026-06-14",
        notes: "Reference nominal composition from technical literature; official manufacturer data should replace this when confirmed."
      }
    ]
  }
];
