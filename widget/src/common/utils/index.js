import attributes from '_attributes'
import { ANDROID_STATUSBAR_HEIGHT, IOS_STATUSBAR_HEIGHT } from '_config'
import storage from './storage.js'
import parallel from './parallel.js'

function $(selector) {
  return document.querySelector(selector)
}

function $$(selector) {
  return document.querySelectorAll(selector)
}

function getHeader() {
  return $('header')
}

function fixIos7Bar() {
  const strDM = attributes('systemType')
  if (strDM === 'ios') {
    const numSV = parseInt(attributes('systemVersion'), 10)
    const fullScreen = attributes('fullScreen')
    const iOS7StatusBarAppearance = attributes('iOS7StatusBarAppearance')
    if (numSV >= 7 && !fullScreen && iOS7StatusBarAppearance) {
      getHeader().style.paddingTop = '20px'
      storage.setItem('config_statusbar_height', '20px')
    }
  }
}

function fixStatusBar() {
  const $header = getHeader()
  if (!$header) return
  const cacheHeight = storage.getItem('config_statusbar_height')
  if (cacheHeight) {
    getHeader().style.paddingTop = cacheHeight
    return
  }
  const sysType = attributes('systemType')
  if (sysType === 'ios') {
    fixIos7Bar()
  } else if (sysType === 'android') {
    const ver = parseFloat(attributes('systemVersion'))
    if (ver >= 4.4) {
      $header.style.paddingTop = '25px'
      storage.setItem('config_statusbar_height', '25px')
    }
  }
}

function log(...msgs) {
  let str = ''
  msgs.forEach(msg => {
    str += JSON.stringify(msg)
    str += ' | '
  })
  console.log('===============')
  console.log(str)
  console.log('===============')
}

export {
  fixStatusBar,
  parallel,
  storage,
  log,
}
