// define()

//同构函数
// function M(mod){
//     if(typeof module === 'object' && typeof module.exports === 'object'){
//         //运行在commonjs环境下
//         module.exports = mod();
//     }else if(typeof define === 'function' && define.amd){
//         //amd环境
//         define(mod);
//     }
// }

// M(function(){
//     function fn1(){
//         console.log('fn1');
//     }

//     return {
//         fn1
//     }
// });

//M 模块同构
(function(mod){
    if(typeof module === 'object' && typeof module.exports === 'object'){
        //运行在commonjs环境下
        module.exports = mod();
    }else if(typeof define === 'function' && define.amd){
        //amd环境
        define(mod);
    }
})(function(){
    function fn1(){
        console.log('fn1');
    }
    
    return {
        fn1
    }
})
