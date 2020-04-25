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
    if (!head) return null
    if (head.next || m === n) return head
    // 全链表反转
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
    
    let cur = head
    let count = 1 // 记数器
    let mPreNode = null // 记录m的上一个node
    let nNextNode = null // 记录n的下一个node
    let mNode = null
    let nNode = null
    // 先得到 mNode 和 mPreNode
    while(count < m) {
        mPreNode = cur
        mNode = cur.next
        cur = cur.next
        count ++ 
    }
    // 再得到 nNode 和 nNextNode
    while(count <= n) {
        nNode = cur
        nNextNode = cur.next
        cur = cur.next
        count ++ 
        // 把nNode设为链表最后一项
        nNode.next = null
    }
    // 把m的上一个node的next指针指向 m 到 n 链表反转之后的第一项
    mPreNode.next = reverseList(mNode)
    // 因为m 到 n的区间被反转了，那m就应该成为nNextNode的前一项
    mNode.next = nNextNode
    return head
};
// 解题思路
// 这题跟第4题思路一样，只是要在m之前不操作，
// 到m-1的时候，把listNode[m-1].next指向listNode[n],
// 然后最后把listNode[m].next指向listNode[n+1]