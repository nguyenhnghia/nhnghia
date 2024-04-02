import { style, type CSSProperties, type StyleRule } from "@vanilla-extract/css";
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import createClassName from "../_utils/class-name";
import slugify from "../_utils/slugify";
import { getDesktopRuleBuilder, getMobileRuleBuilder, getTabletRuleBuilder } from "../helpers/responsive";
import type { ClassBuilderConfig } from "../types";
import { OptimizationUnit } from "../types";

type Rule = CSSProperties & {
  selectors?: Record<string, Rule>;
  "@container"?: Record<string, Omit<Rule, "@container">>;
  "@layer"?: Record<string, Omit<Rule, "@layer">>;
  "@media"?: Record<string, Omit<Rule, "@media">>;
  "@supports"?: Record<string, Omit<Rule, "@supports">>;
};

type ClassesBuilderConfig = ClassBuilderConfig & {
  utilization?: {
    /**
     * Set this to true if you want to break properties in selector rules into utilities
     * @defaultValue false
     */
    selector?: boolean;
    /**
     * Set this to true if you want to break properties in container rules into utilities
     * @defaultValue false
     */
    container?: boolean;
    /**
     * Set this to true if you want to break properties in layer rules into utilities
     * @defaultValue false
     */
    layer?: boolean;
    /**
     * Set this to true if you want to break properties in media rules into utilities
     * @defaultValue false
     */
    media?: boolean;
    /**
     * Set this to true if you want to break properties in support rules into utilities
     * @defaultValue false
     */
    support?: boolean;
  };
};

const utilizationEverything: ClassesBuilderConfig["utilization"] = { container: true, layer: true, media: true, selector: true, support: true };

function buildClasses(builder: (rule: StyleRule) => StyleRule, rule: Rule, cachePath: string[], config?: Pick<ClassesBuilderConfig, "scope" | "utilization">): ClassValue[] {
  const scope = config?.scope ?? "any-scope";
  const utilization = config?.utilization;
  const cls: ClassValue[] = [];

  Object.entries(rule).forEach((entry) => {
    const key = entry[0] as keyof Rule;
    const value = entry[1];
    let _builder = builder;
    switch (key) {
      case "selectors":
        if (utilization?.selector) {
          Object.entries(value).forEach(([selector, _value]) => {
            _builder = (r) => builder({ selectors: { [selector]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "selectors", selector];

            cls.push(...buildClasses(_builder, _rule, _cachePath, { scope: config?.scope, utilization: utilizationEverything }));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@container":
        if (utilization?.container) {
          Object.entries(value).forEach(([container, _value]) => {
            _builder = (r) => builder({ "@container": { [container]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@container", container];

            cls.push(...buildClasses(_builder, _rule, _cachePath, { scope: config?.scope, utilization: utilizationEverything }));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@layer":
        if (utilization?.layer) {
          Object.entries(value).forEach(([layer, _value]) => {
            _builder = (r) => builder({ "@layer": { [layer]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@layer", layer];

            cls.push(...buildClasses(_builder, _rule, _cachePath, { scope: config?.scope, utilization: utilizationEverything }));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@media":
        if (utilization?.media) {
          Object.entries(value).forEach(([media, _value]) => {
            _builder = (r) => builder({ "@media": { [media]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@media", media];

            cls.push(...buildClasses(_builder, _rule, _cachePath, { scope: config?.scope, utilization: utilizationEverything }));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      case "@supports":
        if (utilization?.support) {
          Object.entries(value).forEach(([support, _value]) => {
            _builder = (r) => builder({ "@supports": { [support]: r } });
            const _rule = _value as Rule;
            const _cachePath = [...cachePath, "@supports", support];

            cls.push(...buildClasses(_builder, _rule, _cachePath, { scope: config?.scope, utilization: utilizationEverything }));
          });
        } else {
          cls.push(style(_builder({ [key]: value } as StyleRule)));
        }
        break;

      default:
        cls.push(createClassName(builder({ [key]: value }), OptimizationUnit.Utility, `(${scope})${slugify(...cachePath, key, String(value))}`));
    }
  });

  return cls;
}

function classes(config?: ClassesBuilderConfig) {
  return function getClasses(
    /**
     * Style rules for mobile media query
     */
    mobileRule: Omit<Rule, "@layer">,
    /**
     * Style rules for tablet media query
     */
    tabletRule?: Omit<Rule, "@layer">,
    /**
     * Style rules for desktop media query
     */
    desktopRule?: Omit<Rule, "@layer">,
  ): string {
    const scopeConfig = config?.scope;
    const utilizationConfig = config?.utilization;
    const builderConfig = config?.builder;

    const mobile = getMobileRuleBuilder(builderConfig?.mobile);
    const tablet = getTabletRuleBuilder(builderConfig?.tablet);
    const desktop = getDesktopRuleBuilder(builderConfig?.desktop);

    const cls = buildClasses(mobile, mobileRule, ["mobile"], { scope: scopeConfig, utilization: utilizationConfig });
    if (tabletRule) {
      cls.push(buildClasses(tablet, tabletRule, ["tablet"]), { scope: scopeConfig, utilization: utilizationConfig });
    }
    if (desktopRule) {
      cls.push(buildClasses(desktop, desktopRule, ["desktop"]), { scope: scopeConfig, utilization: utilizationConfig });
    }

    return clsx(cls);
  };
}

export default classes;
