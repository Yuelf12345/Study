/**
 * 通过key值生成 Dep 和 Watcher
 * 初次编译 ——> 实例化Watcher (Dep.target有值) ——> 触发get ——> 
 * 收集Watcher ——> 设置数据 set 触发dep.notify(Watcher ——> upData方法)
 */
 class myVue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        this.observer(this.$data);
        this.proxyData();
        this.compile();
        // 只搜集了message
        // new Watcher();
        // this.$data.message
    }
//扩展 data数据代理到this上，方便取数据
    proxyData(){
        Object.keys(this.$data).forEach(key=>{
            Object.defineProperty(this,key,{
                configurable:true,
                enumerable:true,
                get(){
                    return this.$data[key]
                },
                set(newValue){
                    this.$data[key] = newValue
                }
            })
        })
    }
    observer(data){
        Object.keys(data).forEach(key=>{
            let value = data[key];
            let $this = this;
            let dep = new Dep();
            Object.defineProperty(data,key,{
                configurable:false,
                enumerable:false,
                get(){
                    //搜集依赖  每次触发watcher
                    if(Dep.target){
                       dep.addSub(Dep.target);
                    }
                    return value;
                },
                set(newValue){
                    console.log(dep);
                    dep.notify(newValue);
                    value = newValue;
                }
            })
       })
    }

    compile(){
        let ele = document.querySelector(this.$el);
        this.compileNodeChild(ele);
    }

    compileNodeChild(ele){
        let eleChild = ele.childNodes;
        eleChild.forEach(node => {
            if(node.nodeType === 3){
                let textContent = node.textContent;
                let reg = /\{\{\s*([^\{\}]+)\s*\}\}/g;
                if(reg.test(textContent)){
                    let $1 = RegExp.$1;
                    //实例化Watcher 触发 Dep  
                    new Watcher(this.$data,$1,(newValue)=>{
                        let oldValue = this.$data[$1];
                        let reg = new RegExp(oldValue);
                        node.textContent = node.textContent.replace(reg,newValue);
                    });
                    node.textContent = node.textContent.replace(reg,this.$data[$1]);
                }
            }else if(node.nodeType === 1){
                //双绑 获取属性
                let attrs = node.attributes;
                [...attrs].forEach(attr=>{
                    let attrName = attr.name;
                    let attrValue = attr.value;
                    console.log(attrName);
                    if(attrName === 'v-model'){
                        node.value = this.$data[attrValue];
                        console.log(this.$data);
                        node.addEventListener('input',(e)=>{
                            // console.log(node.value);
                            console.log();
                            this.$data[attrValue] = e.target.value;
                        })
                    }else if(attrName === 'v-html'){
                        node.innerHTML = this.$data[attrValue];
                        new Watcher(this.$data,attrValue,
                            newValue=>{
                                node.innerHTML = newValue;
                            })
                    }else if(attrName === 'v-text'){
                        node.innerHTML = this.$data[attrValue];
                    }
                })
                if(node.childNodes.length > 0){
                    this.compileNodeChild(node);

                }
            }
        });
    }
}

//依赖搜集器
class Dep{
    constructor(){
        this.subs = [];
    }
    addSub(sub){
        this.subs.push(sub);
    }
    //发布
    notify(newValue){
        this.subs.forEach(sub=>{
            sub.upData(newValue);
        })
    }
}

//订阅者
class Watcher{
    constructor(data,key,cb){
        Dep.target = this;
        
        this.cb = cb;
        //手动触发
        console.log('触发',data[key]);
        Dep.target = null
    }
    upData(newValue){
        this.cb(newValue);
    }
}