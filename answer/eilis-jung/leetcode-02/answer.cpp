class Solution {
public:
    int lengthOfLastWord(string s) {
        int res = 0;
        bool flag = false;
        string::reverse_iterator it;
        for (it = s.rbegin(); it != s.rend(); it++) {
            if (*it == ' ' && flag == false) {
                continue;
            } else if (*it != ' ') {
                flag = true;
                res ++;
            } else {
                break;
            }
        }
         
        return res;
    }
};