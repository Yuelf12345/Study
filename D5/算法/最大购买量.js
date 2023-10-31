/**
 * 
 * @param {Array} arr 
 * @param {Number} max 
 * @return {Number} sum
 * [23,26,27,36]    78
 * 23+26+27=76
 * [23,30,40] 26
 * 23
 */

function maxPurchase(arr, max) {
    arr = arr.sort((a,b)=>a-b)
    const dp = new Array(arr.length).fill(0).map(()=>new Array(max+1).fill(0));
    if(arr[0] > max) return -1
    for(let j=arr[0];j<=max;j++){
        dp[0][j] = arr[0]
    }
    for(let i = 1;i<arr.length;i++){
        for(let j=0;j<=max;j++){
            if(j<arr[i]){
                dp[i][j] = dp[i-1][j]
            }else{
                // i=1;i=5;3;i=1;j=6;6
                dp[i][j] = Math.max(dp[i-1][j],[dp[i-1][j-arr[i-1]] + arr[i-1]])//dp[0][2]+3
            }
        }
    }
    return dp[arr.length-1][max]
}
console.log(maxPurchase([3,5,9,16], 18));
console.log(maxPurchase([23,26,27,36],78));
console.log(maxPurchase([23,26,27,36],11));