import type { StyleRule } from "@vanilla-extract/css";

type StyleRuleByDevice = Omit<StyleRule, "@media">;

type ResponsiveStyleRule = {
  tablet?: StyleRuleByDevice;
  desktop?: StyleRuleByDevice;
};

const TABLET = "(min-width: 768px)";

const DESKTOP = "(min-width: 768px) and (min-width: 1280px)";

function responsive({ tablet, desktop }: ResponsiveStyleRule): StyleRule {
  if (tablet === undefined && desktop === undefined) return {};
  const screens: StyleRule["@media"] = {};
  if (tablet !== undefined) screens[TABLET] = tablet;
  if (desktop !== undefined) screens[DESKTOP] = desktop;
  return { "@media": screens };
}

export { DESKTOP, TABLET, responsive };
export type { ResponsiveStyleRule, StyleRuleByDevice };
