class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        let newArr = [];
        let max1 = Math.max(...nums);
        let min1 = Math.min(...nums);
        for (let i in nums) {
            if (i != nums.indexOf(max1) && i != nums.indexOf(min1)) {
                newArr.push(nums[i]);
            }
        }
        return (max1 * Math.max(...newArr) - min1 * Math.min(...newArr));
    }
}
