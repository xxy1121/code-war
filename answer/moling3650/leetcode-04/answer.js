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
    if (!head) return head;
    var nextNode = head.next;
    head.next = null;
    var currNode = head;
    while (nextNode) {
        currNode = nextNode
        nextNode = nextNode.next
        currNode.next = head
        head = currNode
    }
    return currNode
};
