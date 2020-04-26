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
var reverseList = function(head) {
    // 思路：
	// 1、遍历链表
	// 2、保存当前节点的前序节点
	// 3、当前节点的next指针指向前序节点即可
    var prev = null,node;
    while(head != null){
		node = new ListNode(head.val);
		node.next = prev;
		prev = node;
		head = head.next;
	}
	return prev;
};

// 执行用时 :72 ms, 在所有 JavaScript 提交中击败了55.50%的用户
// 内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了17.86%的用户
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
var reverseList = function(head) {

	// 如果链表只有一个节点或者为空链表，直接返回原来的链表
    if(!head || !head.next) return head;

    // 初始化三个标记指针，p、q是遍历链表过程中起标记作用的指针，
    // tail可以看做是空指针，也可以看做是空链表的头指针
    let p=head,q=head.next,tail=null;

    // 遍历链表
    while(q){
    	// 首先把原有链接打断，把p的下一个节点指向tail
        p.next=tail;
        // 把tail指向p
        tail=p;
        // 继续遍历，p、q都指向下一个节点
        p=q;
        q=q.next;
    }

    // 遍历结束后只剩下最后一个节点，单独处理
    p.next=tail;
    tail=p;

    return tail;

};

// 解题思路
/**
		看到题目我首先想到用头插法来实现反转链表。
		头插法，顾名思义，把节点从链表的头部插入。

		我们可以把tail看作是空链表的头指针，
	遍历原有链表，不断地把头结点摘掉，再采用头插法插入到tail这个空链表中，
	最后遍历结束，只剩下一个节点，我们对这个节点单独处理。
	最后返回反转的新链表tail。



**/
```
----------------------------------------
## author: chenzhihaolqm
```
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
var reverseList = function(head) {
    let reverse = function(pre, cur){
        if (!cur) return pre;
        let nextTemp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
        return reverse(pre, cur);
    }
    return reverse(null, head);
};
// 解题思路
/**
 * 递归：
 * 思路与迭代法类似，只是把迭代的过程使用递归去处理了
 */


var reverseList2 = function(head) {
    let pre = null;
    let cur = head;
    while(cur) {
        let nextTemp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
    }
    return pre;
};
// 解题思路
/**
 * 迭代法：
 * 链表反转：
    1. 遍历链表，判断当前遍历cur节点是否为null，则停止遍历
    2. 将当前节点cur的next节点，存储到临时变量nextTemp中，然后将当前cur节点next指向它的上一个节点pre
    3. 将cur赋值给pre节点，作为当前cur节点的上一个节点
    4. 节点cur赋值为临时变量nextTemp，指针向后移动一位。继续2步骤
    5. 当指针移动到最后一个节点，则为null，退出遍历，此时pre存储就是头节点。则整个链表
 */
```
----------------------------------------
