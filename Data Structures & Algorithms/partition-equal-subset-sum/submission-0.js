class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let totalSum = nums.reduce((a, c) => a + c, 0);
        if (totalSum % 2 != 0) return false;
        else {
            let cache = new Array(totalSum / 2 + 1).fill(0);
            let prev;
            for (let i = 1; i <= nums.length; i++) {
                prev = [...cache];
                for (let j = 1; j <= totalSum / 2; j++) {
                    if (nums[i - 1] <= totalSum / 2) {
                        cache[j] =
                            nums[i - 1] <= j
                                ? Math.max(prev[j - nums[i - 1]] + nums[i - 1], prev[j])
                                : prev[j];
                    }
                }
            }
            if (cache.at(-1) == totalSum / 2) return true;
            return false;
        }
    }
}
