<!-- 彩色按钮 -->
<template>
  <a class="colorful-button">
    <img :class="[src, 'colorful-button-content', loading ? 'colorful-button-loading' : null]" @click="handleClick" :src="btnSrc">
  </a>
</template>

<script>
import {
  receiveTutorialBtn, // 领取教程按钮
  knowBtn, // 知道了按钮
  coinOperatedBtn, // 投币按钮
  robCoinBtn // 教你抢币
} from '@/lib/img'
const btnObj = {
  'receive-tutorial-btn': receiveTutorialBtn, 'know-btn': knowBtn, 'coin-operated-btn': coinOperatedBtn, 'rob-coin-btn': robCoinBtn
}
export default {
  name: '',
  props: {
    src: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['receive-tutorial-btn', 'know-btn', 'coin-operated-btn', 'rob-coin-btn'].indexOf(value) !== -1
      }
    },
    loading: {
      type: Boolean,
      default: false
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
      if (!this.loading) {
        this.$emit('trigger-click')
      }
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
scaleBtn()
  &::active
      transform scale(0.9)
.colorful-button
  display inline-block
  font-size 0
  .colorful-button-content
    transition transform 0.1s ease-in-out
    .colorful-button-loading
      opacity 0.5
      &::active
        transform scale(1)
  .receive-tutorial-btn
    width rems(170)
    height rems(50)
    scaleBtn()
  .know-btn
    width rems(320)
    height rems(80)
    scaleBtn()
  .coin-operated-btn
    width rems(200)
    height rems(96)
    scaleBtn()
  .rob-coin-btn
    width rems(170)
    height rems(50)
    scaleBtn()
</style>
