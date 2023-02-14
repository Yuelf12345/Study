const Koa = require('koa');
const mysql = require("mysql2/promise");
const { koaBody } = require('koa-body');
const Router = require("koa-router")
const jwt = require('jsonwebtoken');


// const db = require('./libs/db') 
const upload = require('./libs/upload')

// 连接数据库
let db;
~async function(){
    db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'0201_uploadphoto',
    })
}()

let secret = 'KoaJwt';


const Server = new Koa();
const router  = new Router

// Server.use(jwt({
//     secret,
// }).unless({
//     //排除不需要的路由(正则过滤)
//     path:[
//         /^\/login/
//     ]
// }) )

router.get('/',ctx=>{
    ctx.body = '123'
})

// 验证账号密码
router.post('/login',koaBody({
    //实现大附件分段上传的功能
    multipart:true
}),async ctx=>{
    let {username,password} = ctx.request.body;
     //  后端验证登录信息，返回结果给前端
    if( !username || ! password){
        ctx.status = 400;
        return ctx.body = {
            state: 1,
            msg: "参数错误",
        }
    }
    let [[rs]] = await db.query("select * from `user` where `username` = ?",[username]);
    if(!rs){
        ctx.status = 404;
        return ctx.body = {
            state:2,
            msg:"用户不存在"
        }
    }else{
        const token = jwt.sign(
            {uID: rs.id},
            'yue',
            {expiresIn:"2h"}  //过期时间
            )
        return ctx.body = {
            state:0,
            msg:"登录成功",
            uID:rs.id,
            data:{
                token,
            }
        }
    }
})

// 上传文件
router.post('/upload',verify(),koaBody({
    multipart:true,
    // formidable:{
    //     // 上传文件路径
    //     uploadDir:'C:/Vue/Y/D4_Vue/0201_Demo/Server8081/static/image',
    //     keepExtensions:true
    // }
}),upload);




Server.use(router.routes());

Server.listen(8081,()=>{
    console.log("服务器已启动,请访问http://localhost:8081/");
})

//
function verify(){
    return async (ctx,next)=>{
        //
        console.log('ctx.request.header.authorization',ctx.request.header.authorization)
        let authorization = ctx.request.header.authorization;
    
        console.log('authorization',typeof authorization);
        if(!authorization == 'null'){
            return ctx.body = {
                code:1,
                message:'未登录'
            }
        }else{
            let user = jwt.verify(authorization,'yue');
            console.log(user); 
            if(!user){
                return ctx.body = {
                    code:1,
                    message:'未登录'
                }
            }
            //登录进去
            ctx._user = user
        } 
        await next();
    }
}