/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let nMax = nums[0]
    let endMax = nums[0]
    for(let i = 1 ; i < nums.length ; i++) {
        nMax = nums[i] > nMax + nums[i] ?nums[i] : nMax + nums[i]
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