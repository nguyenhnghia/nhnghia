import { button, div } from "@repo/components/primitives";
import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import getClasses from "../_utils/get-classes";
import type {
  ResponsibleUIProperties,
  ResponsibleUIVariants,
} from "../common-types";
import { responsive } from "../screens.css";
import staticStyles from "./styles";
import type { ButtonSize, SizeVariant } from "./variants/size.css";
import { sizeVariants } from "./variants/size.css";

/*================== TYPING =================*/
type RequiredParts = {
  Root: ReturnType<typeof button>;
};

type OptionalParts = {
  Icon: ReturnType<typeof div>;
  Text: ReturnType<typeof div>;
};

declare global {
  /* eslint-disable-next-line no-var --
  we need this global var
  to save config as <screen>-<part>-<variant>
  to prevent VE from generating same class among requests
  eg: if there is already a request for size = 'tiny' at mobile screen,
  we'll use that generated class to build component for next similar request
  */
  var buttonRegisteredSize: Partial<
    Record<
      `${"any" | "base" | "tablet" | "desktop"}-${keyof (RequiredParts & OptionalParts)}-${"any" | SizeVariant}`,
      string
    >
  >;
}

type ButtonBlueSprintParts<P extends keyof OptionalParts> = RequiredParts &
  Pick<OptionalParts, P>;

type ButtonBlueSprint<P extends keyof OptionalParts> =
  ButtonBlueSprintParts<P> & {
    __config: {
      parts: P[];
      options?: RegisterButtonOptions<P>;
    };
  } & ResponsibleUIProperties<{ size: ButtonSize }>;

type ButtonUIVariants = {
  /**
   * @defaultValue `"rectangle" for mobile, undefined for tablet & desktop`
   */
  size?: SizeVariant;
};

type RegisterButtonOptions<P extends keyof OptionalParts> =
  ResponsibleUIVariants<ButtonUIVariants> & {
    __override?: Partial<Record<keyof ButtonBlueSprintParts<P>, StyleRule>>;
  };

/*================== MAIN LOGIC =================*/
global.buttonRegisteredSize = {};

function registerButton<P extends keyof OptionalParts>(
  parts: P[],
  options?: RegisterButtonOptions<P>,
): ButtonBlueSprint<P> {
  const buttonBlueSprint: Partial<ButtonBlueSprint<"Icon" | "Text">> = {
    __config: { parts, options },
  };

  /*================== get variants =================*/
  const size = options?.size ?? "normal";
  const tlSize = options?.__responsive?.tablet?.size;
  const dtSize = options?.__responsive?.desktop?.size;

  /*================== build properties =================*/
  buttonBlueSprint.__baseProperties = { size: sizeVariants[size] };
  if (tlSize) {
    buttonBlueSprint.__tabletProperties = { size: sizeVariants[tlSize] };
  }
  if (dtSize) {
    buttonBlueSprint.__desktopProperties = { size: sizeVariants[dtSize] };
  }

  /*================== build Root =================*/
  const rootClasses = [
    getClasses(staticStyles.root, global.buttonRegisteredSize, "any-Root-any"),
    getClasses(
      [sizeVariants[size].shared, sizeVariants[size].root],
      global.buttonRegisteredSize,
      `base-Root-${size}`,
    ),
    tlSize &&
      getClasses(
        [
          responsive({
            tablet: sizeVariants[tlSize].shared,
          }),
          responsive({
            tablet: sizeVariants[tlSize].root,
          }),
        ],
        global.buttonRegisteredSize,
        `tablet-Root-${tlSize}`,
      ),
    dtSize &&
      getClasses(
        [
          responsive({
            desktop: sizeVariants[dtSize].shared,
          }),
          responsive({
            desktop: sizeVariants[dtSize].root,
          }),
        ],
        global.buttonRegisteredSize,
        `tablet-Root-${dtSize}`,
      ),
    options?.__override?.Root && style(options.__override.Root),
  ]
    .filter(Boolean)
    .join(" ");

  const rootArgs: Parameters<typeof button>[0] = { className: rootClasses };

  const Root = button(rootArgs);

  addFunctionSerializer(Root, {
    importPath: "@repo/components/primitives/button",
    importName: "button",
    args: [rootArgs],
  });

  buttonBlueSprint.Root = Root;

  if (parts.includes("Icon" as P)) {
    /*================== build icon =================*/
    const iconClasses = [
      getClasses(
        staticStyles.icon,
        global.buttonRegisteredSize,
        "any-Icon-any",
      ),
      getClasses(
        sizeVariants[size].icon,
        global.buttonRegisteredSize,
        `base-Icon-${size}`,
      ),
      tlSize &&
        getClasses(
          responsive({
            tablet: sizeVariants[tlSize].icon,
          }),
          global.buttonRegisteredSize,
          `tablet-Icon-${tlSize}`,
        ),
      dtSize &&
        getClasses(
          responsive({
            desktop: sizeVariants[dtSize].icon,
          }),
          global.buttonRegisteredSize,
          `tablet-Icon-${dtSize}`,
        ),
      options?.__override?.["Icon" as P] &&
        style(options.__override["Icon" as P] ?? {}),
    ]
      .filter(Boolean)
      .join(" ");

    const iconArgs: Parameters<typeof div>[0] = { className: iconClasses };

    const Icon = div(iconArgs);

    addFunctionSerializer(Icon, {
      importPath: "@repo/components/primitives/div",
      importName: "div",
      args: [iconArgs],
    });

    buttonBlueSprint.Icon = Icon;
  }
  if (parts.includes("Text" as P)) {
    /*================== build text =================*/
    const textClasses = [
      getClasses(
        staticStyles.text,
        global.buttonRegisteredSize,
        "any-Text-any",
      ),
      getClasses(
        sizeVariants[size].text,
        global.buttonRegisteredSize,
        `base-Text-${size}`,
      ),
      tlSize &&
        getClasses(
          responsive({
            tablet: sizeVariants[tlSize].text,
          }),
          global.buttonRegisteredSize,
          `tablet-Text-${tlSize}`,
        ),
      dtSize &&
        getClasses(
          responsive({
            desktop: sizeVariants[dtSize].text,
          }),
          global.buttonRegisteredSize,
          `tablet-Text-${dtSize}`,
        ),
      options?.__override?.["Text" as P] &&
        style(options.__override["Text" as P] ?? {}),
    ]
      .filter(Boolean)
      .join(" ");

    const textArgs: Parameters<typeof div>[0] = { className: textClasses };

    const Text = div(textArgs);

    addFunctionSerializer(Text, {
      importPath: "@repo/components/primitives/div",
      importName: "div",
      args: [textArgs],
    });

    buttonBlueSprint.Text = Text;
  }

  return buttonBlueSprint as ButtonBlueSprint<P>;
}

export default registerButton;
