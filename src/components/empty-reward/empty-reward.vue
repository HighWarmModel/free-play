<!-- 领完奖励 -->
<template>
  <div class="empty-reward flex-column flex-center">
    <img class="empty-reward-img" :src="noReward">
    <span class="empty-reward-text size-28 color-ddccc6">已经领完了，明天再来吧</span>
  </div>
</template>

<script>
import noReward from '@a/img/no_reward.png'
export default {
  name: 'empty_reward',

  data () {
    return {
      noReward: noReward
    }
  },

  components: {},

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.empty-reward
  width 100%
  height rems(737)
  background-color #fff0e9
  border-radius rems(26)
  font-size 0
  .empty-reward-img
    width rems(284)
    height  rems(255)
  .empty-reward-text
    margin-top rems(42)
</style>
