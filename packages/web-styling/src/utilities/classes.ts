import {
  style,
  type CSSProperties,
  type StyleRule,
} from "@vanilla-extract/css";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { CachedUnits } from "../_configurations/caching";
import cn from "../_utils/class-name";
import slugify from "../_utils/slugify";
import { desktop, mobile, tablet } from "../helpers/responsive";

type Rule = CSSProperties & {
  selectors?: Record<string, Rule>;
  "@container"?: Record<string, Omit<Rule, "@container">>;
  "@layer"?: Record<string, Omit<Rule, "@layer">>;
  "@media"?: Record<string, Omit<Rule, "@media">>;
  "@supports"?: Record<string, Omit<Rule, "@supports">>;
};

type ClassBuilderConfig = {
  /**
   * Set this to true if you want to break properties in selector rules into utilities
   * @defaultValue false
   */
  utilitiesSelector?: boolean;
  /**
   * Set this to true if you want to break properties in container rules into utilities
   * @defaultValue false
   */
  utilitiesContainer?: boolean;
  /**
   * Set this to true if you want to break properties in layer rules into utilities
   * @defaultValue false
   */
  utilitiesLayer?: boolean;
  /**
   * Set this to true if you want to break properties in media rules into utilities
   * @defaultValue false
   */
  utilitiesMedia?: boolean;
  /**
   * Set this to true if you want to break properties in support rules into utilities
   * @defaultValue false
   */
  utilitiesSupport?: boolean;
};

function buildClasses(
  builder: (rule: StyleRule) => StyleRule,
  rule: Rule,
  cachePath: string[],
  config?: ClassBuilderConfig,
): ClassValue[] {
  const cls: ClassValue[] = [];

  Object.entries(rule).forEach((entry) => {
    const key = entry[0] as keyof Rule;
    const value = entry[1];
    let _builder = builder;
    switch (key) {
      case "selectors":
        if (config?.utilitiesSelector) {
          Object.entries(value).forEach(([selector, _value]) => {
            _builder = (r) => builder({ selectors: { [selector]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "selectors", selector];
            cls.push(...buildClasses(_builder, _rule, _cachePath, config));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@container":
        if (config?.utilitiesContainer) {
          Object.entries(value).forEach(([container, _value]) => {
            _builder = (r) => builder({ "@container": { [container]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@container", container];
            cls.push(...buildClasses(_builder, _rule, _cachePath, config));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@layer":
        if (config?.utilitiesLayer) {
          Object.entries(value).forEach(([layer, _value]) => {
            _builder = (r) => builder({ "@layer": { [layer]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@layer", layer];
            cls.push(...buildClasses(_builder, _rule, _cachePath, config));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@media":
        if (config?.utilitiesMedia) {
          Object.entries(value).forEach(([media, _value]) => {
            _builder = (r) => builder({ "@media": { [media]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@media", media];
            cls.push(...buildClasses(_builder, _rule, _cachePath, config));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@supports":
        if (config?.utilitiesSupport) {
          Object.entries(value).forEach(([support, _value]) => {
            _builder = (r) => builder({ "@supports": { [support]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@supports", support];
            cls.push(...buildClasses(_builder, _rule, _cachePath, config));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      default:
        cls.push(
          cn(
            builder({ [key]: value }),
            CachedUnits.Custom,
            slugify(...cachePath, key, String(value)),
          ),
        );
    }
  });

  return cls;
}

function classes(config?: ClassBuilderConfig) {
  return function getClasses(
    /**
     * Style rules for mobile media query
     */
    mb: Omit<Rule, "@layer">,
    /**
     * Style rules for tablet media query
     */
    tl?: Omit<Rule, "@layer">,
    /**
     * Style rules for desktop media query
     */
    dt?: Omit<Rule, "@layer">,
  ): string {
    const cls = buildClasses(mobile, mb, ["mobile"], config);
    if (tl) cls.push(buildClasses(tablet, tl, ["tablet"]), config);
    if (dt) cls.push(buildClasses(desktop, dt, ["desktop"]), config);

    return clsx(cls);
  };
}

export default classes;
