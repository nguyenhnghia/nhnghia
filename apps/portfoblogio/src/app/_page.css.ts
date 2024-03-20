import { getThemeConfiguration } from "@repo/web-styling/helpers";
import classes from "@repo/web-styling/utilities/classes";
import { createGlobalTheme } from "@vanilla-extract/css";
import { DESKTOP_BREAK_POINT } from "@utils/break-points";

const getClasses = classes({ utilization: { selector: true } });

const buttonTheme = getThemeConfiguration().components.button;

createGlobalTheme(":root", buttonTheme, {
  size: {
    tiny: {
      height: "100px",
      contentHeight: "100px",
      space: "100px",
      fontSize: "100px",
    },
    small: {
      height: "100px",
      contentHeight: "100px",
      space: "100px",
      fontSize: "100px",
    },
    normal: {
      height: "100px",
      contentHeight: "100px",
      space: "100px",
      fontSize: "100px",
    },
    medium: {
      height: "100px",
      contentHeight: "100px",
      space: "100px",
      fontSize: "100px",
    },
    large: {
      height: "100px",
      contentHeight: "100px",
      space: "100px",
      fontSize: "100px",
    },
    huge: {
      height: "100px",
      contentHeight: "100px",
      space: "100px",
      fontSize: "100px",
    },
  },
});

export const test = getClasses({
  background: "red",
  color: "green",
  padding: 20,
  selectors: {
    "&:hover": {
      background: "green",
      width: "var(--height)",
      color: "red",
      textDecoration: "underline",
      "@media": {
        [DESKTOP_BREAK_POINT]: {
          background: "black",
        },
      },
    },
    "main > &": {
      background: "purple",
      color: "white",
      textDecoration: "line-through",
    },
  },
});
