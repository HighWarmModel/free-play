import Popup from './Popup'
import Mask from '../mask'
import mixins from '../mixins'
import { initKeyAdd, initZIndexAdd } from '../utils/initParams'
// let defaultOptions = {}
const PopupMenu = {
  name: 'hhf-plugins-popup-menu',
  data () {
    return {
      popupArr: []
    }
  },
  mixins: [mixins],
  methods: {
    add (popupProp) {
      // popupProp.keyName = initKeyAdd('popup_menu')
      // this.popupArr = []
      this.popupArr.push(this.listNode(popupProp))
      if (this.popupArr.length > 0) {
        this.addOverflow()
      }
    },
    listNode (popupProp) {
      popupProp.keyName = popupProp.keyName || initKeyAdd(popupProp.name)
      let {
        Content,
        confirm,
        cancel,
        close,
        keyName,
        duration,
        transitionName,
        classes,
        styles,
        position,
        maskColor,
        maskPacity,
        maskZIndex,
        mask,
        maskClose // 关闭遮罩层是否去除组件
      } = popupProp
      const key = keyName
      const popupProps = {
        key,
        props: {
          key,
          duration,
          transitionName,
          keyName,
          classes,
          styles,
          position
        },
        on: {
          'trigger-close': close || (() => {}),
          'trigger-remove': () => this.remove(keyName)
        }
      }
      const contentProps = {
        on: {
          'trigger-confirm': () => this.handleConfirm(keyName, confirm),
          'trigger-cancel': () => this.handleCancel(keyName, cancel)
        }
      }
      const maskProps = {
        props: {
          maskColor,
          maskPacity,
          maskZIndex: maskZIndex || initZIndexAdd(),
          maskClose // 关闭遮罩层是否去除组件
        },
        on: {
          'trigger-remove': () => {
            if (maskClose) {
              this.remove(keyName)
            }
          }
        },
        slot: 'mask'
      }
      return (
        <Popup {...popupProps}>
          {
            mask ? <Mask {...maskProps}/> : null
          }
          <Content {...contentProps} />
        </Popup>
      )
    },
    remove (keyName) {
      if (keyName) {
        this.popupArr = this.popupArr.filter(v => v.key !== keyName)
      } else {
        this.popupArr = []
      }
      if (this.popupArr.length === 0) {
        this.removeOverflow()
      }
    },
    handleConfirm (keyName, callback = () => true) {
      !callback(keyName) || this.remove(keyName)
    },
    handleCancel (keyName, callback) {
      callback(keyName)
      this.remove(keyName)
    }
  },
  render (h, context) {
    // 不要在这里处理变量逻辑，会重新渲染一遍的
    // const popupNodes = this.popupArr.map(v => {
    //   console.log(maskProps)
    //   return (
    //     <Popup {...popupProps}>
    //       {
    //         mask ? <Mask {...maskProps}/> : null
    //       }
    //       <Content {...contentProps} />
    //     </Popup>
    //   )
    // })
    return (
      <div class="hhf-plugins-popup-menu">
        {this.popupArr}
      </div>
    )
  }
}
export default PopupMenu
