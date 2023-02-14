// 管理路由文件
import Vue from 'vue';
import Router from 'vue-router';
import store from "../store";

import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(Router);

const routes = [{
    path:'/',
    name:'Home',
    component:HomePage,
    meta:{
        requireAuth:true
    }
},{
    path:'/login',
    name:"Login",
    component:LoginPage
},{
    path:"/detail/:id",
    name:"Detail",
    props:true,
    component:()=>
    import("../views/DetailPage.vue")
},{
    path:'*',
    component:NotFound
}];

const router = new Router({
    mode:"history",
    //在vue.config.js文件，可进行baseUrl配置，接口代理以及其他配置：
    base: process.env.BASE_URL,
    routes,
});

// 路由守卫 to上面只有当前meta 😓
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
        const token = store.state.token;
        if(token){
            next();
            return;
        }else{
            next({
                name:"Login"
            });
            return 
        }
    }
    next()
}) 

export default router;