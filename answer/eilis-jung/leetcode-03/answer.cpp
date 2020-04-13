class Solution {
public:
    string replaceSpace(string s) {
        string rep = "%20";
        int originalSize = s.size();
        int insertion = 0;
        for(int i=0; i<originalSize; i++) {
            if (s[i + insertion*2] == ' ') {
                s.replace(i + insertion*2, 1, rep);
                insertion++;
            }
        }

        return s;
    }
};