import type { createGlobalTheme } from "@vanilla-extract/css";
import { createGlobalThemeContract, fallbackVar } from "@vanilla-extract/css";
import slugify from "../_utils/slugify";

export const typoTheme = createGlobalThemeContract(
  {
    /**
     * @defaultValue 14px/18px
     */
    tiny: {
      /**
       * @defaultValue 14px
       * */
      fontSize: "--typo-tiny-font-size" as const,
      /**
       * @defaultValue 18px
       * */
      lineHeight: "--typo-tiny-line-height" as const,
    },
    /**
     * @defaultValue 16px/20px
     */
    small: {
      /**
       * @defaultValue 16px
       * */
      fontSize: "--typo-small-font-size" as const,
      /**
       * @defaultValue 20px
       * */
      lineHeight: "--typo-small-line-height" as const,
    },
    /**
     * @defaultValue 18px/24px
     */
    normal: {
      /**
       * @defaultValue 18px
       * */
      fontSize: "--typo-normal-font-size" as const,
      /**
       * @defaultValue 24px
       * */
      lineHeight: "--typo-normal-line-height" as const,
    },
    /**
     * @defaultValue 22px/28px
     */
    medium: {
      /**
       * @defaultValue 22px
       * */
      fontSize: "--typo-medium-font-size" as const,
      /**
       * @defaultValue 28px
       * */
      lineHeight: "--typo-medium-line-height" as const,
    },
    /**
     * @defaultValue 24px/32px
     */
    large: {
      /**
       * @defaultValue 24px
       * */
      fontSize: "--typo-large-font-size" as const,
      /**
       * @defaultValue 32px
       * */
      lineHeight: "--typo-large-line-height" as const,
    },
    /**
     * @defaultValue 26px/34px
     */
    huge: {
      /**
       * @defaultValue 26px
       * */
      fontSize: "--typo-huge-font-size" as const,
      /**
       * @defaultValue 34px
       * */
      lineHeight: "--typo-huge-line-height" as const,
    },
  },
  (value, path) => value ?? slugify(...path),
);

export const typoThemeValue: TypoThemeValue = {
  tiny: {
    fontSize: fallbackVar(typoTheme.tiny.fontSize, "14px"),
    lineHeight: fallbackVar(typoTheme.tiny.lineHeight, "18px"),
  },
  small: {
    fontSize: fallbackVar(typoTheme.small.fontSize, "16px"),
    lineHeight: fallbackVar(typoTheme.small.lineHeight, "20px"),
  },
  normal: {
    fontSize: fallbackVar(typoTheme.normal.fontSize, "18px"),
    lineHeight: fallbackVar(typoTheme.normal.lineHeight, "24px"),
  },
  medium: {
    fontSize: fallbackVar(typoTheme.medium.fontSize, "22px"),
    lineHeight: fallbackVar(typoTheme.medium.lineHeight, "28px"),
  },
  large: {
    fontSize: fallbackVar(typoTheme.large.fontSize, "24px"),
    lineHeight: fallbackVar(typoTheme.large.lineHeight, "32px"),
  },
  huge: {
    fontSize: fallbackVar(typoTheme.huge.fontSize, "26px"),
    lineHeight: fallbackVar(typoTheme.huge.lineHeight, "34px"),
  },
};

export type TypoTheme = typeof typoTheme;
export type TypoThemeValue = Parameters<typeof createGlobalTheme<TypoTheme>>[2];
