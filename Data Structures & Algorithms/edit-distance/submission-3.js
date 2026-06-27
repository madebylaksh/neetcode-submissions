class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1, word2) {
        let str1 = word1;
        let str2 = word2;
        if (str2.length > str1.length) {
            let temp = str1;
            str1 = str2;
            str2 = temp;
        }
        let cache = new Array(str2.length + 1).fill(0);
        for (let index in cache) cache[index] = Number(index);
        for (let i = 1; i <= str1.length; i++) {
            let diagonal = i - 1;
            let above = cache[1];
            cache[0] = i;
            for (let j = 1; j <= str2.length; j++) {
                let temp1 = cache[j];
                cache[j] =
                    str1[i - 1] == str2[j - 1]
                        ? diagonal
                        : 1 + Math.min(cache[j - 1], diagonal, above);
                diagonal = temp1;
                if (j != str2.length) above = cache[j + 1];
            }
        }
        return cache.at(-1);
    }
}
