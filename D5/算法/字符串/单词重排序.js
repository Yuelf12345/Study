/**
 * @param {*} n 
 * @param {*} str 
 * 
 * rolling3 stone4 like1 a2
 * like a rolling stone
 */
function Reordering(n,str){
    return  arr = str.split(' ').sort((a,b)=>a.match(/\d+/g)-b.match(/\d+/g)).join("").match(/[a-z]+/g).join(" ");
}

console.log(Reordering(4,'rolling3 stone4 like1 a2'));