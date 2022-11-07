// export default class Person{
//     //静态属性
//     static instance = null;
//     constructor(name){
//         this.name = name;
//         if(!Person.instance){
//             Person.instance = this;
//         }
//         return Person.instance;  //只会返回一个实例
//     }
// }


class Person{
    constructor(name) {
        this.name = name
    }
}

let instance = null;
export default function(...arg){
    if(!instance){
        instance = new Person(...arg);
    }
    return instance
}


// export default instance;