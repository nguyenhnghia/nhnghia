import { createVar } from "@vanilla-extract/css";
import type { StyleRuleWithoutMediaQueries } from "../../../_types/common";
import type { ButtonSizes } from "../../../_types/components/button";

const sizeVars = {
  height: createVar(),
  contentHeight: createVar(),
  space: createVar(),
  fontSize: createVar(),
};

const sizeVariants: Record<ButtonSizes, StyleRuleWithoutMediaQueries> = {
  tiny: {
    vars: {
      [sizeVars.height]: "28px",
      [sizeVars.space]: "4px",
      [sizeVars.fontSize]: "14px",
      [sizeVars.contentHeight]: "18px",
    },
  },
  small: {
    vars: {
      [sizeVars.height]: "34px",
      [sizeVars.space]: "6px",
      [sizeVars.fontSize]: "16px",
      [sizeVars.contentHeight]: "20px",
    },
  },
  normal: {
    vars: {
      [sizeVars.height]: "40px",
      [sizeVars.space]: "8px",
      [sizeVars.fontSize]: "18px",
      [sizeVars.contentHeight]: "22px",
    },
  },
  medium: {
    vars: {
      [sizeVars.height]: "48px",
      [sizeVars.space]: "10px",
      [sizeVars.fontSize]: "22px",
      [sizeVars.contentHeight]: "26px",
    },
  },
  large: {
    vars: {
      [sizeVars.height]: "54px",
      [sizeVars.space]: "12px",
      [sizeVars.fontSize]: "24px",
      [sizeVars.contentHeight]: "28px",
    },
  },
  huge: {
    vars: {
      [sizeVars.height]: "60px",
      [sizeVars.space]: "14px",
      [sizeVars.fontSize]: "26px",
      [sizeVars.contentHeight]: "30px",
    },
  },
};

export { sizeVariants, sizeVars };
