import { typoThemeValue } from "@repo/web-styling/theme/typography";
import getSolidColor from "@repo/web-styling/utilities/solid-color";
import { style } from "@vanilla-extract/css";

export const title404 = style({
  color: getSolidColor("red", "500"),
  fontSize: typoThemeValue.huge.fontSize,
  lineHeight: typoThemeValue.huge.lineHeight,
});
