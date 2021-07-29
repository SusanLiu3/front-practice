const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const files = glob.sync("./src/**/index.js");
const entryObj = {}
const htmlWebpackList = []
files.forEach(file => {
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
    entryObj,
    htmlWebpackList
}