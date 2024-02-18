import type { ComplexStyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

export default function getClasses<
  S extends Partial<Record<string, string>>,
  K extends keyof S,
>(rules: ComplexStyleRule, store: S, key: K): string {
  if (!store[key]) {
    store[key] = style(rules) as S[K];
  }
  return store[key] ?? "";
}
