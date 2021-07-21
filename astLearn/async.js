const babel = require('@babel/core')

const t = require('@babel/types')

const code = `
async function test(){
  await asyncFn();
}
`

function asyncAwait() {
  return {
    visitor: {
      AwaitExpression(path) {
        // 如果已经加了 try catch 则不做任何处理
        if (path.findParent(p => t.isTryStatement(p.node))) {
          return
        }
        console.log(path.node,'&&&&')
        const expression = t.expressionStatement(path.node)
        const tryBlock = t.blockStatement([expression])
        // 生成catch 
        const param = t.identifier('e')
        // 
        const memberExp = t.memberExpression(t.identifier('console'), t.identifier('log'))
        const callExp = t.callExpression(memberExp, [param])
        const consoleExp = t.expressionStatement(callExp)
        const catchBody = t.blockStatement([consoleExp])
        const catchExp = t.catchClause(param, catchBody)
        const res = t.tryStatement(tryBlock, catchExp)
        path.replaceWithMultiple([res])
      }
    }
  }
}

const r = babel.transform(code, {
  plugins: [asyncAwait()]
})
console.log(r.code)