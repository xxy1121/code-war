/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  return s.replace(/ /g, '%20')
};
// var replaceSpace = function(s) {
//   return s.split('').map(it => it === ' ' ? '%20' : it).join('')
// }
// 解题思路
// 就是正则，或者是用循环，替换空格即可