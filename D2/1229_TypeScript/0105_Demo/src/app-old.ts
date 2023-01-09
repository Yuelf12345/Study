const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const koaStaticCache = require('koa-static-cache');
import MainController from "./old-controllers/MainController";

const app = new Koa();
const router = new Router();
/**
 * 路由统一管理和注册
 */
router.get('/',MainController);

app.use(router.routes());

app.listen(8888,()=>{
    console.log('服务器启动成功 http://localhost:8888/');
    
})