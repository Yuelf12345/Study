/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = 0 // 当前最大回文串的长度
    let maxStr = '' // 当前最大的回文串
    for (let i = 0; i < s.length; i++) {
      let str = s[i] // 当前遍历的这个字符为中心的回文串
      let l = i - 1 // 左侧遍历开始索引
      while (s[i + 1] === s[i]) { // 找到当前字符后连接的所有一样的字符,更新 i 的指针和 str,获取连续的字符
        str += s[i]
        i++
      }
      let r = i + 1 // 右侧遍历开始索引
      while (s[l] === s[r] && s[l] !== undefined) { // 从连续字符两端开始像两侧扩展,直到越界或者不一致,一致的直接拼到 str 中
        str = s[l] + str + s[l]
        l--
        r++
      }
      if (str.length > max) { // 判断与之前最大的对比
        max = str.length
        maxStr = str
      }
    }
    return maxStr
  };

  console.log(longestPalindrome('abab'));