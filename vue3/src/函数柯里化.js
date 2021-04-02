function currying(fn) {
    let that = this
    let totalLen = fn.length; // 柯里化函数需要的参数总个数
    let arg = [].slice.call(arguments, 1) || []; // 记录传入的参数
    return function () {
        arg.push(...arguments)
        if (arg.length < totalLen) { // 如果多次调用传入的参数个数少于需要的 就继续柯里化
            return currying.call(that, fn, ...arg)
        }
        return fn.apply(this, arg)
    }
}
function add(a, b, c) {
    return a + b + c
}
let a = currying(add)
console.log(a(1, 9)(3))