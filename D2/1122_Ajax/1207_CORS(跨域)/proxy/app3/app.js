//服务器 后端代理
const Koa = require('koa');
const Static = require('koa-static-cache');
const Router = require('koa-router');

const mysql = require("mysql2/promise");
const { koaBody } = require('koa-body');
const jwt = require('jsonwebtoken');

const upload = require('./middlewares/upload.js');

let db;

~async function(){
    db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'1207_photos',
    })
}()

const server = new Koa();
const router = new Router();

server.use(Static('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}));

router.get('/',ctx=>{
    ctx.body = '123'
})

router.post('/login',koaBody({
    multipart:true
}),async ctx=>{
    console.log('body',ctx.request.body);
    let {username,password} = ctx.request.body;
    if(!username || !password){
        ctx.status = 400;
        return ctx.body = {
            code:1,
            message:'参数错误'
        }
    }
    let [[rs]] = await db.query("select * from `user` where `username` = ?",[
        username 
    ] );
    if(!rs){
        ctx.status = 404;
        return ctx.body = {
            code:2,
            message:'用户不存在'
        }
    }
    if(rs.password != password){
        ctx.status = 404;
        return ctx.body = {
            code:3,
            message:'密码错误'
        }
    }

    ctx.set('Authorization',jwt.sign({
        id:rs.id,
        username:rs.username
    },'yue'));

    ctx.body = {
        id:rs.id,
        username:rs.username
    }
})

router.get('/getPhotos',verify(),async ctx=>{
    let [rs] = await db.query("select * from `photos` where `user_id`=?",[
        ctx._user.id
    ] );
        // console.log(rs);
        rs = rs.map(r=>({
            ...rs,
            url:'/public/upload/' + r.name
        }));
        ctx.body = rs
})

router.post('/upload',verify(),upload(),async ctx=>{
    // console.log('file',ctx.request.files);
    let filename = ctx.request.files.file.newFilename;
    let rs = await db.query("insert into `photos` (`name`,`user_id`) value (?,?)",[
        filename,
        ctx._user.id
    ]);
    ctx.body = {
        url:'/public/upload/'+filename
    }
});

server.use(router.routes());

server.listen(7777,()=>{
    console.log('http://localhost:7777/public/index.html');
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