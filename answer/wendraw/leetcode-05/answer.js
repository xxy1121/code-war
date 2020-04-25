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
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  while (m > 1) {
    prev = prev.next;
    m--;
    n--;
  }
  let curr = prev.next;
  while (n > 1) {
    let nxt = curr.next;
    curr.next = nxt.next;
    nxt.next = prev.next;
    prev.next = nxt;
    n--;
  }
  return dummy.next;
};
// 解题思路
// 这一个题目的核心思想是，找到要反转链表的起始位置，然后遍历 m~n 之间的链表，一次将节点插入到起始位置。
// 1. 创建一个带头节点的链表，并且指向 head。这样就不用处理 head 为 null ，prev 为 null 的情况。还有一个 prev 指针指向链表，prev 的作用是 m～n 链表的前驱链表。
// 2. 循环 m - 1 次找到起始位置的前驱节点，用 prev 表示，并且将 n--，这样 n 就是要反转链表的长度。
// 3. start 指针表示反转链表的起始节点。
// 4. 循环 n 次遍历整个链表，将下一个节点用 nxt 保存，将 nxt 的后继链表保存到 start 上，然后将 nxt 插入到 pre 后。
// 5. 最后 dummy.next 就是反转后的链表。
