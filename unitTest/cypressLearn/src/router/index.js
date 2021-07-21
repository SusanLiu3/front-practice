import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('../views/login.vue')
        },
        {
            path: '/canvasEditor',
            component: () => import('../views/CanvasEditor/LeftPanel.vue')
        },
        {
            path:'/3d',
            component:()=>import('../views/3D.vue')
        }
    ]
})