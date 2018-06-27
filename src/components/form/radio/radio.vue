<template>
  <label
    class="el-radio"
    :class="[
      border && radioSize ? 'el-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label">
    <span
      class="el-radio__input"
      :class="[
        { 'is-disabled': isDisabled },
        { 'is-checked': model === label },
      ]">
      <span class="el-radio__inner"></span>
      <input
        class="el-radio__original"
        aria-hidden="true"
        :value="label"
        type="radio"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1">
    </span><span class="el-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
import emitter from '@/mixins/emitter'

export default {
  name: 'ZRadio',
  componentName: 'ZRadio',
  mixins: [emitter],
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  inject: {
    zFrom: {
      default: ''
    },
    zFormItem: {
      default: ''
    }
  },
  data() {
    return {
      focus: false
    }
  },
  computed: {
    isGroup() {
      let parent = this.$parent
      while (parent) {
        let parentName = parent.$options.componentName
        if (parentName !== 'ZRadioGroup') {
          parent = parent.$parent
        } else {
          this._radioGroup = parent
          return true
        }
      }
      return false
    },
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch('ZRadioGroup', 'input', [val])
        } else {
          this.$emit('input', val)
        }
      }
    },
    _zFormItemSize() {
      return (this.zFormItem || {}).zFormItemSize
    },
    radioSize() {
      const temRadioSize = this.size || this._zFormItemSize
      return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize
    },
    isDisabled() {
      return this.isGroup ? this._radioGroup.disabled || this.disabled || (this.zFrom || {}).disabled : this.disabled || (this.zFrom || {}).disabled
    },
    tabIndex() {
      return !this.isDisabled ? (this.isGroup ? (this.model === this.label ? 0 : -1) : 0) : -1
    }
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit('change', this.model)
        this.isGroup && this.dispatch('ZRadioGroup', 'handleChange', this.model)
      })
    }
  }
}
</script>
