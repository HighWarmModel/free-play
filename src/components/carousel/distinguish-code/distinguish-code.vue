<!-- 识别二维码 -->
<template>
  <div class="distinguish-code">
    <transition name="fade-scale">
      <template v-if="notPress">
        <img
          class="distinguish-code-btn"
          :src="longPressBtn"
          @touchstart.prevent="handleTouchStart"
          @touchend="handleTouchEnd"
        >
      </template>
    </transition>
    <transition name="fade-scale">
      <template v-if="!notPress">
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
import longPressBtn from '@a/img/long_press_btn.png'
import { clearTimeout } from 'timers'
// import code from '@a/img/1555130384.png'
export default {
  name: 'distinguish_code',
  props: {
    src: String,
    tid: Number
  },
  data () {
    return {
      longPressBtn: longPressBtn,
      notPress: true,
      // code: code,
      timer: null
    }
  },

  components: {},

  computed: {},

  methods: {
    handleTouchStart () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.timer = null
        this.notPress = false
        this.startTask()
      }, 500)
    },
    handleTouchEnd () {
      clearTimeout(this.timer)
    },
    startTask () {
      startTaskApi({
        task_id: this.tid
      }).then(res => {
        if (res && res.return_code !== 0) {
          alert(res.msg)
        }
      })
    }
  },

  mounted () {},
  beforeMount () {
    this.timer = null
    clearTimeout(this.timer)
  }
}
</script>
<style lang="stylus">
.distinguish-code
  position relative
  font-size 0
  width rems(400)
  height @width
  .distinguish-code-btn
    position absolute
    width rems(344)
    height rems(345)
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
.fade-scale-enter-active
  transition opacity 0.2s, transform 0.2s
.fade-scale-leave-active
  transition opacity 0.2s, transform 0.2s
.fade-scale-enter, .fade-scale-leave-to
  opacity 0
  transform scale(0)
.show-scale-enter-active, .show-scale-leave-active
  transition opacity 20s , transform 20s
.show-scale-enter, .show-scale-leave-to
  opacity 0
  transform scale(0)
</style>
