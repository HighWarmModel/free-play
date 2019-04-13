<!-- 免费抓抓娃娃 -->
<template>
  <div class="free-catch flex-column">
    <div class="free-catch-tip">
      <img class="free-catch-tip-img" :src="freeReceiveTip">
      <div class="free-catch-tip-btn">
        <ColorfulButton @trigger-click="handleClick" src="receive-tutorial-btn" />
      </div>
    </div>
    <div class="free-catch-code">
      <Carousel />
    </div>
    <div>
      <div></div>

    </div>
  </div>
</template>

<script>
import ColorfulButton from '@c/colorful-button'
import Carousel from '@c/carousel'
import freeReceiveTip from '@a/img/free_receive_tip.png'
export default {
  name: 'free_catch',

  data () {
    return {
      freeReceiveTip: freeReceiveTip
    }
  },

  components: {
    ColorfulButton,
    Carousel
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
.free-catch
  justify-content space-between
  .free-catch-tip
    position relative
    display inline-block
    font-size 0
    margin-top rems(40)
    margin-left rems(30)
    .free-catch-tip-img
      width rems(653)
      height rems(125)
    .free-catch-tip-btn
      position absolute
      right 0
      bottom 0
</style>
