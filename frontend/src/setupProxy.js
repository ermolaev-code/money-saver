const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target:
        process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API : 'http://localhost:3001',
      changeOrigin: true,
    })
  )
}
