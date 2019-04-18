
const FreeCatch = () => import(/* webpackChunkName: "free-catch" */ '@v/free-catch/free-catch.vue')
const ReceivingTutorial = () => import(/* webpackChunkName: "receiving-tutorial" */ '@v/receiving-tutorial/receiving-tutorial.vue')
export default [
  {
    path: '/free-catch',
    alias: '/',
    name: 'home',
    component: FreeCatch,
    meta: {
      title: '嗨皮免费玩'
    }
  },
  {
    path: '/free-catch',
    name: 'free_catch',
    component: FreeCatch,
    meta: {
      title: '嗨皮免费玩'
    }
  },
  {
    path: '/receiving-tutorial',
    name: 'receiving_tutorial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ReceivingTutorial,
    meta: {
      title: '领取教程'
    }
  }
]
