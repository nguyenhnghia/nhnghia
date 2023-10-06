//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.RUN_ANALYZE === 'true',
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: true,
  },
};

const plugins = [withNx, withBundleAnalyzer];

module.exports = composePlugins(...plugins)(nextConfig);
