/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // Linting will happen at the Github workflow step, not on builds.
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
