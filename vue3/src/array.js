let list = ['a', 'b', 'c']
let l = new Proxy(list, {
    get(target, propKey, receiver) {
        return Reflect.get(target, propKey < 0 ? (+propKey+target.length) : propKey, receiver)
    }
})
console.log(l[-1])