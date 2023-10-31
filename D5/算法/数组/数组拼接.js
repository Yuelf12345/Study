/**
 * 
 * @param {*} len 
 * @param {*} num 
 * @param  {...any} arr 
 * @returns 
 */
function concatArr(len, num, ...args) {
    let i = 0;
    let arr = [];
    let x = false;
    while (!x) {
        let arrIdx = i % num;
        arr.push(...args[arrIdx].splice(0, len));
        i++;
        x = [...args].every(item => {
            return item == 0
        })
    }
    return arr
}

console.log(concatArr(3, 3, [2, 5, 6, 7, 9, 5, 7], [1, 7, 4, 3, 4], [1, 7, 4, 3, 4]));