<!-- 领取步骤 -->
<template>
  <div class="receiving-tutorial flex-column flex-start-stretch">
    <div class="receiving-tutorial-container flex-column flex-around-center">
      <img class="receiving-tutorial-course" :src="course">
    </div>
    <div class="text-center receiving-tutorial-btn">
        <ColorfulButton @trigger-click="handleClick" src="know-btn" />
    </div>
  </div>
</template>

<script>
import ColorfulButton from '@c/colorful-button'
import { preferentialStepBanner, course } from '@/lib/img'
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

  mounted () {

  }
}
</script>
<style lang="stylus" scoped>
.receiving-tutorial
  position relative
  width 100vw
  min-height 100vh
  background-color #fff0e9
  box-sizing border-box
  padding rems(18) rems(30)
  .receiving-tutorial-btn
    padding-top rems(18)
  .receiving-tutorial-container
    padding rems(20) rems(10)
    background-color #ffffff
    border-radius rems(20)
    .receiving-tutorial-course
      width rems(509)
      height rems(1701)
</style>
