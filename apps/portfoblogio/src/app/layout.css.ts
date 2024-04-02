import { theme } from "@repo/web-styling/theme";
import classes from "@repo/web-styling/utilities/classes";

const getClasses = classes();

export const header = getClasses({
  background: theme.colors.__solid("neutral", "400"),
});

export const footer = getClasses({
  background: theme.colors.__solid("neutral", "400"),
});
