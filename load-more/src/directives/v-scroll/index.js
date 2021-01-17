/**
 * @description: 滚动指令
 * @param {type} 
 * @return: 
 */
export function scroll(Vue) {
    // scroll 指令名  使用的时候 v-scroll
    Vue.directive('scroll', {
        // binding.value 传递的回调函数

        inserted(el, binding) {
            // 定义定时器 timer
            let timer = null
            // 节流
            function throttle(cb, delay) {
                if (timer) {
                    return
                }
                timer = setTimeout(() => {
                    cb()
                    clearTimeout(timer)
                    timer = null
                }, delay)
            }
            // 注册滚动事件
            el.addEventListener('scroll', () => {
                // 判断滚动条件
                let flag =
                    el.clientHeight +
                    el.scrollTop -
                    el.scrollHeight +
                    80 > 0
                if (flag && binding.value && typeof binding.value === 'function') {
                    throttle(binding.value, el.getAttribute('delay'))
                }
            })
        }
    })
}