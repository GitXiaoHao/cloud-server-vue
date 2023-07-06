import {createApp} from 'vue'
import App from './App.vue'

import {loadPlugins} from "@/plugins/index.js";
import router from "@/router/Index.js";

// import './style.css'
const app = createApp(App)
/** 加载插件 */
loadPlugins(app)
/** 添加路由 */

//TODO 测试接口函数
/*import {getHitokoto} from "@/rabbit/apis/testApi.js";
let hitokoto = getHitokoto();
console.log(hitokoto)*/
app.use(router)
router.isReady().then(() => {
    app.mount("#app")
})