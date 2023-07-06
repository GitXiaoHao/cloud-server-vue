
export const commonRouter = [
    {
        path: '/404',
        component: () => import('@/views/Page404.vue'),
        hidden: true
    },
    // 404 page must be placed at the end !!!
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
        hidden: true
    }
]