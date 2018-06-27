export default {
  name: 'ZRow',
  componentName: 'ZRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    style() {
      let ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  },
  watch: {},
  render(h) {
    return h(
      this.tag,
      {
        class: [
          'el-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '',
          { 'el-row--flex': this.type === 'flex' }
        ],
        style: this.style
      },
      this.$slots.default
    )
  }
}
