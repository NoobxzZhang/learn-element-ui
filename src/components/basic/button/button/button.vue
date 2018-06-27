<template>
  <button
    class="el-button"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
    :class="[
      type ? `el-button--${type}` : '',
      size ? `el-button--${size}` : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain
      }
    ]">
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="`el-icon-${icon}`" v-if="icon && !loading" ></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ZButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    disabled: Boolean,
    loading: Boolean,
    autofocus: Boolean,
    plain: Boolean
  },
  methods: {
    handleClick(evt) {
      console.log('handleClick')
      this.$emit('click', evt)
    }
  }
}
</script>
