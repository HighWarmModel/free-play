<!-- 领取步骤 -->
<template>
  <div class="receiving-tutorial">
    <div class="receiving-tutorial-container flex-column flex-between-center">
      <img class="receiving-tutorial-banner" :src="preferentialStepBanner">
      <img class="receiving-tutorial-course" :src="course">
        <ColorfulButton @trigger-click="handleClick" src="know-btn" />
    </div>
  </div>
</template>

<script>
import ColorfulButton from '@c/colorful-button'
import preferentialStepBanner from '@a/img/preferential_step_banner.png'
import course from '@a/img/course.png'
export default {
  name: 'receiving_tutorial',

  data () {
    return {
      preferentialStepBanner: preferentialStepBanner,
      course: course
    }
  },

  components: {
    ColorfulButton
  },

  computed: {},

  methods: {
    handleClick () {
      this.$router.push({ name: 'free_catch' })
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.receiving-tutorial
  position relative
  width 100vw
  height 100vh
  min-height 100vh
  background-color #fff0e9
  box-sizing border-box
  padding sizes(18) sizes(30)
  .receiving-tutorial-container
    width 100%
    height 100%
    background-color #ffffff
    border-radius sizes(20)
    .receiving-tutorial-banner
      width sizes(339)
      height sizes(41)
      margin-top sizes(35)
    .receiving-tutorial-course
      width sizes(530)
      height sizes(850)
</style>
