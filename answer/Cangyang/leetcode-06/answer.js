/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	// 解题思路：
	// 1、head 与 next互相交换
	
	if(head == null || head.next == null){
           return head;
    }
    var next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};

// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了87.31%的用户
// 内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户