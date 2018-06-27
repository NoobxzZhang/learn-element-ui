import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

import Layout from '@/views/basic/Layout'
import Button from '@/views/basic/Button'

import Radio from '@/views/form/Radio.vue'
import Form from '@/views/form/Form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: Home
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ],
  linkActiveClass: 'active'
})
