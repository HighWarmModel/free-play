<!-- 轮播 -->
<template>
  <div class="carousel flex-column flex-between-center">
    <div class="carousel-swiper">
      <swiper
        :options="swiperOption"
        @slideChangeTransitionEnd="handleSildeChange"
        style="height: 100%"
      >
        <swiper-slide
          class="carousel-container"
          v-for="(items, index) in currentData"
          :key="index"
        >
          <div class="carousel-content flex-column flex-between-center">
            <div v-if="items.type === '0'" class="size-30 flex-column flex-center carousel-number-1">
              <span class="color-573333">长按识别二维码</span>
              <span class="color-573333 flex-row flex-center">关注公众号，回复<img class="replay-nine" :src="nineNine"/></span>
            </div>
            <div v-else class="size-30 flex-column flex-center carousel-number-2">
              <span class="color-573333">长按<span class="color-ff5554">游玩</span>小游戏</span>
              <span class="color-573333">游戏内点击广告【领取奖励】</span>
              <span class="color-573333">奖励更丰富！</span>
            </div>
            <div class="carousel-center">
              <DistinguishCode
                :not-press="items"
                @trigger-hide="handleHide"
                :tid="items.id"
                :src="items.url"
                @trigger-end="handleTimer"
              />
            </div>
            <div class="size-30 flex-column flex-center carousel-number-bottom">
              <span class="color-573333 size-30"><span class="color-ff5554">返回 免费嗨抓</span>获得游戏币</span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div
      class="swiper-pagination carousel-swiper-pagination"
      slot="pagination"
    ></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import DistinguishCode from './distinguish-code'
import { nineNine } from '@/lib/img'
import { mapState, mapActions } from 'vuex'
import { setInterval } from 'timers'
export default {
  name: 'carousel',
  props: {
    swiperData: {
      default: () => [],
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'carousel-bullet',
          bulletActiveClass: 'carousel-bullet-active'
        }
      },
      currentData: [],
      nineNine: nineNine,
      endTimer: null, // 结束任务计时器
      times: 0, // 当前次数
      maxTimes: 12, // 最大次数
      numberMilliseconds: 10000, // 每次调用时间（毫秒）
      newTid: 0 // 结束任务当前id
    }
  },

  computed: {
    ...mapState({
      codeList: state => state.app.codeList
    })
  },
  watch: {
    swiperData: {
      handler (val) {
        this.currentData = val.map(v => {
          let codeImg = v.url
          if (v.type === '1') {
            const div = document.createElement('div')
            $(div).qrcode({
              text: v.url, // 需要转化二维码的url
              width: 200,
              height: 200
            })
            const src = div.querySelector('canvas').toDataURL('image/png')
            codeImg = src
          }
          return { ...v, hide: true, codeImg }
        })
      },
      immediate: true
    }
  },
  components: {
    swiper,
    swiperSlide,
    DistinguishCode
  },

  methods: {
    ...mapActions(['APP_ENDTASK_ACTION', 'APP_TASKLIT_ACTION']),
    handleTimer ({ tid, action }) { // 结束任务状态查询
      clearInterval(this.endTimer)
      this.endTimer = null
      if (action === 'start') { // 开始
        this.endTimer = setInterval(() => {
          if (this.times > this.maxTimes) {
            clearInterval(this.endTimer)
            this.endTimer = null
            return
          }
          this.APP_ENDTASK_ACTION({ tid }).then(res => {
            if (res && res.return_code === 0) {
              clearInterval(this.endTimer)
              this.endTimer = null
              this.APP_TASKLIT_ACTION()
            }
          })
        }, this.numberMilliseconds)
      } else if (action === 'close') {
        clearInterval(this.endTimer)
        this.endTimer = null
      }
    },
    handleSildeChange () {
      this.currentData = this.currentData.map(v => {
        return { ...v, hide: true }
      })
    },
    handleHide (item) {
      this.currentData = this.currentData.map(v => {
        let items = { ...v }
        if (item.id === v.id) {
          items = { ...item }
        }
        return items
      })
    }
  },
  created () {
  },
  mounted () {

  },
  beforeDestroy () {
    clearInterval(this.endTimer)
    this.endTimer = null
  }
}
</script>
<style lang="stylus">
.carousel
  position relative
  height 100%
  .carousel-swiper
    flex 1
  .carousel-container
    // width rems(539)
    // height rems(728)
    width rems(539)
    height 100%
    background-color #fff0e9
    border-radius rems(26)
  .replay-nine
    width rems(80)
    margin-left rems(10)
    height rems(38)
  .carousel-content
    position relative
    width 100%
    height 100%
    .carousel-center
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
    .carousel-number-1
      padding-top rems(45)
    .carousel-number-2
      padding-top rems(20)
    .carousel-number-bottom
      padding-bottom rems(100)
  .carousel-swiper-pagination
    position relative
    font-size 0
    width 100%
    padding rems(40) 0
    .carousel-bullet
      display inline-block
      width rems(24)
      height @width
      border-radius 50%
      background-color #fff0e9
      margin-right rems(18)
      outline none
      &.carousel-bullet-active
        background-color #ff2f4a
      &:last-child
        margin-right 0
</style>
