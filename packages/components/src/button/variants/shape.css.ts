import { assignVars, createThemeContract } from "@vanilla-extract/css";
import type { StyleRuleByDevice } from "../../screens.css";

/*================== TYPING =================*/
type ButtonShape = {
  root: StyleRuleByDevice;
};

/*================== VARIABLES =================*/
const shapeVars = createThemeContract({
  root: { borderRadius: null },
});

const rectangle: ButtonShape = {
  root: {
    vars: assignVars(shapeVars.root, { borderRadius: "2px" }),
  },
};

const rounded: ButtonShape = {
  root: {
    vars: assignVars(shapeVars.root, { borderRadius: "8px" }),
  },
};

const capsule: ButtonShape = {
  root: {
    vars: assignVars(shapeVars.root, { borderRadius: "9999px" }),
  },
};

/*================== EXPOSE =================*/
const shapeVariants = { rectangle, rounded, capsule };

type ShapeVariant = keyof typeof shapeVariants;

export { shapeVariants, shapeVars };
export type { ShapeVariant };
