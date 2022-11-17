const tpl = require('../libs/tpl.js');
const categoriesModel = require('../models/categories.js');
const itemsModel = require('../models/items.js');

module.exports = {
    add:async ctx => {
        let categories = await categoriesModel.getClass();
        console.log('categories',categories);
        ctx.body = tpl.render('add.html',{
            categories
        });
    },

    addPost:async ctx =>{
        let data = ctx.request.body;
        let files = ctx.request.files;
        let filename = '';
        if(files && files.cover){
            filename = files.cover.newFilename
        }
        console.log('data',data,files.cover.newFilename);
        let rs = await itemsModel.addItem(['11',data.title,'1',data.price,'1']);
        console.log(rs);
        ctx.body = '添加成功';
    }
};