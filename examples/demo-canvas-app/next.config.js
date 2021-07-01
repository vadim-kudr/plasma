const path = require('path');
const { PUBLIC_URL, PR_NAME } = process.env;
const basePath = PUBLIC_URL ? PUBLIC_URL + (PR_NAME ? '-' : '') + PR_NAME : '';

module.exports = {
    basePath,
    assetPrefix: basePath,
    reactStrictMode: true,
    trailingSlash: true,
    webpack: (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    react: path.resolve(__dirname, 'node_modules', 'react'),
                    'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom'),
                    'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
                },
            },
        };
    },
    // exportPathMap: async function (defaultPathMap, { dev }) {
    //     console.log(defaultPathMap, dev);
    //     if (dev) {
    //         return defaultPathMap;
    //     }
    //     return {
    //       '/': { page: '/' },
    //       '/about': { page: '/about' },
    //       '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
    //       '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
    //       '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    //     }
    //   },
};
