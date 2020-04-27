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
    ListNode* deleteDuplicates(ListNode* head) {
        if (head == NULL || head->next == NULL) return head;

        int deletedVal = 10000;

        ListNode * prev, *curr, *next;

        prev = curr = next = head;

        while(curr->next != NULL) {
            next = curr->next;
            if (curr->val == curr->next->val || curr->val == deletedVal) {
                deletedVal = curr->val;

                if (curr == head) {
                    head = curr->next;
                    prev = curr = next = head;
                    continue;
                }
                prev->next = next;
                curr = next;
                continue;
            }
            prev = curr;
            curr = curr->next;
        }

        if (curr->val == deletedVal) {
            if (curr == head) return NULL;
            prev->next = NULL;
        }

        return head;
    }
};