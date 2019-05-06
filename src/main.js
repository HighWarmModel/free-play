import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import 'swiper/dist/css/swiper.css'
import '@a/css/common.styl'
import '@a/css/animate.styl'
import plugins from './plugins'

Vue.config.productionTip = false
Vue.use(plugins)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
