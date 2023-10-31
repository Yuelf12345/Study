/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 双指针 去重
 */
var threeSum = function (nums) {
    nums = nums.sort((a,b)=>a-b);
    let len = nums.length;
    let res = [];
    if(nums.length <3) return res;
    for(let i=0;i<len;i++){
    let left = i+1
    let right = len - 1;
        if(nums[i] > 0) return;     
        if(i> 0 && nums[i] == nums[i-1]) continue;      //i去重
        while(right > left){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum ==0){
                res.push([nums[i],nums[left],nums[right]])
                while (left<right && nums[left] == nums[left+1]) left++; // left去重
                while (left<right && nums[right] == nums[right-1]) right--; // right去重
                left++;
                right--;
            }
            else if(sum > 0){
                right --;
            }else if(sum < 0){
                left ++;
            }
        }
    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));