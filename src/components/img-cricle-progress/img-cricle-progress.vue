<!-- 图片渐变进度条 -->
<template>
  <div class="img-cricle-progress">
    <div class="img-cricle-progress-wrap">
      <transition
        @before-enter="beforeEnterLeft"
        @enter="enterLeft"
        @after-enter="afterEnterLeft"
        @before-leave="beforeLeaveLeft"
      >
        <template v-if="show">
          <div class="img-cricle-progress-content img-cricle-progress-left">
            <img
              class="img-cricle-progress-pic"
              :src="cricleProgressLeft"
            />
          </div>
        </template>
      </transition>
    </div>
    <div class="img-cricle-progress-wrap">
      <transition
        @before-enter="beforeEnterRight"
        @enter="enterRight"
        @after-enter="afterEnterRight"
        @before-leave="beforeLeaveRight"
      >
        <template v-if="show">
          <div class="img-cricle-progress-content img-cricle-progress-right">
            <img
              class="img-cricle-progress-pic"
              :src="cricleProgressRight"
            />
          </div>
        </template>
      </transition>
    </div>
  </div>
</template>

<script>
import { cricleProgressLeft, cricleProgressRight } from '@/lib/img'
import { setTimeout } from 'timers'
export default {
  name: 'img_cricle_progress',
  props: {
    show: {
      default: false,
      type: Boolean
    },
    forwards: {
      default: false,
      type: Boolean
    },
    duration: {
      default: 0.2,
      type: Number
    }
  },
  data () {
    return {
      cricleProgressLeft: cricleProgressLeft,
      cricleProgressRight: cricleProgressRight
    }
  },

  components: {},

  computed: {},

  methods: {
    beforeEnterLeft (el) {
      el.style.transition = `transform ${this.duration}s linear ${this.duration}s`
    },
    enterLeft (el, done) {
      setTimeout(() => {
        el.style.transform = 'rotate(180deg)'
      }, 100)
    },
    afterEnterLeft (el) {
    },
    beforeLeaveLeft (el) {
      el.style.transition = null
      el.style.transform = null
    },
    beforeEnterRight (el) {
      el.style.transition = `transform ${this.duration}s linear`
    },
    enterRight (el, done) {
      setTimeout(() => {
        el.style.transform = 'rotate(180deg)'
      }, 100)
    },
    afterEnterRight (el) {

    },
    beforeLeaveRight (el) {
      el.style.transition = null
      el.style.transform = null
    }
  },

  mounted () {}
}
</script>
<style lang="stylus">
.img-cricle-progress
  position relative
  width 100%
  height 100%
  .img-cricle-progress-wrap
    position relative
    display inline-block
    width 50%
    height 100%
    overflow hidden
    .img-cricle-progress-content
      position absolute
      top 0
      width 200%
      height 100%
      border-radius 50%
      // transform rotate(180deg)
      // clip rect(0 50px 100px 0px) 不能设置百分比
      &.img-cricle-progress-left
        left 0
        .img-cricle-progress-pic
          position absolute
          right 0
          height 100%
      &.img-cricle-progress-right
        right 0
        .img-cricle-progress-pic
          position absolute
          left 0
          height 100%

</style>
