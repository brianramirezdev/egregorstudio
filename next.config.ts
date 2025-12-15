import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'totisanz.com',
                pathname: '/images/**',
            },
        ],
    },
};

export default nextConfig;
