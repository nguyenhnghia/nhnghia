import type { createGlobalTheme } from "@vanilla-extract/css";
import { createGlobalThemeContract, fallbackVar } from "@vanilla-extract/css";
import slugify from "../_utils/slugify";

export const spaceTheme = createGlobalThemeContract(
  {
    /**
     * @defaultValue 0px
     */
    s00: "--space-s00" as const,
    /**
     * @defaultValue 2px
     */
    s01: "--space-s01" as const,
    /**
     * @defaultValue 4px
     */
    s02: "--space-s02" as const,
    /**
     * @defaultValue 6px
     */
    s03: "--space-s03" as const,
    /**
     * @defaultValue 8px
     */
    s04: "--space-s04" as const,
    /**
     * @defaultValue 10px
     */
    s05: "--space-s05" as const,
    /**
     * @defaultValue 12px
     */
    s06: "--space-s06" as const,
    /**
     * @defaultValue 14px
     */
    s07: "--space-s07" as const,
    /**
     * @defaultValue 16px
     */
    s08: "--space-s08" as const,
    /**
     * @defaultValue 18px
     */
    s09: "--space-s09" as const,
    /**
     * @defaultValue 20px
     */
    s10: "--space-s10" as const,
    /**
     * @defaultValue 22px
     */
    s11: "--space-s11" as const,
    /**
     * @defaultValue 24px
     */
    s12: "--space-s21" as const,
    /**
     * @defaultValue 26px
     */
    s13: "--space-s13" as const,
    /**
     * @defaultValue 28px
     */
    s14: "--space-s14" as const,
    /**
     * @defaultValue 30px
     */
    s15: "--space-s15" as const,
    /**
     * @defaultValue 32px
     */
    s16: "--space-s16" as const,
    /**
     * @defaultValue 34px
     */
    s17: "--space-s17" as const,
    /**
     * @defaultValue 36px
     */
    s18: "--space-s18" as const,
    /**
     * @defaultValue 38px
     */
    s19: "--space-s19" as const,
    /**
     * @defaultValue 40px
     */
    s20: "--space-s20" as const,
    /**
     * @defaultValue 42px
     */
    s21: "--space-s21" as const,
    /**
     * @defaultValue 44px
     */
    s22: "--space-s22" as const,
    /**
     * @defaultValue 46px
     */
    s23: "--space-s23" as const,
    /**
     * @defaultValue 48px
     */
    s24: "--space-s24" as const,
    /**
     * @defaultValue 50px
     */
    s25: "--space-s25" as const,
    /**
     * @defaultValue 52px
     */
    s26: "--space-s26" as const,
    /**
     * @defaultValue 54px
     */
    s27: "--space-s27" as const,
    /**
     * @defaultValue 56px
     */
    s28: "--space-s28" as const,
    /**
     * @defaultValue 58px
     */
    s29: "--space-s29" as const,
    /**
     * @defaultValue 60px
     */
    s30: "--space-s30" as const,
  },
  (value, path) => value ?? slugify(...path),
);

export const spaceThemeValue: SpaceThemeValue = {
  s00: fallbackVar(spaceTheme.s00, "0px"),
  s01: fallbackVar(spaceTheme.s01, "2px"),
  s02: fallbackVar(spaceTheme.s02, "4px"),
  s03: fallbackVar(spaceTheme.s03, "6px"),
  s04: fallbackVar(spaceTheme.s04, "8px"),
  s05: fallbackVar(spaceTheme.s05, "10px"),
  s06: fallbackVar(spaceTheme.s06, "12px"),
  s07: fallbackVar(spaceTheme.s07, "14px"),
  s08: fallbackVar(spaceTheme.s08, "16px"),
  s09: fallbackVar(spaceTheme.s09, "18px"),
  s10: fallbackVar(spaceTheme.s10, "20px"),
  s11: fallbackVar(spaceTheme.s11, "22px"),
  s12: fallbackVar(spaceTheme.s12, "24px"),
  s13: fallbackVar(spaceTheme.s13, "26px"),
  s14: fallbackVar(spaceTheme.s14, "28px"),
  s15: fallbackVar(spaceTheme.s15, "30px"),
  s16: fallbackVar(spaceTheme.s16, "32px"),
  s17: fallbackVar(spaceTheme.s17, "34px"),
  s18: fallbackVar(spaceTheme.s18, "36px"),
  s19: fallbackVar(spaceTheme.s19, "38px"),
  s20: fallbackVar(spaceTheme.s20, "40px"),
  s21: fallbackVar(spaceTheme.s21, "42px"),
  s22: fallbackVar(spaceTheme.s22, "44px"),
  s23: fallbackVar(spaceTheme.s23, "46px"),
  s24: fallbackVar(spaceTheme.s24, "48px"),
  s25: fallbackVar(spaceTheme.s25, "50px"),
  s26: fallbackVar(spaceTheme.s26, "52px"),
  s27: fallbackVar(spaceTheme.s27, "54px"),
  s28: fallbackVar(spaceTheme.s28, "56px"),
  s29: fallbackVar(spaceTheme.s29, "58px"),
  s30: fallbackVar(spaceTheme.s30, "60px"),
};

export type SpaceTheme = typeof spaceTheme;
export type SpaceThemeValue = Parameters<typeof createGlobalTheme<SpaceTheme>>[2];
