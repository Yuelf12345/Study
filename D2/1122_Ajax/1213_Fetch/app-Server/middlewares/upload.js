const { koaBody } = require("koa-body");

module.exports = function upload(dir='upload'){
    return koaBody({
        multipart:true,
        formidable:{
            uploadDir:__dirname + '/../public/' +dir,
            keepExtensions:true
        }
    })
}