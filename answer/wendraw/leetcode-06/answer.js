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
var swapPairs = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let p = head;
  while (p && p.next) {
    let first = p;
    let second = p.next;
    prev.next = second;
    first.next = second.next;
    second.next = first;
    prev = first;
    p = first.next;
  }
  return dummy.next;
};
// 解题思路
// 这个题目的核心就是遍历链表，找出前后两个指针，交换它们。
// 1. 定义一个带头节点的链表 dummy，并且将它指向 head，处理 head 的长度为 1 的情况。
// 2. 定义一个 prev 来指向「已交换」和「未交换」节点的边界。
// 3. 直接使用 head 进行遍历。得到 first 和 second 要交换的两个节点。
// 4. 交换 first 和 second 节点，注意处理顺序，防止丢失链表的尾部。
// 5. prev 和 head 往后迭代。
