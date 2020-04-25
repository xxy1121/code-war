/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} current
   @param {ListNode} prev
 * @return {ListNode}
 */
var reverseList = function(current, prev) {
   if(!current) {
     return current;
   }
   let nextNode = current.next;
   current.next = prev || null;
   if(!nextNode) {
      return current;
   }
   return reverseList(nextNode, current);
};


// 解题思路
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
// 想到的是递归生成链表，递归反转链表