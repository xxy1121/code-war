/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // 只有一个字符串和空格的情况
    var answer = s.trim()
    var answer = s.split(" ") 
    //通过split方法把字符串转成数组
    if(answer.length === 0){
        return 0;
    }else{
        return answer[answer.length-1].length
    }
};

// 解题思路
// 通过split方法把字符串转成数组，注意要判断只有一个字母的情况.