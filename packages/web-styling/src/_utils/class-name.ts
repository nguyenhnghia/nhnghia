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
  // skip cache when NODE_ENV is development
  if (process.env.NODE_ENV === "development") return style(rules);

  // get cache data
  const cache = getCacheStore(storeKey);

  // cache hit
  if (key in cache && typeof cache[key] === "string") return cache[key];

  // cache miss
  const className = style(rules);
  cacheResult(storeKey, { ...cache, [key]: className });
  return className;
}