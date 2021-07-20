const babylon = require('babylon')

const traverse = require('@babel/traverse').default

const generator = require('@babel/generator').default

const t = require('@babel/types')

const demo = 'function test() {}';

const ast = babylon.parse(demo, {
  sourceType: 'module'
})

traverse(ast, {
  FunctionDeclaration(path) {
    const { node } = path
    const kind = 'var'
    // 变量声明
    const identifier = t.identifier('i') // 标识符
    const variable = t.variableDeclarator(identifier, t.numericLiteral(0))
    const varStatement = t.variableDeclaration(kind, [variable])

    // 条件 i<10
    const num = t.numericLiteral(10)
    const condition = t.binaryExpression('<', identifier, num)

    // 逻辑 i++
    const update = t.updateExpression('++', identifier)
    
    // console.log(i)
    const memberExp = t.memberExpression(t.identifier('console'), t.identifier('log'))

    const callExp = t.callExpression(memberExp, [identifier])

    const consoleExp = t.expressionStatement(callExp)

    const bodyBlock = t.blockStatement([consoleExp])

    const forExp = t.forStatement(varStatement, condition, update, bodyBlock)

    const forBlock = t.blockStatement([forExp])

    const funExp = t.functionExpression(node.id, node.params, forBlock)

    path.replaceWith(funExp)

  }
})

const res = generator(ast)

console.log(res.code)