/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    if (root===null || target===null){
        return null;
    }
    
    if (!root.left && !root.right){
        return root.val;
    }
    var left;
    var right;
    
    while(root){
        if (root.val===target){
            return target;
        }
        if (root.val>target){
            right=root.val;
            root=root.left;
        }else if (root.val<target){
            left=root.val;
            root=root.right;
        }
    }
    
    if(left===undefined){
        return right;
    }
    
    if (right===undefined){
        return left;
    }
    
    return target-left<right-target ?left:right;
    
};
