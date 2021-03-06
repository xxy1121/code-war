/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseBetween(ListNode* head, int m, int n) {
        ListNode *prev, *curr, *next;
        curr = head;
        prev = NULL;
        int i=0;
        for (; i<m-1; i++) {
            prev = curr;
            curr = curr->next;
        }
        if (curr->next == NULL) {
            // m == list length
            return head;
        }
        ListNode *headMark = prev;
        prev = curr;
        curr = curr->next;
        next = curr->next;
        for (; i<n-1; i++) {
            curr->next = prev;
            prev = curr;
            curr = next;
            if(curr != NULL)
                next = curr->next;
            else
                break;
        }
        if (headMark == NULL) {
            // only when m == 1
            head->next = curr;
            head = prev;
            return head;
        } 
        if (curr == NULL && headMark != NULL) {
            // if n == list length
            headMark->next->next = NULL;
            headMark->next = prev;
            return head;
        }

        ListNode *tailMark = prev;
        headMark->next->next = curr;
        headMark->next = tailMark;
        return head;
    }
};