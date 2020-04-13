/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += '%20';
        } else {
            result += s[i];
        }
    }
    return result;
}
// var replaceSpace = function(s) {
//     return s.replace(/\s/g, '%20');
// };

// 解题思路
// 我看到题目就想到字符串替换，没太get到要考察的点