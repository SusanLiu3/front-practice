const babylon = require('babylon')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default

const template = require('@babel/template').default

const t = require('@babel/types')

const demo = 'function square(n){return n*n}';

const ast = babylon.parse(demo, {
  sourceType: 'module'
})

traverse(ast, {
  FunctionDeclaration(path) {
    const res = template.ast(`console.log("test")`)
    path.replaceWith(res)
  }
})

const code = generator(ast)
console.log(code)
