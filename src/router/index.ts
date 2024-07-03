import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/home',
        component: () => import('../views/home/index.vue'),
        redirect: '/echarts',
        children: [
            {
                path: '/echarts',
                component: () => import('../views/home/echarts.vue')
            },
            {
                path: '/order',
                component: () => import('../views/home/order.vue')
            },
            {
                path: '/dish',
                component: () => import('../views/home/dish.vue'),
            },
            {
                path: '/dishType',
                component: () => import('../views/home/dishType.vue'),
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router