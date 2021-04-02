// 事件被触发n秒后执行回调，如果n秒内再次触发事件则 重新执行回调函数

function debounce(fun, wait) {
    let timer = null;
    return function () {
        clearTimeout(timer);
        let cxt = this;
        let args = arguments;
        timer = setTimeout(() => {
            fun.apply(cxt, args);
        }, wait);
    };
}
let fun =debounce(()=>{
    console.log('jjj')
},1000)

setInterval(fun,500)
