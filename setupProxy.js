const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'https://jsonplaceholder.typicode.com', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        '^/api/old-path': '/api/new-path', // rewrite path
        '^/api/remove/path': '/path', // remove base path
    },
};

module.exports = function (app) {
    app.use('/api', createProxyMiddleware(options));
};
