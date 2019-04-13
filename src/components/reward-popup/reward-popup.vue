<!-- 奖励弹窗 -->
<template>
  <div class="reward-popup">
    <transition name="float">
      <template v-if="animate">
        <div class="reward-popup-content flex-row flex-center">
          <img class="reward-popup-img" :src="coin">
          <span class="reward-popup-content-text size-28 color-4e0b21">获得{{gameCoin}}游戏币</span>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
import coin from '@a/img/coin.png'
export default {
  name: 'reward_popup',
  props: {
    animate: {
      default: false,
      type: Boolean
    },
    gameCoin: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {
      coin: coin
    }
  },

  components: {},

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.reward-popup
  position relative
  .reward-popup-content
    position absolute
    top rems(-90)
    left 0
    width 100%
    height rems(90)
    background-color #ffdaa5
    font-size 0
    .reward-popup-img
      width rems(31)
      height rems(42)
    .reward-popup-content-text
      margin-left rems(12)
  .float-enter-active, .float-scale-leave-active
    transition opacity 0.7s , transform 0.7s
  .float-enter, .float-leave-to
    opacity 0
    transform 'translateY(%s)' % rems(100)
</style>
