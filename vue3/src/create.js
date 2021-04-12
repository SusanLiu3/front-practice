function create() {
    let obj = new Object()
    let Con =[].shift.call(arguments)
    obj.__proto__=Con.prototype
    let res=Con.apply(obj,arguments)
    console.log(res)
    return typeof res==='object'?res:obj
}
let obj=function (a) {
    this.a=a
}
let tem =create(obj)
