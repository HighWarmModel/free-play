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
    <div class="free-catch-code">
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
import ColorfulButton from '@c/colorful-button'
import Carousel from '@c/carousel'
import CoinOperatedColumn from '@c/coin-operated-column'
import freeReceiveTip from '@a/img/free_receive_tip.png'
import EmptyReward from '@c/empty-reward'
import RewardPopup from '@c/reward-popup'
import { mapState } from 'vuex'
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
    handleClick () {
      this.$router.push({ name: 'receiving_tutorial' })
    }
  },
  created () {
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
      right 0
      bottom 0
  .free-catch-empty
    padding 0 rems(30)
  .free-catch-bottom
    position relative
  .free-catch-code
    flex 1
</style>
