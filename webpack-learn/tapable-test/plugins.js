const Compiler = require('./compiler')
/**
 * webpack 插件基于 tapable 库 实现的事件流机制
 * tapable是基于nodejs 实现的EventEmit 的发布订阅库，里面提供了很多
 * 同步钩子和异步钩子
 * 当执行 compiler.run() 方法的时候， compiler会触发钩子的绑定函数
 * 自定义插件：需要实现apply 方法，同时apply方法接受一个compiler参数
 * apply方法中可以监听某些钩子函数，然后做相应的处理
 */
class MyPlugin {
    apply(compiler) {
        compiler.hooks.accelerate.tap('test', speed => {
            console.log('new speed',speed)
        })

        compiler.hooks.calculateRoutes.tapAsync('test',args=>{
            console.log(args)
        })
    }
}

const myPlugin = new MyPlugin()
const options = {
    plugins: [myPlugin]
}

const compiler = new Compiler()

for (const p of options.plugins) {
    if (typeof p === 'function') {
        p.call(compiler, compiler)
    }else{
        p.apply(compiler)
    }
}
compiler.run()