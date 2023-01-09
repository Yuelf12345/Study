// const Koa = require('koa');
// const Router = require('koa-router');
// const koaBody = require('koa-body');
// const koaStaticCache = require('koa-static-cache');

/**
 * 没有默认导出 tsconfig.json文件配置
 * "esModuleInterop": true,或者
 *  import * as Koa from 'koa';
*/
import Koa from 'koa';
import Router from 'koa-router';
import koaBody from 'koa-body';
import koaStaticCache from 'koa-static-cache';
import glob from 'glob';
import path from 'path';

// const fs = require('fs')
//利用node自动搜集controller 
// import MainController from '../controllers/Main'

interface YueConfigs{
    port:number
}

const defaultConfigs = {
    port:8888
}

export default class Yue{
    //私有属性
    private configs:YueConfigs;
    private app:Koa;
    private router:Router;

    constructor(configs:YueConfigs){
        this.configs ={
            ...defaultConfigs,
            ...configs
        };

        this.app = new Koa();

        this.addRouters()
    }

    addRouters(){
        this.router = new Router();
        // let controller = new MainController
        // this.router.get('/',controller.index)

        console.log('__dirname',__dirname);
        let controllerPath = path.resolve(__dirname,'../controllers/**/*')
        let controllerFiles = glob.sync(controllerPath);
        console.log(controllerPath);
        console.log('controllerFiles 数组为空奇怪！',controllerFiles); 
       try{
            controllerFiles.forEach(async controllerFile =>{
                console.log('controllerFile',controllerFile);
                
                let Controller = (await import(controllerFile)).default;
                
                //根据装饰器执行时搜集的信息在router进行注册
                // MainController._routes = [
                //     {
                //         verb:'get',
                //         path:'/',
                //         name:'index'
                //     }
                // ]


                const controller = new Controller();
                // console.log('controller',controller);
                console.log('Controller._routes',Controller._routes);
              
                
                //根据_router的数据注册路由
                if(Array.isArray(Controller._routes)){
                    console.log('Controller._routes',Controller._routes);
                    
                    Controller._routes.forEach(_route => {
                        this.router[_route.verb](
                           _route.path,
                           controller[_route.name]
                        )
                    });
                }
                
            });  
            this.app.use(this.router.routes())
       }catch(e){
            console.log(e);
       }
    }

    start(){
        this.app.listen(this.configs.port,()=>{
            console.log('服务器启动成功 http://localhost:8888/');
            
        })
    }
}


/**
 * 封装Get装饰器函数
 * 搜集类信息
 */
export const Get = function(path:string){
    return function(target:any,name:string,descriptor: PropertyDescriptor){
        //因为当前装饰器是装饰到了实例的方法中，所以target是实例
        let constructor = target.constructor;

       if(!Array.isArray(constructor._routes)){
            constructor._routes = [];
       }

       constructor._routes.push({
        verb:'get',
        path,
        name
       })
    }
}