<template>
  <div
    class="el-form-item"
    :class="[{
      'el-form-item--feedback': elForm && elForm.stasusIcon,
      'is-error': validateState === 'error',
      'is-validating': validateState === 'validating',
      'is-success': validateState === 'success',
      'is-required': isRequired || required
    },
    sizeClass ? 'el-form-item--' + sizeClass : '']">
    <label :for="labelFor" class="el-form-item__label" :style="labelStyle" v-if="label || $slots.label">
      <slot name="label">{{ label + form.labelSuffix }}</slot>
    </label>
    <div class="el-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <div
          v-if="validateState === 'error'"
          class="el-form-item__error"
          :class="{
            'el-form-item__error--inline': typeof inlineMessage === 'boolean'
              ? inlineMessage
              : (elForm && elForm.inlineMessage || false)
          }">
          {{ validateMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import emitter from '@/mixins/emitter'
import objectAssign from '@/utils/merge'
import { noop, getPropByPath } from '@/utils/util'
export default {
  name: 'ZFormItem',
  componentName: 'ZFormItem',
  mixins: [emitter],
  provide() {
    return {
      zFormItem: this
    }
  },
  inject: ['zForm'],
  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      typeof: Boolean,
      default: false
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false
    }
  },
  computed: {
    labelFor() {
      return this.for || this.prop
    },
    form() {
      let parent = this.$parent
      let parentName = parent.$options.componentName
      while (parentName !== 'ZForm') {
        if (parentName === 'ZFormItem') {
          this.isNested = true
        }
        parent = parent.$parent
        parentName = parent.componentName
      }
      return parent
    },
    labelStyle() {
      const result = {}
      if (this.form.labelPosition === 'top') return result
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        result.width = labelWidth
      }
      return result
    },
    contentStyle() {
      const result = {}
      const label = this.label
      if (this.form.labelPosition === 'top' || this.form.inline) return result
      if (!label && !this.labelWidth && this.isNested) return result
      const labelWidth = this.labelWidth || this.form.labelWidth
      if (labelWidth) {
        result.marginLeft = labelWidth
      }
      return result
    },
    fieldValue: {
      cache: false,
      get() {
        const model = this.form.model
        if (!model || !this.prop) return
        let path = this.prop
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.')
        }

        return getPropByPath(model, path, true).v
      }
    }
    // isRequired() {}
  },
  mounted() {
    if (this.prop) {
      this.dispatch('ZForm', 'z.form.addField', [this])

      let initialValue = this.fieldValue
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue)
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      })

      let rules = this.getRules()

      if (rules.length || this.required !== undefined) {
        this.$on('z.form.blur', this.onFieldBlur)
        this.$on('z.form.change', this.onFieldChange)
      }
    }
  },
  beforeDestroy() {
    this.dispatch('ZForm', 'z.form.removeField', [this])
  },
  methods: {
    getRules() {
      let formRules = this.form.rules
      const selfRules = this.rules
      const requiredRule = this.required !== undefined ? { required: !!this.required } : []

      const prop = getPropByPath(formRules, this.prop || '')
      formRules = formRules ? prop.o[this.prop || ''] || prop.v : []

      return [].concat(selfRules || formRules || []).concat(requiredRule)
    },
    getFilteredRules(trigger) {
      const rules = this.getRules()

      return rules
        .filter(rule => {
          if (!rule.trigger || trigger === '') return true
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1
          } else {
            return rule.trigger === trigger
          }
        })
        .map(rule => objectAssign({}, rule))
    },
    onFieldBlur() {
      this.validate('blur')
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false
        return
      }

      this.validate('change')
    },
    validate(trigger, callback = noop) {
      this.validateDisabled = false
      const rules = this.getFilteredRules(trigger)
      if (!rules || rules.length === 0) {
        callback()
        return true
      }

      this.validateState = 'validating'

      const descriptor = {}
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          // delete rule.trigger
          Reflect.deleteProperty(rule, 'trigger')
        })
      }
      descriptor[this.prop] = rules

      const valiedator = new AsyncValidator()
      const model = {}

      model[this.prop] = this.fieldValue

      valiedator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        this.validateState = !errors ? 'sucess' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        callback(this.validateMessage, invalidFields)
        this.zForm && this.zForm.$emit('validate', this.prop, !errors)
      })
    },
    clearValidate() {
      this.validateState = ''
      this.validateMessage = ''
      this.validateDisabled = false
    },
    resetField() {
      this.validateState = ''
      this.validateMessage = ''
      let model = this.form.model
      let value = this.fieldValue
      let path = this.prop
      if (path.indexOf(':') > -1) {
        path = path.replace(/:/, '.')
      }

      let prop = getPropByPath(model, path, true)

      this.validateDisabled = true
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue)
      } else {
        prop.o[prop.k] = this.initialValue
      }
      /* Select 的值被代码改变时不会触发校验
       */
    }
  }
}
</script>
