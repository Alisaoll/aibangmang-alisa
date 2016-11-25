import {
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  IOS_STATUSBAR_HEIGHT,
  ANDROID_STATUSBAR_HEIGHT,
} from '_config'
import attributes from '_attributes'

// add { nofooter: false } opts
export function openFrame(name, opts = {}) {
  const system = attributes('systemType')
  const statusBarHeight = system === 'ios' ? IOS_STATUSBAR_HEIGHT : ANDROID_STATUSBAR_HEIGHT
  const footerHeight = FOOTER_HEIGHT
  const headerHeight = HEADER_HEIGHT + statusBarHeight
  const contentHeight = opts.nofooter ? attributes('winHeight') - headerHeight :
    attributes('winHeight') - headerHeight - footerHeight
  const setting = {
    name: name,
    url: `${name}.html`,
    bgColor: '#ffffff',
    bounces: true,
    progress: {
      title:"加载中...",
    },
    animation: {
      type: 'movein',
    },
    rect: {
      x: 0,
      y: headerHeight,
      w: 'auto',
      h: contentHeight,
    },
    ...opts,
  }
  api.openFrame(setting)
}

export function closeFrame(name) {
  api.closeFrame({ name })
}

export function setFrameAttr(opts) {
  api.setFrameAttr(opts)
}

export function bringFrameToFront(fromName, toName) {
  api.bringFrameToFront({
    fromName,
    toName,
  })
}

export function sendFrameToBack(fromName, toName) {
  api.sendFrameToBack({
    fromName,
    toName,
  })
}

export function setFrameClient(name, cb) {
  api.setFrameClient({
    frameName: name,
  }, cb)
}

export function openFrameGroup(name, subNames, opts = {}, cb) {
  const system = api.systemType
  const statusBarHeight = system === 'ios' ? IOS_STATUSBAR_HEIGHT : ANDROID_STATUSBAR_HEIGHT
  const footerHeight = FOOTER_HEIGHT
  const headerHeight = HEADER_HEIGHT + statusBarHeight
  const contentHeight = api.winHeight - headerHeight - footerHeight
  const frames = subNames.map(name => ({ name, url: `${name}.html`, bgColor: '#fff' }))
  const setting = Object.assign({
    name,
    background: '#fff',
    scrollEnabled: true,
    rect: {
      x: 0,
      y: headerHeight,
      w: 'auto',
      h: contentHeight,
    },
    index: 0,
    frames,
  }, opts)
  api.openFrameGroup(setting, cb)
}

export function closeFrameGroup(name) {
  api.closeFrameGroup({
    name
  })
}

export function setFrameGroupIndex(name, index) {
  api.setFrameGroupIndex({
    name,
    index,
    scroll: true,
  })
}

export function setFrameGroupAttr(name, opts) {
  api.setFrameGroupAttr({
    name,
    ...opts,
  })
}
