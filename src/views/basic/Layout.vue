<template>
  <div>
    <div>
      <p>layout布局</p>
      <z-row ref="zRow">
        <z-col :span="24"><div class="grid-content bg-purple-dark"></div></z-col>
      </z-row>
      <z-row>
        <z-col :span="12"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="12"><div class="grid-content bg-purple-light"></div></z-col>
      </z-row>
      <z-row>
        <z-col :span="8"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="8"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="8"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
      </z-row>
      <z-row>
        <z-col :span="4"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple-light"></div></z-col>
      </z-row>
    </div>
    <div>
      <p>分栏间隔</p>
      <z-row :gutter="20">
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
      </z-row>
    </div>
    <div>
      <p>混合布局</p>
      <z-row :gutter="20">
        <z-col :span="16"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="8"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row :gutter="20">
        <z-col :span="8"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="8"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row :gutter="20">
        <z-col :span="4"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="16"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="4"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
    </div>
    <div>
      <p>分栏偏移</p>
      <z-row :gutter="20">
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row :gutter="20">
        <z-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row :gutter="20">
        <z-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
    </div>
    <div>
      <p>对齐方式</p>
      <z-row type="flex" class="row-bg">
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row type="flex" class="row-bg" justify="center">
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row type="flex" class="row-bg" justify="end">
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row type="flex" class="row-bg" justify="space-between">
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
      <z-row type="flex" class="row-bg" justify="space-around">
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :span="6"><div class="grid-content bg-purple"></div></z-col>
      </z-row>
    </div>
    <div>
      <p>响应式布局</p>
      <z-row :gutter="10">
        <z-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"></div></z-col>
        <z-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple-light"></div></z-col>
        <z-col :xs="4" :sm="6" :md="8" :lg="9"><div class="grid-content bg-purple"></div></z-col>
        <z-col :xs="8" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple-light"></div></z-col>
      </z-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
