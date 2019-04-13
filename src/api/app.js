
import HttpReq from '@/lib/https'
// 开始任务
function startTaskApi (data) {
  return HttpReq.formPost({
    url: 'Home/startTask',
    data
  })
}
// 结束任务
function endTaskApi () {
  return HttpReq.formPost({
    url: 'Home/completeTask'
  })
}
// 任务列表
function taskListApi () {
  return HttpReq.formPost({
    url: 'Home/getTaskList'
  })
}
// 获取机台信息
function getMachineInfoApi (data) {
  return HttpReq.formPost({
    url: 'Home/getMachineInfo',
    data
  })
}
// 上币
function coinPlayApi (data) {
  return HttpReq.formPost({
    url: 'Home/noticeMachine',
    data
  })
}
// 获取微信jsapi信息
function getWxSignInfoApi (data) {
  return HttpReq.formPost({
    url: 'Home/getSign ',
    data
  })
}
export {
  startTaskApi, // 开始任务
  endTaskApi, // 结束任务
  taskListApi, // 任务列表
  getMachineInfoApi, // 获取机台信息
  getWxSignInfoApi, // 获取微信jsapi信息
  coinPlayApi // 上币
}
