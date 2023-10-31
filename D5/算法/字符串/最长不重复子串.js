/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 1
    if(!s.length){
      res = 0
    }
    let map = new Map()
    let l = -1;
    for(let r=0;r<s.length;r++){
        if(map.has(s[r]) && map.get(s[r]) > l){
            l = map.get(s[r])
        }
        map.set(s[r],r)
        res = Math.max(res,r-l)
    }
    return res
};