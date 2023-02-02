const Koa = require('koa');

const Server = new Koa();

Server.use((ctx,next)=>{
    ctx.body = 'hello koa'
})

Server.listen(8081,()=>{
    console.log("服务器已启动");
})