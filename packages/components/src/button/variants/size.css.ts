import { assignVars, createThemeContract } from "@vanilla-extract/css";
import type { StyleRuleByDevice } from "../../screens.css";

/*================== VARIABLES =================*/
const sizeVars = createThemeContract({
  root: { height: null, paddingX: null },
});

/*================== VARIANTS =================*/
const tiny: StyleRuleByDevice = {
  vars: assignVars(sizeVars, { root: { height: "28px", paddingX: "4px" } }),
};

const small: StyleRuleByDevice = {
  vars: assignVars(sizeVars, { root: { height: "34px", paddingX: "6px" } }),
};

const normal: StyleRuleByDevice = {
  vars: assignVars(sizeVars, { root: { height: "40px", paddingX: "8px" } }),
};

const medium: StyleRuleByDevice = {
  vars: assignVars(sizeVars, { root: { height: "48px", paddingX: "10px" } }),
};

const large: StyleRuleByDevice = {
  vars: assignVars(sizeVars, { root: { height: "54px", paddingX: "12px" } }),
};

const huge: StyleRuleByDevice = {
  vars: assignVars(sizeVars, { root: { height: "60px", paddingX: "14px" } }),
};

/*================== EXPOSE =================*/
const sizeVariants = { tiny, small, normal, medium, large, huge };
type SizeVariant = keyof typeof sizeVariants;

export { sizeVariants, sizeVars };
export type { SizeVariant };
