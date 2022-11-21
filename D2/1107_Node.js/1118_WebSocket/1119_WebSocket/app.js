const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static-cache');

const server = new Koa();
const router = new Router();

server.use(Static('./public',{
    prefix: '/public',
    gzip:true,
    dynamic:true
}));

router.get('/',ctx=>{
    ctx.body = 'hello';
});

const users = ['111','222','333'];

router.get('/getData',async ctx=>{
    ctx.body = users;
    // ctx.body = `
    //     <html>
    //         <head><head>
    //         <body>
    //             ${users}
    //             <script>
    //                 setTimeout(()=>{
    //                     window.location.reload();
    //                 },1000);
    //             </script>
    //         </body>
    //     </html>
    // `;
});

server.use(router.routes());

server.listen(1118,()=>{
    console.log('服务器启动成功,http://localhost:1118/');
});
