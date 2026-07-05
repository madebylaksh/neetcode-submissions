class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adjList = Array.from({length: n}, ()=>[]);
        for (let [u,v] of edges) {
            adjList[u].push(v);
            adjList[v].push(u);
        }
        let recPath = new Array(n).fill(false);
        let visited = new Array(n).fill(false);
        function dfs(src, par) {
            visited[src] = true;
            recPath[src] = true;
            for (let v of adjList[src]) {
                if (!visited[v]) {
                    if (dfs(v,src)) return true;
                }
                else if (recPath[v] && v!==par) return true;
            }
            recPath[src] = false;
            return false;
        }
        let ans = dfs(0,-1);
        for (let i=0; i<n; i++) {
            if (!visited[i]) return false;
        }
        return (!dfs(0));
    }
}
