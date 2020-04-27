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
    if(head == null || head.next == null) {
        return head
    }
    let node = new ListNode()
    node.next = head
    let p = node
    while(p.next && p.next.next) {
        let cur = p.next
        let next = cur.next
        let tmp = next.next
        p.next = next
        cur.next = tmp
        next.next = cur
        p = cur
    }
    return node.next;
};

var swapPairs2 = function(head) {
    if(head == null || head.next == null) {
        return head
    }
    let cur = head;
    let next = head.next;
    cur.next = swapPairs(next.next)
    next.next = cur
    return next;
}; // 递归的解法留存
// 解题思路
// 这题主要是存四个节点，前一个，要交换的两个节点，以及下一个节点。过程并不难，容易错的地方在于交换结束后进行下次操作前，当前的指针应该指向哪个节点
// 由于两个节点进行过交换，一定记得把指针指向交换后的第二个节点，它才是当前指向下个节点的节点啊

// 对于递归的解法，是参考的算法学习网站的原文，能看懂，但写不出来。希望再多多练习多多摸索，掌握递归的做法。