function fn(num1,num2){
    console.log(this)
    return num1+num2
}
let obj={
    name:'张三'
}
let sum=fn.call(obj,1,2)
console.log(sum)

Function.prototype.myCall = function myCall(point,...args){
    point = point || window;
    point.temporary = this;
    let res = point.temporary(...args)
    delete  point.temporary
    return  res
}
console.log(fn.myCall(obj,1,2));

Function.prototype.myApply = function myApply(point,argsArr){
    point = point || window;
    argsArr = argsArr || []
    point.temporary = this;
    let res = point.temporary(...argsArr)
    delete  point.temporary
    return  res
}
console.log(fn.myApply(obj,[1,2]));

Function.prototype.myBind = function myBind(point,...args){
    point = point || windows;
    point.temporary = this;
    return function fn(...args1){
        let res = point.temporary(...[...args,...args1]);
        delete point.temporary;
        return res;
    }
}
console.log(fn.myBind(obj,1)(3));