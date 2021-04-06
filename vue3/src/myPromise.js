function myPromise(executor) {
    this.state = 'pending'
    this.reason = ''
    this.value = ''
    let resolve = (value) => {
        if (this.state === 'pending') {
            this.state = 'fullfilled'
            this.value = value
        }
    }
    let reject = err => {
        if (this.state === 'pending') {
            this.state = 'rejected'
            this.reason = err
        }
    }
    try {
        executor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

myPromise.prototype.then = function (onFullfilled,onRejected) {
    if (this.state==='fullfilled'){
        onFullfilled(this.value)
    }else{
        onRejected(this.reason)
    }
}

let p =new myPromise((resolve,reject)=>{
    reject('error promise')
})
p.then((reason) => {
    console.log(reason)
},(err)=>{
    console.log(err)
})