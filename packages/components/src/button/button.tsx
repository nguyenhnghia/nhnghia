import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { responsive } from "../screens.css";
import { root } from "./partials/root";
import staticStyles from "./styles";
import type { SizeVariant } from "./variants/size.css";
import { sizeVariants } from "./variants/size.css";

type ButtonUIVariants = {
  /**
   * @defaultValue `normal for mobile, undefined for tablet view & desktop view`
   */
  size?: SizeVariant;
};

type RegisterButtonOptions = UIResponsibleVariants<ButtonUIVariants> & {
  __override?: {
    root?: StyleRule;
  };
};

type Button = {
  Root: ReturnType<typeof root>;
};

export function registerButton(options?: RegisterButtonOptions): Button {
  /*================== get variants =================*/
  const size = options?.size ?? "normal";
  const tabletSize = options?.__responsive?.tablet?.size;
  const desktopSize = options?.__responsive?.desktop?.size;

  /*================== build Root =================*/
  const rootClasses = style([
    staticStyles.root,
    sizeVariants[size],
    responsive({
      tablet: tabletSize && sizeVariants[tabletSize],
      desktop: desktopSize && sizeVariants[desktopSize],
    }),
    options?.__override?.root ?? {},
  ]);

  const Root = root(rootClasses);

  addFunctionSerializer(Root, {
    importPath: "@repo/components/button/partials",
    importName: "root",
    args: [[rootClasses]],
  });

  /*================== return =================*/
  return { Root };
}
