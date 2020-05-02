/**
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * 删除链表中等于给定值 val 的所有节点。
 * 分两种情况：
 * 1.如果是第一个结点，就让head指向它的next结点
 * 2.如果非第一个结点，就让它的前驱结点指向他的next结点
 * 所以写代码时要将两种情况分开处理
 * 方法可以用循环、递归
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const removeElements = function (head, val) {
    if (head === null) return head;
    // 处理第一个结点等于val的情况，有可能不止一个，所以用while loop
    while (head.val === val) {
        head = head.next;
        if (head === null) return head;
    }
    let previous = head; // 需要保留前驱结点来删除目标结点
    let target = previous.next;
    if (target === null) return head;
    while (target !== null) {
        if (target.val === val) {
            previous.next = target.next;
            target = previous.next;
        } else {
            previous = target;
            target = previous.next;
        }
    }
    return head;
}

/**
 * 给链头添加哨兵来简化删除操作，就不需要考虑第一个结点等于val时的情况
 */
const removeElements = function (head, val) {
    if (head === null) return head;
    const sentinel = new ListNode();
    sentinel.next = head;
    head = sentinel;
    let previous = head;
    let target = previous.next;
    while (target !== null) {
        if (target.val === val) {
            previous.next = target.next;
            target = previous.next;
        } else {
            previous = target;
            target = previous.next;
        }
    }
    head = head.next;
    return head;
}
/**
 * 可以先从head.next开始遍历，最后再考虑head是否等于val
 */
const removeElements = function (head, val) {
    if (head === null) return head;
    let previous = head;
    let target = previous.next;
    while (target !== null) {
        if (target.val === val) {
            previous.next = target.next;
            target = previous.next;
        } else {
            previous = target;
            target = previous.next;
        }
    }
    if (head.val === val) {
        head = head.next;
    }
    return head;
}

/**
 * 递归的思想：每一层递归依次处理每一个结点
 */
const removeElements = function (node, val) {
    if (node === null) return node;
    node.next = removeElements(node.next, val);
    if (node.val === val) {
        return node.next;
    } else {
        return node;
    }
}

/**
 * 关于哨兵节点：
 *  哨兵节点广泛应用于树和链表中，如伪头、伪尾、标记等，它们是纯功能的，通常不保存任何数据，
 *  其主要目的是使链表标准化，如使链表永不为空、永不无头、简化插入和删除的代码。
 */