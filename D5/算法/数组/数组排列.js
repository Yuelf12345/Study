/**
 * 
 * @param {Array} arr 
 * @returns Array
 * [['A','B'], ['a','b'], [1, 2]]
 * ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']
 */
function permutate(arr) {
    // 第一次的结果就是二维数组的第0项
    let res = arr[0].slice();
    for(let i=1;i<arr.length;i++){
        let pre = res.slice();
        res = [];
        pre.forEach(item=>[
            arr[i].forEach(j=>{
                res.push(item+j)
            })
        ])
    }
    return res;
}
console.log(permutate([['A','B'], ['a','b'], [1, 2]]));