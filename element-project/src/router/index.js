/**
 * 1.先导入vue实例和vue-router实例
 */
 import Vue from 'vue'
 import Router from 'vue-router'
 import Home from "@/views/Home";
 import About from "@/views/About";

 // 2. 通过Vue.use(插件)，安装插件
 Vue.use(Router)
 
 //3. 创建 router路由对象
 const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:About
    },
 ]
 const router = new Router({
     //配置路由和组件之间的应用关系
     routes
 })
 //4.导出router实例
 export default router