<!-- 关注公众号 -->
<template>
  <div class="focus-number flex-column flex-center">
    <img class="focus-number-code" :src="freePlayCode">
    <span class="focus-number-first-text">长按识别二维码</span>
    <span class="focus-number-second-text">关注公众号免费玩</span>
  </div>
</template>

<script>
import { freePlayCode } from '@/lib/img'
export default {
  name: 'focus_number',

  data () {
    return {
      freePlayCode: freePlayCode
    }
  },

  components: {},

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.focus-number
  width 100vw
  height 100vh
  .focus-play-code
    width rems(258)
    height @width
  .focus-number-first-text
    font-size rems(28)
    color #333333
    padding-top rems(20)
  .focus-number-second-text
    font-size rems(28)
    color #333333
    padding-top rems(20)
</style>
