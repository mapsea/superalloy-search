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
        title: "Waspaloy composition reference",
        url: "https://en.wikipedia.org/wiki/Waspaloy",
        checkedAt: "2026-06-14",
        notes: "Reference chemistry table; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "udimet-500",
    name: "Udimet 500",
    aliases: ["Udimet alloy 500"],
    family: "Ni-Co-Cr-Mo析出強化合金",
    elements: {
      Ni: { min: 53, max: 55, unit: "wt%", display: "53.0-55.0" },
      Cr: { min: 17, max: 19, unit: "wt%", display: "17.0-19.0" },
      Co: { min: 17, max: 19, unit: "wt%", display: "17.0-19.0" },
      Mo: { min: 3.5, max: 4.5, unit: "wt%", display: "3.5-4.5" },
      Ti: { min: 2.6, max: 3.2, unit: "wt%", display: "2.6-3.2" },
      Al: { min: 2.6, max: 3.2, unit: "wt%", display: "2.6-3.2" },
      C: { max: 0.12, unit: "wt%", display: "0.12 max" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Typical nickel-base superalloy compositions",
        url: "https://es.wikipedia.org/wiki/Superaleaci%C3%B3n",
        checkedAt: "2026-06-14",
        notes: "Reference nominal composition; official manufacturer data should replace this when confirmed."
      }
    ]
  },
  {
    id: "udimet-520",
    name: "Udimet 520",
    aliases: ["Udimet alloy 520"],
    family: "Ni-Co-Cr-Mo析出強化合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18, max: 20, unit: "wt%", display: "18.0-20.0" },
      Co: { min: 11, max: 13, unit: "wt%", display: "11.0-13.0" },
      Mo: { min: 5.5, max: 6.5, unit: "wt%", display: "5.5-6.5" },
      W: { min: 0.8, max: 1.2, unit: "wt%", display: "0.8-1.2" },
      Ti: { min: 2.8, max: 3.4, unit: "wt%", display: "2.8-3.4" },
      Al: { min: 1.7, max: 2.3, unit: "wt%", display: "1.7-2.3" },
      C: { max: 0.08, unit: "wt%", display: "0.08 max" }
    },
    sources: [
      {
        type: "unverified",
        company: "Unverified reference data",
        title: "Udimet 520 composition placeholder",
        url: "https://en.wikipedia.org/wiki/Superalloy",
        checkedAt: "2026-06-14",
        notes: "Placeholder range from common secondary references; needs replacement with a verified producer or standards source."
      }
    ]
  },
  {
    id: "rene-41",
    name: "Rene 41",
    aliases: ["René 41", "UNS N07041"],
    family: "Ni-Cr-Co-Mo高強度合金",
    elements: {
      Ni: { kind: "balance", unit: "wt%", display: "Bal." },
      Cr: { min: 18, max: 20, unit: "wt%", display: "18.0-20.0" },
      Co: { min: 10, max: 12, unit: "wt%", display: "10.0-12.0" },
      Mo: { min: 9, max: 10.5, unit: "wt%", display: "9.0-10.5" },
      Ti: { min: 3, max: 3.3, unit: "wt%", display: "3.0-3.3" },
      Al: { min: 1.4, max: 1.8, unit: "wt%", display: "1.4-1.8" },
      Fe: { max: 5, unit: "wt%", display: "5.0 max" },
      C: { min: 0.06, max: 0.12, unit: "wt%", display: "0.06-0.12" }
    },
    sources: [
      {
        type: "reference",
        company: "Reference data",
        title: "Rene 41 composition reference",
        url: "https://en.wikipedia.org/wiki/Ren%C3%A9_41",
        checkedAt: "2026-06-14",
        notes: "Reference chemistry table; official manufacturer data should replace this when confirmed."
      }
    ]
  }
];
