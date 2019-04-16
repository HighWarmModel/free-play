function getQueryStringTool () {
  const queryString = location.href.split('?')[1]
  if (!queryString) {
    return {}
  }
  let queryArr = queryString.split('&')
  let queryObj = {}
  queryArr.forEach(v => {
    const keyValue = v.split('=')
    const key = keyValue[0]
    const value = decodeURIComponent(keyValue[1])
    queryObj[key] = value
  })
  return queryObj
}
/**
 * 延迟执行
 * @param {number} delay 延迟时间
 * @return {Promise}
 */
function delayedExecutionTool (delay) {
  return new Promise(resolve => {
    setTimeout(() => resolve(), delay)
  })
}
export {
  getQueryStringTool,
  delayedExecutionTool
}
