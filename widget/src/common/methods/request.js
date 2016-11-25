import { REQUEST_TIMEOUT } from '_config'

function get(url, opts = {}) {
  return new Promise((resolve, reject) => {
    api.ajax({
      url,
      tag: url,
      timeout: REQUEST_TIMEOUT,
      method: 'get',
      ...opts,
    }, function(ret, err) {
      if (ret.status === 1) {
        resolve(ret.data)
      } else if (ret.status === 0) {
        reject(ret.msg)
      } else {
        reject('系统繁忙，请稍后再试')
      }
    })
  })
}

function post(url, data = {}, opts = {}) {
  return new Promise((resolve, reject) => {
    api.ajax({
      url,
      tag: url,
      timeout: REQUEST_TIMEOUT,
      method: 'post',
      data: {
        value: data
      },
      ...opts,
    }, function(ret, err) {
      if (ret.status === 1) {
        resolve(ret.data)
      } else if (ret.status === 0) {
        reject(ret.msg)
      } else {
        reject('系统繁忙，请稍后再试')
      }
    })
  })
}

function file(url, file, opts = {}) {
  let data
  if (typeof file === 'string') {
    data = {
      stream: file
    }
  } else {
    data = {
      files: file
    }
  }
  return new Promise((resolve, reject) => {
    api.ajax({
      url,
      tag: url,
      timeout: REQUEST_TIMEOUT,
      method: 'post',
      data,
      report: true,
      ...opts,
    }, function(ret, err) {
      if (err) {
        reject(err.msg)
      } else {
        resolve(ret)
      }
    })
  })
}

export default {
  get,
  post,
  file
}
