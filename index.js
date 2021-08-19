class EventBus {
  constructor() {
    this.events = {}
  }
  bind (type, cb, isOnce = false) {
    if (typeof cb !== 'function') return "not a function"
    if (!this.events[type]) {
      this.events[type] = []
    }
    this.events[type].push({
      type: isOnce ? "once" : "on",
      event: cb
    })
    return "done"
  }
  on (type, cb) {
    return this.bind(type, cb)
  }
  off (type) {
    return delete this.events[type]
  }
  emit (type, ...rest) {
    const tar = this.events[type]
    if (!tar) return "error type, none function"
    tar.map((ev, i) => {
      ev.event(...rest)
      if (ev.type === "once") {
        tar.splice(i, 1)
      }
    })
  }
  once (type, cb) {
    return this.bind(type, cb, true)
  }
}
const event = {
  install (app) {
    app.config.globalProperties.$events = new EventBus()
  }
}
export default event
