/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
  experimental: {
    // appDir: true,
    appDir: false,
  },
  // eslint-disable-next-line no-undef
  assetPrefix: isProduction ? "/{nokayaafrica}" : "",
};

module.exports = nextConfig;
