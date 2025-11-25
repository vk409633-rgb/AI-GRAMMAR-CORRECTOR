/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        // Set to true if you're getting TypeScript errors during build
        ignoreBuildErrors: false,
    },
    eslint: {
        // Set to true if you're getting ESLint errors during build
        ignoreDuringBuilds: false,
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb',
        },
    },
    // Optimize images
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
