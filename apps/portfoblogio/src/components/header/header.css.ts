import { colorThemeValue } from "@repo/web-styling/theme/colors";
import { typoThemeValue } from "@repo/web-styling/theme/typography";
import { style } from "@vanilla-extract/css";

export const test = style({
  background: colorThemeValue.__solid("amber", "500"),
  color: "#fafafa",
  fontSize: typoThemeValue.tiny.fontSize,
});
