{
    // call 方法
    Function.prototype.myCall = function(thisArg,...rest){
        //前面存储到that变量中的实例对象函数临时赋值给传递过来的新的对象，然后在其身上调用，调用完成后删除即可。
        thisArg.fn = this
        thisArg.fn(...rest)
        delete thisArg.fn
    }
}
{
    //apply 方法

    Function.prototype.binApply = function(thisArg, argArray) {
        thisArg = (thisArg !== null &&thisArg !== undefined )? Object(thisArg) : window;
        argArray = argArray || []
        argArray.fn = this
        const result = argArray.fn(...argArray)
        delete argArray.fn
        return result
      }
}
{
    /**
     * !实现 binBind() 方法
     * @param {*} thisArg 绑定的对象
     * @param  {...any} args 剩余参数
     * @returns 
     */
    Function.prototype.myBind = function(thisArg, ...args) {
    
        thisArg = (thisArg!==null && thisArg!==undefined) ? Object(thisArg) : window
    
        thisArg.fn = this // 这一步不能放在返回的函数里面
    
        // 返回一个函数
        return function Fn(...args2) {
        // 处理参数，调用函数，返回结果
        const newArr = [...args, ...args2]
        const result = thisArg.fn(...newArr)
        delete thisArg.fn
        return result
        }
    } 
}