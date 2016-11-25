export function animation(name, opts, cb) {
  api.animation({
    name,
    ...opts,
  }, cb)
}

export function execScript(name, frameName, script) {
  api.execScript({
    name,
    frameName,
    script,
  })
}

export function removeLaunchView() {
  api.removeLaunchView({
    animation: {
      type: 'fade',
      duration: 500,
    }
  })
}

export function rebootApp() {
  api.rebootApp()
}

export function setReflash(cb) {
  api.setRefreshHeaderInfo({
    visible: true,
    loadingImg: 'widget://image/refresh.png',
    bgColor: '#ccc',
    textColor: '#fff',
    textDown: '下拉刷新...',
    textUp: '松开刷新...',
    showTime: true
  }, function(ret, err) {
    cb()
  })
}

export function setReflashDone() {
  api.refreshHeaderLoadDone()
}

export function addEvent(eventName, cb) {
  api.addEventListener({
    name: eventName
  }, cb)
}

export function removeEvent(eventName) {
  api.removeEventListener({
    name: eventName
  })
}

export function dispatchEvent(eventName, extra) {
  api.sendEvent({
    name: eventName,
    extra,
  })
}
