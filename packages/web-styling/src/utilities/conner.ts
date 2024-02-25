import { addFunctionSerializer } from "@vanilla-extract/css/functionSerializer";
import { clsx } from "clsx";
import { CachedUnits } from "../_configurations/caching";
import type { StaticStyleRule } from "../_types/common";
import type { ConnerVariants } from "../_types/utilities/conner";
import cn from "../_utils/class-name";
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

const variants: Record<ConnerVariants, StaticStyleRule> = {
  tiny,
  small,
  normal,
  medium,
  large,
  huge,
  full,
};

/*================== MAIN LOGIC =================*/
function conner(
  base: ConnerVariants,
  tablet?: ConnerVariants,
  desktop?: ConnerVariants,
): string {
  /*================== build classes =================*/
  const classes = [
    cn(variants[base], CachedUnits.Conner, `mobile-${base}`),
    tablet &&
      cn(
        responsive({ tablet: variants[tablet] }),
        CachedUnits.Conner,
        `tablet-${tablet}`,
      ),
    desktop &&
      cn(
        responsive({ desktop: variants[desktop] }),
        CachedUnits.Conner,
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

/*================== EXPOSE =================*/
export default conner;
