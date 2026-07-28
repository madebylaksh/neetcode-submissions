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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let ans;
        function inOrder(root) {
            if (root === null) return;
            inOrder(root.left);
            if (count === k) return;
            count++;
            if (count === k) {
                ans = root.val;
                return;
            }
            inOrder(root.right);
        }
        inOrder(root);
        return ans;
    }
}
