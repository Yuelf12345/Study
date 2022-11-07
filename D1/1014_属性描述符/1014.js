var aGoods = {
    pic:'',
    title:'',
    desc:'',
    sellNumber:1,
    favorRate:2,
    price:3,
};

class UIGoods {
    constructor(g){
        g = {...g}       //克隆
        Object.freeze(g) //冻克隆
        Object.defineProperty(this,'data',{
           get:function(){
            return g
           },
           set:function(){
            throw new Error('data 只读，不能重新赋值')
           }
        });
        var internalChooseValue = 0;
        Object.defineProperty(this,'choose',{
            configurable:false,
            get:function(){
                return internalChooseValue;
            },
            set:function(val){
                if(typeof val !== 'number'){
                    throw new Error('赋值非数字')
                }
                internalChooseValue = val
            }
        });
        Object.defineProperty(this,'total',{
            get:function(){
                return this.choose * this.data.price
            }
        })

        Object.seal(this)   //密封
    }
}
Object.freeze(UIGoods.prototype)    //冻结原型
var g = new UIGoods(aGoods);
g.choose = 3  //报错
console.log(g.total)
g.data.price = 100;
g.abc = 1;
console.log(g);