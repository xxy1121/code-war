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

	// 1、初始化变量，定义一个头节点指向链表，pre记录m位置前的节点，temp_m记录m位置的节点，temp是移动节点的临时变量
	let pHead = new ListNode(0);
    pHead.next = head;
    let pre = pHead, temp_m = pre.next, temp=null, i=1;

    //2,遍历寻找,将m位置后的结点一个个移动到m位置
    while(i < n)
    {
        if(i < m)
        {
            //3,定位 m 的位置
            pre = pre.next;
            temp_m = pre.next;
        }
        else
        {
            //4,将 temp_m 后的结点移动到 pre 后
            if(temp_m!=null  && temp_m.next!=null)
            {
                temp = temp_m.next;
                temp_m.next = temp.next;
                temp.next = pre.next;
                pre.next = temp;
            }
        }
        i++;
    }

    return pHead.next;

};
// 解题思路
/*		
		看到题目我首先想到，先找出m、n两个位置的指针，然后从两头交换，但是题目要求是：
	反转从位置 m 到 n 的链表，并用一趟扫描完成。这意味着这种思路走不通。
		一趟扫描完成反转，那我们可以边扫描边移动节点。首先，遍历链表，找到m位置的节点，
	记录m节点以及m之前的节点pre，继续遍历链表，在找到n位置之前，每遇到一个节点，
	我们都把这个节点移动到m位置，直到找到n位置节点并把它移动到m位置。最后返回移动后的链表即可。




*/
