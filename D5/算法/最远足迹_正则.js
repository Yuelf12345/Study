/**
 * @param {*} str 
 * @returns 
 * match方法返回一个数组
 */
function FarthestFootprint(str){
    var regex = /\((.+?)\)/g;   // () 小括号
    var arr = str.match(regex);
    let len = arr.length;
    let maxFoot = 0;
    let res;
    for(let i=0;i<len;i++){
        let [x,y] = arr[i].match(/\d+/g);
        if((x*x+y*y)>maxFoot){
            maxFoot = (x*x+y*y)
            res = `(${x},${y})`
        }
    }
    return res;
}

console.log(FarthestFootprint("ferg(3,10)a13fdsf3(3,4)f2r3rfasf(5,10)")); //['(90ba)']
