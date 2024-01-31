import type { StyleRule } from "@vanilla-extract/css";
import { sizeVars } from "./variants/size.css";

type ButtonStaticStyles = {
  root: StyleRule;
  body: StyleRule;
  icon: StyleRule;
  text: StyleRule;
};

const staticStyles: ButtonStaticStyles = {
  root: {
    // consume vars
    height: sizeVars.root.height,
    paddingLeft: sizeVars.shared.space,
    paddingRight: sizeVars.shared.space,
  },
  body: {
    // consume vars
    gap: sizeVars.shared.space,
    // static
    display: "flex",
    alignItems: "center",
  },
  icon: {
    // consume vars
    fontSize: sizeVars.icon.edge,
    height: sizeVars.icon.edge,
    width: sizeVars.icon.edge,
  },
  text: {
    // consume vars
    fontSize: sizeVars.text.fontSize,
    lineHeight: sizeVars.text.lineHeight,
  },
};

export default staticStyles;
