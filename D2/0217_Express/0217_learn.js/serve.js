const Express = require('express');
const bodyParser = require('body-parser');

// 上传文件
var multer  = require('multer');
const fs = require('fs')

const router = Express.Router();
const server = new Express();

//静态文件
server.use('/public', Express.static('public'));
server.use(multer({ dest: '/tmp/'}).array('image'));
// 配置post 接受数据
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.get('/',(req,res)=>{
    res.send('hello express'+ `<a href="http://localhost:2217/index.html">按钮</a>`);
})

// 路由  
/**
 *  res.send() 参数为: a Buffer object / a String / an object / an Array
 *  res.json() 参数为:任何JSON类型
 *  res.end()  参数为: a Buffer object / a String 用于快速结束没有任何数据的响应，使用res.end()。
 */
router.get('/home',(req,res)=>{
    res.send('页面home')
})
router.get('/login',(req,res)=>{
    res.send('页面login')
})
server.use('/', router)

router.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/public/" + "index.html" );
 })
 
router.post('/from', function (req, res) {
    
    // get获取前端数据 用query接收
    // var response = {
    //     "userName":req.query.first_name,
    //     "password":req.query.last_name
    // };
    // post获取前端数据 用body接收
    var response = {
            "userName":req.body.first_name,
            "password":req.body.last_name
        };
    res.send(JSON.stringify(response));

 })


 server.post('/file_upload', function (req, res) {

    console.log(req.files[0]);  // 上传的文件信息
    // 文件路径
    var des_file = __dirname + "/public/upload/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
 })


var serve = server.listen(2217,()=>{
    var host = serve.address().address
    var port = serve.address().port
    console.log('启动http://localhost:2217/',host,port);
})