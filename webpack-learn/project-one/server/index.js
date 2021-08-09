const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.static('dist'))

const str = fs.readFileSync('./src/index.html', 'utf-8')

const bundle = fs.readFileSync('./dist/index.js', 'utf-8')

const renderer = require('vue-server-renderer').createBundleRenderer()

app.get('/search', function (req, res) {
    renderer.renderToString(bundle, (err, html) => {
        res.end(html)
    })
})
app.listen('8081', () => {
    console.log('server is open at localhost:8081')
})