const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack =require('webpack')
const CssMinimizerPlugin= require('css-minimizer-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    hot:true,
    contentBase: '/dist' ,// 告诉dev-server 将dist下的文件server到http://localhost
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options:{
          //   presets:['@babel/preset-env']
          // }
        }
      },
      {
        test: /\.(jpe?g|png|gif)/i,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name][contenthash:8].[ext]', // [hash]
            esModule: false // 启用commonJS 模块
          }
        }]
      }
      // {
      //   test: /\.(jpe?g|png|gif)/i,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[ext]'
      //     }
      //   }],
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['search'],
      minify:true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ],
  optimization:{
    // 生成环境压缩
    minimizer:[
      new CssMinimizerPlugin()
    ],
    minimize:true
  }
}