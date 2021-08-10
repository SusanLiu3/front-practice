const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
    devServer: {
        hot: true,
        contentBase: '/dist', // 告诉dev-server 将dist下的文件server到http://localhost
    },
    mode: 'development',
    devtool: 'source-map',
}

module.exports = merge(baseConfig, devConfig)
