const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static-cache');
const indexStatic = require('./middles/indexStatic.js')

const fs = require('fs');
const mime = require('./MIME.json')
const data = require('./data.json')
const nunjucks = require('nunjucks')
const tpl = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('template')
)

const server = new Koa();

server.use(Static('./static', {
    prefix:'/public',
    gzip:true,
    dynamic:true
}))
// server.use(indexStatic('/static'))


const router = new Router();

server.use((ctx, next) => {
    next();
})
router.get('/', ctx => {
    // ctx.body = '成功';
    ctx.render('index.html',{
        tempTitle:'微博',
        data
    })
})
router.get('/register', ctx => {
    ctx.body = '注册';
})
router.get('/login', ctx => {
    ctx.body = '登录';
})

server.use((ctx,next)=>{
    ctx.render = function(filename,data){
        ctx.body = tpl.render(filename,data)
    }
    next();
})

let routerMiddleware = router.routes();
server.use(routerMiddleware);

server.listen(8080);