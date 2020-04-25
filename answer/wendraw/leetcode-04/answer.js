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
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  return prev;
};

// 解题思路
// 这个题目的核心思想就是将当前的指针的后继节点指向前驱节点。
// 1. 定义一个 prev 保存前驱节点，一个 curr 保存当前的节点。
// 2. 遍历链表，同时将 curr.next 赋值给 prev，更新 prev 为 curr，curr 赋值 curr.next 往下迭代链表。
