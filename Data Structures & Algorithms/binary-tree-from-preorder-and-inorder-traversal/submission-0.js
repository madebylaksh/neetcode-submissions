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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // O(n) | O(n)
        let i = 0;

        const map = new Map();
        for (let i = 0; i < inorder.length; i++) {
            map.set(inorder[i], i);
        }

        function divide(p, q) {
            if (p > q) return null;
            const j = map.get(preorder[i]);
            i++;
            const root = new TreeNode(inorder[j]);
            root.left = divide(p, j - 1);
            root.right = divide(j + 1, q);
            return root;
        }
        return divide(0, preorder.length - 1);
    }
}
