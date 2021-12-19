class Solution {
public:
    int maxArea(vector<int>& height) {
        int l = 0, r = height.size() - 1;//双指针初始化
        int ans = 0;
        while (l < r) {
            int area = min(height[l], height[r]) * (r - l);
            ans = max(ans, area);
            if (height[l] <= height[r]) {
                ++l;
            }
            else {
                --r;    //向内移动较短边的位置
            }
        }
        return ans;
    }
};
