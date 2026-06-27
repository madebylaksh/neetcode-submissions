class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let arr = nums;
        if (arr.length == 0) return 0;
        let new_arr = [...new Set(arr)];
        new_arr.sort((a, b) => a - b);
        let cache = new Array(arr.length + 1).fill(0).map(() => new Array(arr.length + 1).fill(0));
        for (let i = 1; i <= arr.length; i++) {
            for (let j = 1; j <= arr.length; j++) {
                cache[i][j] =
                    arr[i - 1] == new_arr[j - 1]
                        ? 1 + cache[i - 1][j - 1]
                        : Math.max(cache[i - 1][j], cache[i][j - 1]);
            }
        }
        return cache[arr.length][arr.length];
    }
}
