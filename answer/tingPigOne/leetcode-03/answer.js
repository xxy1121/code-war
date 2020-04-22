/**
 * @param {string} s
 * @return {string}
 */
//一行正则
var replaceSpace = function(s) {
    return s.replace(/ /g, "%20");
};
//非正则
var replaceSpace = function(s) {
    let newS = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            newS.push('%20')
        } else {
            newS.push(s[i])
        }
    }
    return newS.join('');
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点

/**
 * 新建数组，遍历字符串s，s[i]不为空，则将ss[i]push到新数组；若s[i]为空，则将'%20'push到新数组
 * 遍历完成后，join新数组成字符串
 */