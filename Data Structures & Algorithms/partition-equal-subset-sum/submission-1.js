class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let totalSum = nums.reduce((a, c) => a + c, 0);
        if (totalSum % 2 != 0) return false;
        let target = totalSum / 2;
        let cache = new Array(target + 1).fill(false);
        cache[0] = true;
        for (let i = 1; i <= nums.length; i++) {
            if (nums[i - 1] <= target) {
                for (let j = target; j >= nums[i - 1]; j--) {
                    cache[j] = cache[j] || cache[j - nums[i - 1]];
                }
            }
            if (cache.at(-1) == true) return true;
        }
        return false;
    }
}
