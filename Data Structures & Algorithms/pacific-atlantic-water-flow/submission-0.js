class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let m = heights.length;
        let n = heights[0].length;
        let q = [];
        let front = 0;
        let visitedPacific = new Set();
        function neighbors(i, j) {
            return [
                [i + 1, j],
                [i - 1, j],
                [i, j + 1],
                [i, j - 1],
            ];
        }
        for (let i = 0; i < m; i++) {
            (q.push([i, 0]), visitedPacific.add(i * n));
        }
        for (let j = 0; j < n; j++) {
            (q.push([0, j]), visitedPacific.add(j));
        }
        while (front < q.length) {
            for (let [u, v] of neighbors(...q[front])) {
                let [i, j] = q[front];
                if (u < 0 || u === m || v < 0 || v === n) continue;
                if (visitedPacific.has(u * n + v)) continue;
                if (heights[u][v] >= heights[i][j]) {
                    q.push([u, v]);
                    visitedPacific.add(u * n + v);
                }
            }
            front++;
        }
        q = [];
        front = 0;
        let visitedAtlantic = new Set();
        for (let i = 0; i < m; i++) {
            q.push([i, n - 1]);
            visitedAtlantic.add(i * n + n - 1);
        }
        for (let j = 0; j < n; j++) {
            q.push([m - 1, j]);
            visitedAtlantic.add((m - 1) * n + j);
        }
        while (front < q.length) {
            for (let [u, v] of neighbors(...q[front])) {
                let [i, j] = q[front];
                if (u < 0 || u === m || v < 0 || v === n) continue;
                if (visitedAtlantic.has(u * n + v)) continue;
                if (heights[u][v] >= heights[i][j]) {
                    q.push([u, v]);
                    visitedAtlantic.add(u * n + v);
                }
            }
            front++;
        }
        let common = visitedPacific.intersection(visitedAtlantic);
        let ans = [];
        for (let values of common) {
            let i = Math.floor(values / n);
            let j = values % n;
            ans.push([i, j]);
        }
        return ans;
    }
}
