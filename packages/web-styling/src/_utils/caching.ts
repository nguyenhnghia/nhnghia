import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import type { CachedUnits } from "../_configurations/caching";
import { CACHE_CONFIG } from "../_configurations/caching";
import type { Screen } from "../_types/common";
import type { ButtonParts, ButtonSizes } from "../_types/components/button";
import type { ConnerVariants } from "../_types/utilities/conner";

export type ButtonSizeCacheStoreKey =
  `${"any" | Screen}-${ButtonParts}-${"any" | ButtonSizes}`;

export type ConnerCacheStoreKey = `${Screen}-${ConnerVariants}`;

export type CacheStore = {
  [CachedUnits.ButtonSize]: Partial<Record<ButtonSizeCacheStoreKey, string>>;
  [CachedUnits.Conner]: Partial<Record<ConnerCacheStoreKey, string>>;
  [CachedUnits.Custom]: Partial<Record<string, string>>;
};

export function getCacheStore<K extends CachedUnits>(
  cacheUnit: K,
): CacheStore[K] {
  try {
    const store = readFileSync(CACHE_CONFIG[cacheUnit].path, "utf-8");
    return JSON.parse(store) as CacheStore[K];
  } catch (error) {
    return {};
  }
}

export function cacheResult<K extends CachedUnits>(
  cacheUnit: K,
  data: CacheStore[K],
): boolean {
  try {
    const jsonData = JSON.stringify(data, undefined, "\t");
    mkdirSync(CACHE_CONFIG[cacheUnit].directory, { recursive: true });
    writeFileSync(CACHE_CONFIG[cacheUnit].path, jsonData);
    return true;
  } catch (error) {
    return false;
  }
}
