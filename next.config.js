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
};

module.exports = nextConfig;
