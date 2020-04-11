/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/\s/g, '%20');
};

// 解题思路
// 尝试s.replace(' ', '%20')，发现只能转一个
// s.replace(/\s/g, '%20')，正则加g可以转全部