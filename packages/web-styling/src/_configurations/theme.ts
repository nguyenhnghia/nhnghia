import type { createGlobalTheme } from "@vanilla-extract/css";
import { createGlobalThemeContract } from "@vanilla-extract/css";
import slugify from "../_utils/slugify";

const generateThemeVar: Parameters<typeof createGlobalThemeContract>[1] = (value, path) => {
  if (value === null) return slugify("button", ...path);
  return slugify("button", ...path.slice(0, -1), value);
};

/*================== Component - Button =================*/
export const buttonTheme = createGlobalThemeContract(
  {
    size: {
      tiny: {
        height: null,
        space: null,
        fontSize: null,
        contentHeight: "content-height",
      },
      small: {
        height: null,
        space: null,
        fontSize: null,
        contentHeight: "content-height",
      },
      normal: {
        height: null,
        space: null,
        fontSize: null,
        contentHeight: "content-height",
      },
      medium: {
        height: null,
        space: null,
        fontSize: null,
        contentHeight: "content-height",
      },
      large: {
        height: null,
        space: null,
        fontSize: null,
        contentHeight: "content-height",
      },
      huge: {
        height: null,
        space: null,
        fontSize: null,
        contentHeight: "content-height",
      },
    },
  },
  generateThemeVar,
);

export const defaultButtonThemeValue: ButtonThemeValue = {
  size: {
    tiny: {
      height: "28px",
      space: "4px",
      fontSize: "14px",
      contentHeight: "18px",
    },
    small: {
      height: "34px",
      space: "6px",
      fontSize: "16px",
      contentHeight: "20px",
    },
    normal: {
      height: "40px",
      space: "8px",
      fontSize: "18px",
      contentHeight: "22px",
    },
    medium: {
      height: "48px",
      space: "10px",
      fontSize: "22px",
      contentHeight: "26px",
    },
    large: {
      height: "54px",
      space: "12px",
      fontSize: "24px",
      contentHeight: "28px",
    },
    huge: {
      height: "60px",
      space: "14px",
      fontSize: "26px",
      contentHeight: "30px",
    },
  },
};

export type ButtonTheme = typeof buttonTheme;
export type ButtonThemeValue = Parameters<typeof createGlobalTheme<ButtonTheme>>[2];
/*================== All Theme =================*/

export const theme = {
  component: {
    button: buttonTheme,
  },
};

export const defaultThemeValue = {
  component: {
    button: defaultButtonThemeValue,
  },
};

export type Theme = typeof theme;
export type ThemeValue = typeof defaultThemeValue;
