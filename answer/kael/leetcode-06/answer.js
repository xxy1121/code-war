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
var swapPairs = function(head) {
    if (!head) return null
    if (!head.next) return head
    let preNode = null // 上一项
    let fNode = head // 交换的第一项
    let sNode = fNode.next // 交换的第二项
    let nextNode = sNode.next // 下一项
    let h = fNode // 存好第一项
    while(fNode&&sNode) { // 交换的两项都存在才执行
          preNode && (preNode.next = sNode) // preNode存在就调整指针

          sNode.next = fNode
          fNode.next = nextNode
          
          preNode = fNode
          fNode = preNode.next
          sNode = fNode.next
          nextNode = sNode.next
    }
    return h
};
// 解题思路
// 基本思路就是两两一组，串行交换。因为要交换的是相邻的两项，那么next指针有变化是应该是交换本身的两项加上前后两项。共四项。
// 所以，我们需要用四个变量把这四项分别存起来，再修改对应的next