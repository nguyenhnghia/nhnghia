import type { CSSProperties } from "@vanilla-extract/css";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { CachedUnits } from "../_configurations/caching";
import cn from "../_utils/class-name";
import slugify from "../_utils/slugify";
import { desktop, mobile, tablet } from "../helpers/responsive";

function classes(
  base: CSSProperties,
  tl?: CSSProperties,
  dt?: CSSProperties,
): string {
  const cls: ClassValue[] = [];

  Object.entries(base).forEach(([key, value]) => {
    cls.push(
      cn(
        mobile({ [key]: value }),
        CachedUnits.Custom,
        slugify(`mobile-${key}-${String(value)}`),
      ),
    );
  });

  if (tl) {
    Object.entries(tl).forEach(([key, value]) => {
      cls.push(
        cn(
          tablet({ [key]: value }),
          CachedUnits.Custom,
          slugify(`tablet-${key}-${String(value)}`),
        ),
      );
    });
  }

  if (dt) {
    Object.entries(dt).forEach(([key, value]) => {
      cls.push(
        cn(
          desktop({ [key]: value }),
          CachedUnits.Custom,
          slugify(`desktop-${key}-${String(value)}`),
        ),
      );
    });
  }

  return clsx(cls);
}

export default classes;
