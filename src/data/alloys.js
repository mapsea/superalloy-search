import { ELEMENT_COLUMNS, SOURCE_LABELS } from "./constants.js";
import { inconelAlloys } from "./alloys/inconel.js";
import { otherAlloys } from "./alloys/other.js";

export { ELEMENT_COLUMNS, SOURCE_LABELS };

export const alloys = [
  ...inconelAlloys,
  ...otherAlloys
];
