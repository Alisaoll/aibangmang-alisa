import { WIN_ANIMATION_DURATION } from '_config'

export function openWin(name, opts = {}) {
  api.openWin({
    name,
    url: `./${name}.html`,
    scrollToTop: true,
    animation: {
      type: 'movein',
      subType: "from_right",
      duration: WIN_ANIMATION_DURATION,
    }
  })
}

export function closeWin(name, opts = {}) {
  api.closeWin(Object.assign({
    name,
    animation: {
      type: 'movein',
      subType:"from_left",
      duration: WIN_ANIMATION_DURATION
    },
  }, opts))
}

export function closeToWin(name, animation = {}) {
  api.closeToWin({
    name,
    animation: {
      type: "movein",
      subType: "from_left",
      duration: WIN_ANIMATION_DURATION,
      ...animation,
    }
  })
}

export function setWinAttr(opts) {
  api.setWinAttr(opts)
}
