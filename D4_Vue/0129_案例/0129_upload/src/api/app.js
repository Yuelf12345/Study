//getPhotos upLoad服务器
const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('发送');
    res.write('123')
    res.end();
})

server.listen(8081,()=>{
    console.log("服务器启动!");
})