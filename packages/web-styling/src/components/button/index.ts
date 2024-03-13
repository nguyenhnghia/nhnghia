import { style, type StyleRule } from "@vanilla-extract/css";
import { clsx } from "clsx";
import { CachedUnits } from "../../_configurations/caching";
import type { ResponsiveUIVariants } from "../../_types/common";
import type {
  ButtonOptionalParts,
  ButtonParts,
  ButtonRequiredParts,
  ButtonSizes,
} from "../../_types/components/button";
import cn, { createSelector } from "../../_utils/class-name";
import { desktop, mobile, tablet } from "../../helpers/responsive";
import staticStyles from "./static";
import { sizeVariants } from "./variants/size.css";

type RequiredParts = Record<ButtonRequiredParts, string>;

type OptionalParts = Record<ButtonOptionalParts, string>;

type Parts<P extends keyof OptionalParts> = RequiredParts &
  Pick<OptionalParts, P>;

type ButtonStyles<P extends keyof OptionalParts> = Parts<P> & {
  __selectors: {
    [K in keyof Parts<P>]: string;
  };
};

type ButtonUIVariants = {
  /**
   * @defaultValue `"normal" for mobile, undefined for tablet & desktop`
   */
  size?: ButtonSizes;
};

type ButtonStyleOptions<P extends keyof OptionalParts> =
  ResponsiveUIVariants<ButtonUIVariants> & {
    __extend?: Partial<Record<keyof Parts<P>, string[]>>;
    __override?: Partial<Record<keyof Parts<P>, StyleRule>>;
  };

function button<P extends keyof OptionalParts>(
  parts: P[],
  options?: ButtonStyleOptions<P>,
): ButtonStyles<P> {
  const buttonStyles: { [K in ButtonParts]?: string } & {
    __selectors: {
      [K in ButtonParts]?: string;
    };
  } = { __selectors: {} };

  const size = options?.size ?? "normal";
  const tlSize = options?.__responsive?.tablet?.size;
  const dtSize = options?.__responsive?.desktop?.size;

  /*================== ROOT =================*/
  const rootSelector = createSelector();

  const rootClasses = [
    rootSelector,
    cn(staticStyles.root, CachedUnits.ButtonSize, "any-root-any"),
    cn(
      mobile(sizeVariants[size]),
      CachedUnits.ButtonSize,
      `mobile-root-${size}`,
    ),
    tlSize &&
      cn(
        tablet(sizeVariants[tlSize]),
        CachedUnits.ButtonSize,
        `tablet-root-${tlSize}`,
      ),
    dtSize &&
      cn(
        desktop(sizeVariants[dtSize]),
        CachedUnits.ButtonSize,
        `tablet-root-${dtSize}`,
      ),
    options?.__extend?.root,
    options?.__override?.root && style(options.__override.root),
  ];

  buttonStyles.__selectors.root = rootSelector;
  buttonStyles.root = clsx(rootClasses);

  /*================== ICON =================*/
  if (parts.includes("icon" as P)) {
    const iconSelector = createSelector();

    const iconClasses = [
      iconSelector,
      cn(staticStyles.icon, CachedUnits.ButtonSize, "any-icon-any"),
      options?.__extend?.["icon" as P],
      options?.__override?.["icon" as P] &&
        style(options.__override["icon" as P] ?? {}),
    ];

    buttonStyles.__selectors.icon = iconSelector;
    buttonStyles.icon = clsx(iconClasses);
  }

  /*================== TEXT =================*/
  if (parts.includes("text" as P)) {
    const textSelector = createSelector();

    const textClasses = [
      textSelector,
      cn(staticStyles.text, CachedUnits.ButtonSize, "any-text-any"),
      options?.__extend?.["text" as P],
      options?.__override?.["text" as P] &&
        style(options.__override["Text" as P] ?? {}),
    ];

    buttonStyles.__selectors.text = textSelector;
    buttonStyles.text = clsx(textClasses);
  }

  return buttonStyles as ButtonStyles<P>;
}

export default button;
