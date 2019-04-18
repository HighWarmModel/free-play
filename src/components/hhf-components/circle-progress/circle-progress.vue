<!-- 圆进度条 -->
<template>
  <transition>
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
  </transition>
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

  methods: {
    beforeEnter (el) {
    }
  },

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
    display inline-block
    overflow hidden
    &.left
      left 0
    &.right
      right 0
    .wrapper-progress
      position absolute
      top 0
      width 180px
      height 180px
      border 10px solid #ffffff
      transform rotate(45deg)
      transform-origin 50%
      border-radius 50%
      &.left-circle
        // border-top 10px solid #ffd5c1
        // border-right 10px solid #ffc6a9
        border-top 10px solid #ffc6a9
        border-right 10px solid #ff9968
        left 0
        animation cirleft 10s forwards 10s linear
        // animation cir 0.2s forwards linear
      &.right-circle
        // border-bottom 10px solid #ffc6a9
        // border-left 10px solid #ff9968
        border-bottom 10px solid #ffd5c1
        border-left 10px solid #ffc6a9
        right 0
        animation cirright 10s forwards linear
@keyframes cirleft
  0%
    transform rotate(45deg)
  100%
    transform rotate(225deg)
@keyframes cirright
  0%
    border-bottom 10px solid #ffd5c1
    border-left 10px solid #ffc6a9
    transform rotate(45deg)
  100%
    transform rotate(225deg)
</style>
