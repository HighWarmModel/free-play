<!-- 轮播 -->
<template>
  <div class="carousel">
    <swiper :options="swiperOption">
      <swiper-slide class="carousel-container" v-for="(items, index) in swiperData" :key="index">
        <div class="carousel-content flex-row flex-center">
          <DistinguishCode />
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination carousel-swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import DistinguishCode from './distinguish-code'
export default {
  name: 'carousel',

  data () {
    return {
      swiperData: [1, 2, 3, 4, 5],
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
      }
    }
  },

  components: {
    swiper,
    swiperSlide,
    DistinguishCode
  },

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus">
.carousel
  position relative
  .carousel-container
    width rems(539)
    height rems(728)
    background-color #fff0e9
    border-radius rems(26)
  .carousel-content
    width 100%
    height 100%
  .carousel-swiper-pagination
    font-size 0
    width 100%
    margin-top rems(40)
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
