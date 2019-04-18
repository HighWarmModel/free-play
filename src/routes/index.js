import Vue from 'vue'
import Router from 'vue-router'
import base from './base'
import { setTitle } from '@/lib/utils'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...base
  ]
})
router.afterEach(route => {
  setTitle(route.meta.title)
  window.scrollTo(0, 0)
})
export default router
