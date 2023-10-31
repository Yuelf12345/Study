/**
 * @param {Array} nums 
 * 0<i<j
 */
var maximumDifference = function (nums) {
    let res = 0;
    let min = nums[0]
    for(let i=0;i<nums.length;i++){
        res = Math.max(nums[i]-min,res);
        min = Math.min(nums[i],min);
    }
    return res ==0 ? -1: res
}; 
console.log(maximumDifference([7,1,5,4]));