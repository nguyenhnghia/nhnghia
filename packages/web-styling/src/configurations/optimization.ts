import path from "node:path";
import type { OptimizationConfig } from "../types";
import { OptimizationUnit } from "../types";

export const WEB_STYLING_OPTIMIZING_DIRECTORY = ".web-styling";

//#region - components
export const COMPONENTS_OPTIMIZING_FILE_NAME = `${OptimizationUnit.Component}.json`;

export const COMPONENTS_OPTIMIZING_FILE_PATH = path.join(WEB_STYLING_OPTIMIZING_DIRECTORY, COMPONENTS_OPTIMIZING_FILE_NAME);
//#endregion

//#region - utilities
export const UTILITIES_OPTIMIZING_FILE_NAME = `${OptimizationUnit.Utility}.json`;

export const UTILITIES_OPTIMIZING_FILE_PATH = path.join(WEB_STYLING_OPTIMIZING_DIRECTORY, UTILITIES_OPTIMIZING_FILE_NAME);
//#endregion

export const OPTIMIZING_CONFIG: OptimizationConfig = {
  [OptimizationUnit.Component]: {
    directory: WEB_STYLING_OPTIMIZING_DIRECTORY,
    name: COMPONENTS_OPTIMIZING_FILE_NAME,
    path: COMPONENTS_OPTIMIZING_FILE_PATH,
  },
  [OptimizationUnit.Utility]: {
    directory: WEB_STYLING_OPTIMIZING_DIRECTORY,
    name: UTILITIES_OPTIMIZING_FILE_NAME,
    path: UTILITIES_OPTIMIZING_FILE_PATH,
  },
};
