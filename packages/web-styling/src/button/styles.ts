import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { clsx } from "clsx";
import getClasses from "../_utils/get-classes";
import { getDummyTag } from "../_utils/get-dummy-tag";
import type { ResponsiveUIVariants, Screen } from "../common-types";
import { responsive } from "../screens.css";
import staticStyles from "./static";
import type { SizeVariant } from "./variants/size.css";
import { sizeVariants } from "./variants/size.css";

/*================== TYPING =================*/
declare global {
  /* eslint-disable-next-line no-var --
  we need this global var
  to save config as <screen>-<part>-<variant>
  to prevent VE from generating same class among requests
  eg: if there is already a request for size = 'tiny' at mobile screen,
  we'll use that generated class to build component for next similar request
  */
  var buttonSize: Partial<
    Record<`${"any" | Screen}-${Parts}-${"any" | SizeVariant}`, string>
  >;
}

type RequiredParts = {
  root: string;
};

type OptionalParts = {
  icon: string;
  text: string;
};

type Parts = keyof (RequiredParts & OptionalParts);

type ButtonStyles<P extends keyof OptionalParts> = RequiredParts &
  Pick<OptionalParts, P> & {
    __selectors: {
      [K in keyof (RequiredParts & Pick<OptionalParts, P>)]: string;
    };
  };

type ButtonUIVariants = {
  /**
   * @defaultValue `"rectangle" for mobile, undefined for tablet & desktop`
   */
  size?: SizeVariant;
};

type ButtonStyleOptions<P extends keyof OptionalParts> =
  ResponsiveUIVariants<ButtonUIVariants> & {
    __override?: Partial<Record<keyof ButtonStyles<P>, StyleRule>>;
  };

/*================== MAIN LOGIC =================*/
globalThis.buttonSize = {};

function getButtonStyles<P extends keyof OptionalParts>(
  parts: P[],
  options?: ButtonStyleOptions<P>,
): ButtonStyles<P> {
  const buttonStyles: { [K in Parts]?: string } & {
    __selectors: {
      [K in Parts]?: string;
    };
  } = { __selectors: {} };

  /*================== get variants =================*/
  const size = options?.size ?? "normal";
  const tlSize = options?.__responsive?.tablet?.size;
  const dtSize = options?.__responsive?.desktop?.size;

  /*================== build Root =================*/
  const rootSelector = getClasses(
    staticStyles.root,
    globalThis.buttonSize,
    "any-root-any",
  );

  const rootClasses = [
    rootSelector,
    getClasses(sizeVariants[size], globalThis.buttonSize, `base-root-${size}`),
    tlSize &&
      getClasses(
        responsive({
          tablet: sizeVariants[tlSize],
        }),
        globalThis.buttonSize,
        `tablet-root-${tlSize}`,
      ),
    dtSize &&
      getClasses(
        responsive({
          desktop: sizeVariants[dtSize],
        }),
        globalThis.buttonSize,
        `tablet-root-${dtSize}`,
      ),
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
    const iconSelector = getClasses(
      staticStyles.icon,
      globalThis.buttonSize,
      "any-icon-any",
    );

    const iconClasses = [
      iconSelector,
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
    const textSelector = getClasses(
      staticStyles.text,
      globalThis.buttonSize,
      "any-text-any",
    );
    const textClasses = [
      textSelector,
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

export default getButtonStyles;
