const Koa = require('koa');
const Router = require('koa-router');
const nunjucks = require('koa-nunjucks-2');
let app = new Koa();
let router = new Router();

app.use(nunjucks({
    ext:'html',//.njk
    path:__dirname+'/views',
    nunjucksConfig:{
        trimBlocks:true //防止Xss漏洞
    }
}))

router.get('/',async ctx => {
    // ctx.body = 'Hello World!';
    await ctx.render('index',{
        data:'数据',
        num:3,
        arr:[{name:'张三',age:19},{name:'李四',age:20},{name:'王五',age:21}],
        str:'Hello World'
    });
})
router.get('/son1',async ctx => {
    await ctx.render('son1');
})
router.get('/import',async ctx => {
    await ctx.render('import');
})
app.use(router.routes());
app.listen(3001);