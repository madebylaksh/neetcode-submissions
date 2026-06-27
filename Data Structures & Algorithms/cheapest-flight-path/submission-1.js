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
        let PQ = new MinPriorityQueue(item=> item.priority);
        let adjList = Array.from({length: n}, ()=>[]);
        let dist = Array.from({length: n}, ()=> new Array(k+1).fill(Infinity));
        flights.forEach(e => adjList[e[0]].push([e[1], e[2]]));
        PQ.enqueue( {element: src, count: -1, priority: 0});
        dist[src][0] = 0;
        while (PQ.size() > 0) {
            let top = PQ.dequeue();
            if (top.element == dst) return top.priority;            // reached dst within k stops
            if (top.count == k) continue;
            for (let [v,wt] of adjList[top.element]) {
                let newCost = top.priority + wt;
                if (dist[v][top.count+1] > newCost) {
                    dist[v][top.count+1] = newCost;
                    PQ.enqueue( {element: v, count: top.count+1, priority: newCost });
                }
            }
        }
        return -1;
    }
}
