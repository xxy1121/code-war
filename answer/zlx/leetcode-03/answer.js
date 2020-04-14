/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  // 正则替换
  // return s.replace(/ /g, '%20')
  let start = 0
  const endlength = s.length
  let newStr = []
  while(start < endlength) {
    newStr.push(s[start] == ' ' ? "%20" : s[start])
    start++
  }
  return newStr
};
console.log(replaceSpace('fdsafdas dsadsd dSad daSDsa dsda'))

// 解题思路
// 想用replace正则替换，一行代码搞定但是感觉这是算法考验不是API使用拒绝了自己
// 那就来个复杂度为（On）循环一遍搞定 js倒是能将字符串遍历但是这是个原始值，遍历赋值并不能插入值，那就用数组把，但是最好不使用split把，那就重新定义一个字符串，循环加上空格改成‘%20’
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点