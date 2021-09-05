const {
    getAst,
    getDependencies,
    transform
} = require('./parse')
const path =require('path')
const ast = getAst(path.join(__dirname, '../src/index.js'))

console.log(transform(ast))