const merge = require('webpack-merge')
const Config = require('webpack-chain')
const baseConf = require('./webpack.config.base.chain')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = new Config()

config.mode('production')

config.module
  .rule('compile-css')
  .test(/\.css$/)
  .use('MiniCssExtractPluginLoader')
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use('cssLoader')
  .loader('css-loader')
  .end()
  .use('postcssLoader')
  .loader('postcss-loader')

config.module
  .rule('compile-css')
  .test(/\.scss$/)
  .use('MiniCssExtractPluginLoader')
  .loader(MiniCssExtractPlugin.loader)
  .end()
  .use('cssLoader')
  .loader('css-loader')
  .end()
  .use('postcssLoader')
  .loader('postcss-loader')
  .end()
  .use('scssLoader')
  .loader('sass-loader')

config.plugin('mini-css')
  .use(MiniCssExtractPlugin, [{ filename: '[name]_[contenthash:8].css' }])

module.exports = merge(baseConf, config.toConfig())
