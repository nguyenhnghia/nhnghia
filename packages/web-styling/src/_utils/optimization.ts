import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { OPTIMIZING_CONFIG } from "../configurations/optimization";
import type { GeneratedClasses, OptimizationUnit } from "../types";

export function getGeneratedClasses<Unit extends OptimizationUnit>(unit: Unit): GeneratedClasses[Unit] {
  try {
    const generatedClasses = readFileSync(OPTIMIZING_CONFIG[unit].path, "utf-8");
    return JSON.parse(generatedClasses) as GeneratedClasses[Unit];
  } catch (error) {
    return {};
  }
}

export function setGeneratedClasses<Unit extends OptimizationUnit>(unit: Unit, data: GeneratedClasses[Unit]): boolean {
  try {
    const jsonData = JSON.stringify(data, undefined, "\t");
    mkdirSync(OPTIMIZING_CONFIG[unit].directory, { recursive: true });
    writeFileSync(OPTIMIZING_CONFIG[unit].path, jsonData);
    return true;
  } catch (error) {
    return false;
  }
}
