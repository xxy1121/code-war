## author: Cangyang
```
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
	// 解题思路：
	// 1、head 与 next互相交换
	
	if(head == null || head.next == null){
           return head;
    }
    var next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};

// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了87.31%的用户
// 内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
----------------------------------------
## author: Lilian97
```
*
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

	// 创建一个新的节点，并把它指向链表head
	let pre = new ListNode(0);
    pre.next = head;
    // 新建一个变量temp，保存头结点的指针
    let temp = pre;

    // 未遍历到的结点至少有两个时遍历链表
    while(temp.next != null && temp.next.next != null) {
    	// 新建两个指针start、end，分别指向两个相邻节点，
    	// start为第一个节点，end为第二个节点

        let start = temp.next;
        let end = temp.next.next;

        // 交换节点，改变指针指向
        // 首先，把需要交换的两个节点（start、end）前的链表指向第二个节点end
        temp.next = end;
        // 其次，把第一个节点start指向第二个节点end的后续链表或者说end后的链表节点，来保持链表的连接。
        start.next = end.next;
        // 改变end的指针，使其指向start
        end.next = start;
        // 两个节点已交换，让temp指向start，继续遍历链表
        temp = start;
    }
    // pre是新建的空值头结点，它的下一个节点才是原有链表的值。
    return pre.next;

};
// 解题思路
/*

		两两交换节点，需要用到4个指针：
	指向相邻节点的两个指针、保存头节点的指针、以及交换过程中的临时指针。
		首先，新建一个节点并指向链表head，新建一个节点来保存链表的起始位置，即头结点；
		遍历链表，新建两个指针分别指向相邻节点，交换相邻节点，详见代码注释。
		需要注意的是，交换节点时，必须要保证两个节点前后的链表不能断开。
		最后返回链表的头结点即可。

*/
```
----------------------------------------
## author: kael
```
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
```
----------------------------------------
## author: wendraw
```
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

```
----------------------------------------
## author: wxx2258
```
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
    if (head === null || head.next === null) return head;
    let preNode = head;
    let nextNode = head.next;

    preNode.next = swapPairs(nextNode.next);
    nextNode.next = preNode;
    return nextNode;
};
// 解题思路
/**
 * 首先先把最小问题解决了，相邻节点两两交换。
    * a->b->c
    * a->c
    * b->a
    * b->a->c
 * 递归：找到如何分解问题。
    * 可以这么理解，在a->c中，其实c其中其实也是函数swapPairs的一个解
 */

var swapPairs2 = function(head) {
    if(head === null || head.next === null) return head;
    let dummyHead = p = new ListNode();
    let preNode, nextNode;

    dummyHead.next = head;
    while((preNode = p.next) && (nextNode = p.next.next)) {
        preNode.next = nextNode.next;
        nextNode.next = preNode;
        p.next = nextNode;
        p = preNode;
    }
    return dummyHead.next;
};
// 解题思路
/**
 * 迭代大法好，通过指针，遍历迭代。
 * 首先先把最小问题解决了，相邻节点两两交换。
    * a->b->c
    * a->c
    * b->a
    * b->a->c
 * 思考迭代指针如何设计：
    * 指针p，每次判断p.next和p.next.next是否为空，为空则已经到链表尾部
 */

```
----------------------------------------
