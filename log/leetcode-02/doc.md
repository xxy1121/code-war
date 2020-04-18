## author: LetterMumu
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let j = 0
    for(let i = s.length-1 ; i>=0 ; i--){
        if(s[i] === " "){
            if(j === 0){
                continue
            }
            break
        }
        ++j
    }
    return j
};

/** 
 * 解题思路
    整体思路：从字符串尾开始遍历，判断是不是空格，如果是空格break循环，若果不是计数器+1
    特殊情况处理: 字符串末尾有n个空格，如果刚开始就是空格的话，计数器为0，判断下计数器的值：如果为0，直接continue进入下次循环
   
 *拓展：
    1、字符串不只是包含大小写字母和空格 ' '，返回其最后一个单词的长度
    2、返回其最后一个单词
*/

```
----------------------------------------
## author: Lilian97
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

	let length = s.length-1;

    // 倒着遍历字符串,直到某个元素不为空
    while(length>=0 && s.charAt(length)==" "){
        length--;
    }

    let start = length;//把最后一个字符串结束的位置赋给start

    // 从length处继续倒着遍历，直到某个元素为空
    while(start>=0 && s.charAt(start)!==" "){
        start--;
    }
    return length-start;
};

// 解题思路

/**

	最开始用的内置函数：
		先用trim去掉首尾空格，再用split切割成数组，
	返回数组最后一个元素的长度，意识到解算法题不使用内置函数，于是另寻他解。

		题目要求返回给定字符串最后一个单词的长度，
	那我们可以通过遍历的方法确认最后一个单词起始位置和结束位置，由于是最后一个单词，可以倒着遍历。

		首先倒着遍历字符串，当某个字符不为空时停止遍历，此时确定最后一个单词的结束位置，
		然后从结束位置继续倒着遍历，直到某个字符为空，此时确定最后一个单词的起始位置，
		两者相减，即为最后一个单词的长度。

**/
```
----------------------------------------
## author: chenzhihaolqm
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let arr = s.trimRight().split(' ');
   return (arr[arr.length-1] || '').length;
};

// 解题思路
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
```
----------------------------------------
## author: kael
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let list = s.trim().split(' ')
    let length = list.length
    return length ? list[length - 1].length : 0
};

// 解题思路
// 去除字符串两端空格，然后用' '去切割，如果s不为空，那么切割得到的数组最后一位一定是一个单词。
```
----------------------------------------
## author: moling3650
```
/**
 * @param {string} s
 * @param {RegExp} searchValue
 * @param {string} i
 * @return {number}
 */
function lastIndexOf(s, searchValue, i) {
    while (i >= 0 && !searchValue.test(s[i])) { i -= 1; }
    return i;
}

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    const wIdx = lastIndexOf(s, /\w/, s.length - 1);
    if (wIdx < 0) {
        return 0;
    }
    const sIdx = lastIndexOf(s, /\s/, wIdx - 1);
    return wIdx - sIdx;
};

// 解题思路
/**
 * 思路：逆序查找
 * 步骤：先从字符串最后一位向前查找文字位置wIdx，再从wIdx - 1的位置向前查找空格sIdx，用wIdx - sIdx得出单词的长度
 * 抽象：两次都是向前查找位置i，可以封装成一个查找的函数，便于测试。如果找到了就返回i，找不到返回-1
 * 估算：最坏的情况是一次数组扫描，时间复杂度 O(n)；就地解决，空间复杂度 O(1)
 */
```
----------------------------------------
## author: mosiya
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = (s) => s.trim().length - 1 - s.trim().lastIndexOf(' ');

// 解题思路
// 这道题不难，解法也很多，比如对字符串用split以后的数组去掉空字符串后，统计最后一项的字符串长度；
// 比如说不使用api的，使用两个指针，一个寻找最后一个不为空格的字母的位置，另一个从该指针向前遍历，寻找第一个为空格的位置(或者找不到就遍历到头)，两指针下标相减得到答案
// 我比较懒，只好使用了一行大法，用尽api得到了这个解法，仅供娱乐~
```
----------------------------------------
## author: nsuedu
```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (!(typeof (s) === 'string') && s.length > 0 && s.trim().length > 0) return 0;
    const newS = s.trim();
    const strArr = newS.split(' ');
    return strArr[strArr.length - 1].length;
};

// 解题思路
/*
我看到题目就想到应该是字符串与数组转换进行处理，考查的是数组与字符串的转换方法知识点
*/
```
----------------------------------------
## author: wxx2258
```
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0;
    let flag = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if (flag) {
                len = 1;
                flag = false;
            } else {
                len ++;
            }
        } else {
            flag = true;
        }
    }
    return len;
};
// var lengthOfLastWord = function(s) {
//     const arr = s.trim().split(' ');

//     return arr.length > 0 ? arr[arr.length - 1].length : 0;
// };

// 解题思路
// 我看到题目就想到是数组处理
/**
 * 思路一：（工作中实际更能多会用这样的方法实现，所以顺手写了一下）
 * 1. 直接通过原生api的方法，通过 String.prototype.trim 和 String.prototpe.split 转换为一个数组
 * 2. 转换后得到一个存储字母的数组，获取最后一个元素的长度
 * 思路二：
 * 1. 设置一个标记flag，标记是否重新开始计数
 * 2. 通过O(n)的时间复杂度，进行一次遍历，遍历过程中判断s[i]是否不等于 ‘ ’
 * 3. 如果s[i]等于‘ ’，则设置标记flag为true。说明当前统计的长度有可能不是最后一个字母的长度
 * 4. 如果s[i]不等于 ' '，判断flag，如果为true，则设len为1重新计数且将flag设为false。如果为false，len++累积计数。
 * 5. 重复2知道遍历完整个数组
 * 时间复杂度O(n)，空间复杂度为O(1)
 */
```
----------------------------------------
## author: zer0fire
```
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

```
----------------------------------------
