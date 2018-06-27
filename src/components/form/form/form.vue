<template>
  <form
    class="el-form"
    :class="[
      labelPosition ? `el-form--label-${labelPosition}` : '',
      {'el-form--inline': inline}
    ]">
    <slot></slot>
  </form>
</template>

<script>
// import objectAssign from '@/utils/merge'

export default {
  name: 'ZForm',
  componentName: 'ZForm',
  provide() {
    return {
      zForm: this
    }
  },
  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelStuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      fields: []
    }
  },
  created() {
    this.$on('z.form.addField', field => {
      if (field) {
        this.fields.push(field)
      }
    })
    this.$on('z.form.removeField', field => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1)
      }
    })
  },
  methods: {
    resetFields() {
      if (!this.model) {
        process.env.NODE_ENV !== 'production' && console.warn('[Form]model is required for resetFields to work.')
        return
      }
      this.fields.forEach(field => {
        field.resetField()
      })
    }
  }
}
</script>
