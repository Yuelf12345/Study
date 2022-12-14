const Koa = require('koa');
const Static = require('koa-static-cache');
const proxy = require('koa-server-http-proxy');

const http = require('http')

const server = new Koa();
//代理服务
server.use(proxy('/api',{
    // 'http://localhost:9999/api/getPhotos
    target:'http://localhost:7777',
    // 'http://localhost:7777/api/getPhotos
    pathRewrite:{
    // 'http://localhost:7777/getPhotos
        '^/api':''
    },
}))
//提供静态资源服务
server.use(Static('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}));


server.listen(9999,()=>{
    console.log('http://localhost:9999/public/index.html');
})

