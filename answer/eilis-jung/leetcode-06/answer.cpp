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
    ListNode* swapPairs(ListNode* head) {
        if (head == NULL || head->next == NULL) return head;

        bool flag = false;
        bool flagHead = true;
        ListNode * prev, *curr, *next;
        prev = curr = next = head;

        while (curr->next != NULL) {
            if (flag == false) {
                curr = curr -> next;
                next = curr -> next;
                if (flagHead == false) {
                    curr -> next = prev->next;
                    prev->next = curr;
                    curr->next->next = next;
                    prev = curr;
                    curr = curr->next;
                    flag = true;
                    continue;
                }
                curr->next = prev;
                prev->next = next;
                prev = curr;
                curr = curr->next;
                head = prev;
                flagHead = false;
                flag = true;
                continue;
            }
            prev = curr;
            curr = curr -> next;
            next = curr -> next;
            flag = false;
        }
        return head;
    }
};