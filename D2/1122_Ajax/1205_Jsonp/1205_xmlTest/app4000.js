const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static');

const server = new Koa();
const router = new Router();

server.use(Static(__dirname+'/static'));

router.get('/',ctx=>{
    ctx.body = '4000端口';
})
router.get('/getAjax',ctx=>{
    ctx.body = {
        name:'张三',
        age:'22'
    }
})

server.use(router.routes());

server.listen(4000,()=>{
    console.log('http://localhost:4000');
})