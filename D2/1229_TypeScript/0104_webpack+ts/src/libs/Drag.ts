export default class Drag {
    //定义属性
    el: HTMLElement;
    x:number;
    y:number;
    isDrag:boolean;

    constructor(
        el

    ){
        this.el = el;
        this.x = 0;
        this.y = 0;
        this.isDrag = false;

        this.down();
        this.move();
        this.up();
    }

    down(){
        this.el.addEventListener('mousedown',e=>{
            this.isDrag = true;

            this.x = e.clientX -this.el.offsetLeft;
            this.y = e.clientY - this.el.offsetTop;
        })
    };
    move(){

    };
    up(){

    }
}

