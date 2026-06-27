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
        const len1 = str1.length; // Tip1: storing the lengths in variables
        const len2 = str2.length;
        let cache = Array.from({ length: len2 + 1 }, (_, i) => i); // Tip2: Faster than the 2 statements (cache formation and then for in loop)
        for (let i = 1; i <= len1; i++) {
            let diagonal = i - 1;
            let above = cache[1];
            cache[0] = i;
            for (let j = 1; j <= len2; j++) {
                let temp1 = cache[j];
                cache[j] =
                    str1.charCodeAt(i - 1) === str2.charCodeAt(j - 1)
                        ? diagonal
                        : 1 + Math.min(cache[j - 1], diagonal, above); // Tip3: Comparing integers is faster than comparing strings. Tho negligible for single character comparisons.
                diagonal = temp1; // Tip4: === is faster than == because of coercion checks in the latter.
                if (j != len2) above = cache[j + 1];
            }
        }
        return cache.at(-1);
    }
}
