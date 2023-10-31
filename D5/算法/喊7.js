/**
 * 
 * @param {string} str 
 * @returns Array
 *  010
 *  100
 */


function rightSort(str){
    let arr = new Array(str.length).fill(0);
    let count = 0;
    let counts = 0;
    let i=0;
    for(let i=0;i<str.length;i++){
        count += Number(str[i])
    }
    while(counts < count){
        i++;
        if(i % 7 === 0 || String(i).includes(String(7))){
            counts ++ ;
            console.log(i);
            arr[(i-1)%str.length]++; // 当前索引 ++
        }
    }
    return arr
}

console.log(rightSort('010'));
console.log(rightSort('00021'));