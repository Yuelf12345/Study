/** 原理：
 * 获取作用域下的文本节点
 * 将文本内容与data数据匹配，正则表达式替换{{}}内的数据
 * 
 * 自定义事件，通过key值关联触发
 */

 class myVue extends EventTarget{
    constructor(options){
        super()
        this.$el = options.el
        this.$data = options.data
        this.observer(this.$data)
        this.compile();
        console.log(this);
    }

    observer(data){
        // for(let key in data){
        //     console.log(key);
        // }
        Object.keys(data).forEach(key=>{
            let value = data[key]
            let $this = this
            Object.defineProperty(data,key,{
                configurable:false,
                enumerable:false,
                get(){
                    return value
                },
                set(newValue){
                    console.log('set:',newValue);
                    //修改后更新视图  EventTarget
                    let event  = new CustomEvent(key,{
                        detail:newValue
                    })
                    $this.dispatchEvent(event)
                    value = newValue
                }
            })
       })
    }
//编译
    compile(){
        let ele = document.querySelector(this.$el);
        this.compileNodeChild(ele);
    }

    compileNodeChild(ele){
        let eleChild = ele.childNodes
        eleChild.forEach(node => {
            // console.log(node,node.nodeType)
            if(node.nodeType === 3){
                //文本
                let textContent = node.textContent
                // console.log(content);
                let reg = /\{\{\s*([^\{\}]+)\s*\}\}/g
                if(reg.test(textContent)){
                    let $1 = RegExp.$1
                    console.log($1,this.$data[$1]);
                    node.textContent = node.textContent.replace(reg,this.$data[$1])
                //    node.textContent = this.$data.message
                this.addEventListener($1,e=>{
                    let newValue = e.detail
                    let oldValue = this.$data[$1]
                    let reg = new RegExp(oldValue)
                    // node.textContent = node.textContent.replace(reg,newValue)
                    node.textContent = node.textContent.replace(reg,newValue)
                })
                }
            }else if(node.nodeType === 1){
                //div
                if(node.childNodes.length > 0){
                    this.compileNodeChild(node)
                }
            }
        });
    }
}