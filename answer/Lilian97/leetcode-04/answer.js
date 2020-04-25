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
var reverseList = function(head) {

	// 如果链表只有一个节点或者为空链表，直接返回原来的链表
    if(!head || !head.next) return head;

    // 初始化三个标记指针，p、q是遍历链表过程中起标记作用的指针，
    // tail可以看做是空指针，也可以看做是空链表的头指针
    let p=head,q=head.next,tail=null;

    // 遍历链表
    while(q){
    	// 首先把原有链接打断，把p的下一个节点指向tail
        p.next=tail;
        // 把tail指向p
        tail=p;
        // 继续遍历，p、q都指向下一个节点
        p=q;
        q=q.next;
    }

    // 遍历结束后只剩下最后一个节点，单独处理
    p.next=tail;
    tail=p;

    return tail;

};

// 解题思路
/**
		看到题目我首先想到用头插法来实现反转链表。
		头插法，顾名思义，把节点从链表的头部插入。

		我们可以把tail看作是空链表的头指针，
	遍历原有链表，不断地把头结点摘掉，再采用头插法插入到tail这个空链表中，
	最后遍历结束，只剩下一个节点，我们对这个节点单独处理。
	最后返回反转的新链表tail。



**/