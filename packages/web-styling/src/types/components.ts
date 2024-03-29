import type { ResponsiveUIVariants } from ".";

export type ComponentStyleDesign = {
  name: string;
  fragments: string;
  variants: Record<string, string>;
};

export type ComponentStyle<Design extends ComponentStyleDesign> = Design & {
  classesGetter: <P extends Design["fragments"]>(fragments: [P, ...P[]], options?: ResponsiveUIVariants<Design["variants"]>) => Record<P, string>;
};
