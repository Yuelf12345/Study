const http = require('http');
const Koa = require('koa');
const Static = require('koa-static-cache');
const Router = require('koa-router');

const socketIo = require('socket.io');
const moment = require('moment');

const cookie = require('cookie');

//node http 
//因为这个应用除了需要websocket服务，还提供http服务(静态资源代理，基于http的数据请求)
// const server = http.createServer((request,response)=>{
//     response.write('123');
//     response.end();
// });

//不是用app来启动服务，用它来帮助我们代理处理请求的回调
const app = new Koa();
const router = new Router();

app.use(Static('./public',{
    prefix:'/public',
    gzip:true,
    dynamic:true
}))

router.get('/get',ctx=>{
    ctx.body='123'
})

app.use(router.routes());

//app.callback()返回的就是一个function(req,res){}函数
const server = http.createServer(app.callback())
//处理websocket请求
let io = socketIo(server)

let users = [];

io.on('connection',socket=>{
    console.log('触发了请求',socket.request.headers);

    //cookie字符串解析成对象
    // let cookies = cookie.parse(socket.request.headers.cookie);
    // if(!cookies || !cookie.user){
    //     return;
    // }
    // let user = JSON.parse(cookie.user);

    // if(!user.id){
    //     return;
    // }
    // users.push({
    //     ...user,
    //     socket
    // });
    users.push(socket);

    //服务端发送消息到当前链接,客户端需要监听
    socket.emit('hello',`欢迎第${users.length}个用户`);
    socket.broadcast.emit('hello',`${socket.id}用户进入`);

    //监听message
    socket.on('message',message=>{
        // socket.emit('message',message);
        // socket.broadcast.emit('message',message);
        message = `${socket.id}: ${message}  [${moment().format('YY-MM-DD HH:mm:ss')}]`
        users.forEach(user=>{
            user.emit('message',message);
        });
    });

    //私信
    socket.on('privateMessage',data=>{
        //data = {formUserId,toUserId: 2,message；'哈哈哈'}
        let user = users.find(data.toUserId);
        user.socket.emit('privateMessage',{
            formUserId:1,
            formUserId:2,
            privateMessage
        })
    })

})

server.listen(1130,()=>{
    console.log('http://localhost:1130/public/1.html')
})
