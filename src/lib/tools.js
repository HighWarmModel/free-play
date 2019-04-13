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
export {
  getQueryStringTool
}
