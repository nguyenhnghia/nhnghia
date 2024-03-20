import { DESKTOP_BREAK_POINT, TABLET_BREAK_POINT } from "../_configurations/break-points";
import { buttonTheme } from "../_configurations/themes";
import { RESET_LAYER } from "../templates/a.reset.css";
import { DESKTOP_LAYER, MOBILE_LAYER, TABLET_LAYER } from "../templates/b.responsive-layers.css";

type BreakPointsConfiguration = {
  tablet: string;
  desktop: string;
};
export function getBreakPointsConfiguration(): BreakPointsConfiguration {
  return { tablet: TABLET_BREAK_POINT, desktop: DESKTOP_BREAK_POINT };
}

type LayerConfiguration = {
  reset: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
export function getLayersConfiguration(): LayerConfiguration {
  return { reset: RESET_LAYER, mobile: MOBILE_LAYER, tablet: TABLET_LAYER, desktop: DESKTOP_LAYER };
}

type ThemeConfiguration = {
  components: {
    button: typeof buttonTheme;
  };
};
export function getThemeConfiguration(): ThemeConfiguration {
  return {
    components: {
      button: buttonTheme,
    },
  };
}
