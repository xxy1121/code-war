/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var sentinel = { val: null, next: head }
    var node = head
    var prev = sentinel
    while (node) {
        if (node.val === val) {
            node = node.next
            prev.next.next = null
            prev.next = node
        } else {
            node = node.next
            prev = prev.next
        }
    }
    return sentinel.next;
};
