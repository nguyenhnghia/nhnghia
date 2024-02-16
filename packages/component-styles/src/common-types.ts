export type Screen = "base" | "tablet" | "desktop";

export type ResponsibleUIVariants<V> = V & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};
