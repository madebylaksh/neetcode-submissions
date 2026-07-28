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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const P = [];
        function preOrder(root) {
            if (root === null) {
                P.push(null);
                return;
            }
            P.push(root.val);
            preOrder(root.left);
            preOrder(root.right);
        }
        preOrder(p);
        let i = 0;
        function preOrderCheck(root) {
            if (i >= P.length) return false;

            if (root === null) {
                if (P[i++] !== null) {
                    return false;
                }
                return true;
            }

            if (P[i++] !== root.val) {
                return false;
            }
            return preOrderCheck(root.left) && preOrderCheck(root.right);
        }
        return preOrderCheck(q) && i === P.length;
    }
}
