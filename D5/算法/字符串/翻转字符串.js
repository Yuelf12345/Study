/**
 * 
 * @param {String} str 
 * @param {Number} start 
 * @param {Number} end 
 * @returns 
 */
function reverseStr(str, start, end) {
    let arr = str.split(' ');
    let x = arr.splice(start,end-start + 1).reverse()
    arr.splice(start,0,...x)
    return arr.join(' ')
}
console.log(reverseStr('i am a developer', 1, 2));