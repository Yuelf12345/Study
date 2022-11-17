const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static-cache');
const nunjucks = require('nunjucks');
const goods = require('./data/goods.json')
const mysql = require('mysql2/promise');

//控制器加载
const mainController = require('./controller/main.js')

const server = new Koa();
const router = new Router();

//静态资源处理
server.use(Static('./public',{
    prefix: '/public',
    gzip:true,
    dynamic:true
}));

//载入模板引擎
const tpl = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('views',{
        watch:true,
        noCache:true
    })
)

let connection;
~async function(){
//连接数据库
    connection =await mysql.createConnection({
        host:'localhost',
        // port:3305,
        user:'root',
        password:'123456',
        database:'1116',
    });
//数据库查询
    const [goods] = await connection.execute('SELECT * FROM `goods` ',[])
    console.log(goods);

    //数据库插入
    // for(let i=0;i<goods.length;i++){
    //     await connection.execute('insert into goods (`id`,`title`,`sellNumber`,`price`,`favorRate`) values (?,?,?,?,?)',[
    //         goods[i].id,
    //         goods[i].title,
    //         goods[i].sellNumber,
    //         goods[i].price,
    //         goods[i].favorRate
    //     ]);
    // }
}()

//mvc   model view controller

//中间件 => 函数调用的过程
// router.get('/',ctx=>{
//     // ctx.body = 'hello';

//     // ctx,render();
//     ctx.body = tpl.render('index.html')
// })
router.get('/',mainController.index)

server.use(router.routes());

server.listen(1116,()=>{
    console.log("服务器启动成功:http://localhost:1116");
})