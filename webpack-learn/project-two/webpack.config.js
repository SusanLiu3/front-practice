const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default
const {
    entryObj,
    htmlWebpackList
} = require('./setMPA')

module.exports = {
    entry: entryObj,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    devServer: {
        hot: true,
        contentBase: '/dist', // 告诉dev-server 将dist下的文件server到http://localhost
    },
    mode: 'development',
    module: {
        rules: [{
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    'autoprefixer', {
                                        overrideBrowserslist: [
                                            "last 2 versions",
                                            "not ie<=8"
                                        ]
                                    }
                                ]
                            ]
                        }
                    }
                }, {
                    loader: 'px2rem-loader',
                    options: {
                        remUni: 75,
                        remPrecision: 8
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                // use: ['style-loader', 'css-loader', 'sass-loader']
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
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
                }, {
                    loader: 'px2rem-loader',
                    options: {
                        remUni: 75,
                        remPrecision: 8
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
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        ...htmlWebpackList
    ],
    optimization: {
        // 生成环境压缩
        minimizer: [
            new CssMinimizerPlugin()
        ],
        // 开发环境压缩
        minimize: true
    }
}