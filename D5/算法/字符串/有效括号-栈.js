/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let len = s.length;
    let stack = [];
    if (len % 2 != 0) return false;
    for (let i = 0; i < len; i++) {
        switch (s[i]) {
            case '(':
                stack.unshift(')')
                break;
            case '[':
                stack.unshift(']')
                break;
            case '{':
                stack.unshift('}')
                break;
            default:
                if (s[i] != stack.shift())
                    return false
                break;
        }
    }
    return stack.length === 0;
};
console.log(isValid(s = "()[()]{}"));