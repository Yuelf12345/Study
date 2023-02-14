# Typescript中type和interface的区别是什么？
    type 是 类型别名，给一些类型的组合起别名，这样能够更方便地在各个地方使用。
    interface 是 接口。有点像 type，可以用来代表一种类型组合，但它范围更小一些，只能描述对象结构。
    1. 它们写法有一点区别，type 后面需要用 =，interface 后面不需要 =，直接就带上 {;
    2. type 能表示的任何类型组合。interface 只能表示对象结构的类型;
    3. interface 可以继承自（extends）interface 或对象结构的 type。type 也可以通过 & 做对象结构的继承;
    4. 多次声明的同名 interface 会进行声明合并，type 则不允许多次声明。

# 讲讲Typescript中的泛型？
    泛型是指在定义函数 接口 类的时候 不预先指定具体类型，在使用的时候再去指定类型。

# Typescript如何实现一个函数的重载？
    定义多个重载签名，当我们多次调用函数时传递不同参数数量或者类型，函数会做出不同处理。