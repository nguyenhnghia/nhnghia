import type { CSSProperties } from "@vanilla-extract/css";
import { clsx } from "clsx";
import { CachedUnits } from "../_configurations/caching";
import type { ConnerVariants } from "../_types/utilities/conner";
import cn from "../_utils/class-name";
import { desktop, mobile, tablet } from "../helpers/responsive";

type ConnerVariantStyleRule = Pick<CSSProperties, "borderRadius">;

const variants: Record<ConnerVariants, ConnerVariantStyleRule> = {
  tiny: { borderRadius: 2 },
  small: { borderRadius: 4 },
  normal: { borderRadius: 6 },
  medium: { borderRadius: 8 },
  large: { borderRadius: 12 },
  huge: { borderRadius: 16 },
  full: { borderRadius: 9999 },
};

function conner(
  base: ConnerVariants,
  tl?: ConnerVariants,
  dt?: ConnerVariants,
): string {
  const classes = [
    cn(mobile(variants[base]), CachedUnits.Conner, `mobile-${base}`),
    tl && cn(tablet(variants[tl]), CachedUnits.Conner, `tablet-${tl}`),
    dt && cn(desktop(variants[dt]), CachedUnits.Conner, `desktop-${dt}`),
  ];

  return clsx(classes);
}

export type { ConnerVariantStyleRule };
export default conner;
