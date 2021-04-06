let event = {
    clientList: {},
    // 监听 ，收集依赖
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    // 触发更新
    trigger: function () {
        let key = Array.prototype.shift.call(arguments)
        let fns = this.clientList[key]
        for (let i = 0; i < fns.length; i++) {
            fns[i].apply(this, arguments) // 回调函数
        }
    }
}

let installEvent = function (obj) {
    for (let i in event) {
        obj[i] = event[i]
    }
}
let salesOffice = {}
installEvent(salesOffice)

salesOffice.listen('price', (price) => {
    console.log('价格:', price)
})
salesOffice.trigger('price',1200)