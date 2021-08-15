const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin,
} = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const curPath = process.cwd()
process.chdir(`${curPath}/smoke/template`)
const files = glob.sync('./src/**/index.js')
const entryObj = {}
const htmlWebpackList = []

files.forEach((file) => {
    const match = file.match(/src\/(.*)\/index\.js/)
    const fileName = match[1]
    entryObj[fileName] = file
    htmlWebpackList.push(new HtmlWebpackPlugin({
        filename: `${fileName}.html`,
        template: `./src/${fileName}/index.html`,
        chunks: [fileName],
        minify: true,
    }))
})

module.exports = {
    entry: entryObj,
    output: {
        filename: '[name].js',
        path: path.join(curPath, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/i,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env'],
                        ['@vue/babel-preset-jsx'],
                    ],
                    plugins: ['@babel/plugin-syntax-dynamic-import'],
                },
            },
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.s[a|c]ss/i,
            use: ['style-loader', 'css-loader', 'sass-loader', {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            ['autoprefixer', {
                                overrideBrowserslist: [
                                    'last 2 versions',
                                    'not ie<=8',
                                ],
                            }],
                        ],
                    },
                },
            }],
        },
        {
            test: /\.(jpe?g|png|gif)/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name][contenthash:8].[ext]', // [hash]
                    esModule: false, // 启用commonJS 模块
                },
            }],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        ...htmlWebpackList,
    ],
}
