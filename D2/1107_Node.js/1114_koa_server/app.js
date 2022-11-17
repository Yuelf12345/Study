const Koa = require('koa');
const Router = require('koa-router');
const StaticCache = require('koa-static-cache');
const template = require('./middlewares/tpl.js');

const datas = require('./data/data.json');  //node加载Json会转成对象

// const mysql = require('mysql2');
const mysql = require('mysql2/promise');
let connection;
~async function(){
//连接数据库
    connection =await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'1115',
    });
//数据库查询
    // const [showDatas,fields] = await connection.execute('SELECT * FROM `datas` ',[])
    // console.log(showDatas);

    //数据库插入
    // for(let i=0;i<datas.length;i++){
    //     await connection.execute('insert into datas (`id`,`title`,`hot`) values (?,?,?)',[
    //         datas[i].id,
    //         datas[i].title,
    //         datas[i].hot
    //     ]);
    // }
}()

const server = new Koa();
server.use(StaticCache('./static',{
    prefix: '/static',
    gzip: true,
    dynamic: true
}));

const router = new Router();
//注册中间的中间件
server.use(template('views'));

//首页
//url 数据少：动态路由  数据多：queryString
router.get('/',async ctx=>{
    //(data + html) + nunjucks ——> 

    //分页处理
    let prepage = 5;
    //当前显示页数
    let page = ctx.query.page || 1;
    page = Number(page);
    const [[count]] = await connection.execute('SELECT count(id) as total FROM `datas`');
    console.log('count',count.total);
    // let pages = Math.ceil(datas.length / prepage);
    let pages = Math.ceil(count.total / prepage);
    let start = (page - 1)*prepage;
    let end = start + prepage;
    // let showDatas = datas.slice(start,end);

    let [showDatas] = await connection.execute('SELECT * FROM `datas` limit ?,?',[start+'',end+'']);    //传字符串
    showDatas = showDatas.map(d=>({
        id:d.id,
        title:d.title,
        hot:d.hot
    }))
    console.log(showDatas);

// 使用中间件
    ctx.render('index.html',{
        datas:showDatas,
        pages,
    })
});

//详情页
//请求头 url(路径上，queryString),请求正文
router.get('/detail/:id(\\d+)',ctx=>{
    //(data + html) + nunjucks ——> 
    console.log(ctx.params.id);
    let id = Number(ctx.params.id);
    let data = datas.find(d=>d.id == id)
    // if(!data){
    //     return ctx.render('404')
    // }
    
//使用中间件
    ctx.render('detail.html',{
        data
    });
});

server.use(router.routes());
server.listen(1114,()=>{
    console.log('服务器已启动,请访问http://localhost:1114/');
});

