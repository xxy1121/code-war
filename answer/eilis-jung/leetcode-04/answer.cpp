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
    ListNode* reverseList(ListNode* head) {
        if (head == NULL) return head;

        ListNode * prev, * curr, *next;
        prev = head;
        curr = prev->next;
        prev->next = NULL;
        while (curr != NULL) {
            next = curr -> next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
};