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
     * @return {boolean}
     */
    isBalanced(root) {
        function dfs(root) {
            if (root === null) return 0;
            const left = dfs(root.left);
            const right = dfs(root.right);
            if (left === false || right === false) return false;
            else if (Math.abs(left - right) > 1) return false;
            return Math.max(left, right) + 1;
        }
        const ans = dfs(root);
        return ans === false ? false : true;
    }
}
