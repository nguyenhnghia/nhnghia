import { theme } from "@repo/web-styling/theme";
import classes from "@repo/web-styling/utilities/classes";

const getClasses = classes();

export const main = getClasses({ background: theme.colors.__solid("sky", "400") });
