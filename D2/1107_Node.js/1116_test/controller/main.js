//数据+模板
const tpl = require('../libs/tpl.js');
const itemsModel = require('../models/items.js');

module.exports = {
    index:async ctx => {
        let goods = await itemsModel.getItem()
        ctx.body = tpl.render('index.html',{
            goods
        });
    }
};