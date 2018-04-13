module.exports = {
  entry: './src/client/index.js',
  output: { filename: 'bundle.js' },
  devServer: {
    contentBase: 'dist/',
    watchContentBase: true
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
  }
};