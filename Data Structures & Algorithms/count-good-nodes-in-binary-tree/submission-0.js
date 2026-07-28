/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let goodNodes = 0;
        function dfs(root, maxTillYet) {
            if (root === null) return;
            if (root.val >= maxTillYet) goodNodes++;
            maxTillYet = Math.max(root.val, maxTillYet);
            dfs(root.left, maxTillYet);
            dfs(root.right, maxTillYet);
        }
        dfs(root, root.val);
        return goodNodes;
    }
}
