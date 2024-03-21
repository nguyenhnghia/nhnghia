import { createVar, fallbackVar } from "@vanilla-extract/css";
import { buttonTheme, defaultButtonThemeValue } from "../../../_configurations/theme";
import type { ButtonVariants } from "../../../types/configurations";
import type { StyleRuleWithoutMediaQueries } from "../../../types/web-styling";

const sizeThemeVars = buttonTheme.size;

const defaultSizeThemeValue = defaultButtonThemeValue.size;

const sizeVars = {
  height: createVar(),
  contentHeight: createVar(),
  space: createVar(),
  fontSize: createVar(),
};

const sizeVariants: Record<ButtonVariants["size"], StyleRuleWithoutMediaQueries> = {
  tiny: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.tiny.height, defaultSizeThemeValue.tiny.height),
      [sizeVars.space]: fallbackVar(sizeThemeVars.tiny.space, defaultSizeThemeValue.tiny.space),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.tiny.fontSize, defaultSizeThemeValue.tiny.fontSize),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.tiny.contentHeight, defaultSizeThemeValue.tiny.contentHeight),
    },
  },
  small: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.small.height, defaultSizeThemeValue.small.height),
      [sizeVars.space]: fallbackVar(sizeThemeVars.small.space, defaultSizeThemeValue.small.space),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.small.fontSize, defaultSizeThemeValue.small.fontSize),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.small.contentHeight, defaultSizeThemeValue.small.contentHeight),
    },
  },
  normal: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.normal.height, defaultSizeThemeValue.normal.height),
      [sizeVars.space]: fallbackVar(sizeThemeVars.normal.space, defaultSizeThemeValue.normal.space),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.normal.fontSize, defaultSizeThemeValue.normal.fontSize),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.normal.contentHeight, defaultSizeThemeValue.normal.contentHeight),
    },
  },
  medium: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.medium.height, defaultSizeThemeValue.medium.height),
      [sizeVars.space]: fallbackVar(sizeThemeVars.medium.space, defaultSizeThemeValue.medium.space),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.medium.fontSize, defaultSizeThemeValue.medium.fontSize),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.medium.contentHeight, defaultSizeThemeValue.medium.contentHeight),
    },
  },
  large: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.large.height, defaultSizeThemeValue.large.height),
      [sizeVars.space]: fallbackVar(sizeThemeVars.large.space, defaultSizeThemeValue.large.space),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.large.fontSize, defaultSizeThemeValue.large.fontSize),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.large.contentHeight, defaultSizeThemeValue.large.contentHeight),
    },
  },
  huge: {
    vars: {
      [sizeVars.height]: fallbackVar(sizeThemeVars.huge.height, defaultSizeThemeValue.huge.height),
      [sizeVars.space]: fallbackVar(sizeThemeVars.huge.space, defaultSizeThemeValue.huge.space),
      [sizeVars.fontSize]: fallbackVar(sizeThemeVars.huge.fontSize, defaultSizeThemeValue.huge.fontSize),
      [sizeVars.contentHeight]: fallbackVar(sizeThemeVars.huge.contentHeight, defaultSizeThemeValue.huge.contentHeight),
    },
  },
};

export { sizeVariants, sizeVars };
