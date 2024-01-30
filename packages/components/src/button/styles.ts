import type { StyleRule } from "@vanilla-extract/css";
import { sizeVars } from "./variants";

type ButtonStaticStyles = {
  root: StyleRule;
};

const staticStyles: ButtonStaticStyles = {
  root: {
    height: sizeVars.root.height,
    paddingLeft: sizeVars.root.paddingX,
    paddingRight: sizeVars.root.paddingX,
  },
};

export default staticStyles;
