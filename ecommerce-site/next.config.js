const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', 
  buildExcludes: [
    /middleware-manifest.json$/,
    /_next\/app-build-manifest.json$/
  ],
  swSrc: "public/sw-custom.js",
  sw: "sw.js",
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);