export default class GameEvent{
    constructor() {
        this.handle = {}
    }
        //添加事件
    addEvent(eventName,fn){
        if(typeof this.handle[eventName] === 'undefined'){
            this.handle[eventName] = []
        }
        this.handle[eventName].push(fn)
    }
    //执行事件
    trigger(eventName){
        if(typeof this.handle[eventName] === undefined){
            return ;
        }
        this.handle[eventName].forEach(fn=>{
            fn();
        })
    }
    //移除事件
    removeEvent(eventName,fn){
    if(!eventName in handle){
        console.log("已移除");
    }
        handle[eventName].splice(eventName.indexOf(fn))
        console.log(handle[eventName]);
    }
}


