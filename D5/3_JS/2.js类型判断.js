// typeof检测引用基本类型
typeof 123 === 'number'
typeof '张三' === 'string'
typeof true === 'boolean' 
typeof Symbol(1) === 'symbol'
typeof undefined === 'undefined'    //Number(undefined) === 'NaN'

typeof null === 'object'  //js对象底层都采用二进制存储,前三位为0会被判定为对象
typeof [] === 'object'
typeof {a:1}  === 'object'
typeof new Date() === 'object'
typeof new RegExp() === 'object'

typeof function fn(){} === 'function'

// instanceof检测引用数据类型 但是js里一切皆对象,所以instanceof Object也为True
console.log([] instanceof Array);
console.log({} instanceof Object);
console.log(new  Date() instanceof Date);
 
function Person(){};
console.log(new  Person() instanceof Person);

console.log([] instanceof Object);
console.log(new  Date() instanceof Object);
console.log(new  Person instanceof Object);


// Object.prototype.toString.call   
// toString是Object原型对象上的一个方法,该方法默认返回其调用者的具体类型,更严格的讲,是 toString运行时this指向的对象类型, 返回的类型
console.log(Object.prototype.toString.call('张三'));//[object String]
console.log(Object.prototype.toString.call(true))//[object Boolean]
console.log(Object.prototype.toString.call(123));//[object Number]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(new Date()));//[object Date]
console.log(Object.prototype.toString.call({}));//[object Object]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(/a/));//[object RegExp]
console.log(Object.prototype.toString.call(function fn(){}));//[object Function]
console.log(Object.prototype.toString.call(new Error()));//[object Error] 