/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.externals = {
      "custom-cursor-react": "commonjs custom-cursor-react",
    };
    return config;
  },
};

module.exports = nextConfig;
