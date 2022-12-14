const Koa = require('koa');
const Static = require('koa-static-cache');

const http = require('http')
/**
 * 静态web服务器 
 * node 既能监听端口提供服务，也能发送请求
 */

const server = new Koa();
//代理服务
server.use(async (ctx,next)=>{
    // console.log('走这里',ctx.request.url);
    if(ctx.request.url == '/api'){
        //请求另一个地址 http://localhost:7777/getPhotos
        
        //请求代理
        //不受同源策略限制
        let data = await proxyRequest(ctx);

        ctx.body = data;
    }
    await next();
})

//提供静态资源服务
server.use(Static('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}));


server.listen(8888,()=>{
    console.log('http://localhost:8888/api');
})

function proxyRequest(ctx){
    return new Promise(resolve=>{
        const options = {
            protocol:'http:',
            hostname: 'localhost',
            port: 7777,
            path: '/getPhotos',
            method: 'get',
            headers:ctx.request.header
          };
      
        const req = http.request(options,res=>{
            let data = ''
            res.on('data', (chunk) => {
                // console.log(`BODY: ${chunk}`);
                data += chunk.toString();
            });
            res.on('end', () => {
                // console.log('No more data in response.');
                resolve(data);
            });
        });   
        req.write('');
        req.end();
    })
}