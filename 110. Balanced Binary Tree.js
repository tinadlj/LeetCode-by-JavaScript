/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root){
        return true;
    }
    
   var left=0,right=0;
    
    left=findHeight(root.left,1);
    right=findHeight(root.right,1);
    
    if (Math.abs(left-right)<2){
        return isBalanced(root.left) && isBalanced(root.right); 
    }else {
        return false;
    }
};

function findHeight(node,height){
    if (!node){
        return height;
    }
    height++;
    return Math.max(findHeight(node.left,height),findHeight(node.right,height));
}


