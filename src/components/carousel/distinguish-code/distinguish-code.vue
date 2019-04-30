<!-- 识别二维码 -->
<template>
  <div class="distinguish-code">
    <div class="distinguish-code-progress">
      <ImgCricleProgress :show="progress" />
    </div>
    <transition name="fade-scale">
      <template v-if="notPress.hide && notPress.type !== '1'">
        <img
          class="distinguish-code-btn"
          :src="longPressBtn"
          @touchstart.prevent="handleTouchStart"
          @touchmove.prevent="handleTouchMove"
          @touchend="handleTouchEnd"
        >
      </template>
      <template v-else-if="notPress.type === '1'">
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
      <template v-if="!notPress.hide && notPress !== '1'">
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
import { mapState, mapMutations } from 'vuex'
// import code from '@a/img/1555130384.png'
export default {
  name: 'distinguish_code',
  props: {
    src: String,
    tid: String,
    notPress: { // 数据
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      longPressBtn: longPressBtn,
      // code: code,
      timer: null,
      progress: false,
      startScreenX: 0,
      endScreenX: 0
    }
  },

  components: {
    ImgCricleProgress
  },

  computed: {
    ...mapState({
      token: state => state.user.token
    })
  },

  methods: {
    ...mapMutations(['APP_OPERAPOPUP_MUTATE']),
    handleTouchStart (e) {
      this.startScreenX = e.targetTouches[0].screenX
      // 二维码隐藏的（显示按钮状态）
      if (this.notPress.hide) {
        // 触发进度条
        this.progress = true
      }
      clearTimeout(this.timer)
      // 一定时间之后显示二维码
      this.timer = setTimeout(() => {
        this.timer = null
        if (this.notPress.type !== '1') {
          this.$emit('trigger-hide', {
            ...this.notPress,
            hide: false
          })
        }
        this.progress = false
        const id = this.notPress.id
        const idStr = `taskId-${id}`
        const taskId = document.getElementById(idStr)
        if (!taskId && this.notPress.js_url) { // 这种任务需要创建js引用
          const script = document.createElement('script')
          script.id = idStr
          script.src = this.notPress.js_url
          document.body.appendChild(script)
        }
        this.startTask() // 开始任务
      }, 500)
    },
    handleTouchMove (e) {
      this.endScreenX = e.targetTouches[0].screenX
      if (Math.abs(this.endScreenX - this.startScreenX) > 15) {
        this.progress = false
        clearTimeout(this.timer)
        this.$emit('trigger-end', { // 结束任务状态查询关闭
          tid: this.tid,
          action: 'close'
        })
      }
    },
    handleTouchEnd () {
      this.endScreenX = 0
      this.endScreenX = 0
      this.progress = false
      clearTimeout(this.timer)
    },
    startTask () {
      startTaskApi({
        task_id: this.tid
      }).then(res => {
        if (res && res.return_code === 0) {
          this.$emit('trigger-end', { // 结束任务状态查询开始
            tid: this.tid,
            action: 'start'
          })
          if (this.notPress.type === '1') {
            location.href = `${this.notPress.url}&userId=${this.token}_${this.tid}`
          }
          return
        }
        clearTimeout(this.timer)
        if (res && res.return_code === -300) {
          this.APP_OPERAPOPUP_MUTATE(true)
        }
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
