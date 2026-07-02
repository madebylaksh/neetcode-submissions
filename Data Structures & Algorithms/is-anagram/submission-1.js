class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        let freqArray = Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            freqArray[s.charCodeAt(i) - 97]++;
            freqArray[t.charCodeAt(i) - 97]--;
        }
        return freqArray.every((e) => e === 0);
    }
}
