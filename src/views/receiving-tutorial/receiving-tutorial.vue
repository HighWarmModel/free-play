<!-- 领取步骤 -->
<template>
  <div class="receiving-tutorial">
    <div class="receiving-tutorial-container flex-column flex-around-center">
      <img class="receiving-tutorial-banner" :src="preferentialStepBanner">
      <img class="receiving-tutorial-course" :src="course">
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

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.receiving-tutorial
  position relative
  display flex
  align-items stretch
  width 100vw
  min-height 100vh
  background-color #fff0e9
  box-sizing border-box
  padding rems(18) rems(30)
  .receiving-tutorial-container
    width 100%
    background-color #ffffff
    border-radius rems(20)
    .receiving-tutorial-banner
      width rems(339)
      height rems(41)
    .receiving-tutorial-course
      width rems(530)
      height rems(850)
</style>
