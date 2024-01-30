import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { responsive } from "../screens.css";
import { body, icon, root, text } from "./partials";
import staticStyles from "./styles";
import type { LayoutVariant } from "./variants/layout.css";
import { layoutVariants } from "./variants/layout.css";
import { shapeVariants, type ShapeVariant } from "./variants/shape.css";
import type { SizeVariant } from "./variants/size.css";
import { sizeVariants } from "./variants/size.css";

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

type RegisterButtonOptions = UIResponsibleVariants<ButtonUIVariants> & {
  __override?: {
    root?: StyleRule;
    body?: StyleRule;
    icon?: StyleRule;
    text?: StyleRule;
  };
};

type Button = {
  Root: ReturnType<typeof root>;
  Body: ReturnType<typeof body>;
  Icon: ReturnType<typeof icon>;
  Text: ReturnType<typeof text>;
};

export function registerButton(options?: RegisterButtonOptions): Button {
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
    importPath: "@repo/components/button/partials",
    importName: "root",
    args: [[rootClasses]],
  });

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
    importPath: "@repo/components/button/partials",
    importName: "body",
    args: [[bodyClasses]],
  });

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
    importPath: "@repo/components/button/partials",
    importName: "icon",
    args: [[iconClasses]],
  });

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
    importPath: "@repo/components/button/partials",
    importName: "text",
    args: [[textClasses]],
  });

  /*================== return =================*/
  return { Root, Body, Icon, Text };
}
