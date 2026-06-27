class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let str1=word1;
        let str2 = word2;
         let cache = new Array(str1.length+1).fill(0).map(()=>new Array(str2.length+1).fill(0));
    for (let index in cache) cache[index][0] = Number(index);
    for (let index in cache[0]) cache[0][index] = Number(index);
    for (let i=1; i<=str1.length; i++) {
        for (let j=1; j<=str2.length; j++) {
            cache[i][j] = str1[i-1]==str2[j-1] ? cache[i-1][j-1] : 1 + Math.min(cache[i][j-1], cache[i-1][j], cache[i-1][j-1]);
        }
    }
    console.table(cache);
    return cache.at(-1).at(-1);
    }
}
