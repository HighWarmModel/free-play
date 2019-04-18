<!-- 图片渐变进度条 -->
<template>
  <div class="img-cricle-progress">
    <transition
      @before-enter="beforeEnterLeft"
      @enter="enterLeft"
      @after-enter="afterEnterLeft"
    >
      <template v-if="show">
        <div class="img-cricle-progress-wrap">
          <img
            class="img-cricle-progress-content img-cricle-progress-left"
            :src="cricleProgressLeft"
          />
        </div>
      </template>
    </transition>
    <transition
      @before-enter="beforeEnterRight"
      @enter="enterRight"
      @after-enter="afterEnterRight"
    >
      <template v-if="show">
        <div class="img-cricle-progress-wrap">
          <img
            class="img-cricle-progress-content img-cricle-progress-right"
            :src="cricleProgressRight"
          />
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
import cricleProgressLeft from '@a/img/cricle-progress-left.png'
import cricleProgressRight from '@a/img/cricle-progress-right.png'
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
      default: 0.5,
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
      el.style = {

      }
    },
    enterLeft (el) {

    },
    afterEnterLeft (el) {

    },
    beforeEnterRight (el) {
      el.style = {

      }
    },
    enterRight (el) {

    },
    afterEnterRight (el) {

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
    display inline-block
    width 50%
    height 100%
    overflow hidden
    .img-cricle-progress-content
      position absolute
      top 0
      width 100%
      height 100%
      border-radius 50%
      // clip rect(0 50px 100px 0px) 不能设置百分比
      &.img-cricle-progress-left
        left 0
      &.img-cricle-progress-right
        right 0
</style>
