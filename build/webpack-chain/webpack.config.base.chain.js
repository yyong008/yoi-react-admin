const path = require('path')
const Config = require('webpack-chain')
const webpackbar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = new Config()

config
  .entry('main')
  .add(path.join(__dirname, '../..' + '/src/main.js'))
  .end()
  .output
  .path(path.join(__dirname, '../..' + '/dist'))
  .filename('[name].bundle.js');

config.resolve.extensions
  .add('.js')
  .add('.jsx')
  .add('.ts')
  .add('.tsx')
  .add('.json')
  .add('.css')
  .add('.scss')

config.resolve.alias
  .set('@assets', path.join(__dirname, '../..', 'src/assets'))
  .set('@components', path.join(__dirname, '../..', 'src/components'))
  .set('@route', path.join(__dirname, '../..', 'src/route'))
  .set('@store', path.join(__dirname, '../..', 'src/store'))
  .set('@views', path.join(__dirname, '../..', 'src/views'))

config.module
  .rule('compile-js')
  .test(/\.js$/)
  .exclude
  .add(/node_modules/)
  .end()
  .use('babel')
  .loader('babel-loader')

config.module
  .rule('compile-jsx')
  .test(/\.jsx$/)
  .exclude
  .add(/node_modules/)
  .end()
  .use('babel')
  .loader('babel-loader')

config.module
  .rule('compile-img')
  .test(/\.(png|jpg|jpeg|svg|webp|gif)$/)
  .use('url')
  .loader('url-loader')
  .options({
    limit: 8192
  })

config.plugin('html')
  .use(HtmlWebpackPlugin, [ { template: path.join(__dirname, '../..', '/public/index.html'), title: 'HAHH'}])

config.plugin('webpackbar')
  .use(webpackbar, [{}])

config.stats('errors-only')

module.exports = config.toConfig();
