import {createRouter, createWebHistory} from "vue-router";
// createRouter方法用于创建多个路由器实例，key管理多个路由
export default createRouter({
    // 路由的模式的设置
    history: createWebHistory(),
    // 管理路由
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/hospital',
            component: () => import('@/pages/hospital/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        }
    ]
})