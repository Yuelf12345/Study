/**
 * 把与路由有关的函数与类进行绑定
 * 类中的方法绑定对应路由(url)中的方法
 */
import {Get} from '../Yue/Yue';

 export default class Main {

    // static _routes = [
    //     {
    //         verb:'get',
    //         path:'/',
    //         name:'index'
    //     }
    // ]
    
    @Get('/')
    async index(ctx){
        ctx.body = 'hello'
    }
}

