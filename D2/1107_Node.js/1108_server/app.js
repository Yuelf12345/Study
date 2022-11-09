const fs = require("fs");

const http = require('http');

let num = 8;
const server = http.createServer((request,response)=>{
    /**
     * 客户发送请求，被server监听后执行回调函数
     * request: http.ClientRequest 类   存储当前请求的客户端信息和方法
     * response： http.ClientResponse 类    提供服务器响应相关的信息和方法
     */ 
    console.log("有人发送请求!");
    // response.write('<h1>Hello!</h1>');
    // response.end("over!");
    /**
     * 客户端访问地址(url) ——> 后端文件 虚拟映射
     * 判断当前请求地址是什么？
     */
    // console.log('请求地址',request.url);
    let url = request.url;
    let content ='';
    //定义规则(静态)  凡是已/y开头的 url,去static目录查找
    if(url.startsWith('/y')){
        // __dirname :node内置变量  返回当前文件的绝对路径
        url = url.replace(/^\/y/g,'/static')
        console.log("static路径",__dirname + url);
        content = fs.readFileSync(__dirname + url);
        response.write(content);
    }else{
        content = fs.readFileSync('./index.html');
        response.write(content);
        //每次交换的数据(请求、响应) 报文(行、头、正文)
        // response.setHeader('Content-Type','text/html;charset=utf-8')
        // response.setHeader('Content-Type','application/zip')
        // response.write(`<i>你好</i>`);
        // if(num > 0){
        //     response.write(`<i>你好</i>
        //     <h5>剩余次数${num}</h5>`);

        // }else{
        //     response.write(`<h4>次数不足</h4>`)
        // }
        // num --;
    }

  
    // switch(url){
    //     case '/':
    //         /**
    //          * 把数据放到外部文件
    //          * 读取内容不一定是字符串(图片,视频,音频)
    //          */
    //         content = fs.readFileSync('./index.html');
    //         response.write(content);
    //         break;
    //     case '/static/css/index.css':
    //         content = fs.readFileSync('./static/css/index.css');
    //         response.write(content);
    //         break;
    //     case '/static/images/stz.jpg':
    //         content = fs.readFileSync('./static/images/stz.jpg');
    //         response.write(content);
    //         break;
    // }

    response.end();
});

server.listen(8088,()=>{
    console.log("服务器开启成功，通过:http://10.10.10.143:8088");
})