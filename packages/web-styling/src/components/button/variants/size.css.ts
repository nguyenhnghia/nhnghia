import { createVar } from "@vanilla-extract/css";
import { defaultTheme } from "../../../theme";
import type { ButtonStyle, StyleRuleWithoutMediaQueries } from "../../../types";

const spaceThemeValue = defaultTheme.spaces;
const typoThemeValue = defaultTheme.typos;

const sizeVars = {
  height: createVar(),
  space: createVar(),
  fontSize: createVar(),
  contentHeight: createVar(),
};

const sizeVariants: Record<ButtonStyle["variants"]["size"], StyleRuleWithoutMediaQueries> = {
  tiny: {
    vars: {
      [sizeVars.height]: spaceThemeValue.s14,
      [sizeVars.space]: spaceThemeValue.s02,
      [sizeVars.fontSize]: typoThemeValue.tiny.fontSize,
      [sizeVars.contentHeight]: typoThemeValue.tiny.lineHeight,
    },
  },
  small: {
    vars: {
      [sizeVars.height]: spaceThemeValue.s17,
      [sizeVars.space]: spaceThemeValue.s03,
      [sizeVars.fontSize]: typoThemeValue.small.fontSize,
      [sizeVars.contentHeight]: typoThemeValue.small.lineHeight,
    },
  },
  normal: {
    vars: {
      [sizeVars.height]: spaceThemeValue.s21,
      [sizeVars.space]: spaceThemeValue.s04,
      [sizeVars.fontSize]: typoThemeValue.normal.fontSize,
      [sizeVars.contentHeight]: typoThemeValue.normal.lineHeight,
    },
  },
  medium: {
    vars: {
      [sizeVars.height]: spaceThemeValue.s25,
      [sizeVars.space]: spaceThemeValue.s05,
      [sizeVars.fontSize]: typoThemeValue.medium.fontSize,
      [sizeVars.contentHeight]: typoThemeValue.medium.lineHeight,
    },
  },
  large: {
    vars: {
      [sizeVars.height]: spaceThemeValue.s29,
      [sizeVars.space]: spaceThemeValue.s06,
      [sizeVars.fontSize]: typoThemeValue.large.fontSize,
      [sizeVars.contentHeight]: typoThemeValue.large.lineHeight,
    },
  },
  huge: {
    vars: {
      [sizeVars.height]: spaceThemeValue.s30,
      [sizeVars.space]: spaceThemeValue.s06,
      [sizeVars.fontSize]: typoThemeValue.huge.fontSize,
      [sizeVars.contentHeight]: typoThemeValue.huge.lineHeight,
    },
  },
};

export { sizeVariants, sizeVars };
