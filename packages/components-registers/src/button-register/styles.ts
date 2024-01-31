import type { StyleRule } from "@vanilla-extract/css";
import { sizeVars } from "./variants/size.css";

type ButtonStaticStyles = {
  root: StyleRule;
  icon: StyleRule;
  text: StyleRule;
};

const root: ButtonStaticStyles["root"] = {
  // consume vars
  gap: sizeVars.shared.space,
  height: sizeVars.root.height,
  paddingLeft: sizeVars.shared.space,
  paddingRight: sizeVars.shared.space,
  // static
  display: "flex",
  alignItems: "center",
};

const icon: ButtonStaticStyles["icon"] = {
  // consume vars
  fontSize: sizeVars.icon.edge,
  height: sizeVars.icon.edge,
  width: sizeVars.icon.edge,
  // static
  flex: "0 0 auto",
};

const text: ButtonStaticStyles["text"] = {
  // consume vars
  fontSize: sizeVars.text.fontSize,
  lineHeight: sizeVars.text.lineHeight,
  // static
  flex: "1 1 auto",
  userSelect: "none",
};

const staticStyles: ButtonStaticStyles = { root, icon, text };

export default staticStyles;
