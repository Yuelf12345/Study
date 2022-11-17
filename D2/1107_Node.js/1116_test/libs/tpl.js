//模板
const nunjucks = require('nunjucks');

const tpl = new nunjucks.Environment(
    new nunjucks.FileSystemLoader('views',{
        watch:true,
        noCache:true
    })
);

module.exports = tpl;
