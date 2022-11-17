const Koa = require('koa');
const Router = require('koa-router');
const Static = require('koa-static-cache');
const { koaBody } = require('koa-body');

//控制器加载
const mainController = require('./controller/main.js');
const userController = require('./controller/user.js');
const addController = require('./controller/item.js');


const server = new Koa();
const router = new Router();


//静态资源处理
server.use(Static('./public',{
    prefix: '/public',
    gzip:true,
    dynamic:true
}));

//body 解析中间件
server.use(koaBody(
    {
        multipart:true,
        //处理上传的二进制文件
        formidable:{
            //上传目录 文件名后缀
            uploadDir:__dirname + '/public/upload',
            keepExtensions:true
        }
    }
));


//引入模板
router.get('/',mainController.index);
router.get('/register',userController.register);
router.get('/login',userController.login);
router.get('/add',addController.add);
router.post('/add',addController.addPost);



server.use(router.routes());
server.listen(1116,()=>{
    console.log("服务器启动成功:http://localhost:1116");
});