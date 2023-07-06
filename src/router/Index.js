//
// 该文件专门用于创建整个应用的路由器
//
/*
createRouter 创建router实例对象
 createWebHashHistory 创建history模式的路由
 */

import {createRouter, createWebHashHistory} from "vue-router";
import rabbitConstantRoutes from "@/rabbit/router/index.js";
import {commonRouter} from "@/router/common.js";

const constantRoutes = [...rabbitConstantRoutes, ...commonRouter]
const router = new createRouter({
    routes: constantRoutes,
    history: createWebHashHistory(import.meta.env.BASE_URL),
})
console.log(constantRoutes)
export default router