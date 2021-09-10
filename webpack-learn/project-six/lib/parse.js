// 将源码转ast  然后执行一些操作  ast 转源码
const babylon = require('babylon')
const traverse = require('@babel/traverse').default
const {
    transformFromAst
} = require('babel-core')
const fs = require('fs')


module.exports = {
    // ast
    getAst: (path) => {
        const code = fs.readFileSync(path, 'utf-8')
        return babylon.parse(code, {
            sourceType: 'module'
        })
    },
    // 依赖
    getDependencies: (ast) => {
        const dependencies = []
        traverse(ast, {
            ImportDeclaration({
                node
            }) {
                console.log(node)
                dependencies.push(node.source.value)
            }
        })
        return dependencies
    },
    // 转换成code
    transform: (ast) => {
        const {code}= transformFromAst(ast,null,{
            presets:['env']
        })
        return code
    }
}