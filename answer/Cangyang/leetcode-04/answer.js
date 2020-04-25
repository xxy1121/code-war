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
var reverseList = function(head) {
    // 思路：
	// 1、遍历链表
	// 2、保存当前节点的前序节点
	// 3、当前节点的next指针指向前序节点即可
    var prev = null,node;
    while(head != null){
		node = new ListNode(head.val);
		node.next = prev;
		prev = node;
		head = head.next;
	}
	return prev;
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了55.50%的用户
// 内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了17.86%的用户