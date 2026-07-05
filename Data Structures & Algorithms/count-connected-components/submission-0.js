class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let cc = 0;
        let visited = new Array(n).fill(false);
        let adjList = Array.from({length: n}, ()=>[]);
        for (let [u,v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }
        function dfs(src) {
            visited[src] = true;
            for (let v of adjList[src]) {
                if (!visited[v]) {
                    dfs(v);
                }
            }
        }
        for (let i=0; i<n; i++) {
            if (!visited[i]) {
                cc++;
                dfs(i);
            }
        }
        return cc;
    }
}
