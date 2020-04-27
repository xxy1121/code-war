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
    let pre = null
    while(head) {
        let next = head.next
        head.next = pre
        pre = head
        head = next
    }
    return pre
};

// 解题思路
// 主要是对链接的理解和操作。链表的指针很重要，是遍历的主要依赖点，所以无论做删除还是插入等操作，都要特别注意指针的暂存
// 这里的反转操作，每次都把整个链表变成已反转的和未反转的部分，需要两个指针，一个指针指向已反转部分的最后一个节点，另一个指针指向未反转部分的第一个节点
// 每次反转，都将未反转的第一个节点指向的下一个节点暂存起来，然后将改节点指向已反转部分的最后一个节点，完成后两个指针同时向前移动。直到遍历结束。