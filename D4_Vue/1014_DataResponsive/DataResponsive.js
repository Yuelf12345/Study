//数据响应式：数据变化时自动调用相关函数

/**
 * 观察对象的所有属性
 *  @param {Object} obj
 */

function observe(obj) {
    for(const key in obj){
        var internalValue = obj[key];
        // let funs = new Set();
        let funs = [];
        Object.defineProperty(obj,key,{
            get:function(){
                //依赖收集
                if(window.__fun && !funs.includes(window.__fun)){
                    // funs.add(window.__fun)
                    funs.push(window.__fun)
                }
                return internalValue;
            },
            set:function(val){
                internalValue = val;
                //派发更新
                for(var i=0;i<funs.length;i++){
                    funs[i]()
                }
            }
        })
    }
}

function autorun(fn){
    window.__fun = fn;
    fn();
    window.__fun = null
}