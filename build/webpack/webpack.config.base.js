const path = require('path')
const webpackbar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.join(__dirname, '../..' + '/src/main.js')
  },
  output: {
    path: path.join(__dirname, '../..', '/dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    alias: {
      '@assets': path.join(__dirname, '../..', 'src/assets'),
      '@components': path.join(__dirname, '..', 'src/components'),
      '@route': path.join(__dirname, '../..', 'src/route'),
      '@store': path.join(__dirname, '../..', 'src/store'),
      '@views': path.join(__dirname, '../..', 'src/views')
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.(png|jpg|jpeg|svg|webp|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Yoi-React-Admin',
      template: path.join(__dirname, '../..', '/public/index.html')
    }),
    new webpackbar()
  ],
  stats: 'errors-only'
}