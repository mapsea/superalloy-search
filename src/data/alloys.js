import { ELEMENT_COLUMNS, SOURCE_LABELS } from "./constants.js";
import { hastelloyAlloys } from "./alloys/hastelloy.js";
import { haynesAlloys } from "./alloys/haynes.js";
import { inconelAlloys } from "./alloys/inconel.js";
import { nimonicAlloys } from "./alloys/nimonic.js";
import { otherAlloys } from "./alloys/other.js";

export { ELEMENT_COLUMNS, SOURCE_LABELS };

export const alloys = [
  ...inconelAlloys,
  ...hastelloyAlloys,
  ...haynesAlloys,
  ...nimonicAlloys,
  ...otherAlloys
];
