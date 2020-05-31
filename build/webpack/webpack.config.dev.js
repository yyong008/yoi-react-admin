const merge = require('webpack-merge')
const baseConf = require('./webpack.config.base')

module.exports = merge(baseConf, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 9090,
    open: false,
    quiet: true,
    overlay: true,
    inline: true,
    noInfo: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
})