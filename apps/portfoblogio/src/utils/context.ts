export function isDevEnv(): boolean {
  return process.env.NODE_ENV === "development";
}

export function isTestEnv(): boolean {
  return process.env.NODE_ENV === "test";
}

export function isProdEnv(): boolean {
  return process.env.NODE_ENV === "production";
}

export function isServerSide(): boolean {
  return typeof window === "undefined";
}
