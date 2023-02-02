# router教程 https://router.vuejs.org/zh/api/index.html
# 常见面试题 https://blog.csdn.net/weixin_52834435/article/details/124523404

## vue2.0 版本 推荐使用 npm i vue-router@3.5.2

### vue-router理解
- vue-router 是 vue.js 官方提供的一个路由管理工具,能够根据URL去切换不同的组件视图,也可以让URL让带参实现对同一组件的复用。

### vue-router 路由模式
- hash(默认)
    使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，其显示的网路路径中会有 “#” 号，有一点点丑。这是最安全的模式，因为他兼容所有的浏览器和服务器。
- history
    美化后的hash模式，会去掉路径中的 “#”。依赖于Html5 的history，pushState API,所以要担心IE9以及一下的版本，感觉不用担心。并且还包括back、forward、go三个方法，对应浏览器的前进，后退，跳转操作。就是浏览器左上角的前进、后退等按钮进行的操作。刷新会重新请求服务器
- abstract 
    abstract 是vue路由中的第三种模式，本身是用来在不支持浏览器API的环境中，充当fallback，而不论是hash还是history模式都会对浏览器上的url产生作用，本文要实现的功能就是在已存在的路由页面中内嵌其他的路由页面，而保持在浏览器当中依旧显示当前页面的路由path，这就利用到了abstract这种与浏览器分离的路由模式。
### 路由命名
    {
        path:'/home',    //路径
        redirect: '/'，     //重定向    访问/home时，URL将会被替换成/，然后匹配路由为/
        alias:'/',          //别名      访问/时，URL为/,然后匹配路由为/home
        component:Home,     //渲染组件 
        props: true             // 布尔模式，path: '/user/:id'
        props: {id: '777777'}   // 对象模式，path: '/user'
        props: route => ({query: route.query.q})    // 函数模式，path: '/user'
        meta: { requiresAuth: true }    // 只有经过身份验证的用户才能创建帖子
    }

### 路由匹配
-    {path:'/home' , component:Home}
- 动态路由    {path:'/about/:id' , component:About}
- 嵌套路由    children:[{
                    // /about/:id/:name
                    path: ':name',
                    component: GoAboutName,
                    props:true,//把路由收到的所有params参数通过props传给GoAboutName组件
                }],

### 路由导航
- 声明式导航    
    <router-link :to="/about/123">      //用路径
    <router-link :to="{name: 'about', params?: {id: 'test'}}">   //用别名

- 编程式导航
    this.$router.push(name:"aboutView")            //有历史记录
    this.$router.replace(name:"aboutView")         //无历史记录

### 路由守卫
    进行操作的鉴权，当操作与之条件匹配时，操作成功，当操作与之不匹配时，操作终止，作用就是是对路由进行权限控制。
    路由守卫分为三种 分别是：全局路由守卫、组件路由守卫、独享路由守卫。
#### 全局守卫
-   beforeEach(to, from, next) 全局前置守卫，路由跳转前触发
-   beforeResolve(to, from, next) 全局解析守卫 在所有组件内守卫和异步路由组件被解析之后触发
-   afterEach(to, from) 全局后置守卫，路由跳转完成后触发

#### 路由独享守卫
-   beforeEnter(to,from,next) 路由对象单个路由配置 ，单个路由进入前触发

#### 组件路由守卫
-   beforeRouteEnter(to,from,next)  在组件生命周期beforeCreate阶段触发
-   beforeRouteUpdate(to,from,next) 当前路由改变时触发
-   beforeRouteLeave(to,from,next)  导航离开该组件的对应路由时触发

### 路由懒加载
- vue异步组件技术 ==== 异步加载  
    { path: '/home', name: 'home', component: resolve => require(['@/components/home'],resolve) },
- 使用import
    const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
- webpack提供的require.ensure() 
    { path: '/home', name: 'home', component: r => require.ensure([], () => r(require('@/components/home')), 'demo') },