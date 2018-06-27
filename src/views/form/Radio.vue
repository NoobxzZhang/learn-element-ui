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
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>
    <div>
      <p>带有边框</p>
      <div>
        <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
        <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio9" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio10" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: '选中且禁用',
      radio2: ''
    }
  }
}
</script>
