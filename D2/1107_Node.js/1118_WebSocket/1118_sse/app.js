const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    if(req.url === '/index.html'){
        let content = fs.readFileSync('./index.html');
        res.setHeader('content-type','text/html;charset=utf-8');
        res.end(content);
        return;
    }
    if(req.url === '/getData'){
        getData(res);
    }
});

async function getData(res){
    res.setHeader('content-type','text/event-stream');
    for (let index = 0; index < 10; index++) {
        await new Promise(res=>{
            setTimeout(()=>{
                res();
            },1000)
        });
        res.write(`event:abc\ndata:{"time":"${new Date()}"}\n\n`);
    }
    res.end();
}

server.listen(1120,()=>{
    console.log('服务器启动成功,http://localhost:1120/');
});