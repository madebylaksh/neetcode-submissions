class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let n = nums.length;
        let outerCount = 0;
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = i; j < n; j++) {
                sum += nums[j];
                if (sum === k) outerCount++;
            }
        }
        return outerCount;
    }
}
