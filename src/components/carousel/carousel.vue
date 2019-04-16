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
          <div class="carousel-content flex-row flex-center">
            <DistinguishCode
              :not-press="items"
              @trigger-hide="handleHide"
              :tid="items.id - 0"
              :src="items.url"
            />
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
import { mapState } from 'vuex'
import DistinguishCode from './distinguish-code'
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
      currentData: []
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
          return { ...v, hide: true }
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
    // console.log(this.swiperData.push({}))
  },
  mounted () {

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
  .carousel-content
    width 100%
    height 100%
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
