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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function helper(root, subRoot) {
            if (subRoot === null) return true;
            if (root === null) return false;

            function isIdentical(a, b) {
                if (a === b && b === null) return true;
                if (a === null || b === null) return false;
                if (a.val !== b.val) return false;
                // a.data is equal to b.data
                return isIdentical(a.left, b.left) && isIdentical(a.right, b.right); // O(min(n,m)) = O(m) in worst case | O(min(h1,h2) = O(h2))
            }

            if (isIdentical(root, subRoot))
                return true; // O(1)
            else {
                return helper(root.left, subRoot) || helper(root.right, subRoot); // O(n) --- in its 1 cycle isIdentical will run m times, therefore in n cycles n*m times | O(h1 + h2)
            }
        }
        return helper(root,subRoot);
    }
}
