const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
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
                use: ['style-loader', 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                ['autoprefixer', {
                                    overrideBrowserslist: [
                                        "last 2 versions",
                                        "not ie<=8"
                                    ]
                                }]
                            ]
                        }
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                ['autoprefixer', {
                                    overrideBrowserslist: [
                                        "last 2 versions",
                                        "not ie<=8"
                                    ]
                                }]
                            ]
                        }
                    }
                }]
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
                    loader: 'url-loader',
                    options: {
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
            chunks: ['search']
        }),
        new CleanWebpackPlugin()
        // new MiniCssExtractPlugin({
        //   filename: '[name].[contenthash].css'
        // }),
    ]
}