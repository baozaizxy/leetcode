class Solution {
public:
    bool isValid(string s) {
   int n = s.size();
        if (n % 2 == 1) {
            return false;
        }//首先要求成对出现，因为只有符号
        unordered_map<char, char> pairs = {
            {')', '('},
            {']', '['},
            {'}', '{'}
        };
        stack<char> stk;
        //左括号先掠过，右括号则与最右括号进行匹配
        for (char ch: s) {
            if (pairs.count(ch)) {
                if (stk.empty() || stk.top() != pairs[ch]) {
                    return false;
                }
                stk.pop();
            }
            else {
                stk.push(ch);
            }
        }
        return stk.empty();


    }
};
