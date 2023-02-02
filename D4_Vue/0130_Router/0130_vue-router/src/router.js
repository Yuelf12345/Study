import VueRouter from 'vue-router'
import Vue from 'vue'

import GoHome from './views/GoHome.vue'
import GoAbout from './views/GoAbout.vue'
import NotFound from './views/NotFound.vue'
import GoAboutName from './views/GoAboutName.vue'
import OneView from './views/OneView.vue'
import TwoView from './views/TwoView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        // {
        //     path: "/home",
        //     // 重定项
        //     // redirect: '/'
        // },
            {
            path: '/',
            //别名
            alias:["/home","/hei"],
            // component: GoHome
            components:{
                default:GoHome,
                one:OneView,
                two:TwoView
            }
        },{
            path:"/about/:id",
            name:'aboutView',
            component:GoAbout,
            props:true,
            // 嵌套
            children:[
                {
                    // /about/:id/:name
                    path: ':name',
                    component: GoAboutName,
                    props:true,
                }
            ],
            beforeEnter(to,from,next){
                console.log('beforeEnter---')
                console.log(to);
                console.log(from);
                console.log(next);
                next()
            },
            meta:{
                isRequired:true,
                check:false,
            },
        },{
            path:"*",
            component:NotFound
        }
    ] 
    });

    router.beforeEach((to,from,next)=>{
        console.log(to);
        console.log(from);
        console.log(next);
        next()
    });

    router.afterEach((to,from)=>{
        console.log(to);
        console.log(from);
    })

export default router