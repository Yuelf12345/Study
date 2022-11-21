const http = require('http');
const fs = require('fs');

// let data = require('./data.json');
let str = "[]";

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
    if(req.url === '/login'){
        let content = '登录成功';
        res.setHeader('content-type','text/html;charset=utf-8');
        res.end(content);
        return;
    }
});

function getData(res){
    // let newData = require('./data.json');
    // let newStr = JSON.stringify(newData);
    let newStr = (fs.readFileSync('./data.json')).toString();
    if(str === newStr){
        // console.log('没',str,newStr);
        setTimeout(getData(res),2000)
    }else{
        console.log('有');
        str = newStr;
        res.setHeader('content-type','text/html;charset=utf-8');
        res.end(str);
    }
}

server.listen(1119,()=>{
    console.log('服务器启动成功,http://localhost:1119/');
});