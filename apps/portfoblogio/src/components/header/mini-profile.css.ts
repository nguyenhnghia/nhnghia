import buttonStyles from "@repo/web-styling/components/button";
import { colorThemeValue } from "@repo/web-styling/theme/colors";
import { typoThemeValue } from "@repo/web-styling/theme/typography";
import { style } from "@vanilla-extract/css";
import { clsx } from "clsx";

const getButtonClasses = buttonStyles();

export const button = style({
  background: colorThemeValue.__solid("amber", "500"),
  color: "#fafafa",
  fontSize: typoThemeValue.huge.fontSize,
});

export const buttonExtra = getButtonClasses(["root", "icon"], { size: "huge" });

export const buttonExtra2 = getButtonClasses(["root", "icon"], { size: "tiny" });

export const buttonExtra3 = clsx(
  style({
    vars: { "--color-red-500": "red" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "fit-content",
    border: "1px solid currentcolor",
  }),
);

export const buttonExtra4 = clsx(
  style({
    vars: { "--color-red-500": "red" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "fit-content",
    border: "1px solid currentcolor",
  }),
);
