import { style, type ComplexStyleRule } from "@vanilla-extract/css";
import type { CachedUnits } from "../_configurations/caching";
import type { CacheStore } from "./caching";
import { cacheResult, getCacheStore } from "./caching";

export function createSelector(): string {
  return style({});
}

export default function cn<
  S extends CachedUnits,
  K extends keyof CacheStore[S],
>(rules: ComplexStyleRule, storeKey: S, key: K): CacheStore[S][K] | string {
  const cache = getCacheStore(storeKey);

  if (typeof cache[key] === "string") return cache[key];

  const value = style(rules);
  cacheResult(storeKey, { ...cache, [key]: value });
  return value;
}
