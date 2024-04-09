import { type StyleRule } from "@vanilla-extract/css";
import { DESKTOP_BREAK_POINT, TABLET_BREAK_POINT } from "../configurations/break-points";
import type { ResponsiveRuleBuilderConfig, ScreenRuleBuilderConfig } from "../types";

export type StyleRuleWithoutMediaQueries = Omit<StyleRule, "@media">;

export function getMobileRuleBuilder(config?: ScreenRuleBuilderConfig) {
  return function mobile(rule: StyleRuleWithoutMediaQueries = {}): StyleRule {
    if (!config?.breakPoints) return rule;
    return {
      "@media": {
        [config.breakPoints]: rule,
      },
    };
  };
}

export function getTabletRuleBuilder(config?: ScreenRuleBuilderConfig) {
  return function tablet(rule: StyleRuleWithoutMediaQueries = {}): StyleRule {
    return {
      "@media": {
        [config?.breakPoints || TABLET_BREAK_POINT]: rule,
      },
    };
  };
}

export function getDesktopRuleBuilder(config?: ScreenRuleBuilderConfig) {
  return function desktop(rule: StyleRuleWithoutMediaQueries = {}): StyleRule {
    return {
      "@media": {
        [config?.breakPoints || DESKTOP_BREAK_POINT]: rule,
      },
    };
  };
}

export type ResponsiveConfig = {
  mobile?: Parameters<ReturnType<typeof getMobileRuleBuilder>>;
  tablet?: Parameters<ReturnType<typeof getTabletRuleBuilder>>;
  desktop?: Parameters<ReturnType<typeof getDesktopRuleBuilder>>;
};

export function getResponsiveRuleBuilder(config: ResponsiveRuleBuilderConfig): (responsiveConfig: ResponsiveConfig) => StyleRule {
  const mobile = getMobileRuleBuilder(config.mobile);
  const tablet = getTabletRuleBuilder(config.tablet);
  const desktop = getDesktopRuleBuilder(config.desktop);

  return function responsive(responsiveConfig) {
    const { mobile: mb = [], tablet: tl = [], desktop: dt = [] } = responsiveConfig;
    return { ...mobile(...mb), ...tablet(...tl), ...desktop(...dt) };
  };
}
