const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlInlineCssWebpackPlugin = require('html-inline-css-webpack-plugin').default
// const autoprefixer = require('autoprefixer')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index-server.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        port: 8081,
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
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: ['search'],
            minify: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlInlineCssWebpackPlugin(),
        new HtmlWebpackExternalsPlugin({
            externals: [{
                module: 'vue',
                entry: 'https://lib.baomitu.com/vue/2.6.12/vue.min.js',
                global: 'vue'
            }]
        }),
        // new FriendlyErrorsWebpackPlugin({
        //   clearConsole:true
        // })
    ],
    optimization: {
        // 生成环境压缩
        minimizer: [
            new CssMinimizerPlugin()
        ],
        // 开发环境压缩
        minimize: true,
        splitChunks: {
            minSize: 0,
            minRemainingSize: 0,
            minChunks: 1,
            cacheGroups: {
                test: {
                    name: 'test',
                    chunks: 'initial',
                    minChunks: 1,
                }
            }
        }
    },
    stats: 'errors-only'
}