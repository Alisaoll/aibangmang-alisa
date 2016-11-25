const eventNames = [
  "batterylow",
  "batterystatus",
  "keyback",
  "keymenu",
  "volumeup",
  "volumedown",
  "offline",
  "online",
  "pause",
  "resume",
  "scrolltobottom",
  "shake",
  "takescreenshot",
  "swipedown",
  "swipeleft",
  "swiperight",
  "swipeup",
  "tap",
  "longpress",
  "viewappear",
  "viewdisappear",
  "noticeclicked",
  "appintent",
  "smartupdatefinish",
  "launchviewclicked",
]

export default function (eventName, cb) {
  if (eventNames.includes(eventName))
    throw new Error(`invalid event name: ${eventName}`)
  api.addEventListener(eventName, cb)
}
