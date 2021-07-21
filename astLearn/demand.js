const babel = require('@babel/core')

const t = require('@babel/types')

const code = `import Math, { Max, Min } from 'Math'`

function importPlugin(opt) {
  const { library } = opt
  return {
    visitor: {
      ImportDeclaration(path) {
        const node = path.node
        const specifiers = node.specifiers
        // 排除只有一个按需引用 以及默认引用
        if (specifiers.length !== 1 || !t.isImportDefaultSpecifier(specifiers[0])) {
          const res = specifiers.map(s => {
            const local = s.local
            let source = ''
            // 默认引用
            if (t.isImportDefaultSpecifier(s)) {
              source = t.stringLiteral(node.source.value)
            } else {
              source = t.stringLiteral(`${node.source.value}/${library}/${s.local.name}`)
            }
            return t.importDeclaration([t.importDefaultSpecifier(local)], source)
          })
          path.replaceWithMultiple(res)
        }
      }
    }
  }
}

const r = babel.transform(code, {
  plugins: [importPlugin({ library: 'lib' })]
})

console.log(r.code)

