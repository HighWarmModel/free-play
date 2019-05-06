// import Mask from '../mask'
import PopupMenu from '../popup-menu'
import Icon from '../icon'
// import initParams from '../uitls/initParams'
// import Vue from 'vue'
let instance
function createInstance () {
  instance = instance || PopupMenu.createInstance()
  return instance
}
function tip (options = {}) {
  let newInstance = createInstance(options)
  if (options.type === 'close') {
    newInstance.remove(options)
    return
  }
  const {
    type,
    content
  } = options
  options = {
    ...options,
    name: 'plugins_tip',
    Content: {
      props: {
        mask: {
          type: Boolean,
          default: false
        }
      },
      methods: {
      },
      render (h, context) {
        let color
        switch (type) {
          case 'success':
            color = '#52c41a'
            break
          case 'info':
            color = '#1890ff'
            break
          case 'warning':
            color = '#e6a23c'
            break
          case 'error':
            color = '#f5222d'
            break
        }
        return (
          <div class="size-30 hhf-plugins-tip"><Icon format={type} color={color} size={'20px'} style={{ marginRight: '10px' }}/>{content}</div>
        )
      }
    },
    ...options
  }
  // options.duration = 0
  options.position = 'top'
  options.transitionName = options.transitionName || 'slide'
  options.transitionName = `hhf-plugins-${options.transitionName}`
  newInstance.add(options)
}
['info', 'success', 'warning', 'error', 'close'].forEach(item => {
  confirm[item] = (options) => {
    options.type = item
    tip(options)
  }
})
export default tip
