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
      console.log('object', firstLabel)
      firstLabel.tabIndex = 0
    }
  },
  methods: {
    handleKeydown() {}
  }
}
</script>
