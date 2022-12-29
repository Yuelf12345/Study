//无法实现一个文件拥有自己的独立作用域

//一个define定义的数据拥有独立的作用域
define(function(){
    function fn1(){
        console.log('fn1');
    }    

    return {
        fn1
    }
})

