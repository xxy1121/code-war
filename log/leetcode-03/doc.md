## author: LetterMumu
```
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

```
----------------------------------------
## author: Lilian97
```
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
	let str="";
	//新建一个字符串
    let length=s.length;

    // 遍历给定字符串，把字符赋给新字符串，遇到空格则把"%20"赋给新字符串
    for(let i=0;i<length;i++){
        if(s.charAt(i)==" "){
            str=str+"%20";
        } else{
            str=str+s.charAt(i);
        }
    }
    // 返回新字符串
    return str;

};

// 解题思路
/**

		看到题目首先想到遍历字符串，把空格替换掉，
	直接在原有字符串上操作很麻烦，所以创建一个新字符串对其操作。

		遍历原有字符串，把字符逐个赋给新字符串，遇到空格字符就把"%20"赋给新字符串
	遍历结束后返回新字符串
		时间复杂度为O(n).


**/


/**第二种思路

var replaceSpace = function(s) {

    let arr=[];
    //创建一个新数组
    let length=s.length;

    //遍历字符串，把字符赋给数组，遇到空格字符就把"%20"赋给数组
    for(let i=0,j=0;i<length;i++){
        if(s.charAt(i)==" "){
            arr[j++]="%";
            arr[j++]="2";
            arr[j++]="0";
        } else{
            arr[j++]=s.charAt(i);
        }
    }

    //遍历结束后后，把数组转换成字符串返回
    arr=arr.join("");
    return arr;

};

	时间复杂度为O(n).




**/
```
----------------------------------------
## author: chenzhihaolqm
```
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  return s.replace(/ /g, "%20");
};

// 解题思路
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
// 正则处理
```
----------------------------------------
## author: kael
```
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/' '/g, '%20')
};

// 解题思路
// 这题首先想到的是正则，然后是循环遍历。针对实际生产中，肯定是选正则的。注意，replace里第一个参数如果不是正则，那只会替换字符串的第一个空格
```
----------------------------------------
## author: moling3650
```
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/\s/g, '%20');
};

// 解题思路
/**
 * 思路：api替换
 * 解释：这题用高级语言解没有什么意义，这题考得非常底层。string类型在C的实现，是一个char类型的数组，且在末位带有一个\0的字符。
 *      这题的复杂度中在于用三个字符来替换一个字符，数组需要扩容，而且扩容的数量是不确定的，原数组长度的1~3倍。
 * 解法1：先申请原数组3倍的内存，循环一次填充新数据，而后对新数组空白部分进行截断。
 * 解法2：先数出字符串有多少空格，申请字符串长度+空格*2的内存，循环填充数据。
 * 估算：无论如何解都需要循环字符串，时间复杂度O（n)，空间复杂度也要O（n）
 */
```
----------------------------------------
## author: mosiya
```
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = (s) => s.split(' ').join('%20');

// 解题思路
// 这道题感觉很简单，比较懒，所以用api直接可得答案。或者使用一个新的字符串，通过遍历字符串，遇到非空字符直接拼接，遇到空字符则拼接'%20'的方法可得答案
// 对于有的语言来说，字符串长度是需要提前申请的，这里最多可能要申请三倍于原字符串长度的空间，这大概是其中一个考点吧
```
----------------------------------------
## author: nsuedu
```
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    return s.replace(/\s/g, '%20')
};

// 解题思路
/*
我看到题目就想到应该是正则表达式与字符串替换的处理，考查的是正则表达式知识点
这个的时间复杂度应该不太行
*/
```
----------------------------------------
## author: wxx2258
```
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += '%20';
        } else {
            result += s[i];
        }
    }
    return result;
}
// var replaceSpace = function(s) {
//     return s.replace(/\s/g, '%20');
// };

// 解题思路
// 我看到题目就想到字符串替换，没太get到要考察的点
```
----------------------------------------
