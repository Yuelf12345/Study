//访问器  变成了函数
var obj = {}

var internalValue = undefined;
Object.defineProperty(obj,'a',{
    get:function(){
       return internalValue;

    },                  //读取器
    set:function(val){
        throw new Error(`${val}属性不能重新赋值`)
    },//设置器
})
obj.a =123,         //调set(123)
console.log(obj.a)  //console.log(get()) 调get()