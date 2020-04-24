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
