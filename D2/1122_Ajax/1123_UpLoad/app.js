const Koa = require("koa");
const Router = require("koa-router");
const Static = require("koa-static");
const { koaBody } = require("koa-body");

const server = new Koa();
const router = new Router();

server.use(Static(__dirname+''));
server.use(koaBody({
    multipart:true,
    formidable:{
        //上传目录 文件名后缀
        uploadDir:__dirname + '/images',
        keepExtensions:true
    }
}));
 

router.post('/fileUpload',(ctx,next)=>{
    console.log(ctx.request.files);
    ctx.body = "请求成功"
})

server.use(router.routes());

server.listen(1123,()=>{
    console.log('服务器已启动,http://localhost:1123/login.html');
})