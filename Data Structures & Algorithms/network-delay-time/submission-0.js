class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        class GraphClass {
            adjList = new Map;
            addVertex(u) {if (!this.adjList.has(u)) this.adjList.set(u,[]);}
            addEdge(u,v,wt) {
                this.addVertex(u);
                this.addVertex(v);
                this.adjList.get(u).push({v: v, wt: wt});
            }
        }
        let dist = new Array(n+1).fill(Infinity);
        dist[0] = -1;
        dist[k] = 0;

        let graph = new GraphClass;
        for (let [u,v,wt] of times) graph.addEdge(u,v,wt);
        
        let PQ = new MinPriorityQueue(obj => obj.priority);
        PQ.enqueue({element: k, priority: 0});
        while (PQ.size()>0) {
            let top = PQ.dequeue();
            let u = top.element;
            for (let edge of graph.adjList.get(u)) {
                if (dist[edge.v] > dist[u] + edge.wt) {
                    dist[edge.v] = dist[u] + edge.wt;
                    PQ.enqueue({element: edge.v, priority: edge.wt});
                }
            }
        }
        let ans = Math.max(...dist);
        return ans===Infinity ? -1 : ans;
    }
}
