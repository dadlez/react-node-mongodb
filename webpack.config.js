const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: { filename: 'bundle.js' },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    proxy: {
      '/': {
        target: 'http://localhost:8080/',
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/client/index.html'
    })
  ]
};