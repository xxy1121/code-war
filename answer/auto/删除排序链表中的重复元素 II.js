/**
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * 1.使用三个指针，分别记录目标结点target、它的前驱结点previous和后继结点next
 *      1.如果目标结点和它的后继结点的值相等，那么记录当前next，并继续查找下一个结点，
 *          如果下一个结点的值也相等，那么next指向下一个结点，如此循环直到结点的值不相等，
 *          最后让前驱结点指向最后值相等的结点的下一个结点，这样就能完整删除这段重复出现的结点了
 *      2.如果目标结点和它的后继结点的值不相等，就让previous、target指针指向下一个
 * 2.更加简洁的方式，使用两个指针，快慢指针，快指针负责在前面探寻重复的结点，慢指针负责删除重复结点和拼接链表
 *      1.如果fast指针结点和它的next结点的值相等，fast指向next
 *      2.如果fast指针没有发生移动，即fast = slow.next，那么说明该结点是不重复的
 *      3.如果fast指针的next为null，也需要判断一下fast当前遍历的结点是否是重复的
 * 两种方法的时间复杂度都为O(n)，因为每个结点仅被访问了一次
 */

const deleteDuplicates = function (head) {
    if (head === null) return head;
    const sentinel = new ListNode();
    sentinel.next = head;
    let previous = sentinel;
    let target = previous.next;
    while (target !== null) {
        if (target.next !== null && target.val === target.next.val) {
            let next = target.next;
            while (next.next !== null && next.next.val === target.val) {
                next = next.next;
            }
            previous.next = next.next;
            target = previous.next;
        } else {
            previous = target;
            target = target.next;
        }
    }
    return sentinel.next
}

const deleteDuplicates = function (head) {
    if (head === null) return head;
    const sentinel = new ListNode();
    sentinel.next = head;
    let slow = sentinel;
    let fast =  sentinel.next;
    while (fast !== null) {
        if (fast.next !== null) {
            if (fast.next.val === fast.val) {
                fast = fast.next;
            } else {
                if (slow.next === fast) {
                    slow = fast;
                    fast = fast.next;
                } else {
                    slow.next = fast.next;
                    fast = fast.next;
                }
            }
        } else {
            if (slow.next === fast) {
                slow = fast;
                fast = fast.next;
            } else {
                slow.next = fast.next;
                fast = fast.next;
            }
        }
    }
    return sentinel.next;
}