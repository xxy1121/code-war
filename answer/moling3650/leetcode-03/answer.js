/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/\s/g, '%20');
};

// 解题思路
// 这题直接调用API完成了，在更加底层的语言中，字符串大量的拼接会带来大量的资源损耗，因为string类型是不可变的，java会用StringBuilder优化字符串拼接
// 尝试s.replace(' ', '%20')，发现只能转一个，s.replace(/\s/g, '%20')，可以转全部
