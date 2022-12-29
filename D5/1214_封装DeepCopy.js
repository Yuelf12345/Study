function deepCopy(obj){
    let newObj;
    //数组
    if(Array.isArray(obj)){
        newObj = [];
        obj.forEach(item=>{
            newObj.push(item)
        })
    }
    //对象
    else if(typeof obj === 'object'){
        newObj = {}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(typeof key === 'object'){
                    newObj = deepCopy(obj[key])
                }else{
                    newObj[key] = obj[key]
                }
            }
        }
    }
    return newObj
}

let dad = {
    arr:['x','y'],
    obj:{
        a:1,
        b:2
    },
    fn:function(){
        console.log('dad')
    }
}

let son = deepCopy(dad)

console.log(dad);
console.log(son);