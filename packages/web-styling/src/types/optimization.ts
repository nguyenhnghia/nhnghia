import type { ButtonBuildTokens } from "./configurations";

export enum OptimizationUnit {
  Utility = "utilities",
  Component = "components",
}

export type ComponentBuildTokens = ButtonBuildTokens;

export type OptimizationConfig = Record<OptimizationUnit, { directory: string; name: string; path: string }>;

export type GeneratedClasses = {
  [OptimizationUnit.Component]: Partial<Record<ComponentBuildTokens, string>>;
  [OptimizationUnit.Utility]: Partial<Record<string, string>>;
};
