import { clsx } from "clsx";
import createClassName from "../../_utils/class-name";
import { getDesktopRuleBuilder, getMobileRuleBuilder, getTabletRuleBuilder } from "../../helpers";
import type { ButtonClasses, ButtonClassesGetter, ButtonOptionalParts, ButtonParts, ButtonVariants } from "../../types/configurations";
import { OptimizationUnit } from "../../types/optimization";
import type { ClassBuilderConfig, ResponsiveUIVariants } from "../../types/web-styling";
import staticStyles from "./static";
import { sizeVariants } from "./variants/size.css";

type ButtonBuilderConfig = ClassBuilderConfig;

function button(config?: ButtonBuilderConfig): ButtonClassesGetter {
  const scope = config?.scope ?? "any-scope";
  const builderConfig = config?.builder;

  const mobile = getMobileRuleBuilder(builderConfig?.mobile);
  const tablet = getTabletRuleBuilder(builderConfig?.tablet);
  const desktop = getDesktopRuleBuilder(builderConfig?.desktop);

  return function getButtonClasses<P extends ButtonOptionalParts>(parts: P[], options?: ResponsiveUIVariants<Partial<ButtonVariants>>) {
    const buttonStyles: { [K in ButtonParts]?: string } = {};

    const size = options?.size ?? "normal";
    const tlSize = options?.__responsive?.tablet?.size;
    const dtSize = options?.__responsive?.desktop?.size;

    /*================== ROOT =================*/
    const rootClasses = [
      createClassName(staticStyles.root, OptimizationUnit.Component, `(${scope})button-root-on-any-screen:size=any`),
      createClassName(mobile(sizeVariants[size]), OptimizationUnit.Component, `(${scope})button-root-on-mobile:size=${size}`),
      tlSize && createClassName(tablet(sizeVariants[tlSize]), OptimizationUnit.Component, `(${scope})button-root-on-tablet:size=${tlSize}`),
      dtSize && createClassName(desktop(sizeVariants[dtSize]), OptimizationUnit.Component, `(${scope})button-root-on-desktop:size=${dtSize}`),
    ];

    buttonStyles.root = clsx(rootClasses);

    /*================== ICON =================*/
    if (parts.includes("icon" as P)) {
      const iconClasses = [createClassName(staticStyles.icon, OptimizationUnit.Component, `(${scope})button-icon-on-any-screen:size=any`)];

      buttonStyles.icon = clsx(iconClasses);
    }

    /*================== TEXT =================*/
    if (parts.includes("text" as P)) {
      const textClasses = [createClassName(staticStyles.text, OptimizationUnit.Component, `(${scope})button-text-on-any-screen:size=any`)];

      buttonStyles.text = clsx(textClasses);
    }

    return buttonStyles as ButtonClasses<P>;
  };
}

export default button;
