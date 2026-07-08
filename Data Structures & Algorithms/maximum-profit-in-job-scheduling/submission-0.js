class Solution {
    /**
     * @param {number[]} startTime
     * @param {number[]} endTime
     * @param {number[]} profit
     * @return {number}
     */
    jobScheduling(startTime, endTime, profit) {
        const n = startTime.length;
        let dp = new Map();
        function helper(end) {
            if (dp.has(end)) return dp.get(end);
            let ans = 0;
            for (let j = 0; j < n; j++) {
                if (startTime[j] >= end) {
                    const take = helper(endTime[j]);
                    ans = Math.max(ans, take + profit[j]);
                }
            }
            dp.set(end, ans);
            return ans;
        }
        return helper(-1);
    }
}
