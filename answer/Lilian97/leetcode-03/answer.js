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