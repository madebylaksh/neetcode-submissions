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
    maxDepth(root) {
        let maxDepth = 0;
        function dfs(root, count) {
            if (root === null) return;
            maxDepth = Math.max(maxDepth, count);
            dfs(root.left, count + 1);
            dfs(root.right, count + 1);
        }
        dfs(root, 1);
        return maxDepth;
    }
}
