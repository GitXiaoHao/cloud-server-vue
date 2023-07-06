//
// @/rabbit/router/index.js
// 路由设计
// createRouter 创建router实例对象
// createWebHashHistory 创建history模式的路由
//


const RABBIT_BASE_URL = "/rabbit"

const rabbitConstantRoutes = [
    {
        path: RABBIT_BASE_URL,
        component: () => import("@/rabbit/views/layout/Index.vue"),
        children: [
            {
                path: '',
                component: () => import('@/rabbit/views/home/Index.vue')
            },
            {
                path: 'category',
                component: () => import('@/rabbit/views/category/Index.vue')
            }
        ]
    },
    {
        path: RABBIT_BASE_URL + "/login",
        component: () => import("@/rabbit/views/login/Index.vue")
    }
]
// const router = new createRouter({
//     routes: constantRoutes,
//     history: createWebHashHistory(import.meta.env.BASE_URL),
// })
export default rabbitConstantRoutes