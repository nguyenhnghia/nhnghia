import { colorThemeValue } from "@repo/web-styling/theme/colors";
import classes from "@repo/web-styling/utilities/classes";

const getClasses = classes();

export const main = getClasses({ background: colorThemeValue.__solid("sky", "400") });
