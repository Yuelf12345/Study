import Vue  from "vue";
import VueRouter from "vue-router";

import GoodsList from './views/GoodsList.vue'
import GoodsDetail from './views/GoodsDetail.vue'
import NotFound from './views/NotFound.vue'



Vue.use(VueRouter);

const router = new VueRouter({
    routes:[{
            path: '/',
            component:GoodsList
        },{
            path:'/detail/:id',
            name:"GoodsDetail",
            component:GoodsDetail
        },{
            path:'*',
            component:NotFound
        }] 
    });

export default router