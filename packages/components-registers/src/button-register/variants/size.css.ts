import { assignVars, createThemeContract } from "@vanilla-extract/css";
import type { StyleRuleByDevice } from "../../screens.css";

/*================== TYPING =================*/
type ButtonSize = {
  shared: StyleRuleByDevice;
  root: StyleRuleByDevice;
  text: StyleRuleByDevice;
  icon: StyleRuleByDevice;
};

/*================== VARIABLES =================*/
const sizeVars = createThemeContract({
  shared: { space: null },
  root: { height: null },
  text: { fontSize: null, lineHeight: null },
  icon: { edge: null },
});

/*================== VARIANTS =================*/
const tiny: ButtonSize = {
  shared: {
    vars: assignVars(sizeVars.shared, { space: "4px" }),
  },
  root: {
    vars: assignVars(sizeVars.root, { height: "28px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, { fontSize: "14px", lineHeight: "18px" }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "18px" }),
  },
};

const small: ButtonSize = {
  shared: {
    vars: assignVars(sizeVars.shared, { space: "6px" }),
  },
  root: {
    vars: assignVars(sizeVars.root, { height: "34px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, { fontSize: "16px", lineHeight: "20px" }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "20px" }),
  },
};

const normal: ButtonSize = {
  shared: {
    vars: assignVars(sizeVars.shared, { space: "8px" }),
  },
  root: {
    vars: assignVars(sizeVars.root, { height: "40px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, { fontSize: "18px", lineHeight: "22px" }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "22px" }),
  },
};

const medium: ButtonSize = {
  shared: {
    vars: assignVars(sizeVars.shared, { space: "10px" }),
  },
  root: {
    vars: assignVars(sizeVars.root, { height: "48px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, { fontSize: "22px", lineHeight: "26px" }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "26px" }),
  },
};

const large: ButtonSize = {
  shared: {
    vars: assignVars(sizeVars.shared, { space: "12px" }),
  },
  root: {
    vars: assignVars(sizeVars.root, { height: "54px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, { fontSize: "24px", lineHeight: "28px" }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "28px" }),
  },
};

const huge: ButtonSize = {
  shared: {
    vars: assignVars(sizeVars.shared, { space: "14px" }),
  },
  root: {
    vars: assignVars(sizeVars.root, { height: "60px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, { fontSize: "26px", lineHeight: "30px" }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "30px" }),
  },
};

/*================== EXPOSE =================*/
const sizeVariants = { tiny, small, normal, medium, large, huge };
type SizeVariant = keyof typeof sizeVariants;

export { sizeVariants, sizeVars };
export type { ButtonSize, SizeVariant };
