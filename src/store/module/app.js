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
    getAnimateCoin: 0
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
    }
  },
  actions: {
    // 上币
    async USER_COINPLAY_ACTION ({ commit, state, rootState }) {
      let res = await coinPlayApi({ mid: state.machineInfo.id })
      if (res && res.return_code === 0) {
        alert('上币成功！')
        commit('USER_SETCOINBALANCE_MUTATE', rootState.user.coinBalance - state.machineInfo.coins_sell)
      }
      return res
    },
    // 添加设备信息
    async APP_ADDMACHINE_ACTION ({ commit }, { mid }) {
      let res = await getMachineInfoApi({ mid })
      if (res && res.return_code === 0) {
        commit('APP_ADDMACHINE_MUTATE', res.data)
      }
    },
    // 任务列表
    async APP_TASKLIT_ACTION ({ commit }) {
      let res = await taskListApi()
      if (res && res.return_code === 0) {
        commit('APP_GETTASKLIST_MUTATE', res.data)
      }
    },
    // 结束任务 (查询任务状态)
    async APP_ENDTASK_ACTION ({ commit, dispatch, state }, { tid }) {
      let res = await endTaskApi({
        task_id: tid
      })
      if (res && res.return_code === 0) {
        state.getAnimateCoin = res.data.coin - 0
      }
      await dispatch('APP_TASKLIT_ACTION')
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
