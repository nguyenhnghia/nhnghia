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
        contentHeight: "content-height",
        space: null,
        fontSize: null,
      },
      small: {
        height: null,
        contentHeight: "content-height",
        space: null,
        fontSize: null,
      },
      normal: {
        height: null,
        contentHeight: "content-height",
        space: null,
        fontSize: null,
      },
      medium: {
        height: null,
        contentHeight: "content-height",
        space: null,
        fontSize: null,
      },
      large: {
        height: null,
        contentHeight: "content-height",
        space: null,
        fontSize: null,
      },
      huge: {
        height: null,
        contentHeight: "content-height",
        space: null,
        fontSize: null,
      },
    },
  },
  generateThemeVar,
);
