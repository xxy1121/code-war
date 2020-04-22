/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/' '/g, '%20')
};

// 解题思路
// 这题首先想到的是正则，然后是循环遍历。针对实际生产中，肯定是选正则的。注意，replace里第一个参数如果不是正则，那只会替换字符串的第一个空格