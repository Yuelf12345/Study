const Koa = require('koa');
const Static = require('koa-static-cache');

//静态web服务器
const server = new Koa();

server.use(Static('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}));

server.listen(8888,()=>{
    console.log('http://localhost:8888/public/index.html');
})