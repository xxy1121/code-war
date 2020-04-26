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
    if (!head || !head.next) {
        return head;
    }
    let cur = head
    let prev = null
    head = head.next
    while (cur && cur.next) {
        const third = cur.next.next
        cur.next.next = cur
        if (prev) {
            prev.next = cur.next
        }
        cur.next = third
        prev = cur
        cur = third
    }
    return head
};
