const webpack = require('webpack')
const conf = require('./webpack/webpack.config.build')

const compiler = webpack(conf, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(stats);
    console.log("构建过程出错！");
  } else {
    console.log("构建成功！");
  }
})
