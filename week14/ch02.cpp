class Solution {
public:
    int reverse(int x) {
        int ans = 0;
        while (x != 0) {
            int pop = x % 10;
            if (ans > 214748364|| (ans == 214748364 && pop > 7)) 
                return 0;
            if (ans < -214748364 || (ans ==-214748364 && pop < -8)) 
                return 0;
            ans = ans * 10 + pop;
            x /= 10;
        }
        return ans;
    }
};class Solution {
public:
    int reverse(int x) {
        int ans = 0;
        while (x != 0) {
            int pop = x % 10;
            if (ans > 214748364|| (ans == 214748364 && pop > 7)) 
                return 0;
            if (ans < -214748364 || (ans ==-214748364 && pop < -8)) 
                return 0;
            ans = ans * 10 + pop;
            x /= 10;
        }
        return ans;
    }
};
