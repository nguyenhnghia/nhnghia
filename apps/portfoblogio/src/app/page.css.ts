import getSolidColor from "@repo/web-styling/utilities/solid-color";
import { style } from "@vanilla-extract/css";

export const main = style({ background: getSolidColor("sky", "400") });
