const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  outputDir: './static',   // build输出目录
  indexPath: './templates/index.html',   // 打包后index的位置
  assetsDir: 'static/', // 静态资源目录（js, css, img）
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn'
      }
    }
  }


});
