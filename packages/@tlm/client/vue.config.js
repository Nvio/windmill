module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:9991',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '/' },
      },
    }
  },
};
