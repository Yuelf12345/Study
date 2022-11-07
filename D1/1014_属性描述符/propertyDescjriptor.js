//属性描述  值、可重写、可遍历
var obj = {
    a:1,
    b:2,
}


//得到属性描述符
var desc = Object.getOwnPropertyDescriptor(obj,'a')
console.log(desc);

//设置属性描述符
Object.defineProperty(obj,'a',{
    value:10,
    writable:false,//不可修改
    enumerable:false,//不可遍历
    configurable:false,//不可修改属性描述符本身
})
Object.defineProperty(obj,'a',{
    writable:true
})
obj.a = 'abc'
console.log(obj.a);
for(let key in obj){
    console.log(key)
}
var key = Object.keys(obj)
console.log(key)

