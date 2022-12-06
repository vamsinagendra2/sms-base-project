const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function setupProxy(app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000/",
      secure: true,
      changeOrigin: true,
      cookieDomainRewrite: "localhost",
      pathRewrite: function (path, req) {
        return path.replace("/api", "");
      },
    })
  );
};
