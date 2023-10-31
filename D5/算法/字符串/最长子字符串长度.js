/**
 * 求最长不重复子串
 * @param {*} str 
 * @returns 
 */
function maxLen1(str){
    let  maxLength = 0;
    let map = new Map();
    let l = -1;
    for(let r=0;r<str.length;r++){
        if(map.has(str[r]) && map.get(str[r]) > l){
            l = map.get(str[r])
        }
        map.set(str[r],r)
        maxLength = Math.max(maxLength,r-l)
    }
    console.log(map);
    return maxLength
}

console.log(maxLen1('alolobo'));

/**
 * 求最长target出现两次的不重复子串
 * @param {*} str 
 * @param {*} target 
 * @returns 
 */
function maxLen2(str,target){
    let maxStr = '';
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[j] === target){
            count ++
        }
        for(let j = 0;j<str.length;j++){
            if(count % 2 === 0){
                sliceStr = str.slice(i,j+1)
                if(maxStr.length < sliceStr.length){
                    maxStr = sliceStr
                }
            }
        }
    }
    return maxStr
}

console.log(maxLen2('aloloobo','o'));