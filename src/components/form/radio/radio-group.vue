<template>
  <div
    class="el-radio-group"
    role="radiogroup"
    @keydown="handleKeydown">
    <slot></slot>
  </div>
</template>

<script>
import emitter from '@/mixins/emitter'

const keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
})

export default {
  name: 'ZRadioGroup',
  componentName: 'ZRadioGroup',
  mixins: [emitter],
  inject: {
    zFormItem: {
      default: ''
    }
  },
  props: {
    value: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
  },
  computed: {
    _zFormItemSize() {
      return (this.zFormItem || {}).zFormItemSize
    },
    radioGroupSize() {
      return this.size || this._zFormItemSize
    }
  },
  created() {
    this.$on('handleChange', value => {
      this.$emit('change', value)
    })
  },
  mounted() {
    /* 当radioGroup没有默认选项时，第一个可以选中Tab导航 */
    const radios = this.$el.querySelectorAll('[type=radio]')
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0]
    if (![].some.call(radios, radio => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0
    }
  },
  methods: {
    handleKeydown(e) {
      console.log('handleKeydown', e)
      // 组内循环
      const target = e.target
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
      const radios = this.$el.querySelectorAll(className)
      const length = radios.length
      const index = [].indexOf.call(radios, target)
      const roleRadios = this.$el.querySelectorAll('[role=radio]')
      switch (e.keyCode) {
        case keyCode.UP:
        case keyCode.LEFT:
          e.stopPropagation()
          e.preventDefault()
          if (index === 0) {
            roleRadios[length - 1].click()
            roleRadios[length - 1].focus()
          } else {
            roleRadios[index - 1].click()
            roleRadios[index - 1].focus()
          }
          break
        case keyCode.DOWN:
        case keyCode.RIGHT:
          e.stopPropagation()
          e.preventDefault()
          if (index === length - 1) {
            roleRadios[0].click()
            roleRadios[0].focus()
          } else {
            roleRadios[index + 1].click()
            roleRadios[index + 1].focus()
          }
          break
        default:
          break
      }
    }
  }
}
</script>
