// import Mask from '../mask'
import PopupMenu from '../popup-menu'
import Icon from '../icon'
// import initParams from '../uitls/initParams'
// import Vue from 'vue'
let instance
function createInstance (options) {
  instance = instance || PopupMenu.createInstance(options)
  return instance
}
function confirm (options) {
  let newInstance = createInstance(options)
  if (options.type === 'close') {
    newInstance.remove(options)
    return
  }
  const {
    type,
    title,
    content,
    cancelName,
    cancelClasses,
    confirmClasses,
    confirmName,
    cancel
  } = options
  options = {
    ...options,
    name: 'plugins_confirm',
    Content: {
      props: {
        mask: {
          type: Boolean,
          default: false
        }
      },
      methods: {
        handleCancel () {
          this.$emit('trigger-cancel')
        },
        handleConfirm () {
          this.$emit('trigger-confirm')
        }
      },
      render (h, context) {
        const {
          handleCancel,
          handleConfirm
        } = this
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
          <div class="size-30 hhf-plugins-confirm">
            <div class="hhf-plugins-confirm-container">
              <h5 class="hhf-plugins-confirm-first"><Icon format={type} color={color} size={'23px'} style={{ marginRight: '10px' }}/><span class="hhf-plugins-confirm-title">{title || '免费玩'}</span></h5>
              <p class="hhf-plugins-confirm-content">{content || '是否确认'}</p>
              <div class="hhf-plugins-confirm-btn">
                {cancel ? <div class={['hhf-plugins-confirm-btn-content hhf-plugins-confirm-default', cancelClasses]} onClick={handleCancel}>{cancelName || '取消'}</div> : null}
                <div class={['hhf-plugins-confirm-btn-content hhf-plugins-confirm-primary', confirmClasses]} onClick={handleConfirm}>{confirmName || '确认'}</div>
              </div>
            </div>
          </div>
        )
      }
    }
  }
  options.duration = options.duration || 0
  options.transitionName = options.transitionName || 'scale'
  options.transitionName = `hhf-plugins-${options.transitionName}`
  newInstance.add(options)
}
['info', 'success', 'warning', 'error', 'close'].forEach(item => {
  confirm[item] = (options) => {
    options.type = item
    confirm(options)
  }
})
export default confirm
