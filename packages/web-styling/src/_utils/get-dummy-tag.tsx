import type { ClassValue } from "clsx";
import { clsx } from "clsx";

export function getDummyTag(className: ClassValue[]) {
  return function DummyForAnyTag() {
    return <div className={clsx(className)} />;
  };
}
