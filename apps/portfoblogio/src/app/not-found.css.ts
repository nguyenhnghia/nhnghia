import { theme } from "@repo/web-styling/theme";
import { typoThemeValue } from "@repo/web-styling/theme/typography";
import classes from "@repo/web-styling/utilities/classes";

const getClasses = classes();

export const title404 = getClasses({
  color: theme.colors.__solid("red", "500"),
  fontSize: typoThemeValue.huge.fontSize,
  lineHeight: typoThemeValue.huge.lineHeight,
});
