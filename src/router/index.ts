import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/admin/',
        redirect: '/admin/home',
    },
    {
        path: '/admin/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/admin/home',
        component: () => import('../views/home/index.vue'),
        redirect: '/admin/dish',
        children: [
            {
                path: '/admin/order',
                component: () => import('../views/home/order.vue')
            },
            {
                path: '/admin/dish',
                component: () => import('../views/home/dish.vue'),
            },
            {
                path: '/admin/dishType',
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