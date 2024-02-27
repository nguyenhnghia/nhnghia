import type { StyleRule } from "@vanilla-extract/css";

export type Screen = "mobile" | "tablet" | "desktop";

export type StaticStyleRule = Omit<StyleRule, "@media" | "@layers">;

export type ResponsiveStyleRule = {
  mobile?: StyleRule;
  tablet?: StaticStyleRule;
  desktop?: StaticStyleRule;
};

export type ResponsiveUIVariants<V extends Record<string, unknown>> = V & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};
