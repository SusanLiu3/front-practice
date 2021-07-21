const babel = require('@babel/core')
const t = require('@babel/types')
const code = 'const fn = (a, b) => a + b'
// const r = babel.transform(code, {
//   presets: ['@babel/preset-env']
// })
// console.log(r.code)

const arrowFnPlugin = {
  visitor: {
    ArrowFunctionExpression: (path) => {
      // 拿到节点
      const node = path.node;
      const params = node.params;
      console.log('♥♥',node.body)
      const returnStatement = t.returnStatement(node.body)
      const blockStatement = t.blockStatement([returnStatement])

      console.log('※※',blockStatement)
      const funExpression = t.functionExpression(null, params, blockStatement)
      path.replaceWith(funExpression)
    }
  }
}

const r = babel.transform(code, {
  plugins: [arrowFnPlugin]
})

console.log(r.code)
