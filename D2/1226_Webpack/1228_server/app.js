const koa = require('koa');
const Router = require('koa-router');

const server = new koa();
const router = new Router();

router.get('/getUser',async ctx=>{
    ctx.body = 'hello api'
})

server.use(router.routes());

server.listen(1228,()=>{
    console.log('启动成功');
})