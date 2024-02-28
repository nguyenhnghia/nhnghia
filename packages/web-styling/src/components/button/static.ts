import type { StyleRule } from "@vanilla-extract/css";
import type { ButtonParts } from "../../_types/components/button";
import { sizeVars } from "./variants/size.css";

const staticStyles: Record<ButtonParts, StyleRule> = {
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
    fontSize: sizeVars.contentHeight,
    height: sizeVars.contentHeight,
    width: sizeVars.contentHeight,

    flex: "0 0 auto",
  },
  text: {
    fontSize: sizeVars.fontSize,
    lineHeight: sizeVars.contentHeight,

    userSelect: "none",
    selectors: {
      "&:first-child": {
        paddingLeft: "0.4ch",
      },
      "&:last-child": {
        paddingRight: "0.4ch",
      },
    },
  },
};

export default staticStyles;
