<template>
  <div>
    <div>
      <p>基础用法</p>
      <z-radio v-model="radio" label="1">备选项</z-radio>
      <z-radio v-model="radio" label="2">备选项</z-radio>
    </div>
    <div>
      <p>禁用状态</p>
      <z-radio disabled v-model="radio1" label="禁用">备选项</z-radio>
      <z-radio disabled v-model="radio1" label="选中且禁用">备选项</z-radio>
    </div>
    <div>
      <p>单选框组</p>
      <z-radio-group v-model="radio2">
        <z-radio :label="3">备选项</z-radio>
        <z-radio :label="6">备选项</z-radio>
        <z-radio :label="9">备选项</z-radio>
      </z-radio-group>
    </div>
    <div>
      <p>带有边框</p>
      <div>
        <z-radio v-model="radio7" label="1" border>备选项1</z-radio>
        <z-radio v-model="radio7" label="2" border>备选项2</z-radio>
        <z-radio v-model="radio7" label="3" border>备选项3</z-radio>
      </div>
      <div style="margin-top: 20px">
        <z-radio v-model="radio8" label="1" border size="medium">备选项1</z-radio>
        <z-radio v-model="radio8" label="2" border size="medium">备选项2</z-radio>
      </div>
      <div style="margin-top: 20px">
        <z-radio-group v-model="radio9" size="small">
          <z-radio label="1" border>备选项1</z-radio>
          <z-radio label="2" border disabled>备选项2</z-radio>
        </z-radio-group>
      </div>
      <div style="margin-top: 20px">
        <z-radio-group v-model="radio10" size="mini" disabled>
          <z-radio label="1" border>备选项1</z-radio>
          <z-radio label="2" border>备选项2</z-radio>
        </z-radio-group>
      </div>
    </div>
    <div>
      <p>按钮样式</p>
       <div>
        <z-radio-group v-model="radio3">
          <z-radio-button label="上海"></z-radio-button>
          <z-radio-button label="北京"></z-radio-button>
          <z-radio-button label="广州"></z-radio-button>
          <z-radio-button label="深圳"></z-radio-button>
        </z-radio-group>
      </div>
      <div style="margin-top: 20px">
        <z-radio-group v-model="radio4" size="medium">
          <z-radio-button label="上海" ></z-radio-button>
          <z-radio-button label="北京"></z-radio-button>
          <z-radio-button label="广州"></z-radio-button>
          <z-radio-button label="深圳"></z-radio-button>
        </z-radio-group>
      </div>
      <div style="margin-top: 20px">
        <z-radio-group v-model="radio5" size="small">
          <z-radio-button label="上海"></z-radio-button>
          <z-radio-button label="北京" disabled ></z-radio-button>
          <z-radio-button label="广州"></z-radio-button>
          <z-radio-button label="深圳"></z-radio-button>
        </z-radio-group>
      </div>
      <div style="margin-top: 20px">
        <z-radio-group v-model="radio6" disabled size="mini">
          <z-radio-button label="上海"></z-radio-button>
          <z-radio-button label="北京"></z-radio-button>
          <z-radio-button label="广州"></z-radio-button>
          <z-radio-button label="深圳"></z-radio-button>
        </z-radio-group>
      </div>
    </div>
    <div>
      <p>颜色选择</p>
      <z-radio-group v-model="radio12" fill="#f00" text-color="#ff0">
        <z-radio-button label="上海"></z-radio-button>
        <z-radio-button label="北京"></z-radio-button>
        <z-radio-button label="广州"></z-radio-button>
        <z-radio-button label="深圳"></z-radio-button>
      </z-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: '',
      radio3: '上海',
      radio4: '上海',
      radio5: '上海',
      radio6: '上海',
      radio7: '1',
      radio8: '1',
      radio9: '1',
      radio10: '1',
      radio12: '上海'
    }
  }
}
</script>
