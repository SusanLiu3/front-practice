function debound() {
    let args = Array.prototype.slice.call(arguments)
    console.log(args)
    let cb = args[0]
    let timers = args[1]
    let timer = null;
    let that = this
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            cb.call(that, arguments)
            timer = null;
            clearTimeout(timer)
        }, timers)
    }
}

console.log(debound(11,22))