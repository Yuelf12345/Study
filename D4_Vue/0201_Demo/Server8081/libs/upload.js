const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
let db;
~async function(){
    db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'0201_uploadphoto',
    })
}()

module.exports = async ctx=>{
    // ctx.request.files中获取前端数据
    let fileImg = ctx.request.files;
    // // 保存本地
    // const readStream = fs.createReadStream(fileImg.filepath);
    // const savePath = path.join(__dirname, "../static/upload/");
    // const writeStream = fs.createWriteStream(savePath);
    // readStream.pipe(writeStream);
    // console.log(readStream);
    // //存入数据库   异步
    // let rs = await db.query("insert into `photos` (`photourl`,`photoname`,`userid`) value (?,?,?)",[
    //     fileImg.filepath,fileImg.originalFilename,uID
    // ]);
    // console.log("rs",rs);
    // // console.log('ctx',ctx);
    console.log(ctx.request);
    ctx.body = fileImg;


    // ctx.body = {
    //     url:'/public/upload/'+filename
    // }
    // 接口返回前端数据
   
}