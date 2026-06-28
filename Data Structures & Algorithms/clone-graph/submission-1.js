/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        // 2 properties node.val and node.neighbors -> array of node objects
        // need to return a node obj, not adjList
        // use of Maps, key: new Node
        if (node == null) return null;
        let map = new Map();
        function helper(nodeObj) {
            if (map.has(nodeObj.val)) return;
            map.set(nodeObj.val, new Node(nodeObj.val));
            let tempStore = map.get(nodeObj.val);
            for (let nei of nodeObj.neighbors) {
                helper(nei);
                tempStore.neighbors.push(map.get(nei.val));
            }
        }
        helper(node);
        return map.get(node.val);
    }
}
