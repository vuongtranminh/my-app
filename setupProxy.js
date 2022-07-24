const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: 'https://tnhmts.nhsv.vn', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
        '^/c3': '/v4', // rewrite path
        // '^/api/remove/path': '/path', // remove base path
    },
};

module.exports = function (app) {
    app.use('/v4', createProxyMiddleware(options));
};
