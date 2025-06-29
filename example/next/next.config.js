const { withZakelUI } = require("@zakel-ui/next-plugin");
// import _withTM from 'next-transpile-modules'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withZakelUI({
  wasm: true, 
  webpack(config) {
    return config;
  },
});
