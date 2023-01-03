/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    appDir: false,
  },
  // eslint-disable-next-line no-undef
  assetPrefix: isProduction ? "/{nokayaafrica}" : "",
};

module.exports = nextConfig;
