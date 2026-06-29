class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let cellCount = 0;
        function helper(i, j) {
            if (i < 0 || i == m || j < 0 || j == n || grid[i][j] == 0) return 0;
            grid[i][j] = 0;
            return helper(i - 1, j) + helper(i + 1, j) + helper(i, j - 1) + helper(i, j + 1) + 1;
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    cellCount = Math.max(cellCount, helper(i, j));
                }
            }
        }
        return cellCount;
    }
}
