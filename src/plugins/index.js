import Tip from './tip'
import Confirm from './confirm'
import './css/common.styl'
import './css/iconfont.css'
const install = (Vue, options = {}) => {
  Vue.prototype.$Tip = Tip
  Vue.prototype.$Confirm = Confirm
}
export default install
