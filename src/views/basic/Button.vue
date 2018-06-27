<template>
  <div>
    <div>
      <p>基础用法</p>
      <z-button>默认按钮</z-button>
      <z-button type="primary">主要按钮</z-button>
      <z-button type="text">文字按钮</z-button>
    </div>
    <div>
      <p>禁用状态</p>
      <z-button :plain="true" :disabled="true">主要按钮</z-button>
      <z-button type="primary" :disabled="true">主要按钮</z-button>
      <z-button type="text" :disabled="true">文字按钮</z-button>
    </div>
    <div>
      <p>有颜色倾向</p>
      <div class="block">
        <span class="demonstration">默认显示颜色</span>
        <span class="wrapper">
          <z-button type="success">成功按钮</z-button>
          <z-button type="warning">警告按钮</z-button>
          <z-button type="danger">危险按钮</z-button>
          <z-button type="info">信息按钮</z-button>
        </span>
      </div>
      <div class="block">
        <span class="demonstration">hover 显示颜色</span>
        <span class="wrapper">
          <z-button :plain="true" type="success">成功按钮</z-button>
          <z-button :plain="true" type="warning">警告按钮</z-button>
          <z-button :plain="true" type="danger">危险按钮</z-button>
          <z-button :plain="true" type="info">信息按钮</z-button>
        </span>
      </div>
    </div>
    <div>
      <p>图标按钮</p>
      <z-button type="primary" icon="edit"></z-button>
      <z-button type="primary" icon="share"></z-button>
      <z-button type="primary" icon="delete"></z-button>
      <z-button type="primary" icon="search">搜索</z-button>
      <z-button type="primary">上传<i class="z-icon-upload z-icon--right"></i></z-button>
    </div>
    <div>
      <p>按钮组</p>
      <z-button-group>
        <z-button type="primary" icon="arrow-left">上一页</z-button>
        <z-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></z-button>
      </z-button-group>
      <z-button-group>
        <z-button type="primary" icon="edit"></z-button>
        <z-button type="primary" icon="share"></z-button>
        <z-button type="primary" icon="delete"></z-button>
      </z-button-group>
    </div>
    <div>
      <p>加载中</p>
      <z-button type="primary" :loading="true">加载中</z-button>
    </div>
    <div>
      <p>不同尺寸</p>
      <z-button type="primary" size="large">大型按钮</z-button>
      <z-button type="primary">正常按钮</z-button>
      <z-button type="primary" size="small">小型按钮</z-button>
      <z-button type="primary" size="mini">超小按钮</z-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.block {
  padding: 30px 24px;
  overflow: hidden;
  border-bottom: 1px solid #eff2f6;
}
.demonstration {
  font-size: 14px;
  color: #8492a6;
  line-height: 44px;
}
.wrapper {
  float: right;
  margin-right: 20px;
}
</style>
