<!-- 彩色按钮 -->
<template>
  <div class="colorful-button">
    <img :class="src" @click="handleClick" :src="btnSrc">
  </div>
</template>

<script>
import receiveTutorialBtn from '@a/img/receive_tutorial_btn.png' // 领取教程按钮
import knowBtn from '@a/img/know_btn.png' // 知道了按钮
import coinOperatedBtn from '@a/img/coin_operated_btn.png' // 投币按钮
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
  .receive-tutorial-btn
    transition transform 0.1s ease-in-out
    width sizes(190)
    height sizes(60)
    &:active
      transform scale(0.9)
  .know-btn
    transition transform 0.1s ease-in-out
    width sizes(320)
    height sizes(80)
    &:active
      transform scale(0.9)
  .coin-operated-btn
    transition transform 0.1s ease-in-out
    width sizes(200)
    height sizes(96)
    &:active
      transform scale(0.9)
</style>
