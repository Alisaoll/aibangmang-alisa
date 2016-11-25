import '../style/index.styl'
// polyfill
import 'babel-polyfill'

import { fixStatusBar, log } from '_utils'

window.log = log
document.body.addEventListener('touchstart',function(){})

// 以事件替换原生 apiready 方法
const apireadyEvent = new CustomEvent('apiready')
window.apiready = () => {
  document.dispatchEvent(apireadyEvent)
  // 实现沉浸式
  fixStatusBar()
}
