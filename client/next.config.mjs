/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Disable type checking during builds
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
