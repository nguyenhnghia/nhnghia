import { style, type ComplexStyleRule } from "@vanilla-extract/css";
import type { GeneratedClasses, OptimizationUnit } from "../types/optimization";
import { getGeneratedClasses, setGeneratedClasses } from "./optimization";

export function createSelector(): string {
  return style({});
}

export default function createClassName<Unit extends OptimizationUnit, Key extends keyof GeneratedClasses[Unit]>(
  rules: ComplexStyleRule,
  optimizeUnit: Unit,
  id: Key,
): GeneratedClasses[Unit][Key] | string {
  // skip cache & add debug id in development
  if (process.env.NODE_ENV === "development") {
    const debugId = `${optimizeUnit}-${String(id)}`;
    return style(rules, debugId);
  }

  // get generated classes (cache store)
  const generatedClasses = getGeneratedClasses(optimizeUnit);

  // cache hit
  if (id in generatedClasses && typeof generatedClasses[id] === "string") {
    return generatedClasses[id];
  }

  // cache miss
  const className = style(rules);
  setGeneratedClasses(optimizeUnit, { ...generatedClasses, [id]: className });
  return className;
}
