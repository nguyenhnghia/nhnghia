export type Screen = "base" | "tablet" | "desktop";

export type ResponsiveUIVariants<V extends Record<string, unknown>> = V & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};
