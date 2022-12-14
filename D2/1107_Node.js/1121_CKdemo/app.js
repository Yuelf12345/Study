const Koa = require('koa');
const Router = require('koa-router');
const Views = require('koa-views');
const Static = require('koa-static');
const bodyParser = require('koa-bodyParser');
const md5 = require("md5"); 

const server = new Koa();
const router = new Router();
let users = {
    name:'张三',
    pwd:123
}

server.use(Views(__dirname+'/views'),{
    map:{
        html:'pug'
    }
})
server.use(Static(__dirname+'/static'));
server.use(bodyParser());


router.get('/login',async (ctx,next)=>{
    // ctx.body = '登录'
    let cookieInfo = ctx.cookies.get('isLogin');
    if(cookieInfo){
        let serverInfo = md5("张三"+"123");
        if(serverInfo==cookieInfo){
        await ctx.redirect('/index');
        }
    }
    await ctx.render('login.pug');
});
router.post('/checkUser',(ctx,next)=>{
    // console.log(ctx.request.body);
    if(ctx.request.body.username==users.name && ctx.request.body.password==users.pwd){
        if(ctx.request.body.remember){
            let loginStatus = md5('张三'+'123')
            ctx.cookies.set('isLogin',loginStatus,{
                maxAge:300*1000
            })
        }
        ctx.redirect('/index')
    }
});

router.get('/index',async (ctx,next)=>{
    await ctx.render('index.pug')
})
server.use(router.routes());
server.listen(1121,()=>{
    console.log('服务器已启动,请访问http://localhost:1121/login');
})