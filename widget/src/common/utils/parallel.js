/*

  usage

  parallel({
    one: function(callback) {
      setTimeout(function() {
        callback(null, 1)
      }, 200)
    },
    two: function(callback) {
      setTimeout(function() {
        callback(null, 2)
      }, 100)
    }
  })
    .then(res => console.log(res.one, res.two))
    .catch(err => console.log(err))
*/

export default function (tasks = {}) {
  return new Promise((resolve, reject) => {
    const keys = Object.keys(tasks)
    const keysLength = keys.length
    if (keysLength === 0) {
      resolve({})
      return
    }
    const callbackData = {}
    let runedNum = 0

    keys.forEach(key => tasks[key]((err, payload) => singleCb(err, payload, key)))

    function singleCb(err, payload, key) {
      if (err) {
        reject(err)
        return
      }
      callbackData[key] = payload
      runedNum ++
      if (runedNum >= keysLength) {
        resolve(callbackData)
      }
    }
  })
}
