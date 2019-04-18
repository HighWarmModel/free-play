<!-- 识别二维码 -->
<template>
  <div class="distinguish-code">
    <div class="distinguish-code-progress">
      <ImgCricleProgress :show="progress" />
    </div>
    <transition name="fade-scale">
      <template v-if="notPress.hide">
        <img
          class="distinguish-code-btn"
          :src="longPressBtn"
          @touchstart.prevent="handleTouchStart"
          @touchmove.prevent="handleTouchMove"
          @touchend="handleTouchEnd"
        >
      </template>
    </transition>
    <transition name="fade-scale">
      <template v-if="!notPress.hide">
        <img
          class="distinguish-code-content"
          :src="src"
        >
      </template>
    </transition>
    <div v-show="false">
      <img :src="src">
    </div>
  </div>
</template>

<script>
import { startTaskApi } from '@/api'
import { longPressBtn } from '@/lib/img'
import ImgCricleProgress from '@c/img-cricle-progress'
// import code from '@a/img/1555130384.png'
export default {
  name: 'distinguish_code',
  props: {
    src: String,
    tid: Number,
    notPress: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      longPressBtn: longPressBtn,
      // code: code,
      timer: null,
      progress: false
    }
  },

  components: {
    ImgCricleProgress
  },

  computed: {},

  methods: {
    handleTouchStart () {
      // 二维码隐藏的（显示按钮状态）
      if (this.notPress.hide) {
        // 触发进度条
        this.progress = true
      }
      clearTimeout(this.timer)
      // 一定时间之后显示二维码
      this.timer = setTimeout(() => {
        this.timer = null
        this.$emit('trigger-hide', {
          ...this.notPress,
          hide: false
        })
        this.progress = false
        this.startTask() // 开始任务
      }, 500)
    },
    handleTouchMove () {
      this.progress = false
      clearTimeout(this.timer)
    },
    handleTouchEnd () {
      this.progress = false
      clearTimeout(this.timer)
    },
    startTask () {
      startTaskApi({
        task_id: this.tid
      })
      // .then(res => {
      //   if (res && res.return_code !== 0) {
      //     alert(res.msg)
      //   }
      // })
    }
  },

  mounted () {},
  beforeDestroy () {
    clearTimeout(this.timer)
    this.timer = null
  }
}
</script>
<style lang="stylus">
.distinguish-code
  position relative
  font-size 0
  width rems(370)
  height @width
  .distinguish-code-progress
    position absolute
    top 0
    left 0
    width 100%
    height 100%
  .distinguish-code-btn
    position absolute
    width rems(344)
    height rems(344)
    top 0
    left 0
    right 0
    bottom 0
    margin auto
  .distinguish-code-content
    position absolute
    width rems(364)
    height rems(364)
    top 0
    left 0
    right 0
    bottom 0
    margin auto
</style>
