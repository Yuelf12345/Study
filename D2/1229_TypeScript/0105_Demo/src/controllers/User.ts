import {Get} from '../Yue/Yue';

export default class User {

    // static _routes = [
    //     {
    //         verb:'get',
    //         path:'register',
    //         name:'index'
    //     }
    // ]

    @Get('/login')
    async login(ctx){
        ctx.body = 'login'
    }
    @Get('/register')
    async register(ctx){
        ctx.body = 'register'
    }
}

