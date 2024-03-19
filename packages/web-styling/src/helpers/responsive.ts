import { type StyleRule } from "@vanilla-extract/css";
import { DESKTOP_BREAK_POINT, TABLET_BREAK_POINT } from "../_configurations/break-points";
import { DESKTOP_LAYER, MOBILE_LAYER, TABLET_LAYER } from "../templates/b.responsive-layers.css";
import type { ResponsiveRuleBuilderConfig, ScreenRuleBuilderConfig } from "../types/web-styling";

type StyleRuleWithoutMediaQueries = Omit<StyleRule, "@media">;

function getMobileRuleBuilder(config?: Pick<ScreenRuleBuilderConfig, "layer">) {
  return function mobile(rule: StyleRuleWithoutMediaQueries = {}): StyleRule {
    return { "@layer": { [config?.layer || MOBILE_LAYER]: rule } };
  };
}

function getTabletRuleBuilder(config?: ScreenRuleBuilderConfig) {
  return function tablet(rule: StyleRuleWithoutMediaQueries = {}): StyleRule {
    return {
      "@layer": {
        [config?.layer || TABLET_LAYER]: {
          "@media": {
            [config?.breakPoints || TABLET_BREAK_POINT]: rule,
          },
        },
      },
    };
  };
}

function getDesktopRuleBuilder(config?: ScreenRuleBuilderConfig) {
  return function desktop(rule: StyleRuleWithoutMediaQueries = {}): StyleRule {
    return {
      "@layer": {
        [config?.layer || DESKTOP_LAYER]: {
          "@media": {
            [config?.breakPoints || DESKTOP_BREAK_POINT]: rule,
          },
        },
      },
    };
  };
}

type ResponsiveConfig = {
  mobile?: Parameters<ReturnType<typeof getMobileRuleBuilder>>;
  tablet?: Parameters<ReturnType<typeof getTabletRuleBuilder>>;
  desktop?: Parameters<ReturnType<typeof getDesktopRuleBuilder>>;
};

function getResponsiveRuleBuilder(config: ResponsiveRuleBuilderConfig): (responsiveConfig: ResponsiveConfig) => StyleRule {
  const mobile = getMobileRuleBuilder(config.mobile);
  const tablet = getTabletRuleBuilder(config.tablet);
  const desktop = getDesktopRuleBuilder(config.desktop);

  return function responsive(responsiveConfig) {
    const { mobile: mb = [], tablet: tl = [], desktop: dt = [] } = responsiveConfig;
    return { ...mobile(...mb), ...tablet(...tl), ...desktop(...dt) };
  };
}

export { getDesktopRuleBuilder, getMobileRuleBuilder, getTabletRuleBuilder };
export default getResponsiveRuleBuilder;
