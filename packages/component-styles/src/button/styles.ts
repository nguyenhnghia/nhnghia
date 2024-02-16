import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { clsx } from "clsx";
import getClasses from "../_utils/get-classes";
import { getDummyTag } from "../_utils/get-dummy-tag";
import type { ResponsibleUIVariants, Screen } from "../common-types";
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
  var buttonRegisteredSize: Partial<
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
  Pick<OptionalParts, P>;

type ButtonUIVariants = {
  /**
   * @defaultValue `"rectangle" for mobile, undefined for tablet & desktop`
   */
  size?: SizeVariant;
};

type RegisterButtonOptions<P extends keyof OptionalParts> =
  ResponsibleUIVariants<ButtonUIVariants> & {
    __override?: Partial<Record<keyof ButtonStyles<P>, StyleRule>>;
  };

/*================== MAIN LOGIC =================*/
global.buttonRegisteredSize = {};

function getButtonStyles<P extends keyof OptionalParts>(
  parts: P[],
  options?: RegisterButtonOptions<P>,
): ButtonStyles<P> {
  const buttonStyles: Partial<ButtonStyles<"icon" | "text">> = {};

  /*================== get variants =================*/
  const size = options?.size ?? "normal";
  const tlSize = options?.__responsive?.tablet?.size;
  const dtSize = options?.__responsive?.desktop?.size;

  /*================== build Root =================*/
  const rootClasses = [
    getClasses(staticStyles.root, global.buttonRegisteredSize, "any-root-any"),
    getClasses(
      sizeVariants[size],
      global.buttonRegisteredSize,
      `base-root-${size}`,
    ),
    tlSize &&
      getClasses(
        responsive({
          tablet: sizeVariants[tlSize],
        }),
        global.buttonRegisteredSize,
        `tablet-root-${tlSize}`,
      ),
    dtSize &&
      getClasses(
        responsive({
          desktop: sizeVariants[dtSize],
        }),
        global.buttonRegisteredSize,
        `tablet-root-${dtSize}`,
      ),
    options?.__override?.root && style(options.__override.root),
  ];

  buttonStyles.root = clsx(rootClasses);

  addFunctionSerializer(getDummyTag(rootClasses), {
    importPath: "#dummy-tag",
    importName: "getDummyTag",
    args: [rootClasses],
  });

  /*================== build icon =================*/
  if (parts.includes("icon" as P)) {
    const iconClasses = [
      getClasses(
        staticStyles.icon,
        global.buttonRegisteredSize,
        "any-icon-any",
      ),
      options?.__override?.["icon" as P] &&
        style(options.__override["icon" as P] ?? {}),
    ];

    buttonStyles.icon = clsx(iconClasses);

    addFunctionSerializer(getDummyTag(iconClasses), {
      importPath: "#dummy-tag",
      importName: "getDummyTag",
      args: [iconClasses],
    });
  }

  /*================== build text =================*/
  if (parts.includes("text" as P)) {
    const textClasses = [
      getClasses(
        staticStyles.text,
        global.buttonRegisteredSize,
        "any-text-any",
      ),
      options?.__override?.["text" as P] &&
        style(options.__override["Text" as P] ?? {}),
    ];

    addFunctionSerializer(getDummyTag(textClasses), {
      importPath: "#dummy-tag",
      importName: "getDummyTag",
      args: [textClasses],
    });

    buttonStyles.text = clsx(textClasses);
  }

  return buttonStyles as ButtonStyles<P>;
}

export default getButtonStyles;