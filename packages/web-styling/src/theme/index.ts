import { mergeObject } from "../_utils/object";
import type { DeepPartial } from "../types";
import { colorTheme, colorThemeValue, getSolidColor } from "./colors";
import { spaceTheme, spaceThemeValue } from "./spaces";
import { typoTheme, typoThemeValue } from "./typography";

export const theme = {
  colors: { ...colorTheme, __solid: getSolidColor },
  spaces: spaceTheme,
  typos: typoTheme,
};

export const defaultTheme = {
  colors: colorThemeValue,
  spaces: spaceThemeValue,
  typos: typoThemeValue,
};

export type Theme = typeof theme;
export type ThemeValue = typeof defaultTheme;

export function overwriteTheme(config: DeepPartial<ThemeValue>): ThemeValue {
  return mergeObject(defaultTheme, config);
}
