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
    diameterOfBinaryTree(root) {
        let diameter = 0;
        function dfs(root) {
            if (root === null) return 0;
            const left = dfs(root.left);
            const right = dfs(root.right);
            diameter = Math.max(diameter, left + right);
            return Math.max(left, right) + 1;
        }
        dfs(root);
        return diameter;
    }
}
