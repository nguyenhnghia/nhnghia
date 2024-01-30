declare global {
  type UIResponsibleVariants<T> = T & {
    __responsive?: {
      tablet?: T;
      desktop?: T;
    };
  };
}

export {};
