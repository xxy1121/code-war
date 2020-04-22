## author: LetterMumu
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let nMax = nums[0]
    let endMax = nums[0]
    for(let i = 1 ; i < nums.length ; i++) {
        nMax = nums[i] > nMax + nums[i] ?µ˜nums[i] : nMax + nums[i]
        endMax = endMax > nMax ? endMax : nMax
    }
    return endMax
};

/** 
 * 解题思路
    解题前首先要考虑：
        1、n项和n项之前最大子序有什么关系
        2、n+i项时找出的关系是否成立
    我们先从个例开始找规律:
        #1:[2,1,-3]
            第一次时：最大子项是其 本身（2）
            第二次时：最大子项是其 本身（1）+最大子项（2）
            最大子项：最大子项是其 第二次时最大子项（3）
        #2:[-2,1，3]
            第一次时：最大子项是其 本身（-2）
            第二次时：最大子项是其 本身（1）
            最大子项：最大子项是其 本身（3）+ 最大子项（1）
        #3:[-2,-1，3]
            第一次时：最大子项是其 本身（-2）
            第二次时：最大子项是其 本身（-1）
            最大子项：最大子项是其 本身（3）
        ......

        由此我们可以得出可能存在的规律：最大子项 = max(某次运算的最大子项 ，当前项 ，当前项 + 上次得出的最大子项)
    
    
    验证n+1:
        （数组四个元素时，五个元素时）
        ......

        经过验证发现：我们得出的可能存在的规律极大可能是存在的

    编码实现：
        // 初始化数据
        let nMax = nums[1] //n项算出的最大子项
        let endMax = nums[1] //最终的最大子项
        // 算法逻辑实现
        for(let i = 1 ; i < nums.length ; i++) {  //循环遍历数组
            nMax = nums[i] > nMax + nums[i] ?nums[i] : nMax + nums[i]   //根据得出的规律更新本次运算得出的最大子项
            endMax = endMax > nMax ? endMax : nMax   //更新最大子项
        }
        return endMax
    
        ps:不想用三目运算符 可以用 Math.max()


 *拓展：输出构成最大子项的连续子数组
*/
```
----------------------------------------
## author: Lilian97
```
*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let length=nums.length;
    let max=nums[0]; 
    //最大和默认数组第一个值

    let sum=0; 

	// 第一层循环
    for(let i=0;i<length;i++){

		// 第二层循环从i处开始遍历
        for(let j=i;j<length;j++){

        	// 把遍历的数值加到sum上，与max作比较，把较大值赋给max
            sum=sum+nums[j];
            if(sum>max){
                max=sum;
            }
        }
        // 第二层遍历结束，必须要sum值制令，再开始下一次循环
        sum=0;
    }
    return max;

};

// 解题思路
/**
	看到题目我首先想到的是暴力破解，两层循环遍历得到最大和。
	第一层循环从开始遍历到结束，第二层循环嵌套在第一层循环中，
从第一层循环开始的地方向后遍历，把遍历到的每个值都加到sum上，再与max作比较，把较大值赋给max。
需要注意的是，第二层循环结束时，必须要把sum置零才能开始下一次循环遍历。

	时间复杂度为O(n^2).

**/


// 第二种解法
var maxSubArray = function(nums) {
    let length=nums.length;
    let max=nums[0];
    let sum=0;
    for(let i=0;i<length;i++){
        if(sum>0){
            sum+=nums[i];
        } else{
            sum=nums[i];
        }

        if(sum>max){
            max=sum;
        }
    }
    return max;

};

/**
	第二种方法是动态规划法。

	由于最大和是累加过程，
	如果之前的sum<=0，则对于“求取最大和”没有增加值，那我们可以把这个sum舍弃，把当前的数组值赋给sum；

	如果sum>0，则对于“求取最大值”有增加值，那我们可以保留sum值，并在此基础上累加数组的值；
	
	每次sum赋值完毕，都要与max作比较，把较大值赋给max。

	时间复杂度为O(n).


**/
```
----------------------------------------
## author: chenzhihaolqm
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length;
    let currSum = nums[0], maxSum = nums[0];

    for(let i = 1; i < n; ++i) {
      currSum = Math.max(nums[i], currSum + nums[i]);
      maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
  }
  
  
var maxSubArray = function(nums) {
    let n = nums.length, maxSum = nums[0];
    for(let i = 1; i < n; ++i) {
      if (nums[i - 1] > 0) nums[i] += nums[i - 1];
      maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;
  }

// 解题思路
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
// 贪心算法， 动态规划
```
----------------------------------------
## author: kael
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length===1) return nums[0]
    let list = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        list[i] = nums[i] > (list[i-1] + nums[i]) ? nums[i] : (list[i-1] + nums[i])
    }
    return Math.max(...list)
};

// 解题思路
// 新建一个数组list，用来存储对应位置为终点的最大子序和。最终返回此数组最大值
```
----------------------------------------
## author: mosiya
```
/**
 * @param {number[]} nums
 * @return {number}
 */
// 第一次的做法
var maxSubArray1 = function(nums) {
    let arr = []
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        sum += nums[i]
        arr.push(sum)
        if(sum < 0) {
            sum = 0
        }
    }
    return Math.max(...arr)
};
// 动态规划算法
// 该算法由 Jay Kadane 于1984年最先提出，运用了动态规划的思想，因此也称该方法为 Kadane 算法。
var maxSubArray2 = function(nums) {
    let max = nums[0]
    let sum = 0
    for(let i of nums) {
        if(sum > 0) {
            sum += i
        } else {
            sum = i
        }
        max = Math.max(max, sum)
    }
    return max
};
// 省空间的做法
var maxSubArray3 = function(nums) {
    nums.forEach((item, index, arr) => {
        if(index > 0 && arr[index - 1] > 0) {
            arr[index] = item + arr[index-1]
        }
    })
    return Math.max(...nums)
};

// 解题思路
// 可能是有过类似的经验，我是这么想的：
// 记录一个子序列和sum，在遍历下一个数时，先进行加和计算并储存结果。若当前加和小于0，则重置计算器。
// 这样会记录每一次加和的结果，并且会打断小于0的结果的累加，只有大于等于0的加和是有效的
// 最后对这个数组进行求最大值运算得到结果

// Kadane算法也是类似的，只是不会进行每次结果的储存，只保存当前加和最大的数，省下了一个数组的空间

// 最后的做法，是看到了不额外开启空间的做法，我按自己的理解又重新写了一个解法，相当于第一个解法，只是将每次累加的结果直接存在了原数组里
```
----------------------------------------
## author: nsuedu
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = nums[0];
    let sum = 0;
    return nums.reduce((accumulator, currentValue, currentIndex, array) => {
        if (sum > 0) {
            sum += currentValue;
        } else {
            sum = currentValue;
        }
        ans = Math.max(ans, sum);

        return ans;
    }, ans)
};

// 解题思路
/*
我看到题目就想到应该是数组循环遍历处理，考察的是数组累加/乘/除，然后从数组中找到最大值

*/
```
----------------------------------------
## author: wxx2258
```
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let result = nums[0];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result = Math.max(sum, result);
        if (sum < 0) {
            sum = 0;
        }
    }
    return result;
}
// var maxSubArray = function(nums) {
//     let ans = nums[0],
//         max = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         ans = Math.max(nums[i] + ans, nums[i]);
//         nums[i] = ans;
//         max = Math.max(ans, max);
//     }
//     return max;
// };

// 解题思路
/**
 * 思路：动态规划
 * 1. 首先拆解问题，找到子问题。
 * 2. dp[i]表示nums中以nums[i]结尾的最大子序和
 * 3. dp[i] = max(dp[i-1] + nums[i], nums[i])
 * 4. 那么我们就可以线性遍历数组(可以直接修改nums数组作为dp表，减少空间复杂度)，获取dp表，并在每次遍历中，获取dp表中当前最大值
 * 5. 遍历完成后，我们就可以拿到dp表中最大值。也就是我们想要结果
 * 时间复杂度 O(n),空间复杂度 O(1)
 */
/**
 * 思路：贪心法
 * 1. 从左向右迭代，一个一个数字迭代过去。
 * 2. sum += nums[i]，取 当前子串和之前结果 的最大值，作为目前找寻到的最大子序和。
 * 3. 如果sum < 0，则重新找寻子串
 */
```
----------------------------------------
## author: zer0fire
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  for(var i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] > 0 ? nums[i] + nums[i - 1] : nums[i]
  }
  return Math.max(...nums)
};

// 解题思路
// 借用了一个老哥的思路，其实就是如果前 n 项结果为正，将第 n 项作为前 n 项的和；如果前 n 项结果为负，第 n 项不变

```
----------------------------------------
