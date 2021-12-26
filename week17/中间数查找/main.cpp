class Solution {
public:
    int search(vector<int>& nums, int target)
    {
        int low = 0,high = nums.size()-1;
        while (low <= high)
        {
         int mid = (high - low) / 2 + low;
        int num = nums[mid];
        if (num == target)
        {
            return mid;
        }
        else if (num > target)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
    return -1;
}
};
