import type { StyleRule } from "@vanilla-extract/css";

export type Screen = "mobile" | "tablet" | "desktop";

export type StyleRuleWithout<K extends keyof StyleRule> = Omit<StyleRule, K>;

export type StyleRuleWithoutMediaQueries = StyleRuleWithout<"@media">;

export type ResponsiveStyleRule = {
  mobile?: StyleRuleWithoutMediaQueries;
  tablet?: StyleRuleWithoutMediaQueries;
  desktop?: StyleRuleWithoutMediaQueries;
};

export type ResponsiveUIVariants<V extends Record<string, unknown>> = V & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};
