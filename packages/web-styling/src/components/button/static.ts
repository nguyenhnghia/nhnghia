import type { StyleRule } from "@vanilla-extract/css";
import type { ButtonStyle } from "../../types";
import { sizeVars } from "./variants/size.css";

const staticStyles: Record<ButtonStyle["fragments"], StyleRule> = {
  root: {
    gap: sizeVars.space,
    height: sizeVars.height,
    paddingLeft: sizeVars.space,
    paddingRight: sizeVars.space,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "fit-content",
    border: "1px solid currentcolor",
  },
  icon: {
    width: sizeVars.contentHeight,
    height: sizeVars.contentHeight,

    flex: "0 0 auto",
  },
  text: {
    fontSize: sizeVars.fontSize,
    lineHeight: sizeVars.contentHeight,

    userSelect: "none",
  },
};

export default staticStyles;
