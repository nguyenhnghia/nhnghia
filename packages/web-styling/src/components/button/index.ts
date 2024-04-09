import { style } from "@vanilla-extract/css";
import { getDesktopRuleBuilder, getMobileRuleBuilder, getTabletRuleBuilder } from "../../helpers";
import type { ButtonStyle, ResponsiveRuleBuilderConfig, ResponsiveUIVariants } from "../../types";
import staticStyles from "./static";
import { sizeVariants } from "./variants/size.css";

function buttonStyles(config?: ResponsiveRuleBuilderConfig): ButtonStyle["classesGetter"] {
  const mobile = getMobileRuleBuilder(config?.mobile);
  const tablet = getTabletRuleBuilder(config?.tablet);
  const desktop = getDesktopRuleBuilder(config?.desktop);

  return function getButtonClasses(fragments: ButtonStyle["fragments"][], options?: ResponsiveUIVariants<ButtonStyle["variants"]>) {
    let styles = {};

    //#region - variant - size
    const size = options?.size ?? "normal";
    const tlSize = options?.__responsive?.tablet?.size;
    const dtSize = options?.__responsive?.desktop?.size;
    //#endregion

    //#region - root
    if (fragments.includes("root")) {
      styles = {
        ...styles,
        root: style([
          // static style
          staticStyles.root,
          // size style
          mobile(sizeVariants[size]),
          tlSize ? tablet(sizeVariants[tlSize]) : "",
          dtSize ? desktop(sizeVariants[dtSize]) : "",
          // ...other variants
          // ...
        ]),
      };
    }
    //#endregion

    //#region - icon
    if (fragments.includes("icon")) {
      styles = {
        ...styles,
        icon: style([
          // static style
          staticStyles.icon,
        ]),
      };
    }
    //#endregion

    //#region - text
    if (fragments.includes("text")) {
      styles = {
        ...styles,
        text: style([
          // static style
          staticStyles.text,
        ]),
      };
    }
    //#endregion

    return styles as ReturnType<ButtonStyle["classesGetter"]>;
  };
}

export default buttonStyles;
