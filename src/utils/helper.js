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