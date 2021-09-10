const {
    getAst,
    getDependencies,
    transform
} = require('./parse.js')
const path =require('path')
const fs =require('fs')
module.exports = class Compiler {
    constructor(options) {
        const {
            entry,
            output
        } = options
        this.entry = entry
        this.output = output
        this.modules=[]
    }
    run() {
        const modules = this.buildModule(this.entry,true)
        this.modules.push(modules)
        this.modules.map(m=>{
            m.dependencies.map(d=>{
              this.modules.push(this.buildModule(d, false))
            })
        })
        this.emitFile()
    }
    // 构建
    buildModule(filename,isEntry){
        let ast;
        if (isEntry){
            ast =getAst(filename)
        }else{
            console.log(filename)
            ast=getAst(path.join(process.cwd(),'/src',filename))
        }
        return {
            filename,
            dependencies: getDependencies(ast),
            source: transform(ast),
            
        }
    }
    emitFile(){
        const outputPath =path.join(this.output.path,this.output.filename)
        let modules ='{'
        this.modules.map(m=>{
            modules += `'${m.filename}':(function(module,exports,require){${m.source}  }),`
        })
        modules+='}'

        const bundle = `(function(modules){
            function require(filename){
                var fn = modules[filename]
                var module={exports:{}}
                fn(module,module.exports,require)
                return module.exports
            }
            return require('${this.entry}')
        })(${modules})`

        fs.writeFileSync(outputPath, bundle, 'utf-8')
    }
}