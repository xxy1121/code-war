/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace1 = function (s) {
    const res = encodeURI(s)
    return s.includes('%') ? decodeURI(res) : res
};

var replaceSpace = function (s) {
    const res = encodeURIComponent(s)
    return s.includes('%') ? decodeURIComponent(res) : res
};

var replaceSpace3 = function (s) {
    return s.replace(/\s/g, '%20')
};

// 解题思路
/*
我看到题目就想到应该是正则表达式与字符串替换的处理，考查的是正则表达式知识点
这个的时间复杂度应该不太行
*/