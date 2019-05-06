import { getToken, setToken, removeToken } from '@/lib/utils'
import { getUserInfoApi } from '@/api'
export default {
  state: {
    token: getToken(),
    userId: '',
    userName: '',
    userHeadImage: '',
    coinBalance: '0',
    latitude: 0, // 维度
    longitude: 0 // 经度
  },
  mutations: {
    // 设置用户头像
    USER_SETUSERHEADIMAGE_MUTATE (state, headImgPath) {
      state.userHeadImage = headImgPath
    },
    // 设置用户id
    USER_SETUSERID_MUTATE (state, userId) {
      state.userId = userId
    },
    // 设置用户名字
    USER_SETUSERNAME_MUTATE (state, userName) {
      state.userName = userName
    },
    // 设置剩余币数
    USER_SETCOINBALANCE_MUTATE (state, coin) {
      state.coinBalance = coin
    },
    // 设置token
    USER_SETTOKEN_MUTATE (state, token) {
      state.token = token
      if (token) {
        setToken(token)
      } else {
        removeToken()
      }
    },
    // 设置经纬度
    USER_SETCOORDINATE_MUTATE (state, { latitude, longitude }) {
      state.latitude = latitude
      state.longitude = longitude
    }
  },
  actions: {
    // 获取用户信息
    async USER_GETUSERINFO_ACTION ({ commit, state }) {
      let res = await getUserInfoApi()
      if (res && res.return_code === 0) {
        const { coin } = res.data
        commit('USER_SETCOINBALANCE_MUTATE', coin)
      }
      return res
    },
    // 登录
    async USER_LOGIN_ACTION ({ commit, dispatch }, { token, latitude, longitude }) {
      if (token) {
        commit('USER_SETTOKEN_MUTATE', token)
      }
      commit('USER_SETCOORDINATE_MUTATE', { latitude, longitude })
      let res = await dispatch('USER_GETUSERINFO_ACTION')
      return res
    },
    // 登出去除相关信息
    async USER_LOGOUT_ACTION ({ state, commit }) {
      console.log(state.token)
      commit('USER_SETTOKEN_MUTATE')
      location.href = location.origin.indexOf('https') !== -1 ? `${location.origin}/index.php/Home` : `${location.origin}/wxxcx/index.php/Home`// 授权登陆页
      return true
    }
  }
}
