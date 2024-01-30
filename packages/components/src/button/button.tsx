import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { responsive } from "../screens.css";
import { body } from "./partials/body";
import { icon } from "./partials/icon";
import { root } from "./partials/root";
import { text } from "./partials/text";
import staticStyles from "./styles";
import type { LayoutVariant } from "./variants/layout.css";
import { layoutVariants } from "./variants/layout.css";
import { shapeVariants, type ShapeVariant } from "./variants/shape.css";
import type { SizeVariant } from "./variants/size.css";
import { sizeVariants } from "./variants/size.css";

/*================== TYPING =================*/
type ButtonUIVariants = {
  /**
   * @defaultValue `"wide" for mobile, undefined for tablet & desktop`
   */
  layout?: LayoutVariant;
  /**
   * @defaultValue `"normal" for mobile, undefined for tablet & desktop`
   */
  shape?: ShapeVariant;
  /**
   * @defaultValue `"rectangle" for mobile, undefined for tablet & desktop`
   */
  size?: SizeVariant;
};

type RequiredParts = {
  Root: ReturnType<typeof root>;
};

type OptionalParts = {
  Body: ReturnType<typeof body>;
  Icon: ReturnType<typeof icon>;
  Text: ReturnType<typeof text>;
};

type RegisterButtonOptions<P extends keyof OptionalParts> =
  UIResponsibleVariants<ButtonUIVariants> & {
    __parts: P[];
    __override?: {
      root?: StyleRule;
      body?: StyleRule;
      icon?: StyleRule;
      text?: StyleRule;
    };
  };

type Button<P extends keyof OptionalParts> = RequiredParts &
  Pick<OptionalParts, P>;

/*================== CONSTANTS =================*/
const requiredParts: (keyof RequiredParts)[] = ["Root"];

/*================== MAIN LOGIC =================*/
export function registerButton<P extends keyof OptionalParts>(
  options?: RegisterButtonOptions<P>,
): Button<P> {
  /*================== get parts =================*/
  const parts = [...requiredParts, ...(options?.__parts ?? [])];

  /*================== get variants =================*/
  const layout = options?.layout ?? "wide";
  const tlLayout = options?.__responsive?.tablet?.layout;
  const dtLayout = options?.__responsive?.desktop?.layout;

  const shape = options?.shape ?? "rectangle";
  const tlShape = options?.__responsive?.tablet?.shape;
  const dtShape = options?.__responsive?.desktop?.shape;

  const size = options?.size ?? "normal";
  const tlSize = options?.__responsive?.tablet?.size;
  const dtSize = options?.__responsive?.desktop?.size;

  /*================== collect parts =================*/
  const Button: Partial<RequiredParts & OptionalParts> = {};

  if (parts.includes("Root")) {
    /*================== build Root =================*/
    const rootClasses = style([
      staticStyles.root,
      shapeVariants[shape].root,
      sizeVariants[size].root,
      responsive({
        tablet: tlShape && shapeVariants[tlShape].root,
        desktop: dtShape && shapeVariants[dtShape].root,
      }),
      responsive({
        tablet: tlSize && sizeVariants[tlSize].root,
        desktop: dtSize && sizeVariants[dtSize].root,
      }),
      options?.__override?.root ?? {},
    ]);

    const Root = root(rootClasses);

    addFunctionSerializer(Root, {
      importPath: "@repo/components/button",
      importName: "root",
      args: [[rootClasses]],
    });

    Button.Root = Root;
  }

  if (parts.includes("Body" as P)) {
    /*================== build body =================*/
    const bodyClasses = style([
      staticStyles.body,
      layoutVariants[layout].body,
      responsive({
        tablet: tlLayout && layoutVariants[tlLayout].body,
        desktop: dtLayout && layoutVariants[dtLayout].body,
      }),
      options?.__override?.body ?? {},
    ]);

    const Body = body(bodyClasses);

    addFunctionSerializer(Body, {
      importPath: "@repo/components/button",
      importName: "body",
      args: [[bodyClasses]],
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
      options?.__override?.icon ?? {},
    ]);

    const Icon = icon(iconClasses);

    addFunctionSerializer(Icon, {
      importPath: "@repo/components/button",
      importName: "icon",
      args: [[iconClasses]],
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
      options?.__override?.text ?? {},
    ]);

    const Text = text(textClasses);

    addFunctionSerializer(Text, {
      importPath: "@repo/components/button",
      importName: "text",
      args: [[textClasses]],
    });

    Button.Text = Text;
  }

  return Button as Button<P>;
}
