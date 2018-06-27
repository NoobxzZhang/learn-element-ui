<template>
  <div id="app">
    <div class="main-content">
      <div class="scorll-wrapp"></div>
      <v-aside></v-aside>
      <v-content></v-content>
    </div>
  </div>
</template>

<script>
import Aside from './views/layout/Aside'
import Content from './views/layout/Content'
export default {
  name: 'App',
  components: {
    VAside: Aside,
    VContent: Content
  }
}
</script>

<style lang="less" scoped>
.main-content {
  position: relative;
  overflow: auto;
  margin: 0 auto;
  width: 1000px;
  .layout__aside {
    position: fixed;
  }
  .layout__content {
    padding-left: 270px;
    // flex: 1;
    // width: 0;
  }
}
</style>
