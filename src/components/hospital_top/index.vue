<template>
  <div class="top">
    <div class="content">
         <!-- 左侧 -->
         <div class="left">
           <img src="../../assets/images/logo.png" alt="">
           <p>尚医通 预约挂号统一平台</p>
         </div>
         <!-- 右侧 -->
         <div class="right">
           <p class="help">帮助中心</p>
           <p class="login">登录/注册</p>
         </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.top {
  position: fixed;  // 用于固定到顶部
  z-index: 999;
  width: 100%;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    height: 70px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
      }
      p {
        font-size: 20px;
        color: #55a6fe;
      }
    }
    .right {
      display: flex;
      align-items: center;  // 属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式
      justify-content: center;  // 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式
      font-size: 14px;
      color: #bbb;
      .help {
        margin-right: 10px;
      }
    }
  }
}
</style>