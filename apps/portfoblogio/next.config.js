const bundleAnalyzer = require("@next/bundle-analyzer");
const vanillaExtract = require("@vanilla-extract/next-plugin");

//#region - logics with env
const isDevMode = process.env.NODE_ENV === "development";
const isRunAnalyze = process.env.RUN_ANALYZE === "true";
//#endregion

//#region - base config
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/icons", "@repo/web-styling"],
  webpack: (config, { dev }) => {
    config.optimization.minimize = !dev;
    return config;
  },
};
//#endregion

//#region - vanilla extract plugin
const withVanillaExtract = vanillaExtract.createVanillaExtractPlugin({
  identifiers: isDevMode ? "debug" : "short",
});
//#endregion

//#region - bundle pluganalyzer plugin
const withBundleAnalyze = (config) => {
  return bundleAnalyzer({
    enabled: isRunAnalyze,
    openAnalyzer: false,
  })(config);
};
//#endregion

module.exports = withBundleAnalyze(withVanillaExtract(nextConfig));
