const path = require('path');
const webpack = require('webpack');

const webpack_base_config = {
  mode: 'development',

  // 入口起点
  // @see https://www.webpackjs.com/concepts/#入口-entry-
  // @see https://www.webpackjs.com/configuration/#选项
  // @see [单个入口-简写-语法](https://www.webpackjs.com/concepts/entry-points/#单个入口-简写-语法)
  entry: {
    app: './src/components/index.js',
    vendor: ['lodash']
  },

  // 出口配置
  // @see https://www.webpackjs.com/concepts/#出口-output-
  // @see [用法](https://www.webpackjs.com/concepts/output/#用法-usage-)
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 每次生成的文件会带 `hash`
    // filename: 'app-[hash].js'
    // filename: 'app.js'
    // @see [webpack 第三方库处理](https://www.cnblogs.com/myqianlan/p/5626505.html)
    filename: "[name].js", // [name].[chunkHash:8].js
    publicPath: '',
    chunkFilename: "[name].js",
  },

  // @err LoadConfigError: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
  // @see [](https://blog.csdn.net/github_36487770/article/details/80228147)
  // @see [官网解决方案](https://webpack.js.org/plugins/split-chunks-plugin/)
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

module.exports = webpack_base_config;