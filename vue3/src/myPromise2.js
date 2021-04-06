function MyPromise(list) {
    // promise all 只要有一个reject了，那么整个状态都是reject
    return new Promise((resolve, reject) => {
        if (Object.prototype.toString.call(list) !== '[object Array]') {
            return new TypeError('type error')
        }
        let len = list.length
        let resolveLen = 0
        let res = []
        for (let i = 0; i < len; i++) {
            Promise.resolve(list[i]).then(value => {
                resolveLen++
                res[i] = value
                if (resolveLen === len) {
                    return resolve(res)
                }
            }, err => {
                return reject(err)
            })
        }
    })
}

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('error')
    }, 1000);

})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('hello promise')
    }, 1000);

})

MyPromise([p1, p2]).then(res => {
    console.log(res)
},err=>console.log(err))