import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import 'swiper/dist/css/swiper.css'
import '@a/css/common.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
