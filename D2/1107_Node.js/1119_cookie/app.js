const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const static = require("koa-static");
const bodyParser = require("koa-bodyParser");
const md5 = require("md5");     //md5加密
const lists = require("./data/list.json");

const server = new Koa();
const router = new Router();

server.use(views(__dirname+"/views"),{
    map:{
        html:"pug"
    }
});
server.use(static(__dirname+"/static"));
server.use(bodyParser());
router.get("/login",async (ctx,next)=>{
    let cookieInfo = ctx.cookies.get("isLogin");
    if(cookieInfo){
        let serverInfo = md5("张三"+"123");
        if(serverInfo==cookieInfo){
        await ctx.redirect('/list');
        }
    };

    // ctx.body = '登录成功';
    await ctx.render('login.pug');
});

router.post("/checkUser",(ctx,next)=>{
    // console.log(ctx.request.body);
    // 从数据库匹配,现在写死
    if(ctx.request.body.username == '张三' && ctx.request.body.password == '123'){
        if(ctx.request.body.remember){
            //记录cookie
            let loginStatus = md5("张三"+"123");
            ctx.cookies.set("isLogin",loginStatus,{
                maxAge:300*1000    //过期时间
            });
        }

        //跳转页面
        ctx.redirect("/list");
    }else{
        ctx.redirect("/error");
    }
});

router.get("/list",async (ctx,next)=>{
    await ctx.render('list.pug',{
        lists
    })
});
router.get("/error",async (ctx,next)=>{
    await ctx.render('error.pug');
});
router.get("/detail",async (ctx,next)=>{
    await ctx.render('detail.pug',{
        lists
    });
});


server.use(router.routes());
server.listen(1121,()=>{
    console.log("服务器启动成功,http://localhost:1121/login");
});