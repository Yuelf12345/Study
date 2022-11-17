const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');

let app = new Koa();
let router = new Router();

app.use(views(__dirname+"/views",{
    map:{
        html:'pug'
    }
}));
router.get("/",async ctx => {
    // ctx.body = 'Hello World!';
    let per = [{name:'张三',age:20},{name:'李四',age:21},{name:'王五',age:22}];
    await ctx.render('index.pug',{
        data:'数据',
        per
    })
})
app.use(router.routes());
app.listen(3000);