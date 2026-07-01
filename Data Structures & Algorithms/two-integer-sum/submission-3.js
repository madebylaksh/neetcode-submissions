class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let p = 0;
        let q = nums.length-1;
        let temp = [...nums];
        nums.sort((a,b) => a-b);
        while (p<q) {
            if (nums[p] + nums[q] > target) {q--;}
            else if (nums[p] + nums[q] < target) {p++;}
            else {
                let a = temp.indexOf(nums[p]);
                let b = temp.indexOf(nums[q]);
                if (a===b) {
                    b = temp.indexOf(nums[q], a+1);
                }
                if (a>b) {temp = a; a=b; b=temp;}
                return [a,b];
            }
        }
    }
}
