declare global {
  type PartialRecord<K extends string, T> = Partial<{
    [Key in K]: T;
  }>;

  type UIResponsibleVariants<T> = T & {
    __responsive?: {
      tablet?: T;
      desktop?: T;
    };
  };
}

export {};
