import type { ResponsiveUIVariants } from "./common";

//#region - component design
export type ComponentStyleDesign = {
  name: string;
  fragments: string;
  variants: Record<string, string>;
};

export type ComponentStyle<Design extends ComponentStyleDesign> = Design & {
  classesGetter: <P extends Design["fragments"]>(fragments: [P, ...P[]], options?: ResponsiveUIVariants<Design["variants"]>) => Record<P, string>;
};
//#endregion

//#region - button
export type ButtonStyle = ComponentStyle<{
  name: "button";
  fragments: "root" | "icon" | "text";
  variants: {
    /**
     * @defaultValue `"normal" for mobile, undefined for tablet & desktop`
     */
    size: "tiny" | "small" | "normal" | "medium" | "large" | "huge";
  };
}>;
//#endregion
