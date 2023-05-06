var array = [1, 1, '1', '1', null, null,
    undefined, undefined,
    new String('1'), new String('1'),
    /a/, /a/,
    NaN, NaN,
    [1], [1]
];

// indexof   不可去重:NaN 复杂数据类型
function unique_1(array) {
    let arr = []
    for(let i =0;i<array.length;i++){
        if(arr.indexOf(array[i]) !== -1){
            arr.push(array[i])
        }
    }
    return arr
}
let arr1 = unique_1(array);

//set   可去重：NaN  不可去重:复杂数据类型
function unique_2(array) {
    return Array.from(new Set(array))
}
let arr2 = unique_2(array);

// obj
function unique_3(array){
    let obj = {}
    let arr = [];
    for(let i =0;i<array.length;i++){
        if(!obj[array[i]]){
            obj[array[i]] = 1;
            arr.push(array[i])
        }
    }
    return arr
}
let arr3 = unique_3(array);

// hasOwnProperty
function unique_4(array) {
    let obj = {}
    return array.filter(i=>{
        if(obj.hasOwnProperty(typeof i + i)){
            return false    // 有过滤
        }else{ 
            obj[typeof i + i] = true
            return true
        }
    })
}

console.log(unique_4(array))
