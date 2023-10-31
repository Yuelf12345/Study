// 创建对象的方式包括两种：对象字面量和使用new表达式
function Person(name, age) {
    this.name = name
    this.age = age
    // return ['返回值'] 返回该引用数据类型
}
let p1 = new Person('O.O', 50)
console.log(p1)  // { name: 'O.O', age: 20 }


function myNew(Con,...args){
   let obj = {};
   obj.__proto__ = Con.prototype;
   let res  = Con.call(obj,...args);
   return res instanceof Object ? res : obj
}
let p2 = myNew(Person, '-.-', 100)
console.log(p2) 
