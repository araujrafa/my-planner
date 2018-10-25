const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');

const webpackPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/stylus.bundle.css'
  }),
  new HtmlWebPackPlugin({
    template: "./src/templates/index.html",
    filename: "./index.html"
  }),
  new Dotenv(),
]

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js',
      './src/stylus/index.styl'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },
  plugins: webpackPlugins,
  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  }
}