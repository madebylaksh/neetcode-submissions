class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;
        let map = new Map();
        if (s.length > t.length) {
            let temp = s;
            s = t;
            t = temp;
        }
        for (let ch of s) {
            map.set(ch, (map.get(ch) || 0) + 1);
        }
        for (let ch of t) {
            let v = map.get(ch) - 1;
            if (v === undefined) return false;
            if (v === 0) {
                map.delete(ch);
                continue;
            }
            map.set(ch, v);
        }
        return map.size === 0;
    }
}
