const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const CssMinimizerPlugin = require()

const prodConfig = {
    mode: 'production',
    optimization: {
        // 生成环境压缩
        minimizer: [
            new CssMinimizerPlugin(),
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
                },
            },
        },

    },
}

module.exports = merge(baseConfig, prodConfig)
