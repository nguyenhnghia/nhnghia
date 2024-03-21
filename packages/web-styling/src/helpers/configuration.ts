import { DESKTOP_BREAK_POINT, TABLET_BREAK_POINT } from "../_configurations/break-points";
import type { Theme, ThemeValue } from "../_configurations/theme";
import { defaultThemeValue, theme } from "../_configurations/theme";
import { mergeObject } from "../_utils/object";
import { RESET_LAYER } from "../templates/a.reset.css";
import { DESKTOP_LAYER, MOBILE_LAYER, TABLET_LAYER } from "../templates/b.responsive-layers.css";
import type { DeepPartial } from "../types/common";

/*================== Break points =================*/
type BreakPointsConfiguration = {
  tablet: string;
  desktop: string;
};
export function getBreakPointsConfiguration(): BreakPointsConfiguration {
  return { tablet: TABLET_BREAK_POINT, desktop: DESKTOP_BREAK_POINT };
}

/*================== Layers =================*/
type LayerConfiguration = {
  reset: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
export function getLayersConfiguration(): LayerConfiguration {
  return { reset: RESET_LAYER, mobile: MOBILE_LAYER, tablet: TABLET_LAYER, desktop: DESKTOP_LAYER };
}

/*================== Theme =================*/
export function overwriteTheme(config: DeepPartial<ThemeValue>): ThemeValue {
  return mergeObject(defaultThemeValue, config);
}

export function getThemeConfiguration(): Theme {
  return theme;
}
