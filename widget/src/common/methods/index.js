import {
  openFrame,
  closeFrame,
  setFrameAttr,
  bringFrameToFront,
  sendFrameToBack,
  setFrameClient,
  openFrameGroup,
  closeFrameGroup,
  setFrameGroupIndex,
  setFrameGroupAttr,
} from './frame.js'
import {
  openWin,
  closeWin,
  closeToWin,
  setWinAttr,
} from './win.js'
import {
  animation,
  execScript,
  removeLaunchView,
  rebootApp,
  setReflash,
  setReflashDone,
  addEvent,
  removeEvent,
  dispatchEvent,
} from './others.js'
import request from './request.js'

export {
  // frame
  openFrame,
  closeFrame,
  setFrameAttr,
  bringFrameToFront,
  sendFrameToBack,
  setFrameClient,
  openFrameGroup,
  closeFrameGroup,
  setFrameGroupIndex,
  setFrameGroupAttr,
  // win
  openWin,
  closeWin,
  closeToWin,
  setWinAttr,
  // others
  animation,
  execScript,
  removeLaunchView,
  rebootApp,
  setReflash,
  setReflashDone,
  addEvent,
  removeEvent,
  dispatchEvent,
  
  request,
}
