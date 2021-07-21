const babylon = require('babylon')

const traverse = require('@babel/traverse').default

const generator = require('@babel/generator').default

const t = require('@babel/types')

const demo = `const a = [...arr1,...arr2]`

const ast = babylon.parse(demo, {
  sourceType: 'module'
})

traverse(ast, {
  // 变量声明
  VariableDeclaration(path) {
    const { node } = path;
    const declarations = node.declarations
    const kind = 'var';
    if (t.isArrayExpression(declarations[0].init)) {
      const args = declarations[0].init.elements.map(i => i.argument)
      const callee = t.memberExpression(t.arrayExpression(), t.identifier('concat'))
      const init = t.callExpression(callee, args)
      const declaration = t.variableDeclarator(declarations[0].id, init)
      const variableDeclaration = t.variableDeclaration(kind, [declaration])
      path.replaceWith(variableDeclaration)
    }
  }
})

const { code } = generator(ast)
console.log(code)