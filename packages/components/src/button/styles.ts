import type { StyleRule } from "@vanilla-extract/css";
import { layoutVars, shapeVars, sizeVars } from "./variants";

type ButtonStaticStyles = {
  root: StyleRule;
  body: StyleRule;
  icon: StyleRule;
  text: StyleRule;
};

const staticStyles: ButtonStaticStyles = {
  root: {
    border: "1px solid currentcolor",
    borderRadius: shapeVars.root.borderRadius,
    flexShrink: 0,
    height: sizeVars.root.height,
    paddingLeft: sizeVars.root.paddingX,
    paddingRight: sizeVars.root.paddingX,
  },
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: layoutVars.body.justify,
    marginLeft: layoutVars.body.marginX,
    marginRight: layoutVars.body.marginX,
    width: layoutVars.body.width,
  },
  icon: {
    flexGrow: 0,
    flexShrink: 0,
    fontSize: sizeVars.icon.fontSize,
    height: sizeVars.icon.edge,
    width: sizeVars.icon.edge,
  },
  text: {
    display: "-webkit-box",
    fontSize: sizeVars.text.fontSize,
    lineHeight: sizeVars.text.lineHeight,
    marginLeft: sizeVars.text.marginX,
    marginRight: sizeVars.text.marginX,
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: "1",
    selectors: {
      "&:only-child": {
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  },
};

export default staticStyles;
