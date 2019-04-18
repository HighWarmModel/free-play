<!-- 免费抓抓娃娃 -->
<template>
  <div class="free-catch flex-column">
    <div>
      <div class="free-catch-tip">
        <img class="free-catch-tip-img" :src="freeReceiveTip">
        <div class="free-catch-tip-btn">
          <ColorfulButton @trigger-click="handleClick" src="receive-tutorial-btn" />
      </div>
    </div>
    </div>
    <div class="free-catch-code flex-column flex-center">
      <template v-if="codeList.length > 0">
        <Carousel :swiper-data="codeList" />
      </template>
      <template v-else>
        <div class="free-catch-empty">
          <EmptyReward />
        </div>
      </template>
    </div>
    <div class="free-catch-bottom">
      <RewardPopup :game-coin="getAnimateCoin" :animate="animate" />
      <CoinOperatedColumn />
    </div>
  </div>
</template>

<script>
import { getWxSignInfoApi } from '@/api'
import { getQueryStringTool } from '@/lib/tools'
import { mapState, mapActions } from 'vuex'
import ColorfulButton from '@c/colorful-button'
import Carousel from '@c/carousel'
import CoinOperatedColumn from '@c/coin-operated-column'
import freeReceiveTip from '@a/img/free_receive_tip.png'
import EmptyReward from '@c/empty-reward'
import RewardPopup from '@c/reward-popup'
export default {
  name: 'free_catch',

  data () {
    return {
      freeReceiveTip: freeReceiveTip,
      timer: null,
      animate: false
    }
  },

  components: {
    ColorfulButton,
    Carousel,
    CoinOperatedColumn,
    EmptyReward,
    RewardPopup
  },

  computed: {
    ...mapState({
      codeList: state => state.app.codeList,
      getAnimateCoin: state => state.app.getAnimateCoin
    })
  },
  watch: {
    getAnimateCoin (afterValue, beforeValue) {
      if (afterValue > 0) {
        this.animate = true
        this.timer = setTimeout(() => {
          this.animate = false
        }, 2000)
      }
    }
  },
  methods: {
    ...mapActions(['USER_LOGIN_ACTION', 'APP_ADDMACHINE_ACTION', 'APP_ENDTASK_ACTION', 'APP_TASKLIT_ACTION']),
    handleClick () {
      this.$router.push({ name: 'receiving_tutorial' })
    },
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
  },
  mounted () {
  },
  beforeDestroy () {
    this.timer = null
    clearTimeout(this.timer)
  }
}
</script>
<style lang="stylus" scoped>
.free-catch
  height 100vh
  justify-content space-between
  .free-catch-tip
    position relative
    display inline-block
    font-size 0
    margin-top rems(40)
    margin-left rems(30)
    .free-catch-tip-img
      width rems(635)
      height rems(125)
    .free-catch-tip-btn
      position absolute
      right rems(-30)
      bottom 0
  .free-catch-empty
    padding 0 rems(30)
    width 100%
    box-sizing border-box
  .free-catch-bottom
    position relative
  .free-catch-code
    flex 1
</style>
