*
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

	// 创建一个新的节点，并把它指向链表head
	let pre = new ListNode(0);
    pre.next = head;
    // 新建一个变量temp，保存头结点的指针
    let temp = pre;

    // 未遍历到的结点至少有两个时遍历链表
    while(temp.next != null && temp.next.next != null) {
    	// 新建两个指针start、end，分别指向两个相邻节点，
    	// start为第一个节点，end为第二个节点

        let start = temp.next;
        let end = temp.next.next;

        // 交换节点，改变指针指向
        // 首先，把需要交换的两个节点（start、end）前的链表指向第二个节点end
        temp.next = end;
        // 其次，把第一个节点start指向第二个节点end的后续链表或者说end后的链表节点，来保持链表的连接。
        start.next = end.next;
        // 改变end的指针，使其指向start
        end.next = start;
        // 两个节点已交换，让temp指向start，继续遍历链表
        temp = start;
    }
    // pre是新建的空值头结点，它的下一个节点才是原有链表的值。
    return pre.next;

};
// 解题思路
/*

		两两交换节点，需要用到4个指针：
	指向相邻节点的两个指针、保存头节点的指针、以及交换过程中的临时指针。
		首先，新建一个节点并指向链表head，新建一个节点来保存链表的起始位置，即头结点；
		遍历链表，新建两个指针分别指向相邻节点，交换相邻节点，详见代码注释。
		需要注意的是，交换节点时，必须要保证两个节点前后的链表不能断开。
		最后返回链表的头结点即可。

*/