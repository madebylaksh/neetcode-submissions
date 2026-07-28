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
     * @return {TreeNode}
     */
    invertTree(root) {
        function dfs(root) {
            if (root === null) return;
            const temp = root.left;
            root.left = root.right;
            root.right = temp;
            dfs(root.left);
            dfs(root.right);
        }
        dfs(root);
        return root;
    }
}
