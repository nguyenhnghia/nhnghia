declare global {
  type PartialRecord<K extends string, T> = Partial<{
    [Key in K]: T;
  }>;

  type ResponsibleUIVariants<V> = V & {
    __responsive?: {
      tablet?: V;
      desktop?: V;
    };
  };

  type ResponsibleUIProperties<P> = {
    __baseProperties: P;
    __tabletProperties?: P;
    __desktopProperties?: P;
  };
}

export {};
