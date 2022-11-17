const nunjucks = require('nunjucks');

//载入模板引擎
const tpl = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('views',{
        watch:true,
        noCache:true
    })
)

module.exports = {
    index:async ctx => {
        ctx.body = tpl.render('index.html');
    }
}