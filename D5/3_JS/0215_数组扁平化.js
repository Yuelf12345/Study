var arr = [1, [2, [3, 4]]];

function flatten1(arr) {
    return arr.flat(Infinity);
}
console.log('1',flatten1(arr)); //  [1, 2, 3, 4，5]


function flatten2(arr){
    var arr;
    while (arr.some(v=>Array.isArray(v))){
        arr = [].concat(...arr)
    }
    return arr
}
console.log('2',flatten2(arr));


console.log('3',arr.join(',').split(',').map(item => Number(item)));