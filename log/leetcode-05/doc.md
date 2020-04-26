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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	// 解题思路：
	// 1、将整个链表分成三部分：[1,m) [m,n],(n,length)
	// 2、[1,m)正常迭代，[m,n]依照第一个算法反转，(n,length)正常迭代，
	// 3、将三部分链表拼接完成
	if(m === n) return head;
	var i = 1,h=tail=prev=null,hit=hitPrev=null;
	while(head != null ){
		if(i < m){
			if(null == h){
				h = new ListNode(head.val);
				tail = h;
			}else{
				tail.next = new ListNode(head.val);
				tail = tail.next;
			}
		}
		if(i >= m && i <= n){
			if(i === m){
				prev = new ListNode(head.val);
				hit = prev;
			}else{
				hitPrev = new ListNode(head.val);
				hitPrev.next = hit;
				hit = hitPrev;
				if(i === n && null != tail){
					tail.next = hit;
				}
			}
		}
		if(i > n){
			prev.next = new ListNode(head.val);
			prev = prev.next;
		}
		head = head.next;
		i ++;
	}
	return null == h ? hit : h;
};

// 执行用时 :60 ms, 在所有 JavaScript 提交中击败了89.35%的用户
// 内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
----------------------------------------
## author: HouNaoshao
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  // 如果链表只有一个数据，直接返回该链表
  // 如果 m = n，说明链表没有要反转的部分，故直接返回该链表
  if (!head.next || m === n) return head

  let headCache = head // 存储链表的头指针
  let headCacheTail = null // 存储链表在 m 位之前一位的指针
  let middleCacheArr = [] // 存储需要反转的数据
  let tailCache = null // 存储链表在 n 位之后一位的指针
  let count = 1 // 计数器
  let isStartBorder = m === 1 // m 是否是开始边界，当 m 为 1 时，它是整个链表开始边界
	let isEndBorder = true // n 是否是结束边界，当 n 等于该链表长度的结尾的时候是 true
	let headNextCache = null // 用来在循环中临时存储 head.next 指向的对象

  while(head) {
		// 临时存储 head.next 指向的对象
		headNextCache = head.next

    if (count < m) {
      /***** 需要反转之前的数据 *****/

      // 把当前位置记录到 headCacheTail 中
      headCacheTail = head
    } else if (count > n) {
      /***** 需要反转之后的数据 *****/

      // 因为已经走到需要反转之后的位置了，说明 n 不是边界
      isEndBorder = false
      // 把 head 的引用赋值给 tailCache
      tailCache = head

      // 只需要反转之后的链表的第一个指针，其它不需要，故结束循环
      break
    } else {
      /***** 需要反转的数据 *****/

      // 如果之前 headCacheTail 有了记录，把 headCacheTail 的 next 设为 null，为了节省内存
      headCacheTail && (headCacheTail.next = null)
      // 把该条数据添加到数组的头部，这样可以再推入的同时就自动实现了反转，因为循环的时候是从头部开始读取的
      // 把 head 的副本推入，next 设置为 null 是为了节省内存
      head.next = null
      middleCacheArr.unshift(head)
    }

    // 循环走起，继续下一项
    head = headNextCache
    count++
  }

  const len = middleCacheArr.length
  // 把需要反转的数据连接起来
  for (let i = 0; i < len - 1; i++) {
    middleCacheArr[i].next = middleCacheArr[i+1]
  }

  // 如果有开始边界，把数组的第一个赋值给 headCache
  // 否则说明需要反转的数据不是从链表的第一个开始的，
  // 此时需要把 headCacheTail 和数组的第一个数据连接起来，
  if (isStartBorder)
    headCache = middleCacheArr[0]
  else
    headCacheTail.next = middleCacheArr[0]

  // 如果 n 不是边界，说明链表在 n 位之后还有后续链表，
  // 此时需要将数组的最后一个数据跟 tailCache 连接起来
  !isEndBorder && (middleCacheArr[len-1].next = tailCache)

  return headCache
};

/** 解题思路：把整个链表分为三部分（区间）：1、[1, m)，2、[m, n]，3、(n, end]
 * 需要变量：
 *   let headCache = head // 用来存储整个链表的头指针（它是我们最后需要返回的整个链表的头指针）
 *   let headCacheTail = null // 存储链表在 m 位之前一位的指针，也就是第一部分最后一位的指针
 *   let middleCacheArr = [] // 存储需要反转的数据，也就是第二部分的数据，在推入前把每一条数据的 next 设置为 null，
 *                              因为此时在数组中并不需要他们之间的连接关系，同时也是为了节省内存
 *   let tailCache = null // 存储链表在 n 位之后一位的指针，就是第三部分的第一条数据的指针
 *   let count = 1 // 计数器，用来在循环中和 m、n 进行比较
 *   let isStartBorder = m === 1 // m 是否是开始边界（用来处理边界问题），当 m 为 1 时，它是整个链表开始边界
 *   let isEndBorder = true // n 是否是边界（用来处理边界问题），当参数 n 和整个链表的长度一样时，n 就被视为结束边界
 *   let headNextCache = null // 用来在循环中临时存储 head.next 指向的对象
 *
 * 整体流程：
 * 1、首先记录整个链表的头指针，headCache = head
 * 2、在整个循环中，
 *   2.1、在不需要反转的前一部分，用 headCacheTail 来记录链表最后一项的指针
 *   2.2、在需要反转的部分，把每一项的副本都推入到 middleCacheArr 数组的头部中。
 *        之所以推入副本，是为了把每一项的 next 设置成 null，从而节省内存。
 *        然后推入数组的头部，是因为这样就会形成一个天然的反转顺序，跟原来数据的顺序正好相反，
 *        因为在循环的时候是从数组头部开始循环的。
 *   2.3、在不需要反转的后一部分，用 tailCache 来记录链表第一项的指针。
 *        剩下的就不需要继续跑循环了，提早 beak，因为剩下的都是不需要反转的部分
 * 3、循环结束之后，
 *   3.1、把 middleCacheArr 数组中的每一项依次连接起来
 *   3.2、如果有 isStartBorder 开始边界，那么 middleCacheArr[0] 就是整个链表的第一项，此时需要把它赋值给 headCache；
 *        如果没有，就把 headCacheTail 的 next 指针指向 middleCacheArr[0]。
 *        至此，反转部分及反转之前的部分就连接起来了。
 *   3.2、如果有 isEndBorder 结束边界，那么 middleCacheArr[len-1] 就是整个链表的最后一项，可以正常结束了。
 *        如果没有，就把 middleCacheArr[len-1] 的 next 指针指向 tailCache。
 *        至此，反转部分及反转之后的部分就连接起来了。所以，整个链表已连接完毕！
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if (m === n) {
        return head;
    }
    let preNode = null; // 反转区间的前一个节点
    let preSelect; // 反转区间的第一个节点
    let lastSelect; // 反转区间的最后一个节点
    let lastNode; // 反转区间的后一个节点

    for (let i = 1, currentNode = head; currentNode; i++) {
        if (i === m - 1) {
            preNode = currentNode;
        }
        if (i === m) {
            preSelect = currentNode;
        }
        if (i === n) {
            lastSelect = currentNode;
            lastNode = currentNode.next;
        }
        currentNode = currentNode.next;
    }
    // console.log("reverseBetween -> preNode", preNode)
    // console.log("reverseBetween -> preSelect", preSelect)
    // console.log("reverseBetween -> lastSelect", lastSelect)
    // console.log("reverseBetween -> lastNode", lastNode)
    
    let pre = null;
    let cur = preSelect;
    for(let i = 0; i <= n - m; i++) {
        // 对反转区间进行一次反转操作
        let nextTemp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
        // console.log("reverseBetween -> cur", pre)
    }
    preSelect.next = lastNode; // 经过反转preSelect已经是反转区间的最后一个节点，将next与lastNode连接
    if (preNode) {
        preNode.next = pre; // preNode与 反转后的区间进行连接
    } else {
        head = pre;
    }

    return head;
};
// 解题思路
/**
 * 反转链表的升级版，只不过是多了两个步骤
 * 一个是找出需要反转的区间，并进行反转；存储反转区间前后的节点，最后将反转区间和前后节点连接起来
 */
```
----------------------------------------
