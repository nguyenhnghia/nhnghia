import { theme } from "@repo/web-styling/theme";
import classes from "@repo/web-styling/utilities/classes";
import { style } from "@vanilla-extract/css";

const getClasses = classes();

export const button = getClasses({ background: theme.colors.__solid("amber", "500") });

export const test = style({ background: theme.colors.__solid("red", "500") });
