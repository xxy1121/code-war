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
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;

    var sentinel = { val: null, next: head }
    var prev = sentinel
    var node = head
    while (node && node.next) {
        if (node.val === node.next.val) {
            while (node.next && node.val === node.next.val) {
                var next = node.next.next
                node.next.next = null
                node.next = next
            }
            node = node.next
            prev.next.next = null
            prev.next = node
        } else {
            prev = prev.next
            node = node.next
        }
    }

    return sentinel.next
};
