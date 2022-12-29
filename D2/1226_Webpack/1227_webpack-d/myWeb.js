//https://v4.webpack.docschina.org/api/node/
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

webpack(webpackConfig,(err,stats)=>{
    if(err||stats.hasErrors()){
        console.log('出错了',err);
        return;
    }
    //处理完成
    console.log('OK');
});

// const filePathMap = [
//     {'./index.html':'<html></html>'}
// ]
// router.get('./index.html',(ctx)=>{
//     ctx.body = '123'
// })