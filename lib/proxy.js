const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = {
    startProxy: function(server) {
        server.use('/', createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
                [`^/`]: ''
            }
        }))
    }
}
