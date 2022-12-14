const Koa = require('koa');
const Static = require('koa-static-cache');
const Router = require('koa-router');

const mysql = require("mysql2/promise");

const upload = require('./middlewares/upload.js');

//连接数据库
let db;

~async function(){
    db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'1207_photos',
    })
}()

// let rs = db.query("insert into `photos` (`name`) values (`sdsd`)")
// console.log("db",db);

const server = new Koa();
const router = new Router();

server.use(Static('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}));

/*  扩展：
        链接数据库(持久化保存)
*/


router.get('/',ctx=>{
    ctx.body = '123'
})

//取数据库
router.get('/getPhotos',async ctx=>{
    //查询数据库
    let [rs] = await db.query("select * from `photos`" );
    console.log(rs);
    rs = rs.map(r=>({
        ...rs,
        //前端拿到的url
        url:'/public/upload/' + r.name
    }));
    ctx.body = rs
})

//存数据库
router.post('/upload',upload(),async ctx=>{
    console.log('file',ctx.request.files);
    let filename = ctx.request.files.file.newFilename;
    //存入数据库   异步
    let rs = await db.query("insert into `photos` (`name`) value (?)",[
        filename
    ]);
    // console.log("rs",rs);

    ctx.body = {
        url:'/public/upload/'+filename
    }
});

server.use(router.routes());

server.listen(1201,()=>{
    console.log('http://localhost:1201/public/index.html');
})