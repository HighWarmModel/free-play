let initZIndex = 2333
let initNow = Date.now()
let key = 1
function initZIndexAdd () {
  return initZIndex++
}
function initKeyAdd (keyName) {
  return `${keyName}_${initNow}_${key++}`
}
export {
  initZIndexAdd,
  initKeyAdd
}
