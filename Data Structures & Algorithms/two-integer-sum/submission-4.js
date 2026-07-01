class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let p = 0;
        let q = nums.length-1;
        // let temp = [...nums];
        // nums.sort((a,b) => a-b);
        let temp = Array.from (nums, (v,i)=>[v,i]);
        temp.sort((a,b)=>a[0]-b[0]);
        while (p<q) {
            if (temp[p][0] + temp[q][0] > target) q--;
            else if (temp[p][0] + temp[q][0] < target) p++;
            else {
                if (temp[p][1] > temp[q][1]) return [temp[q][1], temp[p][1]];
                return [temp[p][1], temp[q][1]];
            }
        }
    }
}
