class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let q = [];
        let front = 0;
        let freshOranges = 0;
        let min = 0;
        let level = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] == 1) freshOranges++;
                else if (grid[i][j] == 2) q.push([i, j, 0]);
            }
        }
        function neighbors(i, j) {
            return [
                [i - 1, j],
                [i + 1, j],
                [i, j - 1],
                [i, j + 1],
            ];
        }
        while (front < q.length) {
            if (q[front][2] != level) min++;
            level = q[front][2];
            for (let [i, j] of neighbors(q[front][0], q[front][1])) {
                if (i < 0 || i == m || j < 0 || j == n) continue;
                if (grid[i][j] == 1) {
                    grid[i][j] = 2;
                    q.push([i, j, level + 1]);
                    freshOranges--;
                }
            }
            front++;
        }
        if (freshOranges) return -1;
        return min;
    }
}
