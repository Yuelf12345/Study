const Koa = require('koa');
const Static = require('koa-static-cache');
const app =new Koa();

const moment = require('moment');

app.use(Static('./public',{
    prefix: '/public',
    gzip:true,
    dynamic:true
}));

const server = require('http').createServer(app.callback());

const options = {};
//io 第一个参数接受的是原始的http对象
const io = require('socket.io')(server,options);
const users = [];
io.on('connection',socket=>{

    users.push({
        id:socket.id
    });


    let d = moment(new Date()).format('YYYY年MM月DD日');

    //通知当前的socket
    socket.emit('hello',`用户${socket.id}于[${d}]登录`);
    //广播事件
    socket.broadcast.emit('hello',`用户${socket.id}加入聊天`);
    socket.broadcast.emit('user',users);

    socket.on('message',data=>{
    socket.broadcast.emit('message',`${socket.id}:${data}`);

    })
});
server.listen(1120,()=>{
    console.log('服务器已启动,http://localhost:1120/public/1.html');
});