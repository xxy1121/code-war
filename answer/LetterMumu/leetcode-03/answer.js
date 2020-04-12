/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let str = ""
    for(let i = 0 ;i < s.length ; i++){
        if(s[i] !== ' ') {
            str += s[i]
        } else {
            str += '%20'
        }
    }
    return str
};

/** 
 * 解题思路
    整体思路：循环遍历，如果不是空格，返回的字符串 + 当前字符 ；如果是空格 返回字符串 + '%20'
*/
