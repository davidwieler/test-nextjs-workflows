/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // the project has ESLint errors.
    // Linting will happen at the Github workflow step, not on builds.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // the project has TS Errors errors.
    // TS check will happen at the Github workflow step, not on builds.
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
