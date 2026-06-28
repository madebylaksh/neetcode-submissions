class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        let dist = Array(n).fill(Infinity);
        dist[src] = 0;
        // This iteration determines weights of how many edges are checked for a vertex
        for (let i = 1; i <= k+1; i++) { // running for k+2 vertices
            let temp = [...dist];
            for (let [u, v, wt] of flights) {
                // Q: How to keep a record of no of edges relaxed in a path?
                // Ans: No need in practical implementation of bellman ford. Preventing chaining will ensure this.
                if (dist[u]===Infinity) continue; // skip some cases, faster
                if (temp[v] > dist[u] + wt) {
                    temp[v] = dist[u] + wt;
                }
            }
            dist = temp;
        }
        return dist[dst] == Infinity ? -1 : dist[dst];
    }
}
