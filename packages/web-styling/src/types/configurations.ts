import type { ComponentDesign } from "./components";
import type { ResponsiveUIVariants, Screen } from "./web-styling";

/*================== Button =================*/
export type Button = ComponentDesign<ButtonRequiredParts, ButtonOptionalParts, ButtonVariants>;

export type ButtonName = "button";

export type ButtonRequiredParts = "root";

export type ButtonOptionalParts = "icon" | "text";

export type ButtonParts = ButtonRequiredParts | ButtonOptionalParts;

export type ButtonVariants = {
  /**
   * @defaultValue `"normal" for mobile, undefined for tablet & desktop`
   */
  size: "tiny" | "small" | "normal" | "medium" | "large" | "huge";
};

export type ButtonClasses<P extends ButtonOptionalParts> = Record<ButtonRequiredParts, string> & Record<P, string>;

export type ButtonClassesGetter = <P extends ButtonOptionalParts>(parts: P[], options?: ResponsiveUIVariants<Partial<ButtonVariants>>) => ButtonClasses<P>;

/*================== Button Optimization =================*/
export type ButtonVariantTokens = `size=${"any" | ButtonVariants["size"]}`;

export type ButtonBuildTokens = `${ButtonName}-${ButtonParts}-on-${"any-screen" | Screen}:${ButtonVariantTokens}`;
