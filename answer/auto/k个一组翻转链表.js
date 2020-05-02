/**
 * 通过k次循环确定子链表，并记录子链表的前一个结点和后一个结点，这是为了将翻转后的子链表重新接回父链表用的
 */

const reverseKGroup = function (head, k) {
    const sentinel = new ListNode();
    sentinel.next = head;
    let pre = sentinel; // pre记录子链表的前一个结点
    let cur = head;
    while (cur !== null) {
        for (let i = 1; i < k; i++) {
            cur = cur.next
            if (cur === null) return sentinel.next
        }
        const start = pre.next; // 子链表的头可通过pre结点确定
        const next = cur.next; // 记录子链表的后一个结点
        cur.next = null; // 相当于把子链表拿出来
        pre.next = reverse(start);
        pre = start; // 翻转以后start就是链表的尾
        cur = next;
        pre.next = cur
    }
    return sentinel.next;
}



/**
 * 这个函数实现翻转链表，并返回翻转链表后的头
 */

function reverse (head) {
    let previous = null; // 记录前一个元素，给下一个元素指向它
    let current = head;
    while (current !== null) {
        const next = current.next; // 记录下一个元素给下一次循环
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}