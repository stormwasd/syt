<template>
  <div class='search'>
  <el-autocomplete
      clearable
      placeholder="请输入医院名称"
  />
  <el-button type="primary" size="default" :icon="Search">搜索</el-button>
  </div>
</template>

<script setup lang="ts">
// 引入element-plus提供图标
import {Search} from "@element-plus/icons-vue";
// 深度选择器:>>> /deep/ ::v-deep
</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 350px;
}
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
}
::v-deep(.el-input__wrapper) {
  width: 600px;
  margin-right: 10px;
}
</style>