class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let m = board.length;
        let n = board[0].length;
        let notSafe = new Set();
        let q = [];
        let front = 0;
        function neighbor(i, j) {
            return [
                [i - 1, j],
                [i + 1, j],
                [i, j + 1],
                [i, j - 1],
            ];
        }
        for (let i = 0; i < m; i++) {
            if (board[i][0] === "O") q.push([i, 0]);
            if (board[i][n - 1] === "O") q.push([i, n - 1]);
        }
        for (let j = 1; j < n - 1; j++) {
            if (board[0][j] === "O") q.push([0, j]);
            if (board[m - 1][j] === "O") q.push([m - 1, j]);
        }
        while (front < q.length) {
            notSafe.add(q[front][0] * n + q[front][1]);
            for (let [u, v] of neighbor(...q[front])) {
                if (u < 0 || u === m || v < 0 || v === n) continue;
                if (board[u][v] === "O") {
                    if (notSafe.has(u * n + v)) continue;
                    q.push([u, v]);
                    notSafe.add(u * n + v);
                }
            }
            front++;
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === "O" && !notSafe.has(i * n + j)) {
                    board[i][j] = "X";
                }
            }
        }
    }
}
