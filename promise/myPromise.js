/**
 * 接受一个执行器函数,这个执行器立马执行
 * 它接受2个参数，一个是resolve 一个是reject
 * MyPromise 原型上有 then catch 方法
 * 实例对象上有 resolve  reject  all race等方法
 */
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(excutor) {
    this.status = PENDING
    this.data = null
    this.callbacks = []; // {onResolved(){},onRejected(){}}

    function resolve(val) {
        // 因为状态变化后，就不能再改变
        if (this.status !== PENDING) {
            return
        }
        this.status = RESOLVED
        // 当调用resolve 函数时，会把回调函数推入执行栈，等待被执行
        this.callbacks.forEach(cb => {
            setTimeout(()=>{
                cb.onResolved(val)
            }) // 模拟异步
        });
    }

    function reject() {
        // 因为状态变化后，就不能再改变
        if (this.status !== PENDING) {
            return
        }
        this.status = REJECTED
        // 当调用resolve 函数时，会把回调函数推入执行栈，等待被执行
        this.callbacks.forEach(cb => {
            setTimeout(()=>{
                cb.onRejected(val)
            },0) // 模拟异步
        });
    }
    excutor(resolve, reject)
}
MyPromise.prototype.then = function (onResolved, onRejected) {
    if (this.status === PENDING) {
        this.callbacks.push({
            onResolved,
            onRejected
        })
    }
}
MyPromise.prototype.catch = function (onRejected) {
    if (this.status === PENDING) {
        this.callbacks.push({
            onResolved: undefined,
            onRejected
        })
    }
}

// 简单测试
const p = new MyPromise((resolve, reject) => {
    resolve(0)
}).then(val => {
    console.log('resolved', val)
})