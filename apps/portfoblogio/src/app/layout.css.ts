import getSolidColor from "@repo/web-styling/utilities/solid-color";
import { style } from "@vanilla-extract/css";

export const header = style({
  background: getSolidColor("neutral", "400"),
});

export const footer = style({
  background: getSolidColor("neutral", "400"),
});
