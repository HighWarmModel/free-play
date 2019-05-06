
const Mask = {
  props: {
    maskPacity: {
      type: Number
    },
    maskColor: {
      type: String
    },
    maskZIndex: {
      type: Number
    }
  },
  methods: {
    remove () {
      this.$emit('trigger-remove')
    }
  },
  render (h) {
    const styles = {
      opacity: this.maskPacity,
      backgroundColor: this.maskColor,
      zIndex: this.maskZIndex
    }
    const {
      remove
    } = this
    return (
      <div class="hhf-plugins-mask" style={styles} onClick={remove}></div>
    )
  }
}
export default Mask
