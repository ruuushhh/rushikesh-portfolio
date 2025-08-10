/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production while allowing some flexibility
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable static exports if needed
  // output: 'export',
}

export default nextConfig
