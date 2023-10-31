/**
 * @param {*} word1 
 * @param {*} word2 
 * @returns Number
 * word1 = "leetcode", word2 = "etco"
 * 4
 */
var minDistance = function (word1, word2) {
    let len1 = word1.length, len2 = word2.length;

    let dp = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(Infinity));

    for (let i = 0; i <= len1; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= len2; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2);
            }
        }
    }
    return dp[len1][len2]
};

console.log(minDistance("leetcode","etco"));