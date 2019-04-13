import HttpReq from '@/lib/https'
// 获取用户信息
function getUserInfoApi () {
  return HttpReq.formPost({
    url: 'Home/getUserInfo'
  })
}
export {
  getUserInfoApi // 获取用户信息
}
