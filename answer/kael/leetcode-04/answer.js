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
    let cur = head
    while(cur) {
        let node = cur.next
        cur.next = pre
        pre = cur
        cur = node
    }
    return pre
};

// 解题思路
// 这题应该就是修改node.next的指向上一个node就行了。
// 这里只要注意在修改指针之前用一个变量存起来就可以了。
// 本来想着是把链表的node一个个的push到一个数组里，然后反转这个数组，然后再一一修改数组的每一项的next指针，这样太蠢了。
// 最后返回反转链表的第一项就行了，cur最终一定是原始链表的最后一项的next,所以它一定是null或undefined。
// 这样的话，pre最后一定反转之后的第一项。