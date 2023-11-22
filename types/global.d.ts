import { ClassValue } from 'clsx';

declare global {
  type Prettify<T> = {
    [K in keyof T]: T[K];
  } & {};

  type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

  type UIView = 'base' | 'tablet' | 'desktop';

  type UIVariant<K extends string, V extends UIView = 'base'> = Prettify<
    {
      __view: V;
    } & PartialRecord<K, ClassValue>
  >;

  type UIResponsibleVariant<K extends string> = {
    __base?: UIVariant<K>;
    __tablet?: UIVariant<K, 'tablet'>;
    __desktop?: UIVariant<K, 'desktop'>;
  };
}

export {};
