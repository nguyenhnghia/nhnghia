import type { StyleRule } from "@vanilla-extract/css";

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type StyleRuleWithout<K extends keyof StyleRule> = Omit<StyleRule, K>;

export type StyleRuleWithoutContainer = StyleRuleWithout<"@container">;

export type StyleRuleWithoutLayers = StyleRuleWithout<"@layer">;

export type StyleRuleWithoutMediaQueries = StyleRuleWithout<"@media">;

export type StyleRuleWithoutSupports = StyleRuleWithout<"@supports">;

export type ScreenRuleBuilderConfig = {
  breakPoints?: string;
};

export type ResponsiveRuleBuilderConfig = {
  mobile?: ScreenRuleBuilderConfig;
  tablet?: ScreenRuleBuilderConfig;
  desktop?: ScreenRuleBuilderConfig;
};

export type ResponsiveUIVariants<V extends Record<string, string>> = Partial<V> & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};
