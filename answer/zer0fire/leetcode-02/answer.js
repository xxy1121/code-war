/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let ary = s.trim().split(' ')
  return ary[ary.length - 1].length
};

// 解题思路
// 一开始就是想空格分开然后找分开后的数组的最后一个单词，但是没法解决类似 'a ' 这样最后一个是空格的情况，遂加了 trim 去掉开头结尾的所有空格，中间的空格继续原状就可以了