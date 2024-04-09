import { style } from "@vanilla-extract/css";
import { clsx } from "clsx";
import createClassName from "../../_utils/class-name";
import { getDesktopRuleBuilder, getMobileRuleBuilder, getTabletRuleBuilder } from "../../helpers";
import type { ButtonStyle, ClassBuilderConfig, ResponsiveUIVariants } from "../../types";
import { OptimizationUnit } from "../../types";
import staticStyles from "./static";
import { sizeVariants } from "./variants/size.css";

function buttonStyles(config?: ClassBuilderConfig): ButtonStyle["classesGetter"] {
  const scope = config?.scope ?? "any-scope";
  const builderConfig = config?.builder;

  const mobile = getMobileRuleBuilder(builderConfig?.mobile);
  const tablet = getTabletRuleBuilder(builderConfig?.tablet);
  const desktop = getDesktopRuleBuilder(builderConfig?.desktop);

  return function getButtonClasses<P extends ButtonStyle["fragments"]>(fragments: [P, ...P[]], options?: ResponsiveUIVariants<ButtonStyle["variants"]>) {
    let styles = {};

    const size = options?.size ?? "normal";
    const tlSize = options?.__responsive?.tablet?.size;
    const dtSize = options?.__responsive?.desktop?.size;

    for (const fragment of fragments) {
      if (fragment in styles) continue;
      let classes = "";

      //#region - root
      if (fragment === "root") {
        classes = clsx([
          // static style
          style(staticStyles.root),
          // createClassName(staticStyles.root, OptimizationUnit.Component, `(${scope})button-root-on-any-screen:size=any`),
          // size style
          style(mobile(sizeVariants[size])),
          // createClassName(mobile(sizeVariants[size]), OptimizationUnit.Component, `(${scope})button-root-on-mobile:size=${size}`),
          tlSize && createClassName(tablet(sizeVariants[tlSize]), OptimizationUnit.Component, `(${scope})button-root-on-tablet:size=${tlSize}`),
          dtSize && createClassName(desktop(sizeVariants[dtSize]), OptimizationUnit.Component, `(${scope})button-root-on-desktop:size=${dtSize}`),
          // ...other variants
          // ...
        ]);
      }
      //#endregion

      //#region - icon
      if (fragment === "icon") {
        classes = clsx([
          // static style
          style(staticStyles.icon),
          // createClassName(staticStyles.icon, OptimizationUnit.Component, `(${scope})button-icon-on-any-screen:size=any`),
        ]);
      }
      //#endregion

      //#region - text
      if (fragment === "text") {
        classes = clsx([
          // static style
          style(staticStyles.text),
          // createClassName(staticStyles.text, OptimizationUnit.Component, `(${scope})button-text-on-any-screen:size=any`),
        ]);
      }
      //#endregion

      if (classes) styles = { ...styles, [fragment]: classes };
    }

    return styles as Record<P, string>;
  };
}

export default buttonStyles;
