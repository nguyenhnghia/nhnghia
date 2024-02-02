export type ResponsibleUIVariants<V> = V & {
  __responsive?: {
    tablet?: V;
    desktop?: V;
  };
};

export type ResponsibleUIProperties<P> = {
  __baseProperties: P;
  __tabletProperties?: P;
  __desktopProperties?: P;
};
