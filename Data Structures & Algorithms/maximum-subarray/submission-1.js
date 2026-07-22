class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let sum = -Infinity;
        let tempSum = 0;
        for (let i in nums) {
            tempSum+= nums[i];
            sum = Math.max(sum,tempSum);
            if (tempSum < 0) {tempSum=0;}
        }
        return sum;
    }
}
