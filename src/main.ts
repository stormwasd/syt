// vue3框架提供的方法createApp方法，可以用来创建应用实例的方法
import { createApp } from 'vue'
// 引入清除默认样式
import '@/style/reset.scss'
// 引入根组件App
// @ts-ignore
import App from '@/App.vue'
// 引入全局组件--顶部、底部都是全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
// 引入vue-router核心插件并安装
import router from "@/router";
// 引入-element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 利用createApp方法创建应用实例，且将应用实例挂载到挂载点上，挂载点在静态页面index.html中
// createApp(App).mount('#app')
const app = createApp(App);
app.component('HospitalTop', HospitalTop);
app.component('HospitalBottom', HospitalBottom)
// 安装vue-router
app.use(router)
// 安装element-plus
app.use(ElementPlus)
// 挂载
app.mount('#app');