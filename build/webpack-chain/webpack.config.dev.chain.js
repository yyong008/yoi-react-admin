const merge = require('webpack-merge')
const Config = require('webpack-chain')
const baseConf = require('./webpack.config.base.chain')

const config = new Config()

config.mode('development')

config.devServer
  .host('0.0.0.0')
  .port('9090')
  .open(false)
  .quiet(true)
  .overlay(true)
  .inline(true)

config.module
  .rule('compile-css')
  .test(/\.css$/)
  .use('styleLoader')
  .loader('style-loader')
  .end()
  .rule('css')
  .use('cssLoader')
  .loader('css-loader')
  .end()
  .rule('postcss')
  .use('postcssLoader')
  .loader('postcss-loader')

config.module
  .rule('compile-scss')
  .test(/\.scss$/)
  .use('style')
  .loader('style-loader')
  .end()
  .rule('css')
  .use('cssLoader')
  .loader('css-loader')
  .end()
  .rule('postcss')
  .use('postcssLoader')
  .loader('postcss-loader')
  .end()
  .rule('postcss')
  .use('scssLoader')
  .loader('sass-loader')

module.exports = merge(baseConf, config.toConfig())