import type { DeepPartial } from "../types/common";

export function isObject(target: unknown): boolean {
  return typeof target === "object" && target !== null && !Array.isArray(target);
}

export function mergeObject<T>(original: T, source: DeepPartial<T>): T {
  if (!isObject(original) || !isObject(source)) return original;

  const updatedObject = { ...original };

  for (const key in source) {
    const value = source[key];
    if (value && isObject(value)) {
      updatedObject[key] = mergeObject(original[key], value);
    } else {
      updatedObject[key] = value as T[Extract<keyof T, string>];
    }
  }

  return updatedObject;
}
