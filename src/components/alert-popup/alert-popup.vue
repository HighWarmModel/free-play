<!-- 弹窗 -->
<template>
  <div class="alert-popup" v-if="show">
    <div class="alert-popup-mask"></div>
    <div class="alert-popup-container flex-column flex-start-stretch">
      <div class="alert-popup-content flex-column flex-center color-333333">
        <div class="size-32 text-center alert-popup-title">{{title}}</div>
        <div class="size-28 text-center">{{content}}</div>
      </div>
      <div class="alert-popup-btn color-1e9fff size-28 text-center flex-row flex-center" @click="handleConfirm">{{btnName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    title: {
      type: String,
      default: '游戏次数用完了'
    },
    content: {
      type: String,
      default: '明天再来哦~'
    },
    btnName: {
      type: String,
      default: '知道了'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {
    handleConfirm () {
      this.$emit('trigger-confirm')
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.alert-popup
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  z-index 999
  .alert-popup-mask
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background-color rgba(0, 0, 0, 0.6)
  .alert-popup-container
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    width rems(600)
    height rems(300)
    margin auto
    border-radius rems(30)
    background-color #ffffff
    .alert-popup-title
      padding-bottom rems(20)
    .alert-popup-content
      box-sizing border-box
      padding rems(20)
      height rems(200)
      border-bottom 1px solid #959eaf
    .alert-popup-btn
      height rems(100)
</style>
