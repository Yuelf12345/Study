const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static');
// const KoaBody = require('koa-bodyParser');
const { koaBody } = require('koa-body');
const fs = require('fs');
const usersData = require('./data/users.json');

const server = new Koa();
const router = new Router();


server.use(Static(__dirname+'/static'));
// server.use(KoaBody());
server.use(koaBody({
    multipart:true,
    formidable:{
        //上传目录 文件名后缀
        uploadDir:__dirname + '/static/upload',
        keepExtensions:true
    }
}));
router.get('/',(ctx,next)=>{
    ctx.body = 'xml'
})
router.get('/checkUserName',(ctx,next)=>{
    console.log(ctx.query.username);
    let res = usersData.find(v=>v.username == ctx.query.username)
    if(res){
        //返还到xhr.onload的xhr.responseText
        ctx.body = {
            static:1,
            info:'用户名正确'
        };
    }else{
        ctx.body = {
            static:2,
            info:'用户名错误'
        };
    }
})
router.get('/get/:id',(ctx,next)=>{
    console.log(ctx.params);
    ctx.body = {
        status:1,
        info:'请求成功'
    }
})
router.post('/post/:id',(ctx,next)=>{
    console.log(ctx.request.body);
    ctx.body = {
        status:1,
        info:'post请求成功'
    }
})
router.get('/xml',(ctx,next)=>{
    ctx.set("content-type","text/xml");
    ctx.body = `<?xml version="1.0" encoding="utf-8" ?>
                    <books>
                        <nodejs>
                            <name>js</name>
                            <price>19</price>
                        </nodejs>    
                        <react>
                            <name>react</name>
                            <price>29</price>
                        </react>    
                    </books>
                `
})

router.post('/upload',(ctx,next)=>{
    console.log(ctx.request.body);
    console.log(ctx.request.files.img);
    // let fileData = fs.readFileSync(ctx.request.files.img.path)   有问题
    // fs.writeFileSync('static/upload/'+ctx.request.files.img.name,fileData)  
    ctx.body = '请求成功';
})

server.use(router.routes());
server.listen(1122,()=>{
    console.log('服务器已启动,请访问http://localhost:1122');
})