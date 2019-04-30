import { getMachineInfoApi, endTaskApi, taskListApi, coinPlayApi } from '@/api'
export default {
  state: {
    codeList: [], // 奖励二维码列表
    errorList: [], // 日错误志列表
    machineInfo: { // 机台信息
      name: '',
      coins_sell: '',
      no: '',
      id: ''
    },
    getAnimateCoin: 0, // 动画推送币
    show: false
  },
  mutations: {
    // 添加设备信息
    APP_ADDMACHINE_MUTATE (state, data) {
      state.machineInfo = data
    },
    // 获取任务列表
    APP_GETTASKLIST_MUTATE (state, arr) {
      state.codeList = arr
    },
    // 错误日志列表添加
    APP_ADDERRORLOG_MUTATE (state, error) {
      state.errorList.unshift(error)
    },
    // 推送币
    APP_ADDANIMTATECOIN_MUTATE (state, taskCoin) {
      state.getAnimateCoin = taskCoin
    },
    // 展示
    APP_OPERAPOPUP_MUTATE (state, show) {
      state.show = show
    }
  },
  actions: {
    // 上币
    async USER_COINPLAY_ACTION ({ commit, state, rootState }) {
      let res = await coinPlayApi({ mid: state.machineInfo.id })
      if (res && (res.return_code === 0 || res.return_code === -100)) {
        commit('USER_SETCOINBALANCE_MUTATE', res.data.coin)
      }
      return res
    },
    // 添加设备信息
    async APP_ADDMACHINE_ACTION ({ commit }, { mid }) {
      let res = await getMachineInfoApi({ mid })
      if (res && res.return_code === 0) {
        commit('APP_ADDMACHINE_MUTATE', res.data)
      }
      return res
    },
    // 任务列表
    async APP_TASKLIT_ACTION ({ commit, rootState }) {
      const { latitude, longitude } = rootState.user
      let res = await taskListApi({ lat: latitude, lng: longitude })
      if (res && res.return_code === 0) {
        commit('APP_GETTASKLIST_MUTATE', res.data)
      }
      return res
    },
    // 结束任务 (查询任务状态)
    async APP_ENDTASK_ACTION ({ commit }, { tid }) {
      let res = await endTaskApi({
        task_id: tid
      })
      if (res && res.return_code === 0) {
        commit('APP_ADDANIMTATECOIN_MUTATE', res.data.task_coin)
        commit('USER_SETCOINBALANCE_MUTATE', res.data.coin)
      }
      return res
    },
    // 添加错误日志
    APP_ADDERRORLOG_ACTION ({ rootState, commit }, info) {
      const { user: { userId, userName, userHeadImage } } = rootState
      let data = {
        ...info,
        userId,
        time: new Date().getTime(),
        userName,
        userHeadImage
      }
      commit('APP_ADDERRORLOG_MUTATE', data)
    }
  }
}
