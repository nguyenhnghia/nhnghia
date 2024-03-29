import type { StyleRule } from "@vanilla-extract/css";

export type Screen = "mobile" | "tablet" | "desktop";

export type StyleRuleWithout<K extends keyof StyleRule> = Omit<StyleRule, K>;

export type StyleRuleWithoutContainer = StyleRuleWithout<"@container">;

export type StyleRuleWithoutLayers = StyleRuleWithout<"@layer">;

export type StyleRuleWithoutMediaQueries = StyleRuleWithout<"@media">;

export type StyleRuleWithoutSupports = StyleRuleWithout<"@supports">;

export type ScreenRuleBuilderConfig = {
  layer?: string;
  breakPoints?: string;
};

export type ResponsiveRuleBuilderConfig = {
  mobile?: Pick<ScreenRuleBuilderConfig, "layer">;
  tablet?: ScreenRuleBuilderConfig;
  desktop?: ScreenRuleBuilderConfig;
};

export type ClassBuilderConfig = {
  /**
   * Root file which init the class builder call
   * When a class builder is called inside some-random-directory/example.css.ts,
   * it's mean some-random-directory/example.css.ts is that's builder scope
   */
  scope?: string;
  builder?: ResponsiveRuleBuilderConfig;
};

export type ResponsiveUIVariants<V extends Record<string, string>> = V & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};
