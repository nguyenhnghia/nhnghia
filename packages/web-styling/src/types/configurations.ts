import type { Screen } from "./web-styling";
import type { ComponentStyle } from ".";

/*================== Button =================*/
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

/*================== Button Optimization =================*/
export type ButtonVariantTokens = `size=${"any" | ButtonStyle["variants"]["size"]}`;

export type ButtonBuildTokens = `${ButtonStyle["name"]}-${ButtonStyle["fragments"]}-on-${"any-screen" | Screen}:${ButtonVariantTokens}`;
