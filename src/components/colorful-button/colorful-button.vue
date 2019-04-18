<!-- 彩色按钮 -->
<template>
  <div class="colorful-button">
    <img :class="src" @click="handleClick" :src="btnSrc">
  </div>
</template>

<script>
import {
  receiveTutorialBtn, // 领取教程按钮
  knowBtn, // 知道了按钮
  coinOperatedBtn // 投币按钮
} from '@/lib/img'
const btnObj = {
  'receive-tutorial-btn': receiveTutorialBtn, 'know-btn': knowBtn, 'coin-operated-btn': coinOperatedBtn
}
export default {
  name: '',
  props: {
    src: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['receive-tutorial-btn', 'know-btn', 'coin-operated-btn'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
    }
  },

  components: {},

  computed: {
    btnSrc () {
      return btnObj[this.src]
    }
  },

  methods: {
    handleClick () {
      this.$emit('trigger-click')
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.colorful-button
  display inline-block
  font-size 0
  .receive-tutorial-btn
    transition transform 0.1s ease-in-out
    width rems(170)
    height rems(50)
    &:active
      transform scale(0.9)
  .know-btn
    transition transform 0.1s ease-in-out
    width rems(320)
    height rems(80)
    &:active
      transform scale(0.9)
  .coin-operated-btn
    transition transform 0.1s ease-in-out
    width rems(200)
    height rems(96)
    &:active
      transform scale(0.9)
</style>
