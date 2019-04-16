<!-- 圆进度条 -->
<template>
  <!-- <transition>
    <slot></slot>
  </transition> -->
  <div class="circle-pogress" v-if="show">
      <div class="wrapper left">
        <!-- <svg style="width:100%;height:100%;">
          <circle class="left-circle wrapper-progress" cx="100" cy="100" r="80" stroke="black" stroke-width="20" fill="transparent" />
        </svg> -->
        <div class="wrapper-progress left-circle"></div>
      </div>
      <div class="wrapper right">
        <!-- <svg style="width:100%;height:100%;">
          <circle class="right-circle wrapper-progress" cx="0" cy="100" r="80" stroke="red" stroke-width="20" fill="transparent" />
        </svg> -->
        <div class="wrapper-progress right-circle"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    show: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus">
.circle-pogress
  position relative
  width 200px
  height 200px
  .wrapper
    position absolute
    top 0
    width 100px
    height 100%
    overflow hidden
    display inline-block
    &.left
      left 0
    &.right
      right 0
    .wrapper-progress
      position absolute
      top 0
      width 180px
      height 180px
      border 10px solid #fff0e9
      transform rotate(45deg)
      transform-origin 50%
      border-radius 50%
      &.left-circle
        border-top 10px solid #ff2f4a
        border-right 10px solid #ff2f4a
        left 0
        animation cir .2s forwards .2s linear
        // animation cir 0.2s forwards linear
      &.right-circle
        border-bottom 10px solid #ff2f4a
        border-left 10px solid #ff2f4a
        right 0
        animation cir .2s forwards linear
@keyframes cir
  0%
    transform rotate(45deg)
  100%
    transform rotate(225deg)
@keyframes circleProgressRight
  0%
    transform rotate(45deg)
  100%
    transform rotate(225deg)
</style>
