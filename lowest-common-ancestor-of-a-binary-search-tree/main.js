/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let cur = root;

    while (cur != null) {
        // if p and q is greater then current value, then we go to the right side of the three
        // if p and q is less then current value, then we go to the left side of the three
        // else there's split so the lowest common ancestor is found
        if (p.val > cur.val && q.val > cur.val) {
            cur = cur.right;
        } else if (p.val < cur.val && q.val < cur.val) {
            cur = cur.left;
        } else {
            return cur;
        }
    }
};
