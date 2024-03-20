import { createVar, fallbackVar } from "@vanilla-extract/css";
import { buttonTheme } from "../../../_configurations/themes";
import type { ButtonVariants } from "../../../types/configurations";
import type { StyleRuleWithoutMediaQueries } from "../../../types/web-styling";

const sizeThemeVars = buttonTheme.size;

const sizeVars = {
  height: createVar(),
  contentHeight: createVar(),
  space: createVar(),
  fontSize: createVar(),
};

const sizeVariants: Record<ButtonVariants["size"], StyleRuleWithoutMediaQueries> = {
  tiny: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.tiny.height, "28px"),
      [sizeVars.space]: fallbackVar(sizeThemeVars.tiny.space, "4px"),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.tiny.fontSize, "14px"),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.tiny.contentHeight, "18px"),
    },
  },
  small: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.small.height, "34px"),
      [sizeVars.space]: fallbackVar(sizeThemeVars.small.space, "6px"),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.small.fontSize, "16px"),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.small.contentHeight, "20px"),
    },
  },
  normal: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.normal.height, "40px"),
      [sizeVars.space]: fallbackVar(sizeThemeVars.normal.space, "8px"),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.normal.fontSize, "18px"),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.normal.contentHeight, "22px"),
    },
  },
  medium: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.medium.height, "48px"),
      [sizeVars.space]: fallbackVar(sizeThemeVars.medium.space, "10px"),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.medium.fontSize, "22px"),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.medium.contentHeight, "26px"),
    },
  },
  large: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.large.height, "54px"),
      [sizeVars.space]: fallbackVar(sizeThemeVars.large.space, "12px"),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.large.fontSize, "24px"),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.large.contentHeight, "28px"),
    },
  },
  huge: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.huge.height, "60px"),
      [sizeVars.space]: fallbackVar(sizeThemeVars.huge.space, "14px"),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.huge.fontSize, "26px"),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.huge.contentHeight, "30px"),
    },
  },
};

export { sizeVariants, sizeVars };
