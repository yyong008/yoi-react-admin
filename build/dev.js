const WebpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')
const conf = require('./webpack-chain/webpack.config.dev.chain')

delete conf.devServer

const compiler = webpack(conf, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(stats);
    console.log("构建过程出错！");
  } else {
    console.log("构建成功！");
  }
})

const devServer = new WebpackDevServer(compiler, {
  host: '0.0.0.0',
  open: true,
})

devServer.listen(9090)