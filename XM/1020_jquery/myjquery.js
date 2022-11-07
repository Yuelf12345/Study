class Jq{
    constructor(arg,root){      
        //保存上次操作节点 end()
        if(typeof root === 'undefined'){
            this['preventObj'] = [document];
        }else{
            this['preventObj'] = root;
        }

      if(typeof arg === 'string'){
        //元素
        // 一个元素
        // let ele =  document.querySelector(arg)
        // this[0] = ele
        //多个元素
        let eleS = document.querySelectorAll(arg)
        for(let i=0;i<eleS.length;i++){
            this[i] = eleS[i]
        }
        this.length = eleS.length
      }else if(typeof arg === 'function'){
        //函数
        window.addEventListener('DOMContentLoaded',arg)
      }else{
        //一个对象 
        if(typeof arg.length === 'undefined'){
            this[0] = arg
            this.length = 1
        }else{
            //多个对象
            for(let i=0;i<arg.length;i++){
                this[i] = arg[i]
            }
            this.length = arg.length
        }
      }

    }
    click(fn){
        //一个元素
        // this[0].addEventListener('click',fn)
        //多个元素
        for(let i=0;i<this.length;i++){
            this[i].addEventListener('click',fn)
        }
        return this
    }
    eq(index){
        //链式操作  返回 this,返回实例化对象
        //return this
        return new Jq(this[index],this)
    }
    end(){
        //返还上次保存的节点
        return this['preventObj'];
    }
    on(eventName,fn){
        let eventArr = eventName.split(" ")
        for(let i=0;i<this.length;i++){
            for (let j = 0; j < eventArr.length; j++) {    
                this[i].addEventListener(eventArr[j],fn)     
            }
        }
    }
    // css(styleName,styleValue){
    //     for(let i=0;i<this.length;i++){
    //        this[i].style[styleName]= styleValue
    //     }
    // }
    css(...args){
        //不定参数
        if(args.length === 1){
            if(typeof args[0] === 'string'){
                //获取样式
                return this.getStyle(this[0],args[0])
            }else{
                //设置样式三 多节点多样式
                for (let i = 0; i < this.length; i++) {
                    for(let j in args[0]){
                        this.setStyle(this[i],j,args[0][j])
                    }
                }
            }
        }else{
                //设值样式二
                for(let i=0;i<this.length;i++){
                    this.setStyle(this[i],args[0],args[1])
                 }
        }
        return this
    }
    animate(...args){
        let timer;
        if(typeof args[1] === 'number'){
            timer = args[1]/1000 + 's';
        }else{
            timer = '1s';
        }
        for(let i=0;i<this.length;i++){
            for(let j in args[0]){
                this.setStyle(this[i],'transition','all '+timer);
                this.setStyle(this[i],j,args[0][j]);
                if(typeof args[args.length-1] === 'function'){
                    this[i].addEventListener('transitionend',args[args.length-1])
                }
            }
        }
    }
    getStyle(ele,styleName){
        //样式扩展
        if(styleName in $.cssHooks){
            $.cssHooks[styleName].get(ele);
        }
        return window.getComputedStyle(ele,null)[styleName]
    }
    setStyle(ele,styleName,styleValue){
        if(styleName in $.cssHooks){
            $.cssHooks[styleName].set(ele,styleValue);
        }
        if(typeof styleValue === 'number' && !$.cssNumber[styleName]){
            styleValue = styleValue +'px'
        }
        ele.style[styleName] = styleValue
    }
}




function $(arg){
    return new Jq(arg)
}


$.cssNumber = {
    columnCount : true,
    opacity: true,
}

$.cssHooks = {}