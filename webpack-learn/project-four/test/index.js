const rimraf = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const Mocha = require('mocha')

const mc = new Mocha()
mc.addFile('./mocha/test.js')

process.chdir(__dirname)
rimraf('dist', () => {
    const prodConfig = require('../lib/webpack.prod')
    webpack(prodConfig, (err, stats) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false,
        }))

        console.log('\n' + 'Compiler success begin mocha test')
        process.chdir(__dirname)
        mc.run()
    })
})
