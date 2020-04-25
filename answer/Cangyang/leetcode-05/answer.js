/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	// 解题思路：
	// 1、将整个链表分成三部分：[1,m) [m,n],(n,length)
	// 2、[1,m)正常迭代，[m,n]依照第一个算法反转，(n,length)正常迭代，
	// 3、将三部分链表拼接完成
	if(m === n) return head;
	var i = 1,h=tail=prev=null,hit=hitPrev=null;
	while(head != null ){
		if(i < m){
			if(null == h){
				h = new ListNode(head.val);
				tail = h;
			}else{
				tail.next = new ListNode(head.val);
				tail = tail.next;
			}
		}
		if(i >= m && i <= n){
			if(i === m){
				prev = new ListNode(head.val);
				hit = prev;
			}else{
				hitPrev = new ListNode(head.val);
				hitPrev.next = hit;
				hit = hitPrev;
				if(i === n && null != tail){
					tail.next = hit;
				}
			}
		}
		if(i > n){
			prev.next = new ListNode(head.val);
			prev = prev.next;
		}
		head = head.next;
		i ++;
	}
	return null == h ? hit : h;
};

// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了89.35%的用户
// 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户