import type { StyleRule } from "@vanilla-extract/css";

type StyleRuleByDevice = Omit<StyleRule, "@media">;

type ResponsiveStyleRule = {
  tablet?: StyleRuleByDevice;
  desktop?: StyleRuleByDevice;
};

const TABLET = "(min-width: 768px)";

const DESKTOP = "(min-width: 1280px)";

function responsive({ tablet, desktop }: ResponsiveStyleRule): StyleRule {
  return {
    "@media": {
      [TABLET]: tablet ?? {},
      [DESKTOP]: desktop ?? {},
    },
  };
}

export { DESKTOP, TABLET, responsive };
export type { ResponsiveStyleRule, StyleRuleByDevice };
