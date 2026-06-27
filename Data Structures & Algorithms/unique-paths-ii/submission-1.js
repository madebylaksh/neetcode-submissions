class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let cache = new Map();
        // have to create a seperate function cause cache has to be declared inside the main function.
        // don't declare globally
        function solve(g, m = 0, n = 0) {
            let key = `${m},${n}`;
            if (cache.has(key)) return cache.get(key);
            else {
                if (m == g.length || n == g[0].length) {
                    cache.set(key, 0);
                    return 0;
                }
                if (g[m][n] == 1) {
                    cache.set(key, 0);
                    return 0;
                }
                if (m == g.length - 1 && n == g[0].length - 1) {
                    cache.set(key, 1);
                    return 1;
                }
                let down = solve(g, m + 1, n);
                let right = solve(g, m, n + 1);
                cache.set(key, down + right);
                return cache.get(key);
            }
        }
        return solve(grid);
    }
}
