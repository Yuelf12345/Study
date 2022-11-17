const fs = require('fs');
module.exports = function indexStatic(dir){
    return (ctx,next)=>{
        if(ctx.url.startsWith(dir)){
            let file = __dirname.replace(/\middles/g,'') +ctx.url;
            let content = '';
            try{
                content = fs.readFileSync(file);
            }catch(e){
                console.log(file);
                console.log(e);
                content = fs.readFileSync('./template/404.html');
            }
            ctx.body = content.toString();
        }
    }
}