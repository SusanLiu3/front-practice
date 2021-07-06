const webpack = require('webpack')
const path = require('path')
module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $1: "jquery",
        jq: "jquery"
      }),
      new webpack.ProvidePlugin({
        THING: path.resolve(__dirname,'src/assets/thing.earth.rete.module.js')
      })
    ]
  },
}