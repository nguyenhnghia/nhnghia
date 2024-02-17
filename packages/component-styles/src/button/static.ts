import type { StyleRule } from "@vanilla-extract/css";
import { sizeVars } from "./variants/size.css";

/*================== TYPING =================*/
type ButtonStaticStyles = {
  root: StyleRule;
  icon: StyleRule;
  text: StyleRule;
};

/*================== STYLES =================*/
const root: ButtonStaticStyles["root"] = {
  // consume vars
  gap: sizeVars.space,
  height: sizeVars.height,
  paddingLeft: sizeVars.space,
  paddingRight: sizeVars.space,
  // static
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: "fit-content",
  border: "1px solid currentcolor",
};

const icon: ButtonStaticStyles["icon"] = {
  // consume vars
  fontSize: sizeVars.contentHeight,
  height: sizeVars.contentHeight,
  width: sizeVars.contentHeight,
  // static
  flex: "0 0 auto",
};

const text: ButtonStaticStyles["text"] = {
  // consume vars
  fontSize: sizeVars.fontSize,
  lineHeight: sizeVars.contentHeight,
  // static
  userSelect: "none",
  selectors: {
    "&:first-child": {
      paddingLeft: "0.4ch",
    },
    "&:last-child": {
      paddingRight: "0.4ch",
    },
  },
};

/*================== EXPOSE =================*/
const staticStyles: ButtonStaticStyles = { root, icon, text };

export default staticStyles;
