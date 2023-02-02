// 管理路由文件
import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import HomePage from '../views/HomePage.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(Router);

const router = new Router({
    routes:[{
        path:'/',
        component:LoginPage
    },{
        path:'/index',
        name:'index',
        component:HomePage
    },{
        path:'*',
        component:NotFound
    }]
});

export default router;