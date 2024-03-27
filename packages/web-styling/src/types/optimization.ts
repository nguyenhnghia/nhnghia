import type { ButtonBuildTokens } from "./configurations";

export enum OptimizationUnit {
  Utility = "utilities",
  Component = "components",
}

export type BuildScope = `(${string})`;

export type ComponentBuildTokens = `${BuildScope}${ButtonBuildTokens}`;

export type UtilityBuildTokens = `${BuildScope}${string}`;

export type OptimizationConfig = Record<OptimizationUnit, { directory: string; name: string; path: string }>;

export type GeneratedClasses = {
  [OptimizationUnit.Component]: Partial<Record<ComponentBuildTokens, string>>;
  [OptimizationUnit.Utility]: Partial<Record<UtilityBuildTokens, string>>;
};
