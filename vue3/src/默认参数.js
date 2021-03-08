function foo(a=42,b=a+1){
    console.log(arguments.length,arguments[0])
}
foo()// 0 undefined

function bar(){
    try{
        return 34
    }finally{
       return 11
    }
}
console.log(bar())

// window.escape('%?=123')// 转义
// window.unescape() //回转

console.log('hello'.substr(0,2)) // 第二个参数是 个数
console.log('hello'.substring(0,2)) // 第二个参数是 截止位置(不包括)