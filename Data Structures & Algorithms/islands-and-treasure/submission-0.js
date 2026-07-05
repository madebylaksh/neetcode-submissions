class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let INF = 2147483647;
        let q = [];
        let front = 0;
        let visited = Array.from({length: m}, ()=>new Array(n).fill(false));
        for (let i=0; i<m; i++) {
            for (let j=0; j<n; j++) {
                if (grid[i][j]===0) q.push([i,j,0]);
            }
        }
        const neighbor = (i,j) => [[i-1,j], [i+1,j], [i,j-1], [i,j+1]];
        while (front < q.length) {
            let i = q[front][0];
            let j = q[front][1];
            let level = q[front][2];
            visited[i][j] = true;
            for (let [u,v] of neighbor(i,j)) {
                if (u<0 || u===m || v<0 || v===n) continue;
                if (grid[u][v]==INF) {
                    if (visited[u][v]) continue;
                    grid[u][v] = level+1;
                    q.push([u,v,level+1]);
                    visited[u][v] = true;
                }
            }
            front++;
        }
    }
}
