/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public", 
  register: true,
  skipWaiting: true,
 disable: process.env.NODE_ENV === "development",
  disable: false,
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
