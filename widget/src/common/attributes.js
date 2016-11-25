const attributeNames = [
  'appId',
  'appName',
  'appVersion',
  'systemType',
  'systemVersion',
  'version',
  'deviceId',
  'deviceToken',
  'deviceModel',
  'deviceName',
  'operator',
  'connectionType',
  'fullScreen',
  'screenWidth',
  'screenHeight',
  'winName',
  'winWidth',
  'winHeight',
  'frameName',
  'frameWidth',
  'frameHeight',
  'pageParam',
  'wgtParam',
  'appParam',
  'statusBarAppearance',
  'wgtRootDir',
  'fsDir',
  'cacheDir',
  'boxDir',
  'debug',
  'channel',
  'iOS7StatusBarAppearance',
]

export default function (attribute) {
  if (!attributeNames.includes(attribute))
    throw new Error(`invalid attribute: ${attribute}`)
  return api[attribute]
}
