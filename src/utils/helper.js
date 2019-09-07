// 简易防抖方法
export const Debounce = (fn, delay = 200) => {
    let timer
    return function (...args) {
        let callNow = !timer
        if (timer) clearTimeout(timer)
        if (callNow) fn.call(this, ...args)
        timer = setTimeout(() => {
            timer = null
        }, delay)
    }
}
// 简易节流方法
export const Throttle = (fn, delay = 200) => {
    // let timer
    // return function (...args) {
    //     let callNow = !timer
    //     if (callNow) fn.call(this, ...args)
    //     if (!timer) {
    //         timer = setTimeout(() => {
    //             timer = null
    //         }, delay)
    //     }
    // }
    let pre = 0
    return function (...args) {
        let now = Date.now()
        if (now - pre >= delay) {
            fn.call(this, ...args)
            pre = now
        }
    }
}