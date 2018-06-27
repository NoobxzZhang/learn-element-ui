<template>
  <div class="layout__aside">
    <div class="nav-item">
      <router-link to="/" exact>首页</router-link>
    </div>
    <div class="nav-item">
      <a>基础组件</a>
      <div class="nav-group" v-for="group in navList" :key="group.name">
        <div class="nav-group__title">{{group.name}}</div>
        <ul class="pure-menu-list">
          <li class="nav-item" v-for="item in group.list" :key="item.path">
            <router-link :to="item.path">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: 'Basic',
          list: [
            {
              name: 'Layout 布局',
              path: 'layout'
            },
            {
              name: 'Button 按钮',
              path: 'button'
            }
          ]
        },
        {
          name: 'Form',
          list: [
            {
              name: 'Radio 单选框',
              path: 'radio'
            },
            {
              name: 'Checkbox 多选框',
              path: 'checkbox'
            },
            {
              name: 'Input 输入框',
              path: 'input'
            },
            {
              name: 'InputNumber 计数器',
              path: 'input-number'
            },
            {
              name: 'Select 选择器',
              path: 'selete'
            },
            {
              name: 'Cascader 级联选择器',
              path: 'cascader'
            },
            {
              name: 'Switch 开关',
              path: 'switch'
            },
            {
              name: 'Slider 滑块',
              path: 'slider'
            },
            {
              name: 'TimePicker 时间选择器',
              path: 'time-picker'
            },
            {
              name: 'DatePicker 日期选择器',
              path: 'date-picker'
            },
            {
              name: 'DateTimePicker 日期时间选择器',
              path: 'date-time-picker'
            },
            {
              name: 'Upload 上传',
              path: 'upload'
            },
            {
              name: 'Rate 评分',
              path: 'rate'
            },
            {
              name: 'ColorPicker 颜色选择器',
              path: 'color-picker'
            },
            {
              name: 'Transfer 穿梭框',
              path: 'transfer'
            },
            {
              name: 'Form 表单',
              path: 'form'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.layout__aside {
  height: 100%;
  box-sizing: border-box;
  padding: 24px 0 55px;
  overflow: auto;
}
.nav-item {
  a {
    font-size: 16px;
    color: #5e6d82;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: all 0.3s;
    &.active,
    &:hover {
      color: #20a0ff;
    }
  }
  .nav-item {
    a {
      display: block;
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      padding-left: 24px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
.nav-group__title {
  font-size: 12px;
  color: #99a9bf;
  padding-left: 8px;
  line-height: 26px;
  margin-top: 10px;
}
.pure-menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    list-style: none;
  }
}
</style>
