const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
        return config;
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/app',
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                // Applies to all routes
                source: "/:path*",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store, max-age=0"
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
