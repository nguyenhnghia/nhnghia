import type { StyleRule } from "@vanilla-extract/css";
import type { ResponsiveStyleRule } from "../_types/common";
import { DESKTOP, TABLET } from "../constants/break-points";

function responsive({ tablet, desktop }: ResponsiveStyleRule): StyleRule {
  return {
    "@media": {
      [TABLET]: tablet ?? {},
      [DESKTOP]: desktop ?? {},
    },
  };
}

export default responsive;
