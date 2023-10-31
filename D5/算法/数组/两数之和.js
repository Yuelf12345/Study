/**
 * 
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
function twoSum(arr,target){
    let res = [];
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i],i);
        if(map.has(target-arr[i])){
            res.push(map.get(target-arr[i]),i)
        }
    }
    return res
}

console.log(twoSum([2,7,11,15],17));