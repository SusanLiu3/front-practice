/**
 * 劫持监听属性
 * @param {*} data 
 */
function Observer(data) {
    if (!data || typeof data !== 'object') {
        return
    }
    // 监听每个属性变化
    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}
/**
 * Object.defineProperty对属性的get 和 set进行劫持
 * get 依赖收集
 * set 通知更新
 */
function defineReactive(data, key, val) {
    Observer(val) // 子属性
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: false,
        get: () => {
            return val
        },
        set: (newVal) => {
            console.log('数据更新了')
            val = newVal
        }
    })
}
// 如何通知订阅者 ，用一个数组维持订阅者，数据变化触发notify

function Dep() {
    this.subs = []
}
Dep.prototype = {
    constructor: Dep,
    addSub: function (sub) {
        this.subs.push(sub)
    },
    notify: function () {
        this.subs.forEach(sub => {
            sub.update()
        })
    }
}

let obj = {
    name: 'lss'
}
Observer(obj)
obj.name = 'lll'