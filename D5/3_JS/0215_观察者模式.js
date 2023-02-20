class Subject{
    constructor(){
        // 订阅列表
        this.state = 0
        this.subList = [];
    }
    getState (){
        return this.state
    }
    // 设置状态
    setState(state){
        this.state = state
        this.notify()
    }
    /**
     * @param {Function} observer 观察者
     */
    on(observer){
        this.subList.push(observer);
    }
    off(observer){
        this.subList.filter(v=> v !== observer);
    }
    notify(){
        this.subList.forEach(v => v.update())
    }
}

 // 观察者，等待被通知
 class Observer{
    constructor(name,sub){
        this.name = name
        this.sub = sub
        this.sub.on(this)
    }
    
    update(){
        console.log(`${this.name} 观察者更新了state:${this.sub.getState()}`);
    }
}



// 实例化一个主题
let s = new Subject()
// 添加观察者实例
let o1 = new Observer('o1',s)
// 设置状态
s.setState(2)

