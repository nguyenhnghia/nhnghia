import { assignVars, createThemeContract } from "@vanilla-extract/css";
import type { StyleRuleByDevice } from "../../screens.css";

/*================== TYPING =================*/
type ButtonSize = {
  root: StyleRuleByDevice;
  text: StyleRuleByDevice;
  icon: StyleRuleByDevice;
};

/*================== VARIABLES =================*/
const sizeVars = createThemeContract({
  root: { height: null, paddingX: null },
  text: { marginX: null, fontSize: null, lineHeight: null },
  icon: { edge: null, fontSize: null },
});

/*================== VARIANTS =================*/
const tiny: ButtonSize = {
  root: {
    vars: assignVars(sizeVars.root, { height: "28px", paddingX: "4px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, {
      marginX: "4px",
      fontSize: "12px",
      lineHeight: "16px",
    }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "18px", fontSize: "18px" }),
  },
};

const small: ButtonSize = {
  root: {
    vars: assignVars(sizeVars.root, { height: "34px", paddingX: "6px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, {
      marginX: "6px",
      fontSize: "14px",
      lineHeight: "20px",
    }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "20px", fontSize: "20px" }),
  },
};

const normal: ButtonSize = {
  root: {
    vars: assignVars(sizeVars.root, { height: "40px", paddingX: "8px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, {
      marginX: "8px",
      fontSize: "16px",
      lineHeight: "24px",
    }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "22px", fontSize: "22px" }),
  },
};

const medium: ButtonSize = {
  root: {
    vars: assignVars(sizeVars.root, { height: "48px", paddingX: "10px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, {
      marginX: "10px",
      fontSize: "18px",
      lineHeight: "28px",
    }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "26px", fontSize: "26px" }),
  },
};

const large: ButtonSize = {
  root: {
    vars: assignVars(sizeVars.root, { height: "54px", paddingX: "12px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, {
      marginX: "12px",
      fontSize: "24px",
      lineHeight: "32px",
    }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "28px", fontSize: "28px" }),
  },
};

const huge: ButtonSize = {
  root: {
    vars: assignVars(sizeVars.root, { height: "60px", paddingX: "14px" }),
  },
  text: {
    vars: assignVars(sizeVars.text, {
      marginX: "14px",
      fontSize: "26px",
      lineHeight: "36px",
    }),
  },
  icon: {
    vars: assignVars(sizeVars.icon, { edge: "30px", fontSize: "30px" }),
  },
};

/*================== EXPOSE =================*/
const sizeVariants = { tiny, small, normal, medium, large, huge };
type SizeVariant = keyof typeof sizeVariants;

export { sizeVariants, sizeVars };
export type { SizeVariant };
