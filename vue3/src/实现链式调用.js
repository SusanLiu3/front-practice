let obj={
    a:1,
    b:2,
    length:7,
    0:'a',
    2:'b',
    push:Array.prototype.push
}
obj.push('kk')
let arr =Array.from(obj)
console.log(arr)
//  ['a', undefined,'b', undefined,undefined, undefined,undefined, 'kk']
