
const defineReactive = (data, key, val) => {
  observer(val)
  const dep = new Dep()
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      if (Dep.target) { // 判断是否需要添加订阅者
        dep.addSub(Dep.target) // 添加订阅者
      }
      return val
    },
    set: newVal => {
      val = newVal
      console.log(`属性${key}已经被监听了，现在值为：${newVal}`)
      dep.notify() // 如果数据变化，通知所有订阅者
    }
  })
}
Dep.target = null
function observer (data) { // 使用递归进行数据劫持
  if (!data || typeof data !== 'object') {
    return
  }
  Object.keys(data).forEach(key => {
    defineReactive(data, key, data[key])
  })
}


function Dep () { // 订阅器，收集订阅者
  this.subs = []
}
Dep.prototype = {
  addSub: sub => {
    this.subs.push(sub)
  },
  notify: () => {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}


function Watcher (vm, exp, cb) {
  this.cb = cb
  this.vm = vm
  this.exp = exp
  this.value = this.get() // 将自己添加到订阅器
}
Watcher.prototype = {
  update: () => {
    this.run()
  },
  run: () => {
    const value = this.vm.data[this.exp]
    const oldVal = this.value
    if (value !== oldVal) {
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  },
  get: () => {
    Dep.target = this // 缓存自己
    const value = this.vm.data[this.exp] // 强制执行监听器里的get函数
    Dep.target = null // 释放自己
    return value
  }
}
