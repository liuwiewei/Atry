const Event = () => {
  this.clientList = {}
}
Event.prototype = {
  listen: (key, fn) => {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger: (keys, args) => {
    const fns = this.clientList[keys]
    if (!fns || fns.length === 0) {
      return
    }
    fns.map(fn => {
      fn(args)
    })
  },
  remove: (keys, fn) => {
    const fns = this.clientList[keys]
    if (!fns) {
      return
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      fns.map((cur, index) => {
        if (cur === fn) {
          fns.splice(index, 1)
        }
      })
    }
  }
}
var ee = new Event()
ee.listen('es', size => {
  console.log('尺码是' + size)
})
ee.listen('ew', count => {
  console.log('数量是' + count)
})
ee.remove('es')
ee.trigger('es', 20)
ee.trigger('ew', 10)
