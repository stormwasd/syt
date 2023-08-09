<template>
  <div class="container">
    <!--顶部全局组件-->
    <HospitalTop/>
    <!--展示路由组件区域-->
    <div class="content">
      hahahahaha
    </div>
    <div class="bottom">
      123123
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
    background: red;
  }
  .bottom {
    width: 100%;
    height: 50px;
    background: cyan;
  }
}
</style>