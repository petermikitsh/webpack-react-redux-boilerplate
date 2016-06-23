let webpack = require('webpack');
let path = require('path');

module.exports = {
  devtool: 'eval',
  eslint: {
    configFile: path.resolve(__dirname + '/.eslintrc')
  },
  entry: [
    'babel-polyfill',
    'webpack/hot/dev-server',
    './src/components/Entry.jsx'
  ],
  output: {
    path: path.join(__dirname, '/.build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:3010/'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    stats: 'errors-only',
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
