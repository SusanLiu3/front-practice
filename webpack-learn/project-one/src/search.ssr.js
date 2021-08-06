const express = require('express')
const app = express()
const fs = require('fs')

const str = fs.readFileSync('./src/index.html', 'utf-8')

const bundle = fs.readFileSync('./dist/search.js', 'utf-8')

const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
    template: str
})

app.get('*', function (req, res) {
    renderer.renderToString((err, html) => {
        res.end(html)
    })
})
app.listen('8081', () => {
    console.log('server is open at localhost:8081')
})