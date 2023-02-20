class pubSub{
    constructor(){
        // 定义队列 存储
        this.message = {
            // hand:[handleA,handleB];
        };
    }
    /**
     * 
     * @param {*} type     注册事件    
     * @param {Function} callback 回调函数
     */
    $on(type,callback){
        (this.message[type] || (this.message[type] = [])).push(callback)
    }
    $off(type,callback){
        // 如果没有事件，直接返回
        if(!this.message[type]) return;
        // 如果没有事件里没有函数，删除事件
        if(!callback){
            this.message[type] = undefined;
        }
        // 移除该事件
        this.message[type] = this.message[type].filter((v) => v !== callback);
    }
    /**
     * 
     * @param {*} type  触发事件
     */
    $emit(type){
        //依次触发
        this.message[type].forEach((v) =>{
            v()
        })
    }
}

const person = new pubSub();

person.$on('hand',handleA);
person.$on('hand',handleB);
person.$on('hand',handleC);
person.$off('hand',handleA);
person.$emit('hand')
console.log(person.message);

function handleA(){
    console.log('handleA');
}
function handleB(){
    console.log('handleB');
}
function handleC(){
    console.log('handleC');
}