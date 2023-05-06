const fs = require('fs')
const http = require("http");
let content = '';
let num = 8;
const server = http.createServer((request,response)=>{
    console.log("客户端发送请求！");
    let url = request.url;
    console.log(request.url);

    if(url.startsWith('/y')){
        url = url.replace(/^\/y/g,'/st');
        content = fs.readFileSync(__dirname + url);
        response.write(content);
    }else{
        content = fs.readFileSync('./main.html');
        response.write(content);
        if(num > 0){
            response.write(`<h6>访问剩余次数:${num}</h6>`);
        }else{
            response.write('次数不足');
        }
        num --;
    }
    // switch(url){
    //     case '/':
    //         content = fs.readFileSync('./main.html');
    //         response.setHeader('Content-Type','text/html;charset=utf-8');
    //         response.write(content);
    //         break;
    //     case '/st/css/main.css':
    //         content = fs.readFileSync('./st/css/main.css');
    //         response.write(content);
    //         break;
    //     case '/st/images/stz.jpg':
    //         content = fs.readFileSync('./st/images/stz.jpg');
    //         response.write(content);
    //         break;
    // }
    response.end();
})
server.listen(3000,()=>{
    console.log("服务器已启动");
})