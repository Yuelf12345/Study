//服务器

const Koa = require('koa');
const Static = require('koa-static-cache');
const Router = require('koa-router');

const mysql = require("mysql2/promise");

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

//白名单
let whiteList = [
    'http://localhost:8888',
    'http://localhost:7777',
    'http://localhost:9999',
]
server.use(async (ctx,next)=>{
    let requestOrigin = ctx.header.origin;
    if(whiteList.includes(requestOrigin)){
        ctx.set('Access-Control-Allow-Origin',requestOrigin)
    }
    //预检请求
    if(ctx.method.toLowerCase() == 'options'){
        ctx.set('Access-Control-Request-Method','GET,OPTIONS,POST')
        ctx.body = '';
        return;
    }
    
    await next()
})

server.use(Static('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}));

router.get('/',ctx=>{
    ctx.body = '123'
})

router.get('/getPhotos',async ctx=>{
    let [rs] = await db.query("select * from `photos`" );
    // console.log(rs);
    rs = rs.map(r=>({
        ...rs,
        url:'/public/upload/' + r.name
    }));
    ctx.body = rs
})

router.post('/upload',upload(),async ctx=>{
    // console.log('file',ctx.request.files);
    let filename = ctx.request.files.file.newFilename;
    let rs = await db.query("insert into `photos` (`name`) value (?)",[
        filename
    ]);
    ctx.body = {
        url:'/public/upload/'+filename
    }
});

server.use(router.routes());

server.listen(7777,()=>{
    console.log('http://localhost:7777/public/index.html');
})