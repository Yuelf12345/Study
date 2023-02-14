# 原型链的理解
    js创建对象的时候，都有一个内置属性proto指向创建它的函数对象的原型对象prototype;原型对象也是一个对象，它也有一个proto指向prototype;当我们查找一个属性的时候，先去在这个对象里查找，没有的话就去他的原型对象里查找，在没有就去原型对象的原型对象里查找，这样一层一层往上找的过程就形成了原型链。
# js实现继承(查看1030_JS继承(6).html)
    1.原型链2.构造函数3.组合(原型 + 构造函数)4.原型式5.寄生6.寄生组合
# js数据类型及判断方法
    基本数据类型 string number null undefined boolean symbol(ES6)
    引用数据类型 function object array regexp
- 判断
    1. typeof (注意：typeof null === object)；
    2. constructor ((1).constructor === Number)
    3. toString.call('123')
# Null 和 undefined 的区别
    undefined: 未定义，声明变量还未赋值
    null:  空值，空引用
    typeof null === object  Number(null) === 0
    typeof undefined === undefined  Number(undefined) === NaN
# call apply bind 的区别
    call 和 bind 参数都是逐一传入 apply 传入参数用一个数组包裹
    call 和 apply 都是页面加载后立即执行 bind 返回一个函数需要手动调用
# 防抖节流的概念？实现防抖和节流。(0112、0113)
    防抖：函数未完成时有重新调用;节流：一定时间内多次触发只执行一次
# 深拷贝、浅拷贝的区别？如何实现深拷贝和浅拷贝？
    深拷贝重新开辟一个内存地址;浅拷贝如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址
        即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址
    浅拷贝：Object.assign(),slice(0), concat(), ...arr1;
    深拷贝：_.cloneDeep(obj),$.extend(true, {}, obj1), SON.parse(JSON.stringify(obj1))会忽略undefined symbol和函数
# 对比 一下var、const、let。
                 var  let  const     
    块级作用域：  无    有    有
    变量提升/添加全局属性/重复声明 ：
                 有    无    无    
   存在暂时性死区：无    有    有
   声明时复制：    无   无     有
# ES6新特性
    1.let const;
    2.箭头函数： 不需要 function 关键字来创建函数, 有时可以省略 return 关键字, 继承当前上下文的 this 关键字。
    3.解构赋值:  let [a,b,c]=[1,2,3];
    4.模板字符串: `${name}`;
    5.扩展运算符(...):
    6.模块(import/export);
    7.类(class/extends): Class A{constructor(name){this.name = name } } 继承： Class B extends A{};
    8.Promise:解决回调地狱;
    9.Proxy:Proxy使用上比Object.defineProperty方便的多;
    10.symbol:它表示独一无二的值..
# new关键字创建对象时做了什么
    1. 创建一个空对象；
    2. 空对象的_proto_指向构造函数的prototype;
    3. 构造函数的this指向空对象
    4. 判断返回值,如果是基本数据类型，返回创建的实例对象，如果是引用数据类型，返回这个值
# this指向问题
    this是JavaScript中的一个关键字，它是函数运行时，在函数体内自动生成的一个对象，只能在函数体内部使用。
    1. 全局作用域下的this指向window对象;
    2. 函数中的this,指向调用该函数的对象;简单调用该函数时(非显式/隐式绑定下),严格模式下this绑定到undefined,否则绑定到全局对象window/global;
    3. 如果函数调用时被apply,call, bind方法强绑定了this, this就指向强绑定的对象;
    4. 箭头函数没有自己的this, 只能从作用域链的上一层获取this;它总是指向其最近的外层函数作用域的 this 所指对象。
# 手写call apply bind 方法(0214)

# 闭包的定义，闭包是什么？闭包解决了什么问题？闭包有哪些应用场景？使用闭包应该注意什么
    1. 闭包是指有权访问另一个函数作用域中变量的函数,最常见的是函数嵌套函数,内部函数返回外部函数变量;在JS中,函数作用域里的变量在函数执行后会被清理,内存也会回收,由于函数内部的闭包能够访问上级作用域,所以上级函数执行完后作用域也不会销毁;
    2. 在本质上,闭包就是将函数内部和函数外部连接起来的一座桥梁。整个上级作用域的访问和操作能力,提高了极大的便利。
    3. 好：可以读取其他函数内部的变量，并将其一直保存在内存中。
       坏：可能会造成内存泄漏或溢出
    4：在函数外部能够访问到函数内部的变量。变量对象不会被回收。

# 谈谈对js事件循环的理解(1008_EventLoop)

# 讲讲js垃圾回收机制。
    为了解决内存泄漏，垃圾回收机制会周期性的检查出哪些不再用的变量，然后释放其内存，
    目前常用的回收机制包括 标记清除 引用计数

# 实现一个发布订阅。

# 如何实现数组扁平 去重？