/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let newString = ''
    for(let index = 0; index < s.length; index ++) {
        if (s[index] != ' ') {
            newString += s[index]
        } else {
            newString += '%20'
        }
    }
    return newString
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点