"use strict";

const webpack = require('webpack');
const PATHS = require('./webpack-paths');

exports.devServer = function(options) {
  return {
    devServer:{
      historyApiFallback: true,
      hot: true, // Enable hot module
      inline: true,
      stats: 'errors-only',
      host: options.host, // http:localhost
      port: options.port, // 3000
      contentBase: './client/dist',
    },
    // Enable multi-pass compilation for enhanced performance
    plugins: [ // Hot module
      new webpack.HotModuleReplacementPlugin({
        multistep: true
      })
    ]
  };
}
// the css loader
exports.css = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
  include: PATHS.css
}
// the file loaders
exports.font = {
  test: /\.ttf$/,
  use: ['file-loader']
}
//Babel loader
exports.babel = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: ['babel-loader']
};
