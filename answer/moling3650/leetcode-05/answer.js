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

/*
* haed: 1->2->3->4->5->null
* reverseBetween(head, 2, 4)
* 1. 先找到m
* haed: 1->2->3->4->5->null
*       p  c  n
*         con
* 2. 将[m, n]反转
* haed: 1->2<-3<-4  5->null
*       p con    c  n
* 3. 将con的next指向next
* haed: 1->2<-3<-4(cur)  
*       p   ＼->5->null
*               n
* 4. 如果m等于1，prev就是空指针，可以直接返回cur，否则prev的next指向cur，返回head
* haed: 1->4->3->2->5->null
*       p  c    con n
*/
