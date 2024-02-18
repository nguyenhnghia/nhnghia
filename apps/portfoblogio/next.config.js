const bundleAnalyzer = require("@next/bundle-analyzer");
const vanillaExtract = require("@vanilla-extract/next-plugin");

/*================== LOGICS WITH ENV =================*/
const isDevMode = process.env.NODE_ENV === "development";
const isRunAnalyze = process.env.RUN_ANALYZE === "true";

/*================== BASE CONFIG =================*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/icons", "@repo/web-styling"],
};

/*================== VANILLA EXTRACT PLUGIN =================*/
const withVanillaExtract = vanillaExtract.createVanillaExtractPlugin({
  identifiers: isDevMode ? "debug" : "short",
});

/*================== BUNDLE ANALYZER PLUGIN =================*/
const withBundleAnalyze = (config) => {
  return bundleAnalyzer({
    enabled: isRunAnalyze,
    openAnalyzer: false,
  })(config);
};

module.exports = withBundleAnalyze(withVanillaExtract(nextConfig));
