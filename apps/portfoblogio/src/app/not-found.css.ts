import { colorThemeValue } from "@repo/web-styling/theme/colors";
import { typoThemeValue } from "@repo/web-styling/theme/typography";
import classes from "@repo/web-styling/utilities/classes";

const getClasses = classes();

export const title404 = getClasses({
  color: colorThemeValue.__solid("red", "500"),
  fontSize: typoThemeValue.huge.fontSize,
  lineHeight: typoThemeValue.huge.lineHeight,
});
