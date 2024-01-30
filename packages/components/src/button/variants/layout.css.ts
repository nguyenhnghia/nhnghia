import { assignVars, createThemeContract } from "@vanilla-extract/css";
import type { StyleRuleByDevice } from "../../screens.css";

/*================== TYPING =================*/
type ButtonLayout = {
  body: StyleRuleByDevice;
};

/*================== VARIABLES =================*/
const layoutVars = createThemeContract({
  body: { justify: null, marginX: null, width: null },
});

const wide: ButtonLayout = {
  body: {
    vars: assignVars(layoutVars.body, {
      justify: "space-between",
      marginX: "??",
      width: "??",
    }),
  },
};

const tight: ButtonLayout = {
  body: {
    vars: assignVars(layoutVars.body, {
      justify: "??",
      marginX: "auto",
      width: "fit-content",
    }),
  },
};

/*================== EXPOSE =================*/
const layoutVariants = { wide, tight };

type LayoutVariant = keyof typeof layoutVariants;

export { layoutVariants, layoutVars };
export type { LayoutVariant };
