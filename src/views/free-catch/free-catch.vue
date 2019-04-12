<!-- 免费抓抓娃娃 -->
<template>
  <div class="free-catch">
    <div class="free-catch-tip">
      <img class="free-catch-tip-img" :src="freeReceiveTip">
      <div class="free-catch-tip-btn">
        <ColorfulButton @trigger-click="handleClick" src="receive-tutorial-btn" />
      </div>
    </div>
  </div>
</template>

<script>
import freeReceiveTip from '@a/img/free_receive_tip.png'
import ColorfulButton from '@c/colorful-button'
export default {
  name: 'free_catch',

  data () {
    return {
      freeReceiveTip: freeReceiveTip
    }
  },

  components: {
    ColorfulButton: ColorfulButton
  },

  computed: {},

  methods: {
    handleClick () {
      this.$router.push({ name: 'receiving_tutorial' })
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.free-catch-tip
  position relative
  display inline-block
  font-size 0
  margin-top sizes(40)
  margin-left sizes(30)
  .free-catch-tip-img
    width sizes(653)
    height sizes(125)
  .free-catch-tip-btn
    position absolute
    right 0
    bottom 0
</style>
