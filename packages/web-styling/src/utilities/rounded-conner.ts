import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { clsx } from "clsx";
import getClasses from "../_utils/get-classes";
import { getDummyTag } from "../_utils/get-dummy-tag";
import type { Screen } from "../common-types";
import { responsive, type StyleRuleByDevice } from "../screens.css";

/*================== VARIANTS =================*/
const tiny: StyleRuleByDevice = {
  borderRadius: 2,
};

const small: StyleRuleByDevice = {
  borderRadius: 4,
};

const normal: StyleRuleByDevice = {
  borderRadius: 6,
};

const medium: StyleRuleByDevice = {
  borderRadius: 8,
};

const large: StyleRuleByDevice = {
  borderRadius: 12,
};

const huge: StyleRuleByDevice = {
  borderRadius: 16,
};

const full: StyleRuleByDevice = {
  borderRadius: 9999,
};

const variants = { tiny, small, normal, medium, large, huge, full };
type Variant = keyof typeof variants;

/*================== TYPING =================*/
declare global {
  /* eslint-disable-next-line no-var --
  we need this global var
  to save config as <screen>-<variant>
  to prevent VE from generating same class among requests
  eg: if there is already a request for conner = 'tiny' at mobile screen,
  we'll use that generated class for next similar request
  */
  var corner: Partial<Record<`${"any" | Screen}-${"any" | Variant}`, string>>;
}

/*================== MAIN LOGIC =================*/
globalThis.corner = {};

function getConnerStyles(
  base: Variant,
  tablet?: Variant,
  desktop?: Variant,
): string {
  /*================== build classes =================*/
  const classes = [
    getClasses(variants[base], globalThis.corner, "any-any"),
    tablet &&
      getClasses(
        responsive({
          tablet: variants[tablet],
        }),
        globalThis.corner,
        `tablet-${tablet}`,
      ),
    desktop &&
      getClasses(
        responsive({
          desktop: variants[desktop],
        }),
        globalThis.corner,
        `tablet-${desktop}`,
      ),
  ];

  addFunctionSerializer(getDummyTag(classes), {
    importPath: "#dummy-tag",
    importName: "getDummyTag",
    args: [classes],
  });

  return clsx(classes);
}

export default getConnerStyles;
