/**
 * 
 * @param {*} str 
 * @returns 
 */
function countChrt(str) {
    str = str.split('')
    let map = new Map()
    for(let i=0;i<str.length;i++){
        if(!map.has(str[i])){
            map.set(str[i],1)
        }else{
            map.set(str[i],map.get(str[i])+1)
        }
    }
    const sortMap = new Map([...map].sort((a, b) => {
        if(a[1] == b[1]){
            if(a[0].charCodeAt() < 97){
                return b[0].charCodeAt()- a[0].charCodeAt()
            }
            return a[0].charCodeAt()- b[0].charCodeAt()
        }
        return b[1] - a[1]
    }))
    return sortMap
}
console.log(countChrt('zzxxXXy'));