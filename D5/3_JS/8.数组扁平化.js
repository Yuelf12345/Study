let arr = [1,2,3,[4,5,6],[7,8,[9]]]

// ES6 flat(deep) API 默认0,Infinite:展开所有维度
console.log(arr.flat(Infinity)); 

// 递归调用
function flatten_1(arr,deep){
   let newArr = [];
   arr.forEach(i => {
        if(Array.isArray(i) && deep > 0){
            deep --
            newArr = newArr.concat(flatten_1(i,deep))

        }else{
            newArr.push(i)
        }
   });
   return newArr
}
console.log(flatten_1(arr,3));

/**
 * arr.reduce(function(prev,cur,index,arr){
    ...
    }, init);
    prev 必需。累计器累计回调的返回值; 表示上一次调用回调时的返回值，或者初始值 init;
    cur 必需。表示当前正在处理的数组元素；
    index 可选。表示当前正在处理的数组元素的索引，若提供 init 值，则起始索引为- 0，否则起始索引为1；
    arr 可选。表示原数组；
    init 可选。表示初始值。
 */
function flatten_2(arr){
    return arr.reduce(function(prev,cur){
        return prev.concat(Array.isArray(cur)?flatten_2(cur):cur)
    },[])
}
console.log(flatten_2(arr));

// 扩展运算符
function flatten_3(arr){
    while(arr.some(i=>Array.isArray(i))){
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten_3(arr));