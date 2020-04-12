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