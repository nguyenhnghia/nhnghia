import { style, type ComplexStyleRule } from "@vanilla-extract/css";
import type { GeneratedClasses, OptimizationUnit } from "../types";
import { getGeneratedClasses, setGeneratedClasses } from "./optimization";

export function createSelector(): string {
  return style({});
}

export default function createClassName<Unit extends OptimizationUnit, BuildId extends keyof GeneratedClasses[Unit]>(
  rules: ComplexStyleRule,
  optimizationUnit: Unit,
  buildId: BuildId,
): GeneratedClasses[Unit][BuildId] | string {
  // skip cache & add debug id in development
  if (process.env.NODE_ENV === "development") {
    const debugId = `${optimizationUnit}-${String(buildId)}`;
    return style(rules, debugId);
  }

  // get generated classes (cache store)
  const generatedClasses = getGeneratedClasses(optimizationUnit);

  // cache hit
  if (buildId in generatedClasses && typeof generatedClasses[buildId] === "string") {
    return generatedClasses[buildId];
  }

  // cache miss
  const className = style(rules);
  setGeneratedClasses(optimizationUnit, { ...generatedClasses, [buildId]: className });
  return className;
}
