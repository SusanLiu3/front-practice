const esprima = require('esprima')
const estraverse = require('estraverse')

const escodegen = require('escodegen')

const code = `function hello() {
  console.log('hello world')
}`;

// 转换成ast
const ast = esprima.parseScript(code)

console.log(ast)

estraverse.traverse(ast, {
  enter(node) {
    if (node.type === 'FunctionDeclaration') {
      node.name = 'modify'
    }
  },
  leave(node) {
    console.log(node.type)
  }
})

const modifyCode = escodegen.generate(ast)
console.log(modifyCode)


