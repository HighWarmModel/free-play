
export default {
  name: 'pugins_icon',
  props: {
    format: String,
    classes: [Array, String],
    color: String,
    size: String,
    styles: Object
  },
  render () {
    const {
      format,
      classes,
      color,
      size,
      styles
    } = this
    let cls = []
    if (Object.prototype.toString.call(classes) === '[object Array]') {
      cls = classes
    } else if (typeof classes === 'string') {
      cls = classes.split(' ')
    }
    const wrapClasses = ['other-iconfont', `other-icon-${format}`, ...cls]
    const wrapStyles = {
      color,
      fontSize: size,
      ...styles
    }
    return (
      format ? <span class={wrapClasses} style={wrapStyles}></span> : null
    )
  }
}
