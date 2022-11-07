// import GameEvent from './GameEvent.js'

export default class Dialog extends EventTarget{
    constructor(options){
        super();
        //默认配置
        let defaultOpentions = {
            width :"30%",
            height:"250px",
            title:"测试标题",
            content:"测试内容",
            dragable: true,
            isCancel:false,
            success(){},
            cancel(){},
        }
        //合并配置
        this.opts = Object.assign(defaultOpentions,options);
        this.init();
    }
    //初始化组件
    init(){
        this.createElement();
        // this.addEvent("success",this.opts.success)
        this.addEventListener('success',this.opts.success)
        this.addEleEvent();
        if(this.opts.dragable){
            this.drag();
        }
    }
    createElement(){
        let divEles = document.createElement('div');
        divEles.innerHTML = `<div class="box">
        <div class="box__header">
            <div class="box__title">
                <span>${this.opts.title}</span>
            </div>
            <button type="button" aria-label="Close" class="headerbtn">
            <i class="box__close">X</i></button>
        </div>
        <div class="box__content">
            <div class="box__container">
                <div class="box__message">
                    <p>${this.opts.content}</p>
                </div>
            </div>
        </div>
        <div class="btn">
        ${this.opts.isCancel?'<button type="button" class="cancel">取消</button>':''}
            <button type="button" class="primary">确定</button></div> 
        </div>`
        divEles.style.display = "none";
        document.body.appendChild(divEles);
        this.divEles = divEles;
    }
    addEleEvent(){
        // let closeEle = this.divEles.querySelector(".box__close")
        // closeEle.addEventListener('click',()=>this.close())
        // let cancelEle = this.divEles.querySelector(".cancel")
        // console.log(cancelEle);
        // cancelEle && cancelEle.addEventListener('click',()=>this.close())

        //事件委托
        let box = this.divEles.querySelector('.box');
        box.addEventListener('click',(e)=>{
            // console.log(e.target);
            let className = e.target.className;
            switch (className) {
                case 'box__close':
                    this.close()
                    break;
                case 'primary':
                    // this.opts.success();
                    // this.trigger('success')
                    
                    this.sure();
                    this.close();
                    break;
                case 'cancel':
                    this.opts.cancel();
                    this.close();
                    break;
                default:
                    console.log("未点中");
                    break;
            }
        })
    }
    //传值  //继承系统EventTarget
    sure(value){
        let success = new CustomEvent("success",{
            detail:value
        })
        this.dispatchEvent(success)
    }
    close(){
        this.divEles.style.display = "none";
    }
    open(){
        this.divEles.style.display = "block";
    }
    drag(){
        let box =this.divEles.querySelector('.box')
        box.onmousedown = function(e){
            var x = e.clientX - this.offsetLeft
            var y = e.clientY - this.offsetTop
            this.onmousemove = function(e){
                var xx = e.clientX - x
                var yy = e.clientY - y 
                this.style.left = xx + "px";
                this.style.top = yy+ "px";
            }
        }
        box.onmouseup = function(){
            this.onmousemove = ''
        }
    }
}


//通过继承扩展
export class inputDialog extends Dialog{
    constructor(options){
        super(options);
        this.createInput();
    }
    createInput(){
        var myImput = document.createElement('input');
        this.divEles.querySelector('.box__content').appendChild(myImput);
        this.myInput = myImput;
    }
    sure(){
        let value = this.myInput.value
        super.sure(value);
    }
}

class ShowDialog extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<button>按钮</button>`;
        let dialog = new Dialog({
                
        })
        this.onclick = function(){
           
        }
    }
}