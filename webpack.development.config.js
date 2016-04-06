var path = require('path')
var webpack = require('webpack')

var config = {

  entry: [
    'src/App.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },

  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        include: [path.join(__dirname, 'src')]
      },
      {
        test: /\.css?$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.json?$/,
        loaders: ['raw']
      },
      {
        test: /\.png$/,
        loader: 'url',
        query: { limit: 8192, mimetype: 'image/png' }
      }
    ]
  }
}

module.exports = config
