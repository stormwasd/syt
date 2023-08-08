// vue3框架提供的方法createApp方法，可以用来创建应用实例的方法
import { createApp } from 'vue'
// 引入根组件App
// @ts-ignore
import App from '@/App.vue'
// 利用createApp方法创建应用实例，且将应用实例挂载到挂载点上，挂载点在静态页面index.html中
createApp(App).mount('#app')
