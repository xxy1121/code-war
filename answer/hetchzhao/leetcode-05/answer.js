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
  var index = 0;
  var tempNode = null;
  var link = head;
  var preNode = null;
  var posNode = null;

  while (head) {
    index++;

    var curNode = head;
    head = head.next;

    if (index >= m && index <= n) {
      curNode.next = tempNode;
      tempNode = curNode;

      if (index === m) {
        posNode = tempNode;
      }
    } else if (index === m - 1) {
      preNode = curNode;
    } else if (index === n + 1 && posNode) {
      posNode.next = curNode;
    }
  }

  if (preNode) {
    preNode.next = tempNode;

    return link;
  } else {
    return tempNode;
  }
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
