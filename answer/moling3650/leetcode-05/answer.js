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
var reverseBetween = function (head, m, n) {
    if (!head || !head.next) return head;

    let prev = null;
    let cur = head;
    for (let i = 1; i < m; i++) {
        prev = cur;
        cur = cur.next;
    }
    let { next } = cur;
    const con = cur;
    for (let i = m; i < n; i++) {
        const node = cur;
        cur = next;
        next = cur.next;
        cur.next = node;
    }
    con.next = next;
    if (m === 1) {
        return cur;
    }
    prev.next = cur;
    return head;
};
