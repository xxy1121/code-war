class Solution {
public:
    ListNode* removeElements(ListNode* head, int val) {
        ListNode * curr, * prev, * next;
        while (head != NULL && head->val == val) {
            head = head->next;
        }
        if (head == NULL || head->next == NULL) return head;
        prev = curr = head;
        while (curr != NULL) {
            next = curr->next;
            if (curr->val == val) {
                prev->next = next;
            } else {
                prev = curr;
            }
            curr = next;
        }

        return head;
    }
};