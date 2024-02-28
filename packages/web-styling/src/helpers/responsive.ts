import { type StyleRule } from "@vanilla-extract/css";
import type {
  ResponsiveStyleRule,
  StyleRuleWithoutMediaQueries,
} from "../_types/common";
import {
  DESKTOP_BREAK_POINT,
  TABLET_BREAK_POINT,
} from "../constants/break-points";
import {
  DESKTOP_LAYER,
  MOBILE_LAYER,
  TABLET_LAYER,
} from "../templates/beta.responsive-layers.css";

function mobile(rule: StyleRuleWithoutMediaQueries): StyleRule {
  return { "@layer": { [MOBILE_LAYER]: rule } };
}

function tablet(rule: StyleRuleWithoutMediaQueries): StyleRule {
  return {
    "@layer": {
      [TABLET_LAYER]: {
        "@media": {
          [TABLET_BREAK_POINT]: rule,
        },
      },
    },
  };
}

function desktop(rule: StyleRuleWithoutMediaQueries): StyleRule {
  return {
    "@layer": {
      [DESKTOP_LAYER]: {
        "@media": {
          [DESKTOP_BREAK_POINT]: rule,
        },
      },
    },
  };
}

function responsive(config: ResponsiveStyleRule): StyleRule {
  const { mobile: mb = {}, tablet: tl = {}, desktop: dt = {} } = config;
  return { ...mobile(mb), ...tablet(tl), ...desktop(dt) };
}

export { desktop, mobile, tablet };
export default responsive;
