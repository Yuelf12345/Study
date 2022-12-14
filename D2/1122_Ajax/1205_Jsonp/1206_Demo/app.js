const Koa = require("koa");
const Router = require("koa-router");
const Static = require("koa-static-cache");

const server = new Koa();
const router = new Router();

server.use(Static('./public'),{
    prefix:'/public',
    gzip:true,
    dynamic:true
})

router.get('/',ctx=>{
    ctx.body = 'hello'
})

server.use(router.routes());

server.listen(1207,()=>{
    console.log("http://localhost:1207");
})