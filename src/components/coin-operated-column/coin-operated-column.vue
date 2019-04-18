<!-- 投币栏目 -->
<template>
  <div class="coin-operated-column flex-row flex-between-center">
    <div class="flex-row flex-start-center">
      <img class="coin-operated-column-coinimg" :src="coin" />
      <span class="coin-operated-column-balance color-ff2f4a size-50">{{coinBalance}}</span>
    </div>
    <div class="flex-column flex-between-start">
      <span class="color-4e0b21 size-24">{{machineInfo.name + machineInfo.no}}</span>
      <span class="color-baacaf size-28">{{content}}</span>
    </div>
    <div style="font-size:0;">
      <img @click="handleScan" class="coin-operated-column-scanimg" :src="scan">
    </div>
    <div class="flex-row flex-center">
      <ColorfulButton @trigger-click="handleClick" src="coin-operated-btn" />
    </div>
  </div>
</template>

<script>
import ColorfulButton from '@c/colorful-button'
import { coin, scan } from '@/lib/img'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'coin_operated_column',

  data () {
    return {
      coin: coin,
      scan: scan
    }
  },
  computed: {
    ...mapState({
      coinBalance: state => state.user.coinBalance,
      machineInfo: state => state.app.machineInfo
    }),
    content () {
      return this.machineInfo.name ? '当前设备编号' : '扫码选择机台'
    }
  },
  components: {
    ColorfulButton
  },

  methods: {
    ...mapActions(['APP_ADDMACHINE_ACTION', 'USER_COINPLAY_ACTION']),
    handleScan () {
      /* global wx */
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          const result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
          const mid = result.split('=')[1]
          if (mid) {
            this.APP_ADDMACHINE_ACTION({ mid })
          } else {
            alert('二维码不正确！')
          }
        }
      })
    },
    handleClick () {
      if (this.machineInfo.no) {
        // 游玩价格大于余币
        if (this.machineInfo.coins_sell - 0 > this.coinBalance - 0) {
          alert('余币不足，不能游玩！')
          return
        }
        // 上币
        this.USER_COINPLAY_ACTION().then(res => {
          if (res && res.return_code === 0) {
            alert('上币成功！')
          } else if (res) {
            alert(res.msg)
          }
        })
      } else {
        this.handleScan()
      }
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.coin-operated-column
  width 100%
  height rems(141)
  border-top 1px solid #f5f5f5
  padding 0 rems(31) 0 rems(30)
  box-sizing border-box
  .coin-operated-column-coinimg
    width rems(31)
    height rems(42)
  .coin-operated-column-balance
    margin-left rems(20)
  .coin-operated-column-scanimg
    width rems(77)
    height rems(95)
</style>
