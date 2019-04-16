import config from '@/config'
const { plugins } = config
export default {
  install (Vue, options) {
    for (let key in plugins) {
      if (plugins.isOff) {
        Vue.prototype[`$${key}`] = require(`./${key}`).default
      }
    }
  }
}
