//服务器 后端代理
const Koa = require('koa');
const Static = require('koa-static-cache');
const Router = require('koa-router');

const mysql = require("mysql2/promise");
const { koaBody } = require('koa-body');

const jwt = require('jsonwebtoken');
const KoaJwt = require('koa-jwt');

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

//KoaJwt
let secret = 'KoaJwt';
server.use(KoaJwt({
    secret,
}).unless({
    //排除不需要的路由(正则过滤)
    path:[
        /^\/public/,
        /^\/login/
    ]
}) )

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

    //Bad Authorization header format. Format is "Authorization: Bearer <token>"
    let token = jwt.sign({
        id:rs.id,
        username:rs.username
    },secret)
    //也可以ajax里设置头信息'Bearer '
    ctx.set('Authorization','Bearer '+token);

    ctx.body = {
        id:rs.id,
        username:rs.username
    }
})

router.get('/getPhotos',async ctx=>{
    let [rs] = await db.query("select * from `photos` where `user_id`=?",[
        // ctx._user.id    在state里取
        ctx.state.user.id
    ] );
        rs = rs.map(r=>({
            ...rs,
            url:'/public/upload/' + r.name
        }));
        ctx.body = rs
})

router.post('/upload',upload(),async ctx=>{
    let filename = ctx.request.files.file.newFilename;
    let rs = await db.query("insert into `photos` (`name`,`user_id`) value (?,?)",[
        filename,
        //
        ctx.state.user.id
    ]);
    ctx.body = {
        url:'/public/upload/'+filename
    }
});

server.use(router.routes());

server.listen(7777,()=>{
    console.log('http://localhost:7777/public/index.html');
})