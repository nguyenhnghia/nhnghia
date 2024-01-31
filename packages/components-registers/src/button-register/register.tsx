import { button, div } from "@repo/components/primitives";
import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { responsive } from "../screens.css";
import staticStyles from "./styles";
import type { SizeVariant } from "./variants/size.css";
import { sizeVariants } from "./variants/size.css";

/*================== TYPING =================*/
type RequiredParts = {
  Root: ReturnType<typeof button>;
};

type OptionalParts = {
  Body: ReturnType<typeof div>;
  Icon: ReturnType<typeof div>;
  Text: ReturnType<typeof div>;
};

type Button<P extends keyof OptionalParts> = RequiredParts &
  Pick<OptionalParts, P>;

type ButtonUIVariants = {
  /**
   * @defaultValue `"rectangle" for mobile, undefined for tablet & desktop`
   */
  size?: SizeVariant;
};

type RegisterButtonOptions<P extends keyof OptionalParts> =
  UIResponsibleVariants<ButtonUIVariants> & {
    __override?: PartialRecord<keyof Button<P>, StyleRule>;
  };

/*================== MAIN LOGIC =================*/
function registerButton<P extends keyof OptionalParts>(
  parts: P[],
  options?: RegisterButtonOptions<P>,
): Button<P> {
  /*================== get variants =================*/
  const size = options?.size ?? "normal";
  const tlSize = options?.__responsive?.tablet?.size;
  const dtSize = options?.__responsive?.desktop?.size;

  /*================== collect parts =================*/
  const Button: Partial<RequiredParts & OptionalParts> = {};

  /*================== build Root =================*/
  const rootClasses = style([
    staticStyles.root,
    sizeVariants[size].shared,
    sizeVariants[size].root,
    responsive({
      tablet: tlSize && sizeVariants[tlSize].shared,
      desktop: dtSize && sizeVariants[dtSize].shared,
    }),
    responsive({
      tablet: tlSize && sizeVariants[tlSize].root,
      desktop: dtSize && sizeVariants[dtSize].root,
    }),
    options?.__override?.Root ?? {},
  ]);

  const rootArgs: Parameters<typeof button>[0] = { className: rootClasses };

  const Root = button(rootArgs);

  addFunctionSerializer(Root, {
    importPath: "@repo/components/primitives",
    importName: "button",
    args: [rootArgs],
  });

  Button.Root = Root;

  if (parts.includes("Body" as P)) {
    /*================== build body =================*/
    const bodyClasses = style([
      staticStyles.body,
      options?.__override?.["Body" as P] ?? {},
    ]);

    const bodyArgs: Parameters<typeof div>[0] = { className: bodyClasses };

    const Body = div(bodyArgs);

    addFunctionSerializer(Body, {
      importPath: "@repo/components/primitives",
      importName: "div",
      args: [bodyArgs],
    });

    Button.Body = Body;
  }

  if (parts.includes("Icon" as P)) {
    /*================== build icon =================*/
    const iconClasses = style([
      staticStyles.icon,
      sizeVariants[size].icon,
      responsive({
        tablet: tlSize && sizeVariants[tlSize].icon,
        desktop: dtSize && sizeVariants[dtSize].icon,
      }),
      options?.__override?.["Icon" as P] ?? {},
    ]);

    const iconArgs: Parameters<typeof div>[0] = { className: iconClasses };

    const Icon = div(iconArgs);

    addFunctionSerializer(Icon, {
      importPath: "@repo/components/primitives",
      importName: "div",
      args: [iconArgs],
    });

    Button.Icon = Icon;
  }
  if (parts.includes("Text" as P)) {
    /*================== build text =================*/
    const textClasses = style([
      staticStyles.text,
      sizeVariants[size].text,
      responsive({
        tablet: tlSize && sizeVariants[tlSize].text,
        desktop: dtSize && sizeVariants[dtSize].text,
      }),
      options?.__override?.["Text" as P] ?? {},
    ]);

    const textArgs: Parameters<typeof div>[0] = { className: textClasses };

    const Text = div(textArgs);

    addFunctionSerializer(Text, {
      importPath: "@repo/components/primitives",
      importName: "div",
      args: [textArgs],
    });

    Button.Text = Text;
  }

  return Button as Button<P>;
}

export default registerButton;
