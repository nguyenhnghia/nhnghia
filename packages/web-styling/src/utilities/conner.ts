import { clsx } from "clsx";
import { CachedUnits } from "../_configurations/caching";
import type { StaticStyleRule } from "../_types/common";
import type { ConnerVariants } from "../_types/utilities/conner";
import cn from "../_utils/class-name";
import { desktop, mobile, tablet } from "../helpers/responsive";

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
  tl?: ConnerVariants,
  dt?: ConnerVariants,
): string {
  /*================== build classes =================*/
  const classes = [
    cn(mobile(variants[base]), CachedUnits.Conner, `mobile-${base}`),
    tl && cn(tablet(variants[tl]), CachedUnits.Conner, `tablet-${tl}`),
    dt && cn(desktop(variants[dt]), CachedUnits.Conner, `desktop-${dt}`),
  ];

  return clsx(classes);
}

/*================== EXPOSE =================*/
export default conner;
