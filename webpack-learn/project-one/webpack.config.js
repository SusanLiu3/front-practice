const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader , 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash].css'
    }),
  ]
}