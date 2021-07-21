const babylon = require('babylon') // 转换器

const traverse = require('@babel/traverse').default

const generator = require('@babel/generator').default

const t = require('@babel/types')

const demo = 'function a () {}'
const ast = babylon.parse(demo, {
  sourceType: 'module'
})
traverse(ast, {
  FunctionDeclaration(path) {
    const { node } = path
    // 变量声明
    const kind = 'var';// 
    const variable = t.identifier('a') // 标识符
    const defaultVal = t.stringLiteral('test lss')
    const declarator = t.variableDeclarator(variable, defaultVal);// 
    const declaration = t.variableDeclaration(kind, [declarator]);// 变量声明

    // console.log 函数调用

    const memberExp = t.memberExpression(t.identifier('console'), t.identifier('log'))
    const calleExp = t.callExpression(memberExp, [variable])
    const consoleExp = t.expressionStatement(calleExp)

    const block = t.blockStatement([declaration, consoleExp])

    const funExp = t.functionExpression(node.id, node.params, block)

    // console.log(node.id.name)
    path.replaceWith(funExp)
  }
})

const code = generator(ast)

console.log(code.code)


