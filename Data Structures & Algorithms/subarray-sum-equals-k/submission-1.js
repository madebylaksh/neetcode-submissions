class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map();
        map.set(0, 1);
        let count = 0;
        let cs = 0;
        for (let i = 0; i < nums.length; i++) {
            cs += nums[i];
            count += map.get(cs - k) || 0;
            map.set(cs, (map.get(cs) || 0) + 1);
        }
        return count;
    }
}
