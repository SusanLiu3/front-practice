const glob = require('glob-all')

describe('generate files exist', () => {
    process.chdir(__dirname)
    it('should html file generate', (done) => {
        const files = glob.sync(['../dist/index.html', '../dist/search.html'])
        if (files.length > 0) {
            done()
        } else {
            throw new Error('no html file exist')
        }
    })

    it('should js file generate', (done) => {
        const files = glob.sync(['../dist/index.js', '../dist/search.js'])
        if (files.length > 0) {
            done()
        } else {
            throw new Error('no js file exist')
        }
    })
})
