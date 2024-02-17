export type Screen = "base" | "tablet" | "desktop";

export type ResponsiveUIVariants<V> = V & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};
