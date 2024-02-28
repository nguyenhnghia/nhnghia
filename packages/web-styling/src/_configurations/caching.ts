import path from "node:path";

export enum CachedUnits {
  ButtonSize = "button-size",
  Conner = "conner",
  Custom = "custom",
}

export type CacheConfig = Record<
  CachedUnits,
  { directory: string; name: string; path: string }
>;

export const WEB_STYLING_CACHE_DIRECTORY = ".web-styling";

/*================== Components =================*/
export const COMPONENTS_CACHE_DIRECTORY = path.join(
  WEB_STYLING_CACHE_DIRECTORY,
  "components",
);

/*================== Components - Button size =================*/
export const BUTTON_CACHE_DIRECTORY = path.join(
  COMPONENTS_CACHE_DIRECTORY,
  "button",
);

export const BUTTON_SIZE_CACHE_FILE_NAME = `${CachedUnits.ButtonSize}.json`;

export const BUTTON_SIZE_CACHE_FILE_PATH = path.join(
  BUTTON_CACHE_DIRECTORY,
  BUTTON_SIZE_CACHE_FILE_NAME,
);

/*================== Utilities =================*/
export const UTILITIES_CACHE_DIRECTORY = path.join(
  WEB_STYLING_CACHE_DIRECTORY,
  "utilities",
);

/*================== Utilities - Conner =================*/
export const CONNER_CACHE_FILE_NAME = `${CachedUnits.Conner}.json`;

export const CONNER_CACHE_FILE_PATH = path.join(
  UTILITIES_CACHE_DIRECTORY,
  CONNER_CACHE_FILE_NAME,
);

/*================== Utilities - Custom =================*/
export const CUSTOM_CACHE_FILE_NAME = `${CachedUnits.Custom}.json`;

export const CUSTOM_CACHE_FILE_PATH = path.join(
  UTILITIES_CACHE_DIRECTORY,
  CUSTOM_CACHE_FILE_NAME,
);

export const CACHE_CONFIG: CacheConfig = {
  [CachedUnits.ButtonSize]: {
    directory: BUTTON_CACHE_DIRECTORY,
    name: BUTTON_SIZE_CACHE_FILE_NAME,
    path: BUTTON_SIZE_CACHE_FILE_PATH,
  },
  [CachedUnits.Conner]: {
    directory: UTILITIES_CACHE_DIRECTORY,
    name: CONNER_CACHE_FILE_NAME,
    path: CONNER_CACHE_FILE_PATH,
  },
  [CachedUnits.Custom]: {
    directory: UTILITIES_CACHE_DIRECTORY,
    name: CUSTOM_CACHE_FILE_NAME,
    path: CUSTOM_CACHE_FILE_PATH,
  },
};
