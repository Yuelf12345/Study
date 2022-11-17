const nunjucks = require('nunjucks');
module.exports = function(dir){
    const tpl = new nunjucks.Environment(
        new nunjucks.FileSystemLoader(
            dir,
            // {
            //     watch:true,
            //     noCache:true
            // }
        )
    );
    return async function(ctx,next){
        ctx.render = function(filename,data){
            let content = tpl.render(filename,data);
            ctx.body = content;
        }
        await next();
    }
}