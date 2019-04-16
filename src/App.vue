<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { getWxSignInfoApi } from '@/api'
import { getQueryStringTool } from '@/lib/tools'
export default {
  data () {
    return {}
  },
  computed: {},
  methods: {
    ...mapActions(['USER_LOGIN_ACTION', 'APP_ADDMACHINE_ACTION', 'APP_ENDTASK_ACTION', 'APP_TASKLIT_ACTION']),
    // 存储token和获取用户信息
    handleLogin (token, tid) {
      this.USER_LOGIN_ACTION({ token }).then(res => {
        if (res && res.return_code !== 0) {
          alert(res.msg)
        }
        if (tid) {
        // 结束任务
          this.APP_ENDTASK_ACTION({
            tid
          })
        } else {
        // 任务列表
          this.APP_TASKLIT_ACTION()
        }
      })
    },
    // 获取微信配置信息
    getWxInfo () {
      getWxSignInfoApi({
        url: location.href.split('#')[0]
      }).then(res => {
        if (res && res.return_code === 0) {
          let data = JSON.parse(res.data)
          const { appId, timestamp, noncestr, sign } = data
          /* global wx */
          wx.config({
            // debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: appId, // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: sign, // 必填，签名
            jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
          })
        }
      })
    }
  },
  created () {
    const { token, mid, tid } = getQueryStringTool()
    this.handleLogin(token, tid)
    this.getWxInfo()
    if (mid) {
      // 获取机台信息
      this.APP_ADDMACHINE_ACTION({ mid })
    }
  }
}
</script>

<style lang="stylus">
html,body
  margin 0
  #app
    max-width rems(750)
    margin 0 auto
</style>
