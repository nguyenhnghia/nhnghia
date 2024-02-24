import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { clsx } from "clsx";
import type { Screen, StaticStyleRule } from "../_types/common";
import getClasses from "../_utils/get-classes";
import { getDummyTag } from "../_utils/get-dummy-tag";
import responsive from "../helpers/responsive";

/*================== VARIANTS =================*/
const tiny: StaticStyleRule = {
  borderRadius: 2,
};

const small: StaticStyleRule = {
  borderRadius: 4,
};

const normal: StaticStyleRule = {
  borderRadius: 6,
};

const medium: StaticStyleRule = {
  borderRadius: 8,
};

const large: StaticStyleRule = {
  borderRadius: 12,
};

const huge: StaticStyleRule = {
  borderRadius: 16,
};

const full: StaticStyleRule = {
  borderRadius: 9999,
};

const variants = { tiny, small, normal, medium, large, huge, full };
type ConnerVariant = keyof typeof variants;

/*================== TYPING =================*/
declare global {
  /* eslint-disable-next-line no-var --
  we need this global var
  to save config as <screen>-<variant>
  to prevent VE from generating same class among requests
  eg: if there is already a request for conner = 'tiny' at mobile screen,
  we'll use that generated class for next similar request
  */
  var corner: Partial<
    Record<`${"any" | Screen}-${"any" | ConnerVariant}`, string>
  >;
}

/*================== MAIN LOGIC =================*/
globalThis.corner = {};

function conner(
  base: ConnerVariant,
  tablet?: ConnerVariant,
  desktop?: ConnerVariant,
): string {
  /*================== build classes =================*/
  const classes = [
    getClasses(variants[base], globalThis.corner, `mobile-${base}`),
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
        `desktop-${desktop}`,
      ),
  ];

  addFunctionSerializer(getDummyTag(classes), {
    importPath: "#dummy-tag",
    importName: "getDummyTag",
    args: [classes],
  });

  return clsx(classes);
}

export default conner;
