import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
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
import { getDummyTag } from "../../_utils/get-dummy-tag";
import responsive from "../../helpers/responsive";
import staticStyles from "./static";
import { sizeVariants } from "./variants/size.css";

/*================== TYPING =================*/
type RequiredParts = Record<ButtonRequiredParts, string>;

type OptionalParts = Record<ButtonOptionalParts, string>;

type ButtonStyles<P extends keyof OptionalParts> = RequiredParts &
  Pick<OptionalParts, P> & {
    __selectors: {
      [K in keyof (RequiredParts & Pick<OptionalParts, P>)]: string;
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
    __extend?: Partial<Record<keyof ButtonStyles<P>, string[]>>;
    __override?: Partial<Record<keyof ButtonStyles<P>, StyleRule>>;
  };

/*================== MAIN LOGIC =================*/
function button<P extends keyof OptionalParts>(
  parts: P[],
  options?: ButtonStyleOptions<P>,
): ButtonStyles<P> {
  const buttonStyles: { [K in ButtonParts]?: string } & {
    __selectors: {
      [K in ButtonParts]?: string;
    };
  } = { __selectors: {} };

  /*================== get variants =================*/
  const size = options?.size ?? "normal";
  const tlSize = options?.__responsive?.tablet?.size;
  const dtSize = options?.__responsive?.desktop?.size;

  /*================== build Root =================*/
  const rootSelector = createSelector();

  const rootClasses = [
    rootSelector,
    cn(staticStyles.root, CachedUnits.ButtonSize, "any-root-any"),
    cn(sizeVariants[size], CachedUnits.ButtonSize, `mobile-root-${size}`),
    tlSize &&
      cn(
        responsive({ tablet: sizeVariants[tlSize] }),
        CachedUnits.ButtonSize,
        `tablet-root-${tlSize}`,
      ),
    dtSize &&
      cn(
        responsive({ desktop: sizeVariants[dtSize] }),
        CachedUnits.ButtonSize,
        `tablet-root-${dtSize}`,
      ),
    options?.__extend?.root,
    options?.__override?.root && style(options.__override.root),
  ];

  buttonStyles.__selectors.root = rootSelector;
  buttonStyles.root = clsx(rootClasses);

  addFunctionSerializer(getDummyTag(rootClasses), {
    importPath: "#dummy-tag",
    importName: "getDummyTag",
    args: [rootClasses],
  });

  /*================== build icon =================*/
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

    addFunctionSerializer(getDummyTag(iconClasses), {
      importPath: "#dummy-tag",
      importName: "getDummyTag",
      args: [iconClasses],
    });
  }

  /*================== build text =================*/
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

    addFunctionSerializer(getDummyTag(textClasses), {
      importPath: "#dummy-tag",
      importName: "getDummyTag",
      args: [textClasses],
    });
  }

  return buttonStyles as ButtonStyles<P>;
}

/*================== EXPOSE =================*/
export default button;
