const obj = {
    a:1,
    b:2,
    c:3,
    d:4
}
// 属性描述符
Object.defineProperty(obj,'c',{
    value:0,
    enumerable:false
})

for(var key in obj)
console.log(key);

console.log(obj.propertyIsEnumerable('c'));


// 对象不可迭代，自定义方法
let obj1 = {
    x:0,
    y:1,
    z:2
};

obj1[Symbol.iterator] = function(){
    
    return {
        current:this.x,
        last:this.y,
        
        next(){
            if(this.current <= this.last){
                return {
                    done:false,
                    value:this.current++
                };
            }
            else return {done:true}
        }
    };
    
};

for(let num of obj1){
    console.log(num);
}
//输出 1 2 3 4 5