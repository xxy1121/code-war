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
    let pre = p = new ListNode(), start, first, count = n - m;
    pre.next = head

    for(let i = 0; i < m - 1; i++){
        pre = pre.next
    }
    start = pre // start保存区间开始的前一个节点
    first = pre.next // first保存区间开始的第一个节点
    cur = pre.next
    for(let i = 0; i <= count; i++) {
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    start.next = pre
    first.next = cur

    return p.next
};
// 解题思路
// 关键点是需要存储反转的前一个节点以及反转的第一个节点，反转操作参考上一题的思路，最后需保存反转后的最后一个节点以及该节点的下一个节点。
// 最后将反转的前一个节点指向反转结束后的最后一个节点，反转的第一个节点指向反转结束后最后一个节点的下一个节点即可
// 这里有个需要注意的点就是，给整个链接加上一个空的头结点，会更方便整个链表的遍历操作，因为有可能从第一个节点就开始反转