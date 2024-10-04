/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 /*
        [4,2,7,1,3,6,9]
        
              4
             / \
            2   7
           / \  / \
          1  3 6   9
 
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) return null;

    // swap the children
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    // do it again until root of the tree
    invertTree(root.left);
    invertTree(root.right);

    return root;
};
