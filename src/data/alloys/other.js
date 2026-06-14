export const otherAlloys = [
  {
    id: "waspaloy",
    name: "Waspaloy",
    aliases: ["UNS N07001"],
    family: "Ni基スーパーアロイ",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18, max: 21, unit: "wt%", display: "18.0-21.0" },
      Co: { min: 12, max: 15, unit: "wt%", display: "12.0-15.0" },
      Mo: { min: 3.5, max: 5, unit: "wt%", display: "3.5-5.0" },
      Ti: { min: 2.75, max: 3.25, unit: "wt%", display: "2.75-3.25" },
      Al: { min: 1.2, max: 1.6, unit: "wt%", display: "1.2-1.6" },
      Fe: { max: 2, unit: "wt%", display: "2.0 max" },
      C: { min: 0.02, max: 0.1, unit: "wt%", display: "0.02-0.10" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Common Waspaloy composition range",
        url: "https://en.wikipedia.org/wiki/Waspaloy",
        checkedAt: "2026-06-13",
        notes: "Use as reference seed until current official source is confirmed."
      }
    ]
  }
];
