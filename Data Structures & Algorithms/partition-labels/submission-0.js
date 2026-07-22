class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let startIdx = 0;
        let lastIdx = -1; 
        let visitedCharacters = new Set;
        let ans = [];
        for (let i in S) {
            if (!visitedCharacters.has(S[i]))  {
                lastIdx = Math.max(S.lastIndexOf(S[i]), lastIdx);
                visitedCharacters.add(S[i]);
            }
            if (i == lastIdx) {
                ans.push(lastIdx-startIdx+1);
                startIdx = lastIdx+1;
            }
        } 
        return ans;
    }
}
