class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        class DisjointSet {
        constructor(n) {
            this.n = n;
            this.par = Array.from({ length: this.n }, (_, i) => i);
            this.rank = Array(n).fill(0);
        }
        find(a) {
            let { par } = this;
            if (a === par[a]) return a;
            return par[a] = this.find(par[a]);
        }
        union(a, b) {
            let { par, rank } = this;
            let parA = this.find(a);
            let parB = this.find(b);
            if (rank[parA] == rank[parB]) {
                par[parB] = parA;
                rank[parA]++;
            }
            else if (rank[parA] > rank[parB]) {
                par[parB] = parA;
            }
            else {
                par[parA] = parB;
            }
        }
    }
    let DSU = new DisjointSet(edges.length + 1);
    for (let [u, v] of edges) {
        let parU = DSU.find(u);
        let parV = DSU.find(v);
        if (parU === parV) return [u, v];
        DSU.union(u, v);
    }
    }
}
