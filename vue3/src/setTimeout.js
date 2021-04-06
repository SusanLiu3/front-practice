function mySetInterval(fn, a, b) {
    this.a = a;
    this.b = b;
    this.count = 0
    this.start = () => {
        this.handler = setTimeout(() => {
            fn() // 执行回调
            this.count++; // 次数加1
            this.start(); // 循环调用
        }, this.a + this.count * this.b) // 时间
    }
    this.end = () => {
        clearTimeout(this.handler)
        this.count = 0
    }
}

let interval =new mySetInterval(()=>{
    console.log('重复执行')
},100,100)

interval.start()

setTimeout(()=>{
  interval.end()
},1000)