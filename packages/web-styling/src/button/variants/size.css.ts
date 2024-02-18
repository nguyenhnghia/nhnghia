import { createVar } from "@vanilla-extract/css";
import type { StyleRuleByDevice } from "../../screens.css";

/*================== VARIABLES =================*/
const sizeVars = {
  height: createVar(),
  contentHeight: createVar(),
  space: createVar(),
  fontSize: createVar(),
};

/*================== VARIANTS =================*/
const tiny: StyleRuleByDevice = {
  vars: {
    [sizeVars.height]: "28px",
    [sizeVars.space]: "4px",
    [sizeVars.fontSize]: "14px",
    [sizeVars.contentHeight]: "18px",
  },
};

const small: StyleRuleByDevice = {
  vars: {
    [sizeVars.height]: "34px",
    [sizeVars.space]: "6px",
    [sizeVars.fontSize]: "16px",
    [sizeVars.contentHeight]: "20px",
  },
};

const normal: StyleRuleByDevice = {
  vars: {
    [sizeVars.height]: "40px",
    [sizeVars.space]: "8px",
    [sizeVars.fontSize]: "18px",
    [sizeVars.contentHeight]: "22px",
  },
};

const medium: StyleRuleByDevice = {
  vars: {
    [sizeVars.height]: "48px",
    [sizeVars.space]: "10px",
    [sizeVars.fontSize]: "22px",
    [sizeVars.contentHeight]: "26px",
  },
};

const large: StyleRuleByDevice = {
  vars: {
    [sizeVars.height]: "54px",
    [sizeVars.space]: "12px",
    [sizeVars.fontSize]: "24px",
    [sizeVars.contentHeight]: "28px",
  },
};

const huge: StyleRuleByDevice = {
  vars: {
    [sizeVars.height]: "60px",
    [sizeVars.space]: "14px",
    [sizeVars.fontSize]: "26px",
    [sizeVars.contentHeight]: "30px",
  },
};

/*================== EXPOSE =================*/
const sizeVariants = { tiny, small, normal, medium, large, huge };
type SizeVariant = keyof typeof sizeVariants;

export { sizeVariants, sizeVars };
export type { SizeVariant };
