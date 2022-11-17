const http = require('http');
const fs = require('fs');
//MIME:多用途互联网邮件扩展类型
const mime = require('./MIME.json')
const data = require('./data.json')
//模板引擎
const nunjucks = require('nunjucks')
const tpl = new nunjucks.Environment(
    //模板存放路径
    new nunjucks.FileSystemLoader('template')
)

const server = http.createServer((request,response)=>{
    console.log("客户端发送请求!");
    let content = '';
    let url = request.url;
    if(url.startsWith('/y')){
        try{      
            url = url.replace(/\/y/g,'/static');
            //文件绝对路径
            let file = __dirname + url;
            content = fs.readFileSync(file);

            let lastIndexOf = file.lastIndexOf('.')
            let ext = file.substring(lastIndexOf)
            response.writeHead(200,{
                'Content-Type':mime[ext]
            })
        }catch(e){  
            response.writeHead(200,{
                'Content-Type':'text/html;charset=utf-8'
            })
            content = fs.readFileSync('./template/404.html')
        }finally{
            response.write(content);
            response.end();
        }
        return 
    }
    switch(url){
        case '/':
            response.writeHead(200,{
                'Content-Type':'text/html;charset=utf-8'
            })
            // content = fs.readFileSync('./template/index.html')
            let tempTitle = '微博';
            // content = tpl.renderString(
            //     fs.readFileSync('./template/index.html',
            //     {
            //         tempTitle
            //     })
            // );
            content = tpl.render('index.html',{
                tempTitle,
                data
            })
            response.write(content);
            response.end();
    }
    console.log('url路径:',request.url,'文件路径：',__dirname);
})

server.listen(8082,()=>{
    console.log("服务器启动!");
})