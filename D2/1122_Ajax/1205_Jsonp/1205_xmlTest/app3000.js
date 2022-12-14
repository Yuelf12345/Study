const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static');

const server = new Koa();
const router = new Router();

server.use(Static(__dirname+'/static'));

router.get('/',ctx=>{
    ctx.body = '3000端口';
})
router.get('/getAjax',ctx=>{
    let obj = {
        name:'李四',
        age:'23'
    }
    // let cb = ctx.query.cb;
    let cb = ctx.query.callback;
    // let cb = ctx.query.csrf_token;
    ctx.body = `${cb}(${JSON.stringify(obj)})`;
    // ctx.body = "var a = 20"
})

server.use(router.routes());

server.listen(3000,()=>{
    console.log('http://localhost:3000');
});