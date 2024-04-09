import { colorThemeValue } from "@repo/web-styling/theme/colors";
import classes from "@repo/web-styling/utilities/classes";

const getClasses = classes();

export const header = getClasses({
  background: colorThemeValue.__solid("neutral", "400"),
});

export const footer = getClasses({
  background: colorThemeValue.__solid("neutral", "400"),
});
